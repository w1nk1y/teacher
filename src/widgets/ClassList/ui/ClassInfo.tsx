import { FC } from 'react';

export const ClassInfo: FC = () => {
    const testClass = {
        name: '10Г Рофлы с Волк Стрит',
        studentscount: 27,
    };
    return (
        <div className='mx-10 mx-auto my-8 max-w-xs overflow-hidden rounded-lg bg-white shadow-lg hover:scale-105'>
            <div className='bg-red-500 px-4 py-2 text-center text-xl font-bold text-white'>{testClass.name}</div>
            <div className='px-4 py-2 text-base text-gray-700'>Кол-во учеников - {testClass.studentscount}</div>
        </div>
    );
};
