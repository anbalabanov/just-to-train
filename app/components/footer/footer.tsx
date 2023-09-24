import React from "react";

function Footer() {
    return (
        <footer className="fixed inset-x-0 bottom-0">
                <div className="bg-gray-600 shadow-lg rounded-lg">
                    <div className="w-full p-6">
                        <div className="flex justify-between items-center">
                            <div className="text-gray-100">
                                <h3 className="text-2xl text-grey-darkest font-medium">A Sky Full of Stars</h3>
                                <p className="text-sm text-grey mt-1">Ghost Stories</p>
                            </div>
                            <div className="text-gray-100 p-8 rounded-full bg-red-light shadow-lg">
                                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/>
                                </svg>
                            </div>
                            <div className="text-gray-100">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
    );
}

export default Footer;