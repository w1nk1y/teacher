import '~/styles/globals.css';
import Link from "next/link";
import {Button} from "~/components/ui/button";
import Image from "next/image";
import image1 from "~/shared/ui/image1.png";
const Page = () => {
    return (
      <div className='flex min-h-screen items-center bg-blue-600 '>
          <div className='mx-auto flex max-w-screen-xl flex-col gap-8 rounded-2xl  p-6 md:flex-row md:p-12'>
              <div className='flex-1'>
                  <h1 className='mb-6 text-5xl font-bold text-white'>Новый подход к образованию детей</h1>
                  <p className='mb-8 text-lg text-white'>
                      Наш сайт предоставляет возможности для сбора записей по предметам у учеников и их проверки. Это
                      позволит вам экономить время при проверке конспектов и других работ и вести учёт выполненных
                      домашних заданий. С помощью обратной связи вы с лёгкостью можете указать на недочёты, допущенные
                      детьми в их работах, а также оценить их по привычной системе оценивания. Просто попробуйте!
                  </p>
                  <div className='flex flex-col gap-4 md:flex-row '>

                      <Link href='/auth/signup'>
                          <Button className='border-2 border-gray-700 rounded-lg bg-gray-200 px-8 py-3 hover:bg-gray-400 text-blue-600 font-bold'>
                              Войти
                          </Button>
                      </Link>

                      <Link href='/auth/signup'>
                          <Button className='border-2 border-gray-700 rounded-lg bg-gray-200 px-8 py-3 hover:bg-gray-400 text-blue-600 font-bold'>
                              Зарегистрироваться
                          </Button>
                      </Link>

                  </div>
              </div>

              <div className='flex flex-1 items-center justify-center'>
                  <Image
                    src={image1}
                    alt='Образовательная платформа'
                    width={500}
                    height={300}
                    className='h-auto w-full'
                  />
              </div>
          </div>
      </div>
    );
};

export default Page;
