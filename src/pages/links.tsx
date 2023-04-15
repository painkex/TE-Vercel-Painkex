import { type NextPage } from "next";
import { type RouterOutputs, api } from "~/utils/api";
import { Spinner } from "~/components/Spinner";
import { useUser } from "@clerk/nextjs";
import Input from "~/components/Input";
import DropdownProfileButton from "~/components/Dropdown";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";


type Post = RouterOutputs["posts"]["getAll"][number];

const Dashboard: NextPage = () => {
    const { data: posts, isLoading } = api.posts.getAll.useQuery();
    const { user } = useUser();
    const PostView = (props: Post) => {
        const { id, content, createdAt } = props;
        return <div key={id} className=" text-black p-8 border-b border-slate-500">{content}</div>;
    };


    return (
        <main className="bg-gray-50 h-screen">


            <div className="flex sticky top-0 items-end  bg-white w-full z-40 border-b h-16  text-primary sm:px-6">
                <a href="./"> <Image src="/freelogo.jpg" className="h-8 mr-3 mb-3" alt="Flowbite Logo" width={40} height={100} /> </a>
                <div className="-mb-px flex space-x-3 overflow-x-auto sm:space-x-0 flex-1">
                    <Link href="./dashboard" className="text-gray- text-sm hover:border-b border-slate-300 p-8 py-0 hover:text-gray-900 font-semibold">DashBoard</Link>
                    <div className="text-sm whitespace-nowrap border-b-2 pb-5 pt-1 leading-none text-primary transition sm:px-2 border-blue-600 font-semibold">
                        <button>My links</button>
                    </div>
                </div>
                <div className="flex items-end mb-3">
                    <UserButton />
                </div>
            </div>







            {
                isLoading ? <Spinner /> : (
                    <div className="bg-transparent flex justify-center">
                        <div className=" sm:px-6 sm:py-32 lg:px-8">
                            <div className=" bg-white shadow-2xl sm:rounded-3xl sm:px-32 md:pt-24  ">
                                <div className=" max-w-md ">
                                    <h2 className=" font-bold tracking-tight text-black  text-center">
                                        <Input />
                                        {posts?.map((fullPost) => (
                                            <PostView {...fullPost} key={fullPost.id} />
                                        ))}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </main >
    );
};


export default Dashboard;
