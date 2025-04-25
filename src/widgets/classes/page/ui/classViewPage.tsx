import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useRouter } from "next/navigation";
import { CheckCircle2, XCircle } from "lucide-react";
import "~/styles/globals.css";
interface Student {
  id: string;
  studentName: string;
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  homeworks: {
    [key: string]: boolean; // homeworkId: completed
  };
}

interface Homework {
  id: string;
  name: string;
  date: string;
  topic: string;
}

const ClassViewPage: FC = () => {
  // Пример данных учеников с информацией о выполнении ДЗ
  const students: Student[] = [
    {
      id: "1",
      studentName: "Иванов Иван",
      homeworks: {
        hw1: true,
        hw2: false,
        hw3: true,
      },
    },
    {
      id: "2",
      studentName: "Петров Петр",
      homeworks: {
        hw1: false,
        hw2: false,
        hw3: true,
      },
    },
    {
      id: "3",
      studentName: "Сидорова Мария",
      homeworks: {
        hw1: true,
        hw2: true,
        hw3: true,
      },
    },
  ];

  // Список всех домашних заданий
  const homeworks: Homework[] = [
    { id: "hw1", name: "ДЗ №1", date: "01.10.2023", topic: "Алгебра" },
    { id: "hw2", name: "ДЗ №2", date: "08.10.2023", topic: "Геометрия" },
    { id: "hw3", name: "ДЗ №3", date: "15.10.2023", topic: "Тригонометрия" },
  ];

  const router = useRouter();

  // Подсчет выполненных ДЗ для каждого ученика
  const countCompletedHomeworks = (student: Student) => {
    return Object.values(student.homeworks).filter((completed) => completed)
      .length;
  };

  // Подсчет общего количества ДЗ
  const totalHomeworks = homeworks.length;

  return (
    <div className="mx-auto w-full max-w-[90vw] overflow-x-auto">
      <Table className="w-full border-collapse">
        <TableHeader>
          <TableRow>
     
            <TableHead>ФИО ученика</TableHead>
            {/* Заголовки для каждого домашнего задания */}
            {homeworks.map((hw) => (
              <TableHead key={hw.id} className="text-center">
                {hw.name}
              </TableHead>
            ))}
            <TableHead className="text-right">Выполнено</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id} className="hover:bg-gray-100">
            
              <TableCell
                className="cursor-pointer font-medium hover:text-blue-600"
                onClick={() => router.push(`/student/${student.id}`)}
              >
                {student.studentName}
              </TableCell>
              {/* Ячейки с статусом выполнения ДЗ */}
              {homeworks.map((hw) => (
                <TableCell
                  key={`${student.id}-${hw.id}`}
                  className="text-center"
                  onClick={() => {
                    router.push(`/homework/${hw.id}`);
                  }}
                >
                  {student.homeworks[hw.id] ? (
                    <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="mx-auto h-5 w-5 text-red-500" />
                  )}
                </TableCell>
              ))}

              <TableCell className="text-right">
                {countCompletedHomeworks(student)}/{totalHomeworks}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3 + homeworks.length}>Всего учеников</TableCell>
            <TableCell className="text-right">{students.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ClassViewPage;
