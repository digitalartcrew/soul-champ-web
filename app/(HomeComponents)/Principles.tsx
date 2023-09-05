import Image from "next/image";
import React from "react";

type Props = {};

function Principles({}: Props) {
  return (
    <main className="bg-black h-[50vh] flex  flex-col items-center ">
      <h1 className="font-semibold text-2xl md:text-5xl  lg:text-4xl mt-[6vh]">
        <span className="text-white">Program </span>
        <span className="text-[#fe0000]"> Principles</span>
      </h1>
      <p className="text-sm md:text-lg mt-[2vh] lg:mt-[4vh] w-[95%] text-center">
        We believe that every young person deserves the opportunity to thrive and reach their full potential. By providing comprehensive programs that combine physical fitness, technological literacy, and personalized life coaching, we aim to equip youth with the skills, confidence,and resilience necessary to overcome challenges and succeed in all aspects of life.”
      </p>
      <div className="flex flex-row h-[26%] md:h-[45%] justify-between mx-auto w-[95%] mt-[5vh] ">
        <div className=" relative lg:w-[24%] w-[45%] h-full">
            <Image src="/yoga2.png" alt="yoga2" fill className="object-cover rounded-lg"/>
        </div>
        <div className="relative  lg:w-[24%] w-[45%]   h-full">
            <Image src="/yoga3.png" alt="yoga1" fill className="object-cover rounded-lg"/>
        </div>
        <div className="relative hidden lg:flex  w-[24%]  h-full">
            <Image src="/yoga4.png" alt="yoga1" fill className="object-cover rounded-lg"/>
        </div>
        <div className="relative hidden lg:flex w-[24%]  h-full">
            <Image src="/signup.png" alt="yoga1" fill className="object-cover rounded-lg"/>
        </div>
      </div>
    </main>
  );
}

export default Principles;
