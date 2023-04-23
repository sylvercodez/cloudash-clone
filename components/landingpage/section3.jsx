import Image from "next/image";
import React from "react";

export default function Section3() {
  return (
    <>
      <div className="mx-auto px-4  sm">
        <h1 className=" mt-20 md:mt-32 w-full md:w-7/12 text-center m-auto bg-gradient-to-r from-purple-500 to-indigo-700 bg-clip-text font-display text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:leading-[4rem]">
          A single pane of glass to your AWS account
        </h1>
        <p className="leading-[1.8rem] w-full lg:w-7/12 m-auto  text-center pt-[1.2rem]  text-grey-2">
          Cloudash gives you a single pane of glass to see exactly what&apos;s
          happening in your cloud applications. View logs, metrics, and
          configuration from multiple services, regions, and accounts in one
          place.
        </p>
      </div>
      <>
        {" "}
        <div class="overflow-hidden pt-6 sm:pt-12 lg:relative py-32 lg:py-44">
          <div class="mx-auto px-4  sm:px-6 lg:grid  lg:grid-cols-2 lg:gap-32 lg:px-8">
            <div>
              <div className=" md:pl-[4rem] m-auto">
                <h4 className=" w-full md:w-11/12 text-3xl font-extrabold leading-9">
                  Beautiful UI for your AWS account
                </h4>
                <h5 className="font-display pt-14 text-lg font-semibold leading-7 text-slate-900"> Focus on what&apos;s important</h5>
                <p className="leading-[1.8rem] w-full pt-[0.4rem]  text-grey-2">
                  Cloudash shows you the most important information, filtering
                  out all the noise. Quickly understand what&apos;s happening
                  with your application without switching between multiple tabs.
                </p>
                <h5  className="font-display pt-10 text-lg font-semibold leading-7 text-slate-900">Blazing fast time-to-discovery</h5>
                <p className="leading-[1.8rem] w-full pt-[0.4rem]  text-grey-2">
                  Detect root causes of a cloud application failure in seconds.
                  Did a production incident happen last week? Or 20 seconds ago?
                  With Cloudash you can search, filter and browse your logs and
                  metrics effortlessly.
                </p>
                <h5  className="font-display pt-10 text-lg font-semibold leading-7 text-slate-900">Serverless and more</h5>
                <p className="leading-[1.8rem] w-full pt-[0.4rem]  text-grey-2">
                  Cloudash supports API Gateway, Lambda, and CloudWatch Logs and
                  Metrics. We are working on adding support for more services
                  including CloudWatch Logs Insights and AWS Fargate. <br /> Follow us
                  on Twitter to get the latest updates.
                </p>
                <h5  className="font-display pt-10 text-lg font-semibold leading-7 text-slate-900">Secure by default</h5>
                <p className="leading-[1.8rem] w-full pt-[0.4rem]  text-grey-2">
                  We&apos;sre not sending your AWS credentials, or any data
                  stored within your account anywhere. Why would we? Whatever
                  happens on your machine, stays on your machine.
                </p>

                <div class="mt-12">
                  <div>
                    <button
                      class="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-indigo-700 px-6 py-2 text-base font-medium text-white shadow-sm hover:from-purple-600 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                     
                    >
                      Download Desktop App
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
    </>
  );
}
