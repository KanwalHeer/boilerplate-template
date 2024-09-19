'use client'; 
import { signIn ,useSession} from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation"; 
import { useState } from "react"; // Import useEffect here
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const { data: session } = useSession();

 
    if (session) {
      router.push('/dashboard');
    }
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
  
      if (result?.error) {
        setError("Invalid Credentials");
        console.log("login error");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="shadow-xl p-8 rounded-lg bg-white max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In {/* Corrected button text here */}
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-2 px-4 rounded-md mt-4">
              {error}
            </div>
          )}

          
          <div
            className="text-center items-center justify-center flex flex-col h cursor-pointer gap-3"
            onClick={() => signIn('google')} 
          >
            <h1 className="text-center text-gray-700">Signin with Google</h1>
            <FaGoogle className="text-[#4285F4] text-xl text-center hover:text-red-700" />
          </div>
        </form>

        <div className="text-center">
           <Link href="/auth/sign-up" className="text-sm text-gray-600 hover:underline mt-4 block text-center">
            Do not have an account? <span className="underline text-blue-700">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
