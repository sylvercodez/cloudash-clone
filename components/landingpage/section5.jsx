import Image from "next/image";
import React from "react";

export default function Section5() {
  return (
    <>
      <div className="">
        <h1 className="mt-20 md:mt-32 w-full md:w-7/12 text-center m-auto bg-gradient-to-r from-purple-500 to-indigo-700 bg-clip-text font-display text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:leading-[4rem]">
        AWS Console made simple
        </h1>
        <p className="md:leading-[1.8rem] w-full lg:w-7/12 m-auto  text-center pt-[1.2rem]  text-grey-2">
        Get access to you data as quickly as possible. No need to manually create custom dashboards.
        </p>
      </div>
      <>
        {" "}
        <div class="overflow-hidden pt-3 sm:pt-12 lg:relative py-20 lg:py-44">
          <div class="mx-auto px-4  sm:px-6 lg:grid  lg:grid-cols-2 lg:gap-32 lg:px-8">
            <div>
              <div className=" md:pl-[4rem] m-auto">
                <h4 className="w-full md:w-11/12 text-3xl font-extrabold leading-9">
                Auto-discovery of your resources
                </h4>
                <h5 className="font-display pt-5 md:pt-14 text-lg font-semibold leading-7 text-slate-900">Group your resources by service</h5>
                <p className="leading-[1.8rem] w-full pt-[0.4rem]  text-grey-2">
                Cloudash automatically loads all supported resources from a CloudFormation stack. You can also create a service by manually picking resources from your account.
                </p>
                <h5  className="font-display pt-10 text-lg font-semibold leading-7 text-slate-900">Use any deployment tool you want</h5>
                <p className="leading-[1.8rem] w-full pt-[0.4rem]  text-grey-2">
                Full support for AWS CDK, AWS SAM, Serverless Framework or any CloudFormation-compatible framework. If you use Terraform, you can manually pick resources you want to group together.
                </p>
                <h5  className="font-display pt-10 text-lg font-semibold leading-7 text-slate-900">Zero-configuration</h5>
                <p className="leading-[1.8rem] w-full pt-[0.4rem]  text-grey-2">
                Once you configured aws-cli on your machine no further configuration is needed. Cloudash reads this configuration so you can define services based on your AWS profile.
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
            <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div class="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                <Image
                  src="/welcome.png"
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
    </>
  );
}
