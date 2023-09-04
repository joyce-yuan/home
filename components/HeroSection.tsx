"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.jpeg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Joyce!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-blossom">
              rising senior{" "}
            </span>studying{" "}
            <span className="font-semibold text-blossom">computer science</span> and <span className="font-semibold text-blossom">math</span> at <span className="font-semibold text-blossom">MIT</span>. <br /><br />
            On campus, I am an undergraduate researcher in the <span className="font-semibold text-blossom">Computer Science and AI Lab (CSAIL)</span>, where I hope to learn more about all the machines that are running our lives. 
            I particularly enjoy thinking about problems in the realm of <span className="font-semibold text-blossom">education</span> and <span className="font-semibold text-blossom">EdTech</span>. <br /><br />
            While I&#39;m not clickity clacking in front of my computer, I&#39;m probably visiting my favorite boba 🧋 shops, whipping up new cookie 🍪 recipes, or getting baited to go on spontaneous adventures in Boston 🌅!
          </p>
          {/* <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-melon rounded shadow hover:bg-melon-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link> */}
        </div>
      </div>
      {/* <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div> */}
    </section>
  )
}

export default HeroSection
