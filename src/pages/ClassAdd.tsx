'use client';
import { FC } from 'react';
import { Header } from '~/features/Header';
import { PageTitle } from '~/features/PageTitle';
import { ClassForm } from '~/widgets/AddClass/ui/ClassForm';
import '../styles/globals.css';
import { Toaster } from 'sonner';

const ClassAdd: FC = () => {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Header TeacherName='Бладко Ю.В.' avatarSrc='zcz' />

            <main className='container px-4 py-6'>
                <Toaster/>
                <PageTitle text='Добавление нового класса' />
                <div className='mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm'>
                    <ClassForm />
                </div>
            </main>
        </div>
    );
};
export default ClassAdd;
