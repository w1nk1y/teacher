import { FC } from "react";
//страничка конкретного класса с инфой о присланных домашках

import { PageTitle } from "~/features/PageTitle";
import { Header } from "~/features/Header";
import '~/styles/globals.css';
import { HomeworkList} from "~/widgets/classes/page/ui/students-home-works-list";
const ClassPage:FC =()=>{


    return(
        <div className='min-h-screen bg-gray-50'>
            <Header TeacherName='Бладко Ю.В.' avatarSrc='zcz' />
            <main className='container px-4 py-6'>
                <PageTitle text='Тут запросом берем ClassName' />
                <HomeworkList/>
            </main>
        </div>
    )
}
export default ClassPage