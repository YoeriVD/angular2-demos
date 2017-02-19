export class Expense{
    private static expenseCount = 0;
    id : number;
    constructor(public description : string, public amount : number, public dateOfExpense : Date){
        this.id = ++Expense.expenseCount;
    }

}