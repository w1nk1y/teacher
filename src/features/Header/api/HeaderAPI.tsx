import TeacherProps from "~/entities/Teacher/TeacherProps";


export const getTeacherData = async (teacherId: string): Promise<TeacherProps> => {
  try {
    const response = await fetch(`/api/teacher/${teacherId}`);
    
    if (!response.ok) {
      throw new Error('Не получилось сделать запрос');
    }
    
    const data: TeacherProps = await response.json();
    return data;
    
  } catch (error) {
    console.error('Ошибка при запросе данных учителя:', error);
    throw error;
  }
};