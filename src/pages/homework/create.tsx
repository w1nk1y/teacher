'use client'
//страничка с формой создания нового дз
import { FC } from 'react';
import { Header } from '~/features/Header';
import { PageTitle } from '~/features/PageTitle';
import { CreateHomeWorkForm } from '~/widgets/homework/create/ui/form';
import { Toaster } from 'sonner';
import '~/styles/globals.css';

const HomeWorkCreate: FC = () => {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Header TeacherName='Бладко Ю.В.' avatarSrc='zcz' />

            <main className='container px-4 py-6'>
                <Toaster/>
                <PageTitle text='Добавление домашнего задания' />
                <div className='mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm'>
                    <CreateHomeWorkForm/>
                </div>
            </main>
        </div>
    );
};
export default HomeWorkCreate;
