import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import mbLogo from "../assets/mobile_logo.png";
import largeLogo from "../assets/large_logo.webp";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-md border-b bg-white top-0 z-50 sticky">
      {/* Left */}
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        {/* Instagram text logo for large and medium screens */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 md:inline-grid  cursor-pointer"
        >
          <Image
            src="https://technyteams.netlify.app/logo192.png"
            // src={largeLogo}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          onClick={() => router.push("/")}
          className="relative w-10 lg:hidden md:hidden cursor-pointer"
        >
          {/* Instagram logo for small screens*/}
          <Image
            src="https://technyteams.netlify.app/logo192.png"
            // src={mbLogo}
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle - Search Input field */}
        <div className="max-w-xs">
          <div className=" relative mt-1 p-3 rounded-md">
            {/* Search Icon */}
            <div className=" absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            {/* Input feild */}
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4 ">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <MenuIcon className="h-6 w-10 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(!open)}
                className="h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                src={session.user.image}
                onClick={signOut}
                className="h-10 w-10 rounded-full  cursor-pointer"
                alt="profile pic"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
