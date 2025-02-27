import { FC } from 'react';
import { Button } from '~/components/ui/button';

interface SaveButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const SaveButton: FC<SaveButtonProps> = ({ onClick, disabled }) => {
  return (
    <Button 
      className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-8"
      onClick={onClick}
      disabled={disabled}
    >
      Сохранить
    </Button>
  );
};