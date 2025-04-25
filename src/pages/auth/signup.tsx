'use client';
import { type FC, useState } from 'react';
import { SignUpForm } from '~/widgets/auth/sign-up/ui/form';
import { PageTitle } from '~/features/PageTitle';
import {toast, Toaster} from 'sonner';
import '~/styles/globals.css';
import {type RegistrationFormData} from "~/widgets/auth/sign-up/model/schema";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";

const Signup: FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handleSubmit = async (data: RegistrationFormData) => {
      try {
        setIsLoading(true);

        const response = await fetch("http://localhost:8080/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            role: "TEACHER"
          }),
        });

        if (!response.ok) {
          console.log("HTTP")
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData)
        const token = responseData.token;

        // Сохраняем токен в cookies
        Cookies.set("token", token, { expires: 7 });

        // Показываем уведомление об успехе
        // toast.success("Вы успешно вошли в систему!");
        console.log("OK")

        // Перенаправляем пользователя
        // router.push("/classes/");
      } catch (error: any) {
        console.log(error.message || "Произошла ошибка при входе");
      } finally {
        setIsLoading(false);
      }
    };

    return (
        <main className='container px-4 py-10'>
            <Toaster/>
            <PageTitle text='Введите данные аккаунта' />
            <div className='mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm'>
                <SignUpForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
        </main>
    );
};
export default Signup;
