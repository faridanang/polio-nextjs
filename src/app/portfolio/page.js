import Image from "next/image";
import fizza from "/public/projects/fizza.webp";
import alquran from "/public/projects/alquran.webp";
import polio from "/public/projects/polio.webp";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import Transition from "@/components/Transition";

export const metadata = {
  title: "Project",
};

export default function Portfolio() {
  return (
    <>
    <Transition/>
    <div className="w-full pb-[5rem]">
      <div className="pt-8">
        {/* Project One */}
        <div
          className="relative mx-auto  h-max w-[85%] px-6 pt-4 pb-2 mb-14
            border-2 border-black rounded-xl dark:border-white bg-port_bg dark:bg-black
            lg:flex lg:gap-8 lg:justify-between lg:p-10"
        >
          <div className="bg-[#404049] absolute  w-[100%] h-[102%] dark:bg-white/90 md:h-[103%] md:-right-4 -right-2 top-0 rounded-3xl -z-[10]" />
          {/* Image Content */}
          <Image
            src={fizza}
            alt="Image About"
            className="object-contain hover:scale-105 transition-all duration-500 group-hover:rotate-3 lg:object-cover lg:flex-1 rounded-md w-[100vw] h-[30vh] md:h-[50vh] "
          />
          {/* Text Content */}
          <div className="lg:flex-1">
            <Link
              href="https://fizzante.vercel.app"
              className="mt-4 underline block text-red-600 "
            >
              Website
            </Link>
            <h1
              href="/"
              className="my-1 md:text-3xl text-2xl font-bold lg:text-4xl"
            >
              E-ccomerce Fizza
            </h1>
            <p className="md:max-w-[30rem] lg:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
              voluptatibus. Doloremque, eveniet? Possimus aspernatur officiis
              voluptates ducimus.
            </p>
            <div className="flex gap-4 items-center mt-4 md:gap-8">
              <Link href="https://github.com/faridanang">
                <BsGithub className="text-4xl md:text-5xl" />
              </Link>
              <Link
                href="https://fizzante.vercel.app"
                className="btn btn-sm btn-neutral md:btn-md md:text-lg"
              >
                Visit Project
              </Link>
            </div>
          </div>
        </div>

        {/* Project Two And Tre */}
        <div className="flex w-full mx-auto lg:px-8 md:flex-row flex-col">
          <div className="mb-14 flex-1">
            <div
              className="relative mx-auto h-max w-[85%] px-6 pt-4 pb-2
            border-2 border-black dark:border-white rounded-xl bg-port_bg dark:bg-black"
            >
              <div className="bg-[#404049] absolute dark:bg-white/90  w-[100%] md:h-[104%] md:-right-4 h-[103%] -right-2 top-0 rounded-3xl -z-[100]" />
              {/* Image Content */}
              <Image
                src={polio}
                alt="Image About"
                className="object-contain hover:scale-105 transition-all duration-500 group-hover:rotate-3 lg:object-cover rounded-md w-full h-[30vh] md:h-1/2"
              />
              {/* Text Content */}
              <div>
                <Link
                  href="https://anangs.vercel.app"
                  className="mt-4 underline block text-red-600"
                >
                  Website
                </Link>

                <h1 className="mt-4 mb-1 md:text-3xl text-2xl font-bold lg:text-4xl">
                  First PortFolio
                </h1>
                <div className="flex gap-4 items-center mt-4  md:flex-row-reverse justify-between">
                  <Link href="https://github.com/faridanang">
                    <BsGithub className="text-3xl" />
                  </Link>
                  <Link
                    href="https://anangs.vercel.app"
                    className="underline text-lg"
                  >
                    Visit Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-14 flex-1">
            <div
              className="relative mx-auto h-max w-[85%] px-6 pt-4 pb-2
            border-2 border-black rounded-xl bg-port_bg dark:bg-black dark:border-white"
            >
              <div className="bg-[#404049] dark:bg-white/90  absolute w-[100%] h-[103%] md:h-[104%] md:-right-4 -right-2 top-0 rounded-3xl -z-[100]" />
              {/* Image Content */}
              <Image
                src={alquran}
                alt="Image About"
                className="object-contain hover:scale-105 transition-all duration-500 group-hover:rotate-3 lg:object-cover rounded-md w-full h-[30vh] md:h-1/2 "
              />
              {/* Text Content */}
              <div>
                <Link
                  href="https://al-qurankita.vercel.app"
                  className="mt-4 underline block text-red-600"
                >
                  Website
                </Link>

                <h1 className="mt-4 mb-1 md:text-3xl text-2xl font-bold lg:text-4xl">
                  Al-quran
                </h1>
                <div className="flex gap-4 items-center md:flex-row-reverse mt-4 justify-between">
                  <Link href="https://github.com/faridanang">
                    <BsGithub className="text-3xl" />
                  </Link>
                  <Link
                    href="https://al-qurankita.vercel.app"
                    className="underline text-lg"
                  >
                    Visit Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
