//главная страница с иконками классов
import { ClassIcon } from './class-icon';
import { FC } from 'react';

export const ClassesIcons: FC = () => {
    const widgets = <ClassIcon />;
    return <div className='flex flex-wrap justify-center'>{widgets}</div>;
};
