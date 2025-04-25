
//иконка одного класса на главной странице
import { FC } from 'react';
import Link from 'next/link';
export const ClassIcon: FC = () => {

  const classes = [
    { id: 123312, name: "Математика", studentsCount: 30 },
    { id: 456789, name: "Физика", studentsCount: 27 },
  ];
    return (
      <div className="flex flex-wrap justify-center gap-4">
      {classes.map((cls) => (
        // eslint-disable-next-line react/jsx-key
          <div className='mx-10 mx-auto my-8 max-w-xs overflow-hidden rounded-lg bg-white shadow-lg hover:scale-105'>
           <Link key={cls.id} href={`/classes/${cls.id}`}>
           <button>
                <div className='bg-red-500 px-4 py-2 text-center text-xl font-bold text-white'>{cls.name}</div>
                <div className='px-4 py-2 text-base text-gray-700'>Кол-во учеников - {cls.studentsCount}</div>
            </button>
           </Link>

        </div>
      ))}
      </div>
    );
};
