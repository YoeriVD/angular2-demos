export class Expense {
    private static count = 0;

    id: number;
    constructor(
        public description: string,
        public dateOfExpense: Date,
        public amount: number
    ) {
        this.id = ++Expense.count;
    }
}