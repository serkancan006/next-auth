"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Yükleniyor...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-6 text-center">
          <h1 className="text-xl font-semibold mb-4">Giriş Yapman Gerekli</h1>
          <p className="text-gray-600 mb-6">Bu sayfaya erişmek için giriş yapmalısın.</p>
          <button
            onClick={() => signIn("auth0")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
          >
            Auth0 ile Giriş Yap
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Profil Sayfası</h1>
        <p className="text-gray-700 mb-6">
          Hoş geldin, <span className="font-semibold">{String(session.user?.email)}</span>
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="font-semibold mb-1 text-gray-800">ID Token (JWT)</h2>
            <div className="bg-gray-100 p-4 rounded text-sm max-h-60 overflow-auto whitespace-pre-wrap break-all">
              {session?.idToken}
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-1 text-gray-800">Access Token</h2>
            <div className="bg-gray-100 p-4 rounded text-sm max-h-60 overflow-auto whitespace-pre-wrap break-all">
              {session?.accessToken}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link
            href="/login"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Giriş Sayfasına Git
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm transition"
          >
            Çıkış Yap
          </button>
        </div>
      </div>
    </div>
  );
}
