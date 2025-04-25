'use client'
//форма создания класса
import { FC, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { classSchema, ClassFormData } from '../model/schema';
import { formFields } from '../model/mocks'; 

interface ClassFormProps {
    onSubmit?: (data: ClassFormData) => void;
    defaultValues?: Partial<ClassFormData>;
    isLoading?: boolean;
}

export const ClassCreateForm: FC<ClassFormProps> = ({ onSubmit, defaultValues, isLoading = false }) => {
    const [formValues, setFormValues] = useState<ClassFormData>({
        subject: defaultValues?.subject ?? '',
        number: defaultValues?.number ?? '', 
        letter: defaultValues?.letter ?? '',
    });

    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [submitAttempted, setSubmitAttempted] = useState(false);

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof ClassFormData) => {
        setFormValues({
            ...formValues,
            [field]: e.target.value, 
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitAttempted(true);

        try {
            await classSchema.parseAsync(formValues);
            setFormErrors({});
            onSubmit?.(formValues);
            toast.success('Класс успешно создан!');
        } catch (error: any) {
            const errors: Record<string, string> = {};
            error.issues.forEach((issue: any) => {
                errors[issue.path[0]] = issue.message;
            });
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
                    {formFields.map(field => (
                        <div key={field.id}>
                            <label className='mb-2 block text-sm font-medium'>{field.label}</label>
                            <Input
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                placeholder={field.placeholder}
                                value={formValues[field.name]}
                                onChange={e => handleFieldChange(e, field.name)}
                                className={`mt-1 ${submitAttempted && formErrors[field.name] ? 'border-red-500' : ''} `}
                            />
                            {submitAttempted && formErrors[field.name] && (
                                <p className='mt-1 text-xs text-red-500'>{formErrors[field.name]}</p>
                            )}
                        </div>
                    ))}
                    <div className='mt-6 flex justify-center'>
                        <Button
                            type='submit'
                            className='w-full bg-primary px-8 py-2 font-medium text-white hover:bg-primary/90'
                            disabled={isLoading}
                        >
                            {isLoading ? 'Создание...' : 'Создать класс'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
