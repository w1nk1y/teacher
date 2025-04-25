import { HomeworkFormData } from './schema';


export interface HomeworkFormProps {
    onSubmit?: (data: HomeworkFormData) => void;
    defaultValues?: Partial<HomeworkFormData>;
    isLoading?: boolean;
}


export interface DatePickerProps {
    date: Date | undefined;
    onDateChange: (date: Date | undefined) => void;
    label: string;
    error?: boolean; 
}


export interface FileUploadProps {
    files: File[];
    onFilesChange: (files: File[]) => void;
    label: string;
}


export interface ClassManagerProps {
    classes: string[];
    onClassesChange: (classes: string[]) => void;
    label: string;
}
