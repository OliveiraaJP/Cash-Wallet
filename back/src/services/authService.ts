import { UserData } from "../types/authTypes.js";
import { AppError } from "../utils/error.js";
import * as authRepository from "../repositories/authRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signup({ username, password }: UserData) {
    await validUniqueUsernameOrFail(username);

    const hashedPassword = await bcrypt.hash(password, 10)
    await authRepository.createUser({ username, password: hashedPassword });
    return {message: "Created User"};
}

export async function signin({ username, password }: UserData) {
    const user = await getUserOrFail({ username, password });
    const token = await createSession(user.id, user.username);
    return token;
}


async function validUniqueUsernameOrFail(username: string) {
    const hasUsername = await authRepository.findUsername(username);
    if (hasUsername) {
        throw new AppError(400, "Username already registered!");
    }
}

async function getUserOrFail({ username, password }: UserData) {
    const user = await authRepository.findUsername(username);
    if (!user) {
        throw new AppError(401, "Username invalid.");
    }

    const confirmPassword = bcrypt.compareSync(password, user.password)
    if (!confirmPassword) {
        throw new AppError(401, "Password invalid!");
    }

    return user;
}

async function createSession(userId: number, username: string) {
    const [jwtUser, jwtId] = [username, userId];
    const token = jwt.sign({jwtUser, jwtId}, process.env.JWT_SECRET, {expiresIn:'24h'});
    return token;
}