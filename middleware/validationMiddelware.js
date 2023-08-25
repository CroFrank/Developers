import { z } from 'zod';
import { sendError } from 'zod-express-middleware';
const mySchema = z.object({
    name: z.string().min(8)
});
export const validationMiddelware = (req, res, next) => {
    const result = mySchema.safeParse(req.body);
    if (!result.success) {
        return sendError({ type: 'Body', errors: result.error }, res);
    }
    next();
};
