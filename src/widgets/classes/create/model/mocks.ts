import { FormField } from "./types";
export const formFields: FormField[] = [
    {
        id: 'subject',
        name: 'subject',
        type: 'text',
        label: 'Предмет',
        placeholder: 'Например: Математика',
    },
    {
        id: 'number',
        name: 'number',
        type: 'text',
        label: 'Номер класса',
        placeholder: 'Например: 10',
    },
    {
        id: 'letter',
        name: 'letter',
        type: 'text',
        label: 'Буква класса',
        placeholder: 'Например: А',
    },
];