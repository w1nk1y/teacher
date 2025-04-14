'use client'
//страничка где много иконок классов (по сути главная)
import { FC } from 'react';
import { Header } from '~/features/Header';
import { PageTitle } from '~/features/PageTitle';
import { ClassesIcons } from '~/widgets/classes/list/ui/classes-icons-list';
import '~/styles/globals.css';
const ClassesList: FC = () => {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Header TeacherName='Бладко Ю.В.' avatarSrc='zcz' />

            <main className='container px-4 py-6'>
                <PageTitle text='Мои классы' />
                <div className='max-w-15xl mx-auto p-6'>
                    <ClassesIcons/>
                </div>
            </main>
        </div>
    );
};
export default ClassesList;
