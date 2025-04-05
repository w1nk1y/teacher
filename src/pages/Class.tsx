import { FC } from "react";
import { PageTitle } from "~/features/PageTitle";
import { Header } from "~/features/Header";
import '../styles/globals.css';
import { HomeWorkList } from "~/widgets/ClassPage/ui";
const Class:FC =()=>{


    return(
        <div className='min-h-screen bg-gray-50'>
            <Header TeacherName='Бладко Ю.В.' avatarSrc='zcz' />
            <main className='container px-4 py-6'>
                <PageTitle text='Тут запросом берем ClassName' />

                <HomeWorkList/>
            </main>
        </div>
    )
}
export default Class