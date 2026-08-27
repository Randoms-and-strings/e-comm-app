"use client";
import { usePathname } from "next/navigation";

export default function CurrentPath():string{
    return(usePathname());
}