import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().min(1, { message: 'Введите почту' }).email({ message: 'Неверный формат почты' }),
    password: z
        .string()
        .min(1, { message: 'Введите пароль' })
        .min(6, { message: 'Пароль должен содержать минимум 6 символов' })
});


export type LoginFormData = z.infer<typeof loginSchema>;

export const validateCredentials = (email: string, password: string): Promise<boolean> => {
    return new Promise(resolve => {
        const validUsers = [{ email: '123@mail.com', password: '111111' }];
        const isValid = validUsers.some(user => user.email === email && user.password === password);
        setTimeout(() => {
            resolve(isValid);
        }, 500);
    });
};
