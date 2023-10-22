// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-5 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <a href="/" className="text-2xl font-bold">BrandName</a>
                </div>
                <nav className="space-x-4">
                    <a href="/" className="hover:underline">Home</a>
                    <a href="/products" className="hover:underline">Products</a>
                    <a href="/about" className="hover:underline">About</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
