import Image from "next/image";
import React from "react";

export default function Section7() {
  return (
     
      <>
        {" "}
        <div class="overflow-hidden pt-2 sm:pt-6 lg:relative lg:py-44">
          <div class="mx-auto px-4  sm:px-6 lg:grid  lg:grid-cols-2 lg:gap-32 lg:px-8">
            <div>
              <div className=" md:pl-[4rem] m-auto">
                <h4 className="w-full md:w-11/12 text-3xl font-extrabold leading-9">
                A single pane of glass to your AWS account
                </h4>
                <h5 className="font-display pt-14 text-lg font-semibold leading-7 text-slate-900">See what&apos; important first</h5>
                <p className="leading-[1.8rem] w-full pt-[0.4rem]  text-grey-2">
                No need to manually create custom dashboards. Cloudash automatically shows you the most important metrics for a particular AWS resource or for your entire service.
                </p>
                <h5  className="font-display pt-10 text-lg font-semibold leading-7 text-slate-900">Full support for AWS SSO and MFA profiles</h5>
                <p className="leading-[1.8rem] w-full pt-[0.4rem]  text-grey-2">
                Cloudash comes with built-in support for AWS SSO and MFA profiles, enabling you to use it for all your projects. Production-grade software, side projects, we can handle it.
                </p>
               
                

                <div class="mt-12">
                  <div>
                    <button
                      class="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-indigo-700 px-6 py-2 text-base font-medium text-white shadow-sm hover:from-purple-600 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                     
                    >
                      Download Free Trial
                    </button>
                  </div>
                  </div>
              </div>
             
            </div>
          </div>
          <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div class="py-12 sm:relative sm:mt-12 sm:py-10 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div class="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                <Image
                  src="/overview.png"
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
