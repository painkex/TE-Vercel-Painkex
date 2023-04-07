import { SignIn, SignOutButton, SignInButton } from "@clerk/nextjs";
import { useUser } from '@clerk/clerk-react'
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import LandingPage from "~/components/LandingPage";

import { RouterOutputs, api } from "~/utils/api";
import { Spinner } from "~/components/Spinner";
import { GradientButton } from "~/components/GradientButton";
import { Post } from "@prisma/client";
import { useState } from "react";

const Home: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data } = api.posts.getAll.useQuery();
  const { isLoaded, isSignedIn, user } = useUser();
  const [input, setInput] = useState<string>("")
  const ctx = api.useContext();
  const {mutate, isLoading: isPosting} = api.posts.create.useMutation({
    onSuccess: () => {
      setInput("");
      void ctx.posts.getAll.invalidate();
    },
  });
  if (!data) return <Spinner />
  console.log(user);


  type PostWithUser = RouterOutputs["posts"]["getAll"][number];

  const PostView = (props: PostWithUser) => {
    const { post, author } = props;
    return (
      <div key={post.id}>{post.content}</div>
      );
    };


  return (
    <>
      <Head>
        <title>FreeShipping</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center background bg-fixed">

        {isSignedIn ?
          <><LandingPage />
            <div className="flex">
              <input
              type="text"
              placeholder="Please enter your url !"
              className="flex items-center bg-blue-300 text-white border-blue-800 py-3 px-3 my-3 mx-3 rounded-md"
              value={input}
              onChange={(e) => setInput(e.target.value) }
              disabled={isPosting}
               />
               <button onClick={() => mutate({ content: input })}>Post</button>
            </div>

            <div className="text-black">
              {data.map((fullPost) => (
                <PostView {...fullPost} key={fullPost.post.id} />
              ))}
            </div>
          </>

          :
          <><div className="text-center bg-white-50 text-gray-800 py-24 px-6">
            <h1 className="text-white text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 -mb-16">Hello Friend,<br /><span className="text-white">please sign in  to continue ;)</span></h1>
          </div>

            <GradientButton>
              <SignInButton />
            </GradientButton></>
        }


      </main>
    </>
  );
};

export default Home;
