'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session)
  if(session) {
    return <nav className="flex justify-between items-center bg-slate-700">
      <div>Signed in as <span className="text-blue-500 font-bold">{session.user.name}</span></div>
      <div className="flex justify-between items-center"><Image src={session.user?.image || ""} height={50} width={50} alt="avatar"/></div>
      <button className="px-5 py-3 rounded-lg bg-red-500 hover:bg-amber-500 active:bg-red-700 cursor-pointer transition" onClick={() => signOut()}>Sign out</button>
    </nav>
  }
  return <>
    Not signed in <br/>
    <button className="px-5 py-3 rounded-lg bg-red-500 hover:bg-amber-500 active:bg-red-700 cursor-pointer transition" onClick={() => signIn()}>Sign in</button>
  </>
}

export default Navbar;