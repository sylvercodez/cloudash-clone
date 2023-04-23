import React from "react";
import Twitter from "./twiter";
import Image from "next/image";

export default function Section4() {
  return (
    
    <div className="w-full md:w-11/12  m-auto ">
       <div className="mx-auto px-4">
        <h1 className=" mt-8 md:mt-20 w-full md:w-5/12 text-center m-auto bg-gradient-to-r from-purple-500 to-indigo-700 bg-clip-text font-display text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:leading-[4rem]">
        Endorsed by AWS community

        </h1>
        <p className="leading-[1.8rem] w-full lg:w-7/12 m-auto  text-center pt-[1.2rem]  text-grey-2">
        Hear what our users have to say about us.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
        <div>
          <div className="space-y-6 sm:space-y-8">
            <div className="mx-4 rounded-lg bg-white p-5 pb-14 text-slate-800 shadow-xl  shadow-slate-900/10 ">
              <div className="flex justify-between">
                <div className="flex  ">
                  <div>
                    <Image
                      src="/aeduhm.webp"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "50px",
                        height: "auto",
                        borderRadius: "100px",
                      }}
                      alt="home"
                    />
                  </div>
                  <div className="ml-3">
                    <h5 className="font-bold text-base">Adam Elmore</h5>
                    <p className=" font-normal font-grey-2 text-[13px]">
                      @aeduhm
                    </p>
                  </div>
                </div>
                <div className=" text-indigo-700">
                  <Twitter />
                </div>
              </div>
              <p class="md:text-base pt-7 mb-4">
                I’m bullish on AWS devtools, particularly those that improve on
                serverless DX.
                <br />
                <br />
                Cloudash looks excellent.
                <br />
                <br />
                - Founder pedigree ✅<br />
                - Great name ✅<br />
                - Solid logo ✅<br />
                - Fills a serious gap in serverless DX (monitoring) ✅<br />
                <br />
                10/10 would recommend
              </p>
              <p className="text-grey-2 text-[12px] flex float-right pt-4">
                4:17 PM · Sep 16, 2021
              </p>
            </div>
            <div className="mx-4 rounded-lg bg-white p-5 pb-14 text-slate-800 h-[100%] shadow-xl shadow-slate-900/10 ">
              <div className="flex justify-between">
                <div className="flex ">
                  <div>
                    <Image
                      src="/aeduhm.webp"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "50px",
                        height: "auto",
                        borderRadius: "100px",
                      }}
                      alt="home"
                    />
                  </div>
                  <div className="ml-3">
                    <h5 className="font-bold text-base">Zack Kanter</h5>
                    <p className=" font-normal font-grey-2 text-[13px]">
                      @zackkanter
                    </p>
                  </div>
                </div>
                <div className=" text-indigo-700">
                  <Twitter />
                </div>
              </div>
              <p class="md:text-base pt-7">
                Cloudash is what Infinidash could have been if AWS cared about
                UI/UX. 2:38 PM · Sep 16, 2021
              </p>
              <p className="text-grey-2 text-[12px] flex float-right pt-4">
                2:38 PM · Sep 16, 2021
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-6 sm:space-y-8">
            <div className="mx-4 rounded-lg bg-white p-5 pb-8 text-slate-800 shadow-xl  shadow-slate-900/10 ">
              <div className="flex justify-between">
                <div className="flex  ">
                  <div>
                    <Image
                      src="/aeduhm.webp"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "50px",
                        height: "auto",
                        borderRadius: "100px",
                      }}
                      alt="home"
                    />
                  </div>
                  <div className="ml-3">
                    <h5 className="font-bold text-base">Jeff</h5>
                    <p className=" font-normal font-grey-2 text-[13px]">
                      @aeduhm
                    </p>
                  </div>
                </div>
                <div className=" text-indigo-700">
                  <Twitter />
                </div>
              </div>
              <p class="md:text-base pt-7 mb-5">This looks cool!</p>
              <p className="text-grey-2 text-[12px] flex float-right ">
                10:24 PM · Sep 18, 2021
              </p>
            </div>
            <div className="mx-4 rounded-lg bg-white p-5 pb-14 text-slate-800 h-[100%] shadow-xl shadow-slate-900/10 ">
              <div className="flex justify-between">
                <div className="flex ">
                  <div>
                    <Image
                      src="/aeduhm.webp"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "50px",
                        height: "auto",
                        borderRadius: "100px",
                      }}
                      alt="home"
                    />
                  </div>
                  <div className="ml-3">
                    <h5 className="font-bold text-base">Michael Bahr</h5>
                    <p className=" font-normal font-grey-2 text-[13px]">
                      @bahrdev
                    </p>
                  </div>
                </div>
                <div className=" text-indigo-700">
                  <Twitter />
                </div>
              </div>
              <p class="md:text-base pt-7">
                Result of my @cloudashdev test:
                <br />
                <br />
                - Clean UI
                <br />
                - VERY fast results
                <br />
                - Some minor UI issues
                <br />
                <br />I expected quick access to logs and definitely got that.
                Will try it with some more active development over the next
                days. Thanks for the cool app, and thanks @aeduhm for the gift !
              </p>
              <p className="text-grey-2 text-[12px] flex float-right pt-4">
                7:40 PM · Sep 28 2021
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-6 sm:space-y-8">
            <div className="mx-4 rounded-lg bg-white p-5 pb-8 text-slate-800 shadow-xl  shadow-slate-900/10 ">
              <div className="flex justify-between">
                <div className="flex  ">
                  <div>
                    <Image
                      src="/aeduhm.webp"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "50px",
                        height: "auto",
                        borderRadius: "100px",
                      }}
                      alt="home"
                    />
                  </div>
                  <div className="ml-3">
                    <h5 className="font-bold text-base"> Corey Quinn</h5>
                    <p className=" font-normal font-grey-2 text-[13px]">
                   
@QuinnyPig
                    </p>
                  </div>
                </div>
                <div className=" text-indigo-700">
                  <Twitter />
                </div>
              </div>
              <p class="md:text-base pt-7 mb-5">

And it... just works.
<br/> 
<br />
Okay, I&apos;s convinced and am now going to become a paying customer.
</p>
              <p className="text-grey-2 text-[12px] flex float-right ">
            
6:52 PM · Sep 17, 2021
              </p>
            </div>
            <div className="mx-4 rounded-lg bg-white p-5 pb-14 text-slate-800 h-[100%] shadow-xl shadow-slate-900/10 ">
              <div className="flex justify-between">
                <div className="flex ">
                  <div>
                    <Image
                      src="/aeduhm.webp"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "50px",
                        height: "auto",
                        borderRadius: "100px",
                      }}
                      alt="home"
                    />
                  </div>
                  <div className="ml-3">
                    <h5 className="font-bold text-base">    Mannie Schumpert
</h5>
                    <p className=" font-normal font-grey-2 text-[13px]">
                    @mannieschumpert
                    </p>
                  </div>
                </div>
                <div className=" text-indigo-700">
                  <Twitter />
                </div>
              </div>
              <p class="md:text-base pt-7">
          

Probably 90% of the time when I log into AWS it is to do some investigation in CloudWatch logs for our serverless API. It took me less than a minute of opening @cloudashdev to know I needed it.

              </p>
              <p className="text-grey-2 text-[12px] flex float-right pt-4">
             
3:29 PM · Sep 20, 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
