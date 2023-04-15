import { RouterOutputs, api } from "~/utils/api";
import { useState } from "react";

const Input = () => {


    const [input, setInput] = useState<string>("");
    const [isValidUrl, setIsValidUrl] = useState<boolean>(true);
    const ctx = api.useContext();
    const { mutate, isLoading: isPosting } = api.posts.create.useMutation({
        onSuccess: () => {
            setInput("");
            void ctx.posts.getAll.invalidate();
        },
    });

    const validateUrl = (url: string): boolean => {
        const pattern = new RegExp("^((https?:\\/\\/)?[\\w\\-]+(\\.[\\w\\-]+)+[/#?]?.*)$");
        return pattern.test(url);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInput(inputValue);
        setIsValidUrl(validateUrl(inputValue));
    }

    /*  type PostWithUser = RouterOutputs["posts"]["getAll"][number];
 
     const PostView = (props: PostWithUser) => {
         const { post, author, createdAt } = props;
         return <div key={post.id}>{post.content} {post.createdAt}</div>;
     }; */


    return (
        <main className="flex flex-col items-center justify-center bg-fixed">
            <div className="flex">
                <input
                    type="text"
                    placeholder="Please enter your url !"
                    className={`my-3 mx-3 flex items-center rounded-md border-blue-800 bg-transparent py-3 px-3 text-black ${!isValidUrl ? 'border-red-500' : ''}`}
                    value={input}
                    onChange={handleChange}
                    disabled={isPosting} />
                <button onClick={() => mutate({ content: input })} disabled={!isValidUrl}>Post</button>
            </div>
            {!isValidUrl && <p className="text-red-600">Please enter a valid URL</p>}
        </main>



    );
}

export default Input;
