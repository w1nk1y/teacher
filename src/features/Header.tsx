'use client'
import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import TeacherProps from '~/entities/Teacher/TeacherProps';

export const Header: FC<TeacherProps> = ({ TeacherName, avatarSrc }) => {

const router=useRouter()
const currentPage=router.pathname==="/classes"

    const handleBack = () => {
        if (window.history.length > 2 ) {
            router.back();
        } else {
            router.push('/');
        }
        
    };

    return (
        <header className='flex w-full items-center justify-between border-b bg-white px-6 py-4'>
            <Button
                className='rounded-full bg-destructive px-6 text-white hover:bg-destructive/90'
                onClick={handleBack}
                disabled={currentPage}
            >
                Вернуться назад
            </Button>

            <div className='flex items-center'>
                <div className='mr-8 hidden space-x-8 md:flex'>
                    
                    <Link href='/classes'>
                    <button className='px-2 py-1 transition-colors hover:text-primary'>
                        Главная
                    </button>
                    </Link>

                   
                    
                    <Link href='/homework/create'>
                    <button className='px-2 py-1 transition-colors hover:text-primary'>
                        Новое Задание
                    </button>
                    </Link>
                  
                </div>

                <div className='flex items-center gap-3'>
                    <span className='font-medium'>{TeacherName}</span>
                    <Avatar className='h-10 w-10 border'>
                        <AvatarImage src={avatarSrc} alt={TeacherName} />
                        <AvatarFallback>
                            {TeacherName.split(' ')
                                .map(Cletter => Cletter[0])
                                .join('')}
                        </AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
};
