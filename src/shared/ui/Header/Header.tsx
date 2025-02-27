import {FC} from 'react';
import {Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

import { Button } from '~/components/ui/button';
import TeacherProps from '~/entities/Teacher/TeacherProps';


export const Header:FC<TeacherProps> = ({TeacherName,avatarSrc}) => {
  

  return (
    <header className="w-full bg-white py-4 px-6 flex items-center justify-between border-b">
      <Button 
        className="bg-destructive hover:bg-destructive/90 text-white rounded-full px-6"
      >
        Вернуться Назад
      </Button>

      <div className="flex items-center">
        <div className="hidden md:flex space-x-8 mr-8">
          <button className="px-2 py-1 hover:text-primary transition-colors">
            Классы
          </button>
          <button className="px-2 py-1 hover:text-primary transition-colors">
            Расписание
          </button>
          <button className="px-2 py-1 hover:text-primary transition-colors">
            Задания
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-medium">{TeacherName} </span>
          <Avatar className="w-10 h-10 border">
            <AvatarImage src={avatarSrc} alt={TeacherName} />
            <AvatarFallback>{TeacherName.split(' ').map(part => part[0]).join('')}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
