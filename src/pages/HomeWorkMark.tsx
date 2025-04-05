'use client';
import { FC, useState } from 'react';
import { HWinfo } from '~/widgets/HomeWorkMark/ui/HWinfo';
import { GradesSelector } from '~/widgets/HomeWorkMark/ui/GradesSelector';
import { Comment } from '~/features/Comment';
import { SaveButton } from '~/features/SaveButton';
import { Header } from '~/features/Header';
import '../styles/globals.css';
const HomeWorkMark: FC = () => {
    const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
    const [comment, setComment] = useState('');

    const submit = () => {
        console.log({
            grade: selectedGrade,
            comment,
        });
        alert('Оценка сохранена!');
    };

    return (
        <div className='min-h-screen bg-gray-50'>
            <Header TeacherName='Бладко Ю.В.' avatarSrc='zcz' />

            <main className='container px-4 py-6'>
                <HWinfo
                    StudentName='Брого Арсэн Маркарян'
                    submissionDate='21.09.25'
                    theme='История государства сибирского'
                    customTheme='Экономические проблемы продажи плотвы'
                />

                <div className='mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm'>
                    <GradesSelector selectedGrade={selectedGrade} onSelectGrade={setSelectedGrade} />

                    <Comment comment={comment} onChange={setComment} />

                    <div className='flex justify-center'>
                        <SaveButton onClick={submit} disabled={!selectedGrade} text='Сохранить' />
                    </div>
                </div>
            </main>
        </div>
    );
};
export default HomeWorkMark;
