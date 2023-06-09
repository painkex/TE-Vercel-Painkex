import { api } from "~/utils/api";
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
        const pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        return pattern.test(url);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInput(inputValue);
        setIsValidUrl(validateUrl(inputValue));
    };


    return (
        <main className="flex  items-center justify-center bg-fixed">
            <div className="flex items-center m-5">
                <input
                    type="text"
                    placeholder="Please enter your url !"
                    className={`my-3 mx-3 flex items-center rounded-md border-blue-800  py-3 px-3 text-black ${!isValidUrl ? 'border-red-500' : ''}`}
                    value={input}
                    onChange={handleChange}
                    disabled={isPosting} />
                <button onClick={() => mutate({ content: input })} disabled={!isValidUrl}
                    className={`${!isValidUrl ? 'text-slate-400' : 'text-black'}`}>Post</button>
            </div>
            {!isValidUrl && <p className="text-red-600">Please enter a valid URL</p>}
        </main>



    );
}

export default Input;
