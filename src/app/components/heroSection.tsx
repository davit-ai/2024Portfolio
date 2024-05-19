import Link from "next/link";
import { MovingBorderBtn } from "./ui/moving-border";
import Title from "./Title";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hey! Whats up ? <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Davit Khanal"}
          </span>{" "}
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {"Currently Working in Vanilla Tech! as a Database Developer"}
        </p>
        <Link
          href={"mailto:khanaldavit@gmail.com"}
          className="inline-block group"
        >
          <Title text={"Reachout to Me"} />
        </Link>
      </div>

      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10 hover:scale-125 transition-all">
          <MovingBorderBtn borderRadius="0.3rem" className="p-2 font-semibold ">
            <p>😅 not available</p>
          </MovingBorderBtn>
        </div>
      </div>
      {/* for boxes  end*/}
    </div>
  );
}
