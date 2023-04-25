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


            <div className="flex items-center justify-between px-6 py-4 ">
                <div className="flex items-center">
                    <a href="./">
                        <Image
                            src="/LogoMakr.png"
                            className="mr-5"
                            alt="Flowbite Logo"
                            width={35}
                            height={100}
                        />
                    </a>
                    <div className="text-blue-700 font-semibold">
                        Dashboard
                    </div>
                    <div className="px-4 font-medium text-gray-600">/</div>

                    <Link href="./links">
                        <div className="text-gray-400 font-medium cursor-pointer hover:text-gray-800 transition-all duration-200">
                            My Links
                        </div>
                    </Link>
                </div>
                <div className="flex items-center">
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
