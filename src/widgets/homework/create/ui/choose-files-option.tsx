'use client'
//выбор файлов которые прикрепляют к домашке
import { FC, useRef } from 'react';
import { Button } from '~/components/ui/button';
import { FileUploadProps } from '../model/types';
import { X } from 'lucide-react';
import { Badge } from '~/components/ui/badge';


const FileUpload: FC<FileUploadProps> = ({ files, onFilesChange, label = 'Прикрепленные файлы' }) => {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files)
            onFilesChange([...files, ...newFiles])
        }
    }

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    const handleRemoveFile = (fileToRemove: File) => {
        onFilesChange(files.filter(file => file !== fileToRemove));
    }

    return (
        <div className='flex flex-col gap-2'>
            {label && <label className='text-sm font-medium'>{label}</label>}
            <div className='w-full space-y-4'>
                <input type='file' ref={fileInputRef} onChange={handleFileChange} className='hidden' multiple />
                <Button type='button' onClick={handleClick} variant='outline' className='w-full justify-center'>
                    Перейти в проводник
                </Button>


                {files.length > 0 && (
                    <div className='mt-2 flex flex-wrap gap-2'>
                        {files.map((file, index) => (
                            <Badge key={index} variant='secondary' className='flex items-center px-3 py-1.5'>
                                <span className='max-w-[150px] truncate'>
                                    {file.name} ({(file.size / 1024).toFixed(1)} КБ)
                                </span>
                                <button
                                    type='button'
                                    onClick={() => handleRemoveFile(file)}
                                    className='ml-2 text-gray-500 hover:text-gray-700 focus:outline-none'
                                >
                                    <X className='h-3 w-3' />
                                </button>
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileUpload;
