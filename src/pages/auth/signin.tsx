"use client";
import { type FC, useState } from "react";
import { useRouter } from "next/navigation"; // Для навигации
import { SignInForm } from "~/widgets/auth/sign-in/ui/form";
import { type LoginFormData } from "~/widgets/auth/sign-in/model/schema";
import { PageTitle } from "~/features/PageTitle";
import { Toaster, toast } from "sonner"; // Для уведомлений
import Cookies from "js-cookie"; // Для работы с cookies
import "~/styles/globals.css";

const Signin: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Ошибки от сервера
  const router = useRouter();

  const handleSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);

      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const responseData = await response.json();
      const token = responseData.token;

      // Сохраняем токен в cookies
      Cookies.set("token", token, { expires: 7 });

      // Показываем уведомление об успехе
      toast.success("Вы успешно вошли в систему!");

      // Перенаправляем пользователя
      router.push("/classes/");
    } catch (error: any) {
      toast.error(error.message || "Произошла ошибка при входе");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container px-4 py-10">
      <Toaster />
      <PageTitle text="Вход в аккаунт" />
      <div className="mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm">
        {/* Отображаем ошибку, если она есть */}
        {error && <p className="mb-4 text-red-500">{error}</p>}

        {/* Форма входа */}
        <SignInForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </main>
  );
};

export default Signin;
