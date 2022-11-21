import joi from "joi";

export const signUpSchema = joi.object({
    username: joi.string().min(3).required(),
    password: joi.string().min(8).pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]?)[A-Za-z\d@$!%*?&]{8,}/).required(),
})

export const signInSchema = joi.object({
    username: joi.string().min(3).required(),
    password: joi.string().min(8).pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]?)[A-Za-z\d@$!%*?&]{8,}/).required(),
})