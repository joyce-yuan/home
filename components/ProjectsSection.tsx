import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Learner's Permit: Accessible Artificial Intelligence through an Educational Game",
    description: "[IN PROGRESS] Learner's Permit is an educational game and experimental research project aimed at creating accessible AI interfaces. In Learner's Permit, the player’s objective is to teach a car to drive itself. We aim to integrate the principles of visual rule programming in a tool that supports the entire ML workflow, including data collection, training, testing and debugging.",
    image: "/learnerspermit.png",
    github: "https://github.com/joyce-yuan/learners-permit",
    link: "https://drive.google.com/file/d/1HcdlEztPEAR33Uhhj_WWH_C0Nb0_f0H9/view?usp=sharing",
  },
  {
    name: "Tuple Tunes",
    description:
      "Tuple Tunes is a multiplayer musical composition game, where players collaborate online; players use ESP32 microcontrollers to communicate with a database server backend that stores the music for playback. Tuple Tunes was created as our team final project for EECS via Interconnected Embedded Systems (6.08), made with Arduino, C++, Python, MySQL.",
    image: "/tupletunes.png",
    github: "https://github.com/jacksluong/tuple-tunes",
    link: "https://www.youtube.com/watch?v=lWnzaUi9fGc&ab_channel=joyceyuan",
  },
  {
    name: "Super Sync",
    description: "Super Sync is a 2v2 game where teams compete to send their superheros to the top of the Super Tower first. This project consisted of a physical tower and corresponding wristbands, created for Toy Product Design (2.00B). The Super Tower is made up of acryllic, whereas the wristbands use magnetic reed switches, RFID scanners, and wireless modules to communicate with the Arduino within the Super Tower; the code powering the game logic is in C++",
    image: "/super_sync.png",
    github: "https://github.com/joyce-yuan/super_sync",
    link: "https://youtu.be/LZ3y30eHjLQ",
  },
  {
    name: "Icecreme Brulee",
    description:
      "[ARCHIVED] Icecreme Brulee is our recreation of an online version of the classic game of Paranoia. Players may join a room of friends, ask each other *spicy* questions, and then play rock paper scissors to see which answers get revealed. This application was created as a part of weblab, and uses Typescript and React",
    image: "/icecream.png",
    github: "https://github.com/weblab-class/icecreme.brulee",
    link: "https://icecreme-brulee.herokuapp.com/",
  },
]


const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-melon border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
