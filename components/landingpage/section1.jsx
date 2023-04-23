import Image from "next/image";
import React from "react";
import Tick from "./tick";

export default function Section1() {
  return (


      <>
        {" "}
        <div class="overflow-hidden pt-6 sm:pt-12 lg:relative lg:py-44">
          <div class="mx-auto px-4  sm:px-6 grid lg:grid  lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div>
              <div className=" w-full md:w-11/12 m-auto">
              <h1 className="text-3xl  md:text-6xl font-extra-bold leading-14 md:leading-[4rem] ">
            Browse <br /> CloudWatch <br /> <span className="relative whitespace-nowrap bg-gradient-to-r bg-clip-text  from-purple-500 to-indigo-700 text-transparent">logs and metrics, </span>{" "}
            <br />
            hassle-free.
          </h1>
                <p class="mt-10 text-xl  text-slate-700">
                  Cloudash provides <span class="font-bold">clear access</span>
                  to CloudWatch logs and metrics, to help you{" "}
                  <span class="font-bold">make quicker decisions.</span>
                </p>
                <ul  class="mt-10 columns-2 space-y-3 mr-3 md:mr-0">
                  <li class="flex">
                    <Tick />
                    <span class="ml-2 font-light tracking-tight text-slate-700">
                      Reduce time to resolution
                    </span>
                  </li>
                  <li class="flex">
                    <Tick />
                    <span class="ml-2 font-light tracking-tight text-slate-700">
                      Zero-configuration
                    </span>
                  </li>
                  <li class="flex">
                    <Tick />
                    <span class="ml-2 font-light tracking-tight text-slate-700">
                      Use any deployment tool
                    </span>
                  </li>
                  <li class="flex">
                    <Tick />
                    <span class="ml-2 font-light tracking-tight text-slate-700">
                      Group your resources by service
                    </span>
                  </li>
                  <li class="flex">
                    <Tick />
                    <span class="ml-2 font-light tracking-tight text-slate-700">
                      SSO support
                    </span>
                  </li>
                  <li class="flex">
                    <Tick />
                    <span class="ml-2 font-light tracking-tight text-slate-700">
                      What happens on your machine stays on your machine
                    </span>
                  </li>
                </ul>
                <div class="mt-8 columns-2">
                  <div>
                    <button
                      class="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-indigo-700 px-6 py-2 text-base font-medium text-white shadow-sm hover:from-purple-600 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                     
                    >
                      Download Desktop App
                    </button>
                  </div>
                  <div class="text-[10px] md:text-xs leading-5 text-slate-500">
                    Free 7-day trial • No credit card required <br /> Available
                    for macOS, Linux and Windows
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div class="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
              <Image
            src="/logs.png"
            width={0}
            height={0}
            sizes="100vw"
            // style={{ width: "100%", height: "auto" }}
            className="w-full rounded-l shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            alt="home"
          />
             
              </div>
            </div>
          </div>
        </div>
      </>
 
  );
}
