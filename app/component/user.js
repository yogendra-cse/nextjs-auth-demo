import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
const User = () => {
    const router=useRouter();
    const { data: session } = useSession();
    if(!session){
        redirect("/");
    }
    if (session) {
        return (
            <div className="h-[300px] w-[300px]  bg-blue-400">
                <div className="px-10 py-4 flex flex-col gap-[16px] justify-between items-center border-e-blue-400 text-2xl">
                    <div><Image src={session.user?.image} height={100} width={100} alt="Profile picutre"/></div>
                    <div>Name: {session.user?.name}</div>
                    <div>Email: {session.user?.email}</div>
                </div>
            </div>
        )
    }
}