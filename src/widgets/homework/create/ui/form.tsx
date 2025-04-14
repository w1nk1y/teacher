'use client'
//форма для добавления дз(включает все элементы)
import { FC, useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';
import DatePicker from './choose-date-option';
import FileUpload from './choose-files-option';
import { ComboboxDemo } from './choose-classes-option';
import { homeworkSchema, HomeworkFormData } from '../model/schema';
import { HomeworkFormProps } from '../model/types';

export const CreateHomeWorkForm: FC<HomeworkFormProps> = ({ onSubmit, defaultValues, isLoading = false }) => {
    const [dueDate, setDueDate] = useState<Date | undefined>(defaultValues?.dueDate);
    const [files, setFiles] = useState<File[]>(defaultValues?.files ?? []);
    const [classes, setClasses] = useState<string[]>(defaultValues?.classes ?? []);
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [submitAttempted, setSubmitAttempted] = useState(false);

    const router=useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitAttempted(true);

        try {
            const formData: HomeworkFormData = {
                dueDate: dueDate!,
                files: files.length > 0 ? files : undefined,
                classes,
            };

            await homeworkSchema.parseAsync(formData);
            setFormErrors({});
            onSubmit?.(formData);
            toast.success('Домашнее задание успешно добавлено!');
            router.push('/classes/list');
            
        } catch (error: any) {
            const errors: Record<string, string> = {};

            if (error.issues) {
                error.issues.forEach((issue: any) => {
                    errors[issue.path[0]] = issue.message;
                });
            }

            setFormErrors(errors);
            toast.error('Ошибка валидации', {
                description: Object.values(errors).join(', '),
            });
        }
    };

    return (
        <div className='mx-auto w-full max-w-4xl'>
            <div className='p-6'>
                <form onSubmit={handleSubmit} className='mx-auto max-w-lg space-y-6'>
                    <div>
                        <DatePicker
                            date={dueDate}
                            onDateChange={setDueDate}
                            label='Срок сдачи'
                            error={submitAttempted && !dueDate}
                        />
                        {submitAttempted && !dueDate && (
                            <p className='mt-1 text-xs text-red-500'>
                                {formErrors.dueDate ?? 'Пожалуйста, выберите дату сдачи'}
                            </p>
                        )}
                    </div>


                    <FileUpload files={files} onFilesChange={setFiles} label='Прикрепленные файлы' />


                    <div>
                        <label className='mb-2 block text-sm font-medium'>Выбрать класс(ы)</label>

                        <ComboboxDemo
                            selectedClasses={classes}
                            onClassesChange={setClasses}
                            hasError={submitAttempted && classes.length === 0}
                        />
                        {submitAttempted && classes.length === 0 && (
                            <p className='mt-1 text-xs text-red-500'>
                                {formErrors.classes ?? 'Выберите хотя бы один класс'}
                            </p>
                        )}
                    </div>


                    <div className='mt-6 flex justify-center'>
                        <Button
                            type='submit'
                            className='bg-primary px-8 py-2 font-medium text-white hover:bg-primary/90'
                            disabled={isLoading} 
                        >
                            {isLoading ? 'Сохранение...' : 'Сохранить'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
