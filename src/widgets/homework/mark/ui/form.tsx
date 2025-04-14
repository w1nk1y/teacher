'use client'
//форма оценки домашки
import { FC, useState } from 'react';
import { HWinfo } from './student-home-work-info';
import { GradesSelector } from './choose_mark_option';
import { Comment } from '~/features/Comment';
import { SaveButton } from '~/features/SaveButton';
import '~/styles/globals.css';

export const HomeWorkMarkForm: FC = () => {
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
        <div>
                <HWinfo
                    studentName='Брого Арсэн Маркарян'
                    submissionDate='21.09.25'
                    theme='История государства сибирского'
                    studentTheme='Экономические проблемы продажи плотвы'
                />

                <div className='mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm'>
                    <GradesSelector selectedGrade={selectedGrade} onSelectGrade={setSelectedGrade} />

                    <Comment comment={comment} onChange={setComment} />

                    <div className='flex justify-center'>
                        <SaveButton onClick={submit} disabled={!selectedGrade} text='Сохранить' />
                    </div>
                </div>
            
        </div>
    );
};
