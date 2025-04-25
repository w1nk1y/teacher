'use client'
import { type FC } from "react";
import "~/styles/globals.css";
import { Button } from "~/components/ui/button";
import { HomeWorkMarkForm } from "../../mark/ui/form";
const HomeworkView: FC = () => {
  const student = {
    id: "1",
    name: "name",
    date: "2023-10-15",
    theme: "Наратив",
    comment:"adssfsdfdsfgsdfdfhdgfgdfhdhg"
  }

  return (
    <div className="p-10">
      {/* Первый блок: информация о ученике и дате отправки */}
      <div className="mb-4">
        <p className="mt-2 text-lg font-semibold">
          Ученик: <span className="text-gray-700">{student.name}</span>
        </p>
        <p className="mt-2 text-m text-gray-500">
          Дата отправки:{" "}
          <span className="text-gray-700">{student.date}</span>
        </p>
        <p className="mt-1 text-m text-gray-500">
          Тема:{" "}
          <span className="text-gray-700">{student.theme}</span>
        </p>
        <p className="mt-1 text-m text-gray-500">
          Комментарий ученика:{" "}
          <p className=" mt-2 max-w-2xl border border-black bg-gray-100 rounded-lg text-gray-700 p-2 ">{student.comment}</p>
        </p>
      </div>

      <div className='mt-6 flex justify-left'>
                <Button
                    type='submit'
                    className='bg-primary px-8 py-2 font-medium text-white hover:bg-primary/90'
                >
                    Загрузить файлы ДЗ
                </Button>
            </div>
      <HomeWorkMarkForm/>
    </div>
  );
};

export default HomeworkView;