import { FC } from 'react';
import { Button } from '~/components/ui/button';

interface SaveButtonProps {
    onClick: () => void;
    disabled: boolean;
    text: string;
}

export const SaveButton: FC<SaveButtonProps> = ({ onClick, disabled, text }) => {
    return (
        <Button
            className='bg-primary px-8 py-2 font-medium text-white hover:bg-primary/90'
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </Button>
    );
};
