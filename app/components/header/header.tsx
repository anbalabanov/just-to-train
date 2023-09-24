import React from 'react';

function Header() {
    return (
        <div className="flex flex-col">
            <header className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Radio</span>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Header;