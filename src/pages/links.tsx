import { type NextPage } from "next";
import { type RouterOutputs, api } from "~/utils/api";
import { Spinner } from "~/components/Spinner";
import Input from "~/components/Input";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";


type Post = RouterOutputs["posts"]["getAll"][number];

const Links: NextPage = () => {
    const { data: posts, isLoading } = api.posts.getAll.useQuery();
    const PostView = (props: Post) => {
        const { id, content } = props;
        return (
            <div key={id} className="flex items-center justify-between mb-4 border-b border-zinc-200">
                <div className="font-medium text-gray-600">{content}</div>
                <div className="text-blue-500 font-semibold cursor-pointer hover:text-blue-600 transition-all duration-200">
                    New Link
                </div>
            </div>
        );
    };

    return (
        <main className="bg-gray-50 min-h-screen">
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

                    <Link href="./dashboard">
                        <div className="text-gray-400 font-medium cursor-pointer hover:text-gray-800 transition-all duration-200">
                            Dashboard
                        </div>
                    </Link>
                    <div className="px-4 font-medium text-gray-600">/</div>
                    <div className="text-blue-700 font-semibold">My Links</div>
                </div>

                <div className="flex items-center">
                    <UserButton />
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto py-5 px-4 md:px-0">
                <div className="bg-white rounded-lg shadow-2xl ">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 px-6 py-8 md:px-10 md:py-12">My Links</h2>
                    <div className="px-6 md:px-10 ">
                        <Input />
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <div className="max-h-96 overflow-y-auto mt-6">
                                {posts?.map((fullPost) => (
                                    <PostView {...fullPost} key={fullPost.id} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Links;
