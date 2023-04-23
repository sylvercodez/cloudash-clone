import { useState } from "react";
import Logo from "./logo";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
      <header className="bg-white">
        <nav className="w-full nav">
            <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                           <Logo />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
                            <li className="text-grey-2 text-sm">
                                <a href="javascript:void(0)">Pricing</a>
                            </li>
                            <li className="text-grey-2 text-sm">
                                <a href="javascript:void(0)">Download</a>
                            </li>
                            <li className="text-grey-2 text-sm">
                                <a href="javascript:void(0)">Blog</a>
                            </li>
                            <li className="text-grey-2 text-sm">
                                <a href="javascript:void(0)">Contact</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2  gap-4  md:hidden">
                        <button class="inline-flex items-center mr-5 lg:mr-0 rounded-md bg-gradient-to-r from-purple-500 to-indigo-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:from-purple-600 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-[170px]">
              Download Now
            </button>
            <button class="inline-flex items-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-[170px]">
              Book a demo
            </button>
                </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-24 hidden space-x-8 lg:inline-block">
            <button class="inline-flex items-center rounded-md  bg-gradient-to-r from-purple-500 to-indigo-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:from-purple-600 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-[170px]">
              Download Now
            </button>
            <button class="inline-flex items-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-[170px]">
              Book a demo
            </button>
   
          </div>
            </div>
        </nav>
        </header>
    );
}