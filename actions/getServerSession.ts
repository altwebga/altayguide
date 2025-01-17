"use server";
import { auth } from "@/auth"; // Ваша функция аутентификации

export const getServerSession = async () => {
  try {
    const session = await auth(); // Получение сессии с сервера
    return session;
  } catch (error) {
    console.error("Failed to fetch server session", error);
    return null;
  }
};
