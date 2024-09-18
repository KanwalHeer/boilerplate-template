import Link from "next/link";
export default function Dashboard() {
  return (
    <div className="mt-8 flex flex-col justify-center items-center gap-6">
      <h1 className="text-center text-3xl font-extrabold">wellcome in Dashboard</h1>
      <button className="px-8 py-2 bg-slate-200 text-blue-800 rounded-xl text-senter"><Link href={'/'}>Logout</Link></button>
    </div>
  )
}
