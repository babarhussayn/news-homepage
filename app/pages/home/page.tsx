import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <section className="w-full  flex justify-center items-center flex-col  container mx-auto">
      <div className="w-[1200px] flex justify-center items-center gap-14">
        <div className="flex justify-between  ">
          <div className="w-[700px]">
            <div className="w-full">
              <Image
                src="/images/image-web-3-desktop.jpg"
                alt="desktop"
                width={1200}
                height={500}
              />
            </div>
            <div className="flex justify-center items-center gap-8">
              <div className="w-full">
                <div className="mt-4">
                  <h3 className="font-inter font-bold text-6xl">
                    The Bright Future of Web 3.0?
                  </h3>
                </div>
              </div>
              <div className="w-full flex  items-center">
                <div className="flex justify-center items-center flex-col gap-8">
                  <div>
                    <p>
                      We dive into the next evolution of the web that claims to
                      put the power of the platforms back into the hands of the
                      people. But is it really fulfilling its promise?
                    </p>
                  </div>
                  <div className="flex justify-start w-full ">
                    <div className="bg-red-400 py-1 px-5">
                      <h4 className="font-inter font-bold">Read More</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-white w-[400px] bg-black">
          <div className="bg-black h-[55vh]">
            <div className="flex justify-center items-center flex-col gap-4 ">
              <div className="flex justify-start w-full p-8">
                <div className="">
                  <h2 className="text-yellow-500 font-inter text-4xl">New</h2>

                  <div className="mt-4">
                    <h5>Hydrogen Vs electric cars</h5>
                    <p className="text-[#c2bebe]">
                      Will hydrogen-fueled cars ever catch up to Evs?
                    </p>
                  </div>
                </div>
              </div>
              <hr className="text-white w-[80%]" />

              <div className="flex justify-start w-full p-8">
                <div className="flex justify-start w-full flex-col">
                  <h5>Hydrogen Vs electric cars</h5>
                  <p className="text-[#c2bebe]">
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </p>
                </div>
              </div>
              <hr className="text-white w-[80%]" />
              <div className="flex justify-start w-full p-8">
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
      <div className="flex justify-center items-center mt-8 w-full">
        <div className="w-[1200px] flex justify-center items-center gap-20">
          <div className="w-full">
            <div className="flex justify-center items-center gap-4">
              <div>
                <Image
                  src="/images/image-retro-pcs.jpg"
                  alt="pic-1"
                  width={150}
                  height={80}
                />
              </div>
              <div className="flex justify-center items-center flex-col gap-1">
                <div className="w-full">
                  <h3 className="text-red-400 font-inter font-bold text-2xl">
                    01
                  </h3>
                </div>
                <div className="">
                  <h3 className="font-inter font-bold">Reviving Retro PCs</h3>
                  <p className="text-start">
                    what happens when old Pcs are given modern upgrades?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-center items-center gap-4">
              <div>
                <Image
                  src="/images/image-top-laptops.jpg"
                  alt="pic-1"
                  width={150}
                  height={80}
                />
              </div>
              <div className="flex justify-center items-center flex-col gap-1">
                <div className="w-full">
                  <h3 className="text-red-400 font-inter font-bold text-2xl">
                    02
                  </h3>
                </div>
                <div className="">
                  <h3 className="font-inter font-bold">Reviving Retro PCs</h3>
                  <p className="text-start">
                    what happens when old Pcs are given modern upgrades?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-center items-center gap-4">
              <div>
                <Image
                  src="/images/image-gaming-growth.jpg"
                  alt="pic-1"
                  width={150}
                  height={80}
                />
              </div>
              <div className="flex justify-center items-center flex-col gap-1">
                <div className="w-full">
                  <h3 className="text-red-400 font-inter font-bold text-2xl">
                    03
                  </h3>
                </div>
                <div className="">
                  <h3 className="font-inter font-bold">Reviving Retro PCs</h3>
                  <p className="text-start">
                    what happens when old Pcs are given modern upgrades?
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
