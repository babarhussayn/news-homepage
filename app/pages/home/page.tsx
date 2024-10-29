import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <section className="w-full  flex justify-center items-center container mx-auto">
      <div className="w-[1200px] flex justify-center  gap-4">
        <div className="flex justify-between  ">
          <div className="w-[800px]">
            <div className="w-full">
              <Image
                src="/images/image-web-3-desktop.jpg"
                alt="desktop"
                width={1200}
                height={500}
              />
            </div>
            <div className="flex justify-center items-center gap-8">
              <div>con</div>
              <div>img</div>
            </div>
          </div>
        </div>
        <div className=" text-white w-[400px] bg-black">
          <div className="bg-black h-[60vh]">
            <div className="flex justify-center items-center flex-col gap-8  ">
              <div className="flex justify-start w-full p-8">
                <div className="">
                  <h2 className="text-yellow-500 font-inter text-4xl">New</h2>

                  <div>
                    <h5>Hydrogen Vs electric cars</h5>
                    <p className="text-[#c2bebe]">
                      Will hydrogen-fueled cars ever catch up to Evs?
                    </p>
                  </div>
                </div>
              </div>
              <hr className="text-white w-full" />

              <div className="p-4">
                <div className="flex justify-start w-full flex-col">
                  <h5>Hydrogen Vs electric cars</h5>
                  <p className="text-[#c2bebe]">
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </p>
                </div>
              </div>
              <hr className="text-white w-full" />
              <div className="p-4">
                <div className="flex justify-start flex-col w-full">
                  <h5>Hydrogen Vs electric cars</h5>
                  <p className="text-[#c2bebe]">
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
