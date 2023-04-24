import { HomeIcon, Library, Search } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className='w-72 bg-zinc-950 p-6'>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-red-500 rounded-full' />
                <div className='w-3 h-3 bg-yellow-500 rounded-full' />
                <div className='w-3 h-3 bg-green-500 rounded-full' />
            </div>
            <nav className='space-y-5 mt-10'>
                <a href='' className='flex items-center gap-2 text-sm font-semibold text-zinc-100'>
                    <HomeIcon />
                    Home
                </a>
                <a href='' className='flex items-center gap-2 text-sm font-semibold text-zinc-100'>
                    <Search />
                    Search
                </a>
                <a href='' className='flex items-center gap-2 text-sm font-semibold text-zinc-100'>
                    <Library />
                    Your Library
                </a>
            </nav>
            <nav className='mt-6 pt-6 border-t  border-zinc-800 flex flex-col gap-3'>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Dirigindo por aí</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>This is Foo Fighters</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>This is P!nk</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>This is Ariana Grande</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Pop Rock</a>
            </nav>
        </aside>
    )
}