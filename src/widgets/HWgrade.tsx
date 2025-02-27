'use client'
import {FC, useState} from 'react';
import {HWinfo} from '~/features/GradeForm/HWinfo';
import {GradesSelector} from '~/features/GradeForm/GradesSelector';
import {Comment} from '~/features/GradeForm/Comment';
import {SaveButton} from '~/features/GradeForm/SaveButton';
import {Header} from '~/shared/ui/Header/Header';

export const HWgrade: FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<string|null>(null);
  const [comment, setComment] = useState('');

  const handleSave = () => {
    console.log({
      grade: selectedGrade,
      comment
    });
    alert('Оценка сохранена!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        TeacherName="Бладко Ю.В." 
        avatarSrc="zcz"
      />
      
      <main className="container py-6 px-4">
        <HWinfo 
            StudentName="Брого Арсэн Маркарян"
            submissionDate="21.09.25"
            theme="История государства сибирского"
            customTheme="Экономические проблемы продажи плотвы"
        />
        
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm border">
          <GradesSelector 
            selectedGrade={selectedGrade}
            onSelectGrade={setSelectedGrade}
          />
          
          <Comment 
            comment={comment}
            onChange={setComment}
          />
          
          <div className="flex justify-center">
            <SaveButton 
              onClick={handleSave} 
              disabled={!selectedGrade}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
