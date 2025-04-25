import { FC } from 'react';
//список оценок чтобы выбрать
interface GradesSelectorProps {
    selectedGrade: string | null;
    onSelectGrade: (grade: string) => void;
}

export const GradesSelector: FC<GradesSelectorProps> = ({ selectedGrade, onSelectGrade }) => {
    const grades = [
        { id: 'excellent', label: 'Отлично', color: '83C77E' },
        { id: 'good', label: 'Хорошо', color: 'E0E624' },
        { id: 'satisfactory', label: 'Удовлетворительно', color: 'F5A958' },
        { id: 'needsImprovement', label: 'Нужны исправления', color: 'D75D5F' },
    ];

    return (
        <div className='mb-6'>
            <h3 className='mb-3 text-lg font-medium'>Оцените работу ученика</h3>
            <div className='flex flex-wrap gap-2'>
                {grades.map(grade => (
                    <button
                        key={grade.id}
                        className={`rounded-full border px-4 py-2 transition-colors ${
                            selectedGrade === grade.id
                                ? `border-primary bg-primary text-white hover:bg-blue-400`
                                : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-100'
                        }`}
                        onClick={() => onSelectGrade(grade.id)}
                    >
                        {grade.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
