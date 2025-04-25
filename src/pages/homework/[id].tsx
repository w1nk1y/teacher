'use client'

import { type FC } from "react";
import {Header} from "~/features/Header";
import HomeworkView from "~/widgets/homework/view/ui/homework-view";
import "~/styles/globals.css";
const HomeworkDetailsPage : FC = () => {
  return (
    <div className="mx-auto w-full overflow-x-auto">
      <Header TeacherName="123123" avatarSrc="zcz"/>
      <HomeworkView/>
    </div>
  )
}

export default HomeworkDetailsPage;