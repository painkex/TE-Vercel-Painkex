import React, { Component, useState, useRef, useEffect } from 'react';
import { useAuth, SignIn, SignOutButton, SignInButton } from "@clerk/nextjs";
import Dashboard from '../pages/dashboard';
import Link from "next/link";


interface Props {
    profileImage: string;
}

const Componentaaaa = () => (
    <>
        <span>aa</span>
        <span>aa</span>
    </>
)
const DropdownProfileButton: React.FC<Props> = ({ profileImage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { signOut } = useAuth();
    const handleButtonClick = () => {
        setIsOpen(true);
    };

    const handleBodyClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener('click', handleBodyClick);

        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, []);

    return (
        <div ref={dropdownRef}
            className="relative inline-block">
            <button onClick={handleButtonClick} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={profileImage} alt="user photo" />
            </button>
            {isOpen && (
                <div className="absolute top-full mt-2 p-1 right-0 z-10 bg-white shadow-md min-w-full  py-2 px-3 rounded-md">
                    <ul className="list-none space-y-1">
                        <li>
                            <Link className="block py-2 px-2 mr-5 hover:bg-gray-200 rounded-md min-w-full " href="/dashboard">Dashboard</Link>
                        </li>
                        <hr />
                        <li>
                            <a onClick={() => signOut()} href="" className="block py-2 px-2 mr-5 hover:bg-gray-200 rounded-md min-w-full ">Sign out</a>
                        </li>
                    </ul>
                </div>
                // <div className="absolute top-full right-0 z-10 bg-white shadow-md py-2 px-3">
                //     <ul className="list-none">
                //         <li>
                //             <Link href="/dashboard">Dashboard</Link>
                //             {/* <a href="/dashboard" className="block py-2 hover:bg-gray-200">Profile</a> */}
                //         </li>
                //         <li>
                //             <a href="#" className="block py-2 hover:bg-gray-200">Settings</a>
                //         </li>
                //         <li>
                //             <a href="#" className="block py-2 hover:bg-gray-200">Logout</a>
                //         </li>
                //     </ul>
                // </div>
            )}
        </div>
    );
};

export default DropdownProfileButton;
