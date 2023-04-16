import { type NextPage } from "next";
import { api } from "~/utils/api";
import { Spinner } from "~/components/Spinner";
import { useUser } from "@clerk/nextjs";
import Link from "next/link"; ``
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";



const Dashboard: NextPage = () => {
    const { data: links, isLoading } = api.posts.getAll.useQuery();
    const { user } = useUser();
    console.log(user?.primaryEmailAddress?.emailAddress);


    const currentMonth = new Date().getMonth() + 1;
    const linksThisMonth = links?.filter((post) => {
        const postMonth = new Date(post.createdAt).getMonth() + 1;
        return postMonth === currentMonth;
    });


    return (
        <main className="bg-gray-50 h-screen">


            <div className="flex sticky top-0 items-end space-x-8 bg-white w-full z-40 border-b h-16  text-primary sm:px-6">
                <a href="./"> <Image src="/freelogo.jpg" className="mr-3 mb-3" alt="Flowbite Logo" width={40} height={100} /> </a>
                <div className="-mb-px flex space-x-3 overflow-x-auto sm:space-x-1 flex-1 gap-1">
                    <button className="text-sm whitespace-nowrap border-b-2 pb-6 pt-1 leading-none text-primary transition sm:px-2 border-blue-600 font-semibold">Dashboard</button>
                    <div className="text-gray-500 text-sm hover:border-b border-slate-300 p-8 py-0 hover:text-gray-900 font-semibold">
                        <Link href="/links"><button>My links</button></Link>
                    </div>
                </div>
                <div className="flex items-end mb-3">
                    <UserButton />
                </div>
            </div>


            {
                isLoading ? <Spinner /> : (
                    <>
                        <div className="bg-gray-50 mx-auto px-28 flex flex-wrap justify-center mt-10 gap-x-60 gap-y-12">
                            <div className="flex flex-wrap gap-x-10 justify-evenly ">

                                <div className="flex items-center justify-center text-black font-bold bg-white border-gray-200 border rounded-xl h-28 text-base shadow-md w-80">Total links : <br />
                                    <span className="text-slate-500 text-xl">{links?.length ?? ""}</span>
                                </div>

                                <div className="flex items-center justify-center text-black font-bold bg-white border-gray-200 border rounded-xl h-28 text-base shadow-md w-80">Total links of the month : <br />
                                    <span className="text-slate-500 text-xl">{linksThisMonth?.length ?? ""}</span>
                                </div>

                                <div className="flex items-center justify-center text-black font-bold bg-white border-gray-200 border rounded-xl h-28 text-base shadow-md w-80">Total links of the week : <br />
                                    <span className="text-slate-500 text-xl">{links?.length ?? ""}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-x-10">
                                <div className="flex items-center justify-center text-black font-bold bg-white border-gray-200 border rounded-xl h-56 text-base shadow-md w-80">Total links : <br />
                                    <span className="text-slate-500 text-xl">{links?.length ?? ""}</span>
                                </div>

                                <div className="flex items-center justify-center text-black font-bold bg-white border-gray-200 border rounded-xl h-56 text-base shadow-md w-80">Total links of the month : <br />
                                    <span className="text-slate-500 text-xl">{linksThisMonth?.length ?? ""}</span>
                                </div>

                                <div className="flex items-center justify-center text-black font-bold bg-white border-gray-200 border rounded-xl h-56 text-base shadow-md w-80">Total links of the week : <br />
                                    <span className="text-slate-500 text-xl">{links?.length ?? ""}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-center text-black font-bold bg-white border-gray-200 border rounded-xl h-56 text-base shadow-md w-full mb-10">Total links of the week : <br />
                                <span className="text-slate-500 text-xl">{links?.length ?? ""}</span>
                            </div>

                        </div>

                    </>
                )
            }
        </main >
    );
};


export default Dashboard;
