"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
    const [search, setSearch] = useState("");
    const Router = useRouter();
    function handleSubmit(e: any) {
        e.preventDefault();
        if(!search) return;
        Router.push(`/search/${search}`);
    };

    return (
        <form onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5 outline-none bg-transparent">
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text" placeholder="Search keywords..."
                className="w-full h-14 rounded-sm placeholder-gray-500 outline-none background-transparent px-4 text-lg"
            />
            <button type="submit" className="text-amber-700 disabled:text-gray-400" disabled={!search}>Search</button>
        </form>
    )
}
