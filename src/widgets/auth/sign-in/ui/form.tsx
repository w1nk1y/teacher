import { FC, useState } from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Checkbox } from '~/components/ui/checkbox';
import { toast } from 'sonner';
import Cookies from 'js-cookie'; // Для работы с cookies
import { LoginFormProps, FormErrors } from '../model/types';
import { loginSchema, LoginFormData, validateCredentials } from '../model/schema';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import image from '~/shared/ui/image.png';

export const SignInForm: FC<LoginFormProps> = ({ onSubmit, isLoading = false }) => {
    const router = useRouter();
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    });

    const [rememberMe, setRememberMe] = useState(false); // Состояние для чекбокса "Остаться в системе"

    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [submitAttempted, setSubmitAttempted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitAttempted(true);

        console.log('Форма отправлена:', formData); // Логируем данные формы

        try {
            await loginSchema.parseAsync(formData);
            console.log('Данные формы валидны'); // Логируем успешную валидацию

            const isValid = await validateCredentials(formData.email, formData.password);
            console.log('Результат проверки учетных данных:', isValid); // Логируем результат проверки

            if (isValid) {
                console.log('Вызов onSubmit'); // Логируем вызов onSubmit
                onSubmit(formData);
            } else {
                console.log('Неверный email или пароль'); // Логируем ошибку
            }
        } catch (error: any) {
            console.error('Ошибка:', error.message); // Логируем ошибку
        }
    };

    return (
      <form onSubmit={handleSubmit} className='mx-auto max-w-lg space-y-6'>
          <div className='space-y-2'>
              <div className='flex flex-1 items-center justify-center'>
                  <Image src={image} alt='start' width={500} height={300} className='h-auto w-full' />
              </div>
              <label htmlFor='email' className='block text-sm font-medium'>
                  Email
              </label>
              <div className='relative'>
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
              </div>
              {submitAttempted && formErrors.email && (
                <p className='animate-slide-in mt-1 text-xs text-red-500'>{formErrors.email}</p>
              )}
          </div>

          <div className='space-y-2'>
              <label htmlFor='password' className='block text-sm font-medium'>
                  Пароль
              </label>
              <div className='relative'>
                  <Input
                    id='password'
                    name='password'
                    type='password' // Исправлено на 'password'
                    placeholder='Введите пароль'
                    className={`input-focus-effect pl-10 pr-10 ${
                      submitAttempted && formErrors.password ? 'border-red-500 focus:ring-red-500' : ''
                    }`}
                    value={formData.password}
                    onChange={handleChange}
                  />
              </div>
              {submitAttempted && formErrors.password && (
                <p className='animate-slide-in mt-1 text-xs text-red-500'>{formErrors.password}</p>
              )}
          </div>

          <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                  <Checkbox
                    id='rememberMe'
                    name='rememberMe'
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(!!checked)} // Обновление состояния rememberMe
                  />
                  <label
                    htmlFor='rememberMe'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                      Остаться в системе
                  </label>
              </div>
          </div>

          {submitAttempted && formErrors.general && (
            <div className='animate-slide-in rounded border border-red-200 bg-red-50 p-3 text-sm text-red-500'>
                {formErrors.general}
            </div>
          )}
          <div className='mt-6 flex justify-center'>
              <Button
                type='submit'
                className='bg-primary px-8 py-2 font-medium text-white hover:bg-primary/90'
                disabled={isLoading}
              >
                  {isLoading ? 'Вход...' : 'Войти'}
              </Button>
          </div>
      </form>
    );
};