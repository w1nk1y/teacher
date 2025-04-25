/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FC, useState } from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { toast } from 'sonner';
import { RegistrationFormProps, FormErrors } from '../model/types';
import { registrationSchema, RegistrationFormData, registerUser } from '../model/schema';
import { useRouter } from 'next/navigation';

export const SignUpForm: FC<RegistrationFormProps> = ({ onSubmit, isLoading = false }) => {
    const router = useRouter();

    const [formData, setFormData] = useState<RegistrationFormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [submitAttempted, setSubmitAttempted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitAttempted(true);

        try {
            await registrationSchema.parseAsync(formData);
            setFormErrors({});

            const isRegistered = await registerUser(formData);

            if (isRegistered) {
                onSubmit(formData);
                toast.success('Регистрация успешно завершена');
                router.push('/classes/');
            } else {
                setFormErrors({
                    general: 'Ошибка при регистрации',
                });
                toast.error('Ошибка регистрации', {
                    description: 'Произошла ошибка при регистрации аккаунта',
                });
            }
        } catch (error: any) {
            const errors: FormErrors = {};

            if (error.issues) {
                error.issues.forEach((issue: any) => {
                    errors[issue.path[0] as keyof FormErrors] = issue.message;
                });
            }

            setFormErrors(errors);
            toast.error('Ошибка валидации', {
                description: Object.values(errors).join(', '),
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className='mx-auto max-w-lg space-y-6'>
            <div className='space-y-2'>
                <label htmlFor='firstName' className='block text-sm font-medium'>
                    Имя
                </label>
                <Input
                    id='firstName'
                    name='firstName'
                    type='text'
                    placeholder='Введите имя'
                    className={`input-focus-effect pl-10 ${
                        submitAttempted && formErrors.firstName ? 'border-red-500 focus:ring-red-500' : ''
                    }`}
                    value={formData.firstName}
                    onChange={handleChange}
                />
                {submitAttempted && formErrors.firstName && (
                    <p className='animate-slide-in mt-1 text-xs text-red-500'>{formErrors.firstName}</p>
                )}
            </div>

            <div className='space-y-2'>
                <label htmlFor='lastName' className='block text-sm font-medium'>
                    Фамилия
                </label>
                <Input
                    id='lastName'
                    name='lastName'
                    type='text'
                    placeholder='Введите фамилию'
                    className={`input-focus-effect pl-10 ${
                        submitAttempted && formErrors.lastName ? 'border-red-500 focus:ring-red-500' : ''
                    }`}
                    value={formData.lastName}
                    onChange={handleChange}
                />
                {submitAttempted && formErrors.lastName && (
                    <p className='animate-slide-in mt-1 text-xs text-red-500'>{formErrors.lastName}</p>
                )}
            </div>

            <div className='space-y-2'>
                <label htmlFor='email' className='block text-sm font-medium'>
                    Email
                </label>
                <Input
                    id='email'
                    name='email'
                    type='text'
                    placeholder='Введите почту'
                    className={`input-focus-effect pl-10 ${
                        submitAttempted && formErrors.email ? 'border-red-500 focus:ring-red-500' : ''
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                />
                {submitAttempted && formErrors.email && (
                    <p className='animate-slide-in mt-1 text-xs text-red-500'>{formErrors.email}</p>
                )}
            </div>

            <div className='space-y-2'>
                <label htmlFor='password' className='block text-sm font-medium'>
                    Пароль
                </label>
                <Input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Введите пароль'
                    className={`input-focus-effect pl-10 pr-10 ${
                        submitAttempted && formErrors.password ? 'border-red-500 focus:ring-red-500' : ''
                    }`}
                    value={formData.password}
                    onChange={handleChange}
                />
                {submitAttempted && formErrors.password && (
                    <p className='animate-slide-in mt-1 text-xs text-red-500'>{formErrors.password}</p>
                )}
            </div>

            <div className='space-y-2'>
                <label htmlFor='confirmPassword' className='block text-sm font-medium'>
                    Повторите пароль
                </label>
                <Input
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                    placeholder='Подтвердите пароль'
                    className={`input-focus-effect pl-10 pr-10 ${
                        submitAttempted && formErrors.confirmPassword ? 'border-red-500 focus:ring-red-500' : ''
                    }`}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                {submitAttempted && formErrors.confirmPassword && (
                    <p className='animate-slide-in mt-1 text-xs text-red-500'>{formErrors.confirmPassword}</p>
                )}
            </div>

            <div className='mt-6 flex justify-center'>
                <Button
                    type='submit'
                    className='bg-primary px-8 py-2 font-medium text-white hover:bg-primary/90'
                    disabled={isLoading}
                >
                    {isLoading ? 'Регистрация...' : 'Создать аккаунт'}
                </Button>
            </div>
        </form>
    );
};
