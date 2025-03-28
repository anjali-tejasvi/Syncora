import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserMenu from "./user-menu";
import { PenBox } from "lucide-react";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import UserLoading from "./user-loading";

async function Header() {
  await checkUser();

  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">
          <div className="flex gap-1 sm:gap-2 md:gap-2 lg:gap-2 flex-wrap justify-center">
            {["S", "Y", "N", "C", "O", "R", "A"].map((char, index) => (
              <span
                key={index}
                className="bg-blue-300 text-black px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-md text-base sm:text-lg md:text-xl font-bold"
              >
                {char}
              </span>
            ))}
          </div>


            {/* <Image
              src={"/logo2.png"}
              alt="Zscrum Logo"
              width={200}
              height={56}
              className="h-10 w-auto object-contain"
            /> */}
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/project/create">
            <Button variant="destructive" className="flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden md:inline">Create Project</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>

      <UserLoading />
    </header>
  );
}

export default Header;
