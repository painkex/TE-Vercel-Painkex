import { type NextPage } from "next";
import { type RouterOutputs, api } from "~/utils/api";
import { Spinner } from "~/components/Spinner";
import { useUser } from "@clerk/nextjs";
import Input from "~/components/Input";
import DropdownProfileButton from "~/components/Dropdown";


type Post = RouterOutputs["posts"]["getAll"][number];

const Dashboard: NextPage = () => {
    const { data: posts, isLoading } = api.posts.getAll.useQuery();
    const { user } = useUser();
    const PostView = (props: Post) => {
        const { id, content, createdAt } = props;
        return <div key={id} className=" text-black p-8 border-b border-slate-500">{content}</div>;
    };

    const currentMonth = new Date().getMonth() + 1;
    const postsThisMonth = posts?.filter((post) => {
        const postMonth = new Date(post.createdAt).getMonth() + 1;
        return postMonth === currentMonth;
    });


    return (
        <main className="  bg-gray-50">
            <h1 className="bg-white"><a href="./">ShippingWatcher</a></h1>

            <div className="flex sticky top-0 items-end space-x-8 bg-white w-full z-40 border-b h-16 px-3 text-primary sm:px-6">
                <div className="-mb-px flex space-x-3 overflow-x-auto sm:space-x-0 flex-1">
                    <a href="/dashboard" className="text-gray-600 text-sm hover:border-b border-slate-300 p-8 py-0 hover:text-gray-900">DashBoard</a>
                    <div className="text-sm whitespace-nowrap border-b pb-2 pt-1 leading-none text-primary transition sm:px-2 border-blue-600 font-semibold">
                        <button>My links</button>
                    </div>
                </div>
                <div className="flex items-end mb-1">
                    <DropdownProfileButton profileImage={user?.profileImageUrl} />
                </div>

            </div>


            {
                isLoading ? <Spinner /> : (
                    <>
                        <Input />
                        {posts?.map((fullPost) => (
                            <PostView {...fullPost} key={fullPost.id} />
                        ))}


                    </>
                )
            }
        </main >
    );
};


export default Dashboard;
