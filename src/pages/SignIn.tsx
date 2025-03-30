'use client';
import { FC, useState } from 'react';
import { SignInForm } from '~/widgets/SignIn/ui/SignInForm';
import { LoginFormData } from '~/widgets/SignIn/model/schema';
import { PageTitle } from '~/features/PageTitle';
import { Toaster } from 'sonner';
import '../styles/globals.css';

const SignIn: FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        console.log('Форма отправлена:', data);
    };

    return (
        <main className='container px-4 py-10'>
            <Toaster/>
            <PageTitle text='Вход в аккаунт' />
            <div className='mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm'>
                <SignInForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
        </main>
    );
};
export default SignIn;
