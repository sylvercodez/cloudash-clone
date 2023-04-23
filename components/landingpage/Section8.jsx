import React from "react";

export default function Section8() {
  return (
    <div className="mx-auto px-4  ">
    <div className=" mt-20 md:mt-32 ">
      <div className=" md:pl-[4rem] m-auto ">
        <h4 className="w-full md:w-11/12 text-3xl font-extrabold leading-9">
          Frequently asked questions
        </h4>

        <p className="leading-[1.8rem] w-full pt-[0.4rem]  text-grey-2">
          Can&apos;t find the answer you&apos;re looking for? Reach out to us,
          we&apos;re here for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-14 md:mt-20">
          <div>
            <p className="text-black pb-4">
              {" "}
              Can I try Cloudash before buying it?{" "}
            </p>
            <p className="text-grey-2 pb-4">
              Yes! Cloudash has a free trial for 7 days, you can download it
              here and give it a shot. We&apos;d love to hear your feedback!
            </p>

            <p className="text-black pb-4 ">
              {" "}
              Which deployment framework does Cloudash support?
            </p>

            <p className="text-grey-2">
              {" "}
              You can use Cloudash regardless of your deployment tool by
              manually picking AWS resources. What&apos;s more, Cloudash is able
              to automatically discover resources deployed using any
              CloudFormation-compatible tool (e.g., AWS CDK, AWS SAM, Serverless
              Framework) or Terraform.
            </p>
          </div>
          <div>
            <p className="text-black pb-4">
              What happens to my AWS credentials when using Cloudash?{" "}
            </p>
            <p className="text-grey-2 pb-4">
              Cloudash does not send (and never will) your credentials anywhere.
              All API calls necessary for Cloudash to operate are executed
              locally from your machine.
            </p>

            <p className="text-black pb-4 ">
              {" "}
              Is Cloudash going to incur extra costs on my AWS bill?
            </p>

            <p className="text-grey-2">
              {" "}
              Cloudash uses Amazon CloudWatch GetMetricData API every time it
              loads or refreshes charts. AWS charges $0.01 per 1,000 metrics
              requested.
            </p>
          </div>
          <div>
            <p className="text-black pb-4">
              {" "}
              Does Cloudash store my production logs and metrics anywhere?{" "}
            </p>
            <p className="text-grey-2 pb-4">
              Whatever happens on your machine, stays on your machine. We do not
              send your data anywhere, nor do we store in on a Cloudash
              Enterprise server (which we don&apos;t have).
            </p>

            <p className="text-black pb-4 ">
              {" "}
              Which operating systems are supported by Cloudash?
            </p>

            <p className="text-grey-2">
              {" "}
              Cloudash runs on macOS, Windows, and Linux.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 my-14 md:my-32 ">
          <div className=" lg:col-span-3">
            <h4 className=" w-full  lg:w-11/12 text-4xl font-extrabold md:leading-9 text-black-2">
              Close all your AWS console tabs
            </h4>

            <p className="leading-[1.8rem] w-full pt-[0.8rem] text-sls text-grey-2">
              Gain laser focused view into your metrics, logs, errors and more.
              All in a single desktop app.
            </p>
          </div>
          <div className="lg:col-span-2 mt-8 md:mt-0 w-full md:w-11/12 flex justify-center m-auto">
          <div className="grid  sm:grid-cols-2 xs:grid-cols-1 gap-4">
            <button class="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-indigo-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:from-purple-600 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-[170px]">
              Download Now
            </button>
            <button class="inline-flex items-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-[170px]">
              Book a demo
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
