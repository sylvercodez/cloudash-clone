import React from "react";
import Blockqoute from "./blockqoute";
import Image from "next/image";

export default function Section2() {
  return (
    <div>
      <div className="mx-auto max-w-8xl px-6 pt-20 pb-6 lg:px-8 mt-0 md:mt-10">
        <div className="relative mx-auto max-w-4xl text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
       <h1 className="text-3xl w-full md:w-8/12 m-auto leading-9">OK, Cloudash is quite literally Magic for AWS Serverless Development</h1>
       <Blockqoute />
        </div>
       <div>
       <div className="md-6 md:mt-9">
          <div className="flex items-center justify-center">
           <Image  width={0}
            height={0}
            sizes="100vw"
            style={{ width: "80px", height: "auto" }}
            src="/erikPeterson.webp"
            alt=""
            className="w-[100%] rounded-full"
            />
            <div className="ml-4 flex flex-col font-medium">
              <a href="https://twitter.com/silvexis" className="text-slate-900">
                Erik Peterson
              </a>
              <a href="https://www.cloudzero.com/" className="text-slate-500">
                Founder, Director  CTO @ CloudZero
              </a>
            </div>
          </div>
       </div>
       </div>
      </div>
    </div>
  );
}
