import prisma from "../config/database.js";

export async function findUsername(username: string) {
    return await prisma.user.findFirst({ where: { username } });
}

export async function createUser(data : any) {
    await prisma.$transaction(async (tx: any) => {
        const account = await tx.account.create({ data: {} })
        await tx.user.create({ data: { ...data, accountId: account.id } })
      })
}

