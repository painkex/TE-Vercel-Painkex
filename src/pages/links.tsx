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
            <div key={id} className="text-black p-8 border-b border-slate-500 flex justify-between">
                <div>{content}</div>
                <div>Nouveau lien</div>
            </div>
        );
    };

    return (
        <main className="bg-gray-50">
            <div className="flex sticky top-0 items-end  bg-white w-full z-40 border-b h-16  text-primary sm:px-6">
                <a href="./">
                    <Image
                        src="/freelogo.jpg"
                        className="mr-3 mb-3"
                        alt="Flowbite Logo"
                        width={40}
                        height={100}
                    />
                </a>
                <div className="-mb-px flex space-x-3 overflow-x-auto sm:space-x-1 flex-1 gap-1">
                    <Link
                        href="./dashboard"
                        className="text-gray-500 text-sm hover:border-b border-slate-300 p-8 py-0 hover:text-gray-900 font-semibold"
                    >
                        Dashboard
                    </Link>
                    <div className="text-sm whitespace-nowrap border-b-2 pb-5 pt-1 leading-none text-primary transition sm:px-2 border-blue-600 font-semibold">
                        <button>My links</button>
                    </div>
                </div>
                <div className="flex items-end mb-3">
                    <UserButton />
                </div>
            </div>

            <div className="max-w-screen-md mx-auto">
                {isLoading ? (
                    <Spinner />
                ) : (
                    <div className="flex justify-center bg-gray-50 sticky">
                        <div className="sm:px-6 sm:py-28 lg:px-8">
                            <div className="shadow-2xl sm:rounded-3xl sm:px-32 md:pt-20">
                                <div className="max-w-screen-sm">
                                    <h2 className="tracking-tight text-slate-500">
                                        <Input />
                                        <div
                                            className="max-h-96 overflow-y-scroll mt-5"
                                            style={{ scrollbarWidth: "none" }}
                                        >
                                            <div className="flex justify-between text-black font-bold p-8 border-b border-slate-500">
                                                <div>Old Link</div>
                                                <div>New Link</div>
                                            </div>
                                            {posts?.map((fullPost) => (
                                                <PostView {...fullPost} key={fullPost.id} />
                                            ))}
                                        </div>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Links;

