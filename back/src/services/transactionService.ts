import { User } from "@prisma/client";
import { FinishTransactionData, TransactionData } from "../types/transactionTypes.js";
import { AppError } from "../utils/error.js";
import * as transactionRepository from "../repositories/transactionRepository.js";

export async function getAccountInfo(userId: number) {
    const account = await getAccountOrFailById(+userId);
    const bank = await transactionRepository.getBank(+account.accountId);
    delete account.accountId
    delete account.password
    delete bank.id
    return { account, bank };
}

export async function getTransactionsInfo(userId: number, type: string) {
    if (type === "credit") {
        return await transactionRepository.getCreditTransactions(+userId)
    } else if (type === "debit") {
        return await transactionRepository.getDebitTransactions(+userId);
    } else {
        return await transactionRepository.getTransactions(+userId);
    }


}

export async function transaction({ userId, receiver, amount }: TransactionData) {
    const account: User = await getAccountOrFailById(+userId);
    const accountReceiver: User = await getAccountOrFailByUsername(receiver);
    await verifyAccountAndReceiverAreEqual(+userId, receiver);
    await verifyAccountHasBalance(+userId, +amount);
    await finishTransaction({ userId, receiverId: accountReceiver.accountId, amount })
}


async function getAccountOrFailById(userId: number) {
    const account: User = await transactionRepository.getAccountById(+userId);
    if (!account) {
        throw new AppError(404, 'User not found!')
    }
    return account;
}

async function getAccountOrFailByUsername(receiver: string) {
    const account: User = await transactionRepository.getAccountByUsername(receiver);
    if (!account) {
        throw new AppError(404, 'User not found!')
    }
    return account;
}

async function verifyAccountHasBalance(userId: number, amount: number) {
    const account = await transactionRepository.getBank(userId);
    if (account.balance - amount < 0) {
        throw new AppError(400, 'Balance cannot be less than 0!')
    }
}

async function verifyAccountAndReceiverAreEqual(userId: number, receiver: string) {
    const account: User = await transactionRepository.getAccountById(+userId);
    const accountReceiver: User = await transactionRepository.getAccountByUsername(receiver);

    if (account.username === accountReceiver.username) {
        throw new AppError(400, 'Cannot do transactions with same account!')
    }
}

async function finishTransaction({ userId, receiverId, amount }: FinishTransactionData) {
    await transactionRepository.finishTransaction({ userId, receiverId, amount });
}
