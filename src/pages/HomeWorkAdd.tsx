'use client';
import { FC } from 'react';
import { Header } from '~/features/Header';
import { PageTitle } from '~/features/PageTitle';
import { AddHWForm } from '~/widgets/HomeWorkAdd/ui/AddHWForm';
import { Toaster } from 'sonner';
import '../styles/globals.css';

const HomeWorkAdd: FC = () => {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Header TeacherName='Бладко Ю.В.' avatarSrc='zcz' />

            <main className='container px-4 py-6'>
                <Toaster/>
                <PageTitle text='Добавление домашнего задания' />
                <div className='mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm'>
                    <AddHWForm />
                </div>
            </main>
        </div>
    );
};
export default HomeWorkAdd;
