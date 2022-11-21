import prisma from "../config/database.js";

export async function getAccountById(userId: number) {
    return await prisma.user.findFirst({ where: { id: userId } });
}

export async function getAccountByUsername(username: string) {
    return await prisma.user.findFirst({ where: { username } });
}

export async function getBank(accountId: number) {
    return await prisma.account.findFirst({ where: { id: accountId } })
}

export async function getTransactions(userId: number) {
    return await prisma.$queryRaw`SELECT t."createdAt", t."value", u1.id as "credId" ,u1.username as "credUser", u2.id as "debId", u2.username as "debUser" FROM transactions as t
    JOIN users as u1 ON t."creditedAccountId" = u1."id"
    JOIN users as u2 ON t."debitedAccountId" = u2."id"
    WHERE "creditedAccountId" = ${userId} OR "debitedAccountId" =${userId};`
}

export async function getCreditTransactions(userId: number) {
    return await prisma.$queryRaw`SELECT t."createdAt", t."value", u1.id as "credId" ,u1.username as "credUser", u2.id as "debId", u2.username as "debUser" FROM transactions as t
    JOIN users as u1 ON t."creditedAccountId" = u1."id"
    JOIN users as u2 ON t."debitedAccountId" = u2."id"
    WHERE "creditedAccountId" = ${userId};`
}

export async function getDebitTransactions(userId: number) {
    return await prisma.$queryRaw`SELECT t."createdAt", t."value", u1.id as "credId" ,u1.username as "credUser", u2.id as "debId", u2.username as "debUser" FROM transactions as t
    JOIN users as u1 ON t."creditedAccountId" = u1."id"
    JOIN users as u2 ON t."debitedAccountId" = u2."id"
    WHERE "debitedAccountId" = ${userId};`
}

export async function finishTransaction({ userId, receiverId, amount }) {
    return await prisma.$transaction(async (tx) => {
        await tx.account.update({
            data: { balance: { decrement: Number(amount) } },
            where: { id: userId }
        })

        await tx.account.update({
            data: { balance: { increment: Number(amount) } },
            where: { id: receiverId }
        })

        await tx.transaction.create({
            data:
            {
                debitedAccountId: userId,
                creditedAccountId: receiverId,
                value: amount
            }
        })
    })
}