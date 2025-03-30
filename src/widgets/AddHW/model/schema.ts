import { z } from 'zod';


export const homeworkSchema = z.object({
    dueDate: z.date({
        required_error: 'Пожалуйста, выберите дату сдачи',
    }),
    files: z.array(z.instanceof(File)).optional(),
    classes: z.array(z.string()).min(1, {
        message: 'Пожалуйста, добавьте хотя бы один класс',
    }),
});


export type HomeworkFormData = z.infer<typeof homeworkSchema>;
