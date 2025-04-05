'use client'
import { FC } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "~/components/ui/table"

export const HomeWorkList:FC=()=>{
    
  const HomeWorkData = [
        {
          id:1,
          date: "20.04.2025",
          studentFIO: "Гладков Е.У.",
          HomeWorkTheme: "История России: подвиг богатыря Павла",
          
        },
        {
          id:2,
          date: "20.04.2025",
          studentFIO: "Евпатий Коловратий",
          HomeWorkTheme: "Древне Русы против Старо Ящеров",
          
        },
        {
          id:3,
          date: "20.04.2025",
          studentFIO: "Айвазовский",
          HomeWorkTheme: "Рококо в период 17 века",
          
        },
        {
          id:4,
          date: "20.04.2025",
          studentFIO: "Franklin Fikus",
          HomeWorkTheme: "The story of Pakistan",
          
        },
        
      ]


    return(
      <div className="w-full max-w-[90vw] mx-auto overflow-x-auto">
        
      <Table className="w-full border-collapse" >
      
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Дата</TableHead>
          <TableHead>ФИО ученика</TableHead>
          <TableHead>Тема</TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {HomeWorkData.map((HomeWork) => (
          <TableRow key={HomeWork.id}
          className="cursor-pointer hover:bg-gray-100" 
          onClick={() => window.location.href = `/HomeWorkView`}
          >
            <TableCell className="font-medium">{HomeWork.date}</TableCell>
            <TableCell>{HomeWork.studentFIO}</TableCell>
            <TableCell>{HomeWork.HomeWorkTheme}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Сдано</TableCell>
          <TableCell className="text-right">{HomeWorkData.length}/27</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </div>
    )
}