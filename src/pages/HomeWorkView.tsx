import { FC } from "react";
import { Header } from "~/features/Header";
import '../styles/globals.css';

const HomeWorkView:FC =()=>{
    return(
        <div className='min-h-screen bg-gray-50'>
            <Header TeacherName='Бладко Ю.В.' avatarSrc='zcz' />
            <main className='container px-4 py-6'>
                <p>Success</p>
            </main>
        </div>
    )
}
export default HomeWorkView