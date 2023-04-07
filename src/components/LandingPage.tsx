import { useUser, SignIn, SignOutButton, SignInButton } from "@clerk/nextjs";
import { GradientButton } from "./GradientButton";
import { Spinner } from "./Spinner";

const LandingPage = () => {

  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) return <Spinner />

  return (

    <><div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm- font-semibold leading-6 text-blue-600">Product</a>

            <a href="#" className="text-sm font-semibold leading-6 text-blue-600">Features</a>

            <a href="#Team" id="Team" className="text-sm font-semibold leading-6 text-blue-600">Team</a>

            <a href="#Contact" id="Contact" className="text-sm font-semibold leading-6 text-blue-600">Contact</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
      </header>


      <section className=" mb-60 mt-60">
        <div className="text-center bg-white-50 text-gray-800 py-24 px-6">
          <h1 className="text-white text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 -mb-16">The best way to get rich<br /><span className="text-blue-600">is FreeShipping</span></h1>
        </div>
        <div className="flex justify-center">

          <GradientButton>
            {isSignedIn ?
              <SignOutButton />
              :
              <SignInButton />
            }
          </GradientButton>
        </div>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </section>

      </div></>

  );
};

export default LandingPage
