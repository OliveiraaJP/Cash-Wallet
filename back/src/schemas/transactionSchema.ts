import joi from "joi";

export const transactionSchema = joi.object({
    receiver: joi.string().required(),
    amount: joi.number().min(1).required()
})