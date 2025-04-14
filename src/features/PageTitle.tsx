import { FC } from 'react';

type PageTitle = {
    text: string;
};

export const PageTitle: FC<PageTitle> = ({ text }) => {
    return (
        <div>
            <h1 className='mb-8 text-center text-3xl font-semibold'>{text}</h1>
        </div>
    );
};
