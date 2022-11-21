import { Router } from "express";
import { tokenValidator } from "../middlewares/validToken.js";
import { doTransaction, getAccountInfo, getTransactionsInfo } from "../controllers/transactionController.js";
import { validateSchemaMiddleware } from "../middlewares/validSchema.js";
import { transactionSchema } from "../schemas/transactionSchema.js";

const transactionRouter = Router();

transactionRouter.get('/bank', tokenValidator, getAccountInfo);
transactionRouter.get('/bank/transactions', tokenValidator, getTransactionsInfo);
transactionRouter.post('/bank/transactions', tokenValidator, validateSchemaMiddleware(transactionSchema), doTransaction);

export default transactionRouter;