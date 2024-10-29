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
        <div className=" text-white w-[400px] ">
          <div className="bg-black h-[55vh]">
            <div className="flex justify-center items-center flex-col gap-8  ">
              <div className="flex justify-start w-full p-8">
                <div>
                  <h2 className="text-yellow-500 font-inter text-4xl">New</h2>

                  <div>
                    <h5>Hydrogen Vs electric cars</h5>
                    <p>Will hydrogen-fueled cars ever catch up to Evs?</p>
                  </div>
                  <hr />
                </div>
              </div>

              <div>
                <div>
                  <h5>Hydrogen Vs electric cars</h5>
                  <p>Will hydrogen-fueled cars ever catch up to Evs?</p>
                </div>
                <hr />
              </div>
              <div>
                <div>
                  <h5>Hydrogen Vs electric cars</h5>
                  <p>Will hydrogen-fueled cars ever catch up to Evs?</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
