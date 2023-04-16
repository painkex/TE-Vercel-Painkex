import { UserButton, useUser } from "@clerk/nextjs";
import { Spinner } from "./Spinner";
import { SignInButton } from "@clerk/nextjs";

const Navbar = () => {
    const { isLoaded, user } = useUser();

    return (
        <nav className="bg-dark/50 container sticky top-0  mx-auto rounded-md py-4 px-8 backdrop-blur md:rounded-full z-10">
            <div className=" border-gray-200 bg-white rounded-xl">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center">
                        <img src="freelogo.jpg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-700 ">ShippingWatcher</span>
                    </div>
                    <div className="flex items-center md:order-2">
                        {!isLoaded ? <Spinner /> : (
                            !user ? <SignInButton /> :
                                <UserButton />
                        )
                        }
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">

                    </div>
                </div>
            </div>
        </nav>);
}


export default Navbar