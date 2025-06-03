"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-6 text-center">
          <h1 className="text-2xl font-semibold mb-4">Hoş geldin 👋</h1>
          <p className="text-gray-700 mb-6">{typeof session.user?.name === "string" ? session.user.name : ""}</p>

          <div className="flex flex-col gap-4">
            <Link
              href="/profile"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition text-center"
            >
              Profil Sayfasına Git
            </Link>

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Giriş Yap</h1>
        <p className="text-gray-600 mb-6">
          Devam etmek için aşağıdaki butona tıkla.
        </p>
        <button
          onClick={() => signIn("auth0", { prompt: "login" })}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
        >
          Auth0 ile Giriş Yap
        </button>
      </div>
    </div>
  );
}
