import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware для защиты маршрутов
export async function middleware(request: NextRequest) {
  // Получаем JWT-токен из cookies
  const token = request.cookies.get("token")?.value ?? "";

  // Путь текущего запроса
  const pathname = request.nextUrl.pathname;

  // // Проверяем, является ли маршрут частью аутентификации
  // if (pathname.startsWith("/auth")) {
  //   // Если это маршрут аутентификации, пропускаем его
  //   return NextResponse.next();
  // }

  // // Защита остальных маршрутов
  // if (!token) {
  //   // Если токена нет, перенаправляем на страницу входа
  //   return NextResponse.redirect(new URL("/auth/signin", request.url));
  // }

  // Если все условия выполнены, продолжаем обработку запроса
  return NextResponse.next();
}

// Указываем, какие маршруты должны быть защищены
export const config = {
  matcher: ["/((?!auth|_next/static|favicon.ico).*)"],
};