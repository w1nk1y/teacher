import { FC } from 'react';


type HWInfoProps = {
    StudentName: string;
    submissionDate: string;
    theme: string;
    customTheme: string;
};
export const HWinfo: FC<HWInfoProps> = ({ StudentName, submissionDate, theme, customTheme }) => {
    return (
        <div className='mx-auto my-8 max-w-3xl'>
            <h1 className='mb-2 text-2xl font-bold'>{StudentName}</h1>
            <p className='mb-6 text-gray-600'>Дата отправки - {submissionDate}</p>
            <div className='mt-8'>
                <h1 className='mb-2 text-xl font-bold'>{theme}</h1>
                <p className='text-gray-600'>{customTheme}</p>
            </div>
        </div>
    );
};
