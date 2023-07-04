import Link from 'next/link';
import React from 'react';

const Navigation = () => {
    return (
        <nav className="flex gap-10  my-2">
        <Link className="text-xl font-semibold   hover:underline" href={"/"}>Home</Link>
        <Link className="text-xl font-semibold   hover:underline" href={"/"}>About</Link>
        <Link className="text-xl font-semibold   hover:underline" href={"/"}>Blog</Link>
        <Link className="text-xl font-semibold   hover:underline" href={"/"}>About</Link>
        <Link className="text-xl font-semibold   hover:underline" href={"/"}>Quiz</Link>
        <Link className="text-xl font-semibold   hover:underline" href={"/"}>Carrer</Link>
    </nav>
    );
};

export default Navigation;