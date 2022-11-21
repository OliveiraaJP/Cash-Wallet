import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { chalkLogger } from "../utils/chalkLogger.js";


export async function tokenValidator(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.userId = decoded.jwtId;
    next();
}
