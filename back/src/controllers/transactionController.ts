import { Request, Response } from "express";
import * as transactionService from "../services/transactionService.js"

export async function getAccountInfo(req: Request, res: Response) {
    const { userId } = res.locals;
    const account = await transactionService.getAccountInfo(+userId);
    res.status(200).send(account);
}


export async function getTransactionsInfo(req: Request, res: Response) {
    const { userId } = res.locals;
    const { type } = req.query;
    const transactions = await transactionService.getTransactionsInfo(+userId,String(type));
    res.status(200).send(transactions);
}

export async function doTransaction(req: Request, res: Response) {
    const {userId} = res.locals;
    const {receiver, amount} = req.body;
    await transactionService.transaction({userId, receiver, amount});
    res.status(200).send('okokok');
}