import Image from "next/image";
import React from "react";

export default function Section6() {
  return (
    <>
      {" "}
      <div class="overflow-hidden pt-6 sm:pt-12 lg:relative lg:py-4">
        <div class="mx-auto px-4  sm:px-6 lg:grid  lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div class="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
           
               <Image
              
               width={0}
               height={0}
               sizes="100vw"
               // style={{ width: "100%", height: "auto" }}
                class="w-full rounded-l shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/logs2.png"
                alt="Logs screen"
              />
            </div>
          </div>
          
          <div>
            <div className=" m-auto  py-20 md:py-32">
            <h4 className="text-3xl font-extrabold leading-9 ">
              Metrics that matters
              </h4>
              <h5 className="font-display pt-14 text-lg font-semibold leading-7 text-slate-900">
              Metrics + Logs = 🚀
              </h5>
              <p className="leading-[1.8rem] w-full pt-[0.4rem]  text-grey-2">
              You can quickly zoom in and zoom out the metrics chart and you will immediately see respective logs. No need to copy and paste timestamps or manually select dates and times.
              </p>
              <h5 className="font-display pt-10 text-lg font-semibold leading-7 text-slate-900">
              AWS Lambda logs grouped by invocation
              </h5>
              <p className="leading-[1.8rem] w-full pt-[0.4rem]  text-grey-2">
              For AWS Lambda, logs are always grouped by invocation. You will not see logs from different invocations between START and REPORT log lines.
              </p>
              <h5 className="font-display pt-10 text-lg font-semibold leading-7 text-slate-900">
              Quick access to logs and metrics for API Gateway
              </h5>
              <p className="leading-[1.8rem] w-full pt-[0.4rem]  text-grey-2">
              Logs for a Lambda function backing an API Gateway endpoint are easily accessible. You don&apos;t need to remember the Lambda function name. You can just click on the HTTP method and path pair in the menu.
              </p>

              <div class="mt-12">
                <div>
                  <button class="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-indigo-700 px-6 py-2 text-base font-medium text-white shadow-sm hover:from-purple-600 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Download Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
