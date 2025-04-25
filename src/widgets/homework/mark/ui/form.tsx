'use client'
//форма оценки домашки
import { FC, useState } from 'react';
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
