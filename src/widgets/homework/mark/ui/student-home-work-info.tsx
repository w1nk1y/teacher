import { FC } from 'react';
import { HWInfoProps } from '../model/types';


export const HWinfo: FC<HWInfoProps> = ({ studentName, submissionDate, theme, studentTheme }) => {
    return (
        <div className='mx-auto my-8 max-w-3xl'>
            <h1 className='mb-2 text-2xl font-bold'>{studentName}</h1>
            <p className='mb-6 text-gray-600'>Дата отправки - {submissionDate}</p>
            <div className='mt-8'>
                <h1 className='mb-2 text-xl font-bold'>{theme}</h1>
                <p className='text-gray-600'>{studentTheme}</p>
            </div>
        </div>
    );
};
