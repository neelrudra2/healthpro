"use client";

import Image from "next/image";
import Link from "next/link";
import { BellIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "./ui/input";

const AdminHeader = () => {
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <header className="admin-header flex justify-between items-center relative">
      <Link href="/" className="cursor-pointer">
        <p className="h-8 w-fit text-center text-xl font-bold flex items-center justify-center">
          🩺 HealthPro
        </p>
      </Link>

      <div className="flex items-center space-x-4 relative text-xl font-bold">
        Admin Dashboard
      </div>

      <div className="flex items-center space-x-4 relative">
        <Popover>
          <PopoverTrigger>
            <BellIcon className="h-6 w-6 cursor-pointer text-gray-400" />
          </PopoverTrigger>
          <PopoverContent className="w-40 p-2 left-0 transform -translate-x-20 border border-dark-600">
            <p className="text-gray-400 font-medium">No new notifications</p>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Image
              src="/assets/icons/RB4.jpg"
              height={32}
              width={32}
              alt="Admin DP"
              className="rounded-full object-cover cursor-pointer"
            />
          </PopoverTrigger>
          <PopoverContent className="w-30 p-3 shadow-lg rounded-md z-50 border border-dark-600">
            <button
              onClick={handleLogout}
              className="w-full text-left text-red-500 rounded-md"
            >
              Logout
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default AdminHeader;
