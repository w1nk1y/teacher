'use client';
//календарь чтобы выбрать дату сдачи домашки
import { FC } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Calendar } from '~/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { cn } from '~/lib/utils';
import { DatePickerProps } from '../model/types';

const DatePicker: FC<DatePickerProps> = ({ date, onDateChange, label = 'Срок выполнения' }) => {
    return (
        <div className='flex flex-col gap-2'>
            {label && <label className='text-sm font-medium'>{label}</label>}
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant='outline'
                        className={cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground')}
                    >
                        <CalendarIcon className='mr-2 h-4 w-4' />
                        {date ? (
                            format(date, 'dd.MM.yyyy', { locale: ru })
                        ) : (
                            <span>ДД.ММ.ГГГГ</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                    <Calendar
                        mode='single'
                        selected={date}
                        onSelect={onDateChange}
                        locale={ru}
                        className={cn('pointer-events-auto p-3')}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default DatePicker;
