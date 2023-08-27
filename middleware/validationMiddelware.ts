import { z } from 'zod'
import { validateRequest } from 'zod-express-middleware';
import { UserModel } from '../models/UserModel.js';

export const devBodyValSchema = z.object({
    name: z.string().min(3, { message: 'Name - too short' }).max(18, { message: 'Name - too long' }),
    age: z.number().min(0, { message: 'Can not be negative' }).max(120),
    location: z.string().min(2, { message: 'Location - too short' }).max(45, { message: 'Location - too long' }),
    skills: z.array(z.string().min(2))
})

export const devParamsValSchema = z.object({
    id: z.string().length(24),
})

export const devBodyValidation = validateRequest({
    body: devBodyValSchema
})

export const devParamsValidation = validateRequest({
    params: devParamsValSchema
})

export const registerBodyValSchema = z.object({
    name: z.string().min(3, { message: 'Name - too short' }).max(18, { message: 'Name - too long' }),
    password: z.union([z.string(), z.number()]),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    role: z.string()
})

export const registerBodyValidation = validateRequest({
    body: registerBodyValSchema
})

export const loginBodyValSchema = z.object({
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    password: z.union([z.string(), z.number()])
})

export const loginBodyValidation = validateRequest({
    body: loginBodyValSchema
})