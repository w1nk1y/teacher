'use client';
import { FC, useState } from 'react';
import { SignUpForm } from '~/widgets/SignUp/ui/SignUpForm';
import { LoginFormData } from '~/widgets/SignIn/model/schema';
import { PageTitle } from '~/features/PageTitle';
import { Toaster } from 'sonner';
import '../styles/globals.css';

const SignUp: FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        console.log('Форма отправлена:', data);
    };

    return (
        <main className='container px-4 py-10'>
            <Toaster/>
            <PageTitle text='Введите данные аккаунта' />
            <div className='mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm'>
                <SignUpForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
        </main>
    );
};
export default SignUp;
