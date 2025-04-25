"use client";
//страничка с формой создания нового дз
import { FC } from "react";
import { Header } from "~/features/Header";
import { PageTitle } from "~/features/PageTitle";
import { CreateHomeWorkForm } from "~/widgets/homework/create/ui/form";
import { Toaster } from "sonner";
import "~/styles/globals.css";
import {HomeworkFormData} from "~/widgets/homework/create/model/schema";

const HomeWorkCreate: FC = () => {
  const onCreate = async (data: HomeworkFormData) => {
    try {
      const formData = new FormData()

      data.classes.forEach((class_) => {
        formData.append("class", class_)
      })
      data.files?.forEach((file) => {
        formData.append("file", file)
      })
      formData.append("deadline", data.dueDate.getTime().toString())

      const response = await fetch("http://localhost:8080", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
    } catch (error) {
      console.error("Произошла ошибка:", error);
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header TeacherName="Бладко Ю.В." avatarSrc="zcz" />

      <main className="container px-4 py-6">
        <Toaster />
        <PageTitle text="Добавление домашнего задания" />
        <div className="mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm">
          <CreateHomeWorkForm onSubmit={onCreate} />
        </div>
      </main>
    </div>
  );
};
export default HomeWorkCreate;
