export class Expense {
  constructor(
    public date?: Date,
    public title?: string,
    public amount?: number,
    public hidden = false
  ) { }
}