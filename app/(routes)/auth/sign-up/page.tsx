'use client'; 
import { signIn, useSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation"; 
import { useEffect } from "react";
import Link from "next/link";

//component
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  //use  useeffect for mountaining
  useEffect(() => {

    //redirect the user to dashboard after login
    if (session) {
      router.push("/auth/sign-in");
    }
  }, [session, router]);

 

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="max-w-md w-full shadow-lg rounded-lg bg-white p-2">
        <h1 className="text-3xl font-bold text-gray-800 text-center m-3">Signup</h1>

        {/* form for input fields */}
        <form className="flex flex-col justify-start items-center w-full p-8 border-2 gap-4">
           <input
            type="text"
            placeholder="Enter Your Name"
            className="border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-300 px-8 py-2"
           />
           <input
            type="email"
            placeholder="Enter Your Email"
            className="border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-300 px-8 py-2"
           />
           <input
            type="password" 
            placeholder="Enter Your Password"
            className="border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-300 px-8 py-2"
          />

          {/* sigup button */}
          <button type="submit" className="px-8 py-2 bg-blue-400 rounded-xl font-bold text-gray-800 hover:bg-gray-200 hover:text-blue-800">
            Signup
          </button>

          {/* login with google provider */}
          <h1 className="text-center">Signup with Google</h1>
          <div
            className="text-center justify-center hover:underline cursor-pointer"
            onClick={() => signIn('google')} 
          >
            <FaGoogle className="text-[#4285F4] text-xl text-center" />
          </div>
        </form>
        <div className="text-center">
          <button className="text-sm text-block mt-4 mb-4 hover:underline block text-center">
            Allready have an account? <span className="underline text-blue-700"><Link href={'/auth/sign-in'}>Login</Link></span>
          </button>
        </div>
      </div>
    </div>
  );
}
