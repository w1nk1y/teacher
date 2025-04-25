import {  ClassFormData } from './schema';
export interface FormField {
    id: string;
    name: keyof ClassFormData;
    type: string;
    label: string;
    placeholder: string;
}





