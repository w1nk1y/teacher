//страничка где учитель оценивает домашку после просмотра во home-work-view
import { Header } from '~/features/Header';
import '~/styles/globals.css';
import { FC } from 'react'; 
import {HomeWorkMarkForm} from '~/widgets/homework/mark/ui/form'; 
 
const HomeWorkMark:FC =()=>{
    return(
        <div className='min-h-screen bg-gray-50'>
            <Header TeacherName='Бладко Ю.В.' avatarSrc='zcz' />
            <main className='container px-4 py-6'>
                <HomeWorkMarkForm/>
            </main>
        </div>
    )
}
export default HomeWorkMark
 
