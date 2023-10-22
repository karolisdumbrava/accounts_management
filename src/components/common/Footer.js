import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-5 mt-10">
            <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
                <div className="text-center md:text-left mb-3 md:mb-0">
                    <p className="text-sm">&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
                </div>
                <div className="space-x-4">
                    <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
                    <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
