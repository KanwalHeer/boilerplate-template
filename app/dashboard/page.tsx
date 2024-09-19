'use client';

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return <div className="grid place-items-center h-screen">Loading...</div>;
  }

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Do not redirect automatically
    router.push('/auth/sign-in'); // Redirect to login page after logout
  };

  return (
    <div className="flex flex-col items-center justify-center m-3 gap-8">
      <h1 className="text-center text-4xl text-gray-950 font-extrabold">Welcome in Dahboard!</h1>
      <div className="shadow-lg p-12  bg-white rounded-xl border border-gray-200 flex flex-col gap-4">
        <h2 className="text-2xl text-blue-950  text-center font-bold  mb-4">Profile</h2>
        <div className="text-lg">
          <div>
            <strong className="font-semibold">Name:</strong> {session.user?.name}
          </div>
          <div>
            <strong className="font-semibold">Email:</strong> {session.user?.email}
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-blue-950 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-900 transition duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
