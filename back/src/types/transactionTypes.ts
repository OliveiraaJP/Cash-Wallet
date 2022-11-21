export type TransactionData = {
    userId: number,
    receiver: string,
    amount: number
}

export type FinishTransactionData = {
    userId: number,
    receiverId: number,
    amount: number
}