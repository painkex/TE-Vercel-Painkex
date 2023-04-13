import { SignIn, SignOutButton, SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import LandingPage from "~/components/LandingPage";

import { RouterOutputs, api } from "~/utils/api";
import { Spinner } from "~/components/Spinner";
import { GradientButton } from "~/components/GradientButton";
import { Post } from "@prisma/client";
import { useState } from "react";
import Dashboard from "~/pages/dashboard";
import Navbar from "~/components/Navbar";
import Input from "~/components/Input";

const Home: NextPage = () => {
  //const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data } = api.posts.getAll.useQuery();
  const { isLoaded, isSignedIn, user } = useUser();
  const [input, setInput] = useState<string>("");
  const [open, setOpen] = useState(false)
  const ctx = api.useContext();
  const { mutate, isLoading: isPosting } = api.posts.create.useMutation({
    onSuccess: () => {
      setInput("");
      void ctx.posts.getAll.invalidate();
    },
  });
  // if (!data) return <Spinner />;
  console.log(user);

  type PostWithUser = RouterOutputs["posts"]["getAll"][number];

  const PostView = (props: PostWithUser) => {
    const { post, author } = props;
    return <div key={post.id}>{post.content}</div>;
  };

  return (
    <>
      <Head>
        <title>FreeShipping</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="background flex min-h-screen flex-col items-center justify-center bg-fixed">
        <Navbar />
        {isSignedIn ? (
          <>
            <LandingPage />

          </>
        ) : (
          <>
            <div className="bg-white-50 py-24 px-6 text-center text-gray-800">
              <h1 className="mb-12 text-5xl font-bold tracking-tight text-white md:text-6xl xl:text-7xl">
                FreeShippingWatcher
                <br />
                <span className="text-white text-4xl">
                  Never pay for Shipping on Amazon again
                </span>
              </h1>
            </div>

            <GradientButton>
              <SignInButton />
            </GradientButton>
          </>
        )}
      </main>
    </>
  );
};

export default Home;
