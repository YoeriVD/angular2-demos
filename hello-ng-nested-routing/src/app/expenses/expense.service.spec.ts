import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions, Response, ResponseOptions } from '@angular/http'
import { MockBackend, MockConnection } from '@angular/http/testing'
import { ReflectiveInjector } from '@angular/core'
import { fakeAsync, tick } from '@angular/core/testing'
import { ExpenseService } from './expense.service'
import 'rxjs/add/operator/map'

describe('MockBackend ExpenseService Example', () => {
    let expenseService: ExpenseService;

    beforeEach(() => {
        this.injector = ReflectiveInjector.resolveAndCreate([
            { provide: ConnectionBackend, useClass: MockBackend },
            { provide: RequestOptions, useClass: BaseRequestOptions },
            Http,
            ExpenseService,
        ]);
        expenseService = this.injector.get(ExpenseService) as ExpenseService;
        this.backend = this.injector.get(ConnectionBackend) as MockBackend;
        this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
    });
    it('getExpenses() should query current service url', () => {
        expenseService.getExpenses();
        expect(this.lastConnection).toBeDefined('no http service connection at all?');
        expect(this.lastConnection.request.url).toMatch(/src\/expenses.json$/, 'url invalid');
    });
    it('getExpenses() should return some expenses', fakeAsync(() => {
        let result: any[];
        expenseService.getExpenses().subscribe((expenses: any) => {
            result = expenses;
        });
        this.lastConnection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify([{id: 1}]),
        })));
        tick();
        expect(result.length).toEqual(1, 'should contain given amount of expenses');
    }));
});