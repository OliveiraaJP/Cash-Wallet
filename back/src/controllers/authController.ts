import { Request, Response } from "express";
import { UserData } from "../types/authTypes.js";
import * as authService from "../services/authService.js";

export async function signup(req: Request, res: Response) {
    const { username, password }: UserData = req.body;
    const responseMessage = await authService.signup({ username, password });
    res.status(201).send(responseMessage);
}

export async function signin(req: Request, res: Response) {
    const { username, password }: UserData = req.body;
    const token = await authService.signin({ username, password });
    res.status(201).send({message: "login", token:token});
}