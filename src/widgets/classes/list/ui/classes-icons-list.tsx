//главная страница с иконками классов
import { ClassIcon } from './class-icon';
import { FC } from 'react';

export const ClassesIcons: FC = () => {
    const widgets = Array.from({ length: 20 }, (_, i) => <ClassIcon key={i} />);
    return <div className='flex flex-wrap justify-center'>{widgets}</div>;
};
