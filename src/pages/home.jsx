import React, { useState, useEffect } from 'react'
import {
  Card,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from '@material-tailwind/react'
import { PageTitle, Footer } from '@/widgets/layout'
import { TeamCard } from '@/widgets/cards'
import { teamData, contactData } from '@/data'
import './styles.css'

export function Home() {
  const [textIndex, setTextIndex] = useState(0)
  const texts = ['STREAMLINE', 'COLLABORATE', 'MODERNIZE', 'REVOLUTIONIZE']

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 2000) // Change text every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bg1.jpg')] bg-cover bg-center" />

        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-8 text-center lg:w-8/12 font-outfit">
              <Typography className="animate-text text-white text-8xl mt-8 font-outfit">
                CREATING CHANGE, ONE APP AT A TIME
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#ff3901] h-screen px-4 pb-20 pt-4 font-outfit">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto text-white text-7xl font-bold mt-20 w-full px-4">
              WE’RE ON A MISSION TO ACCELERATE,
              <br />
              ACTIVATE, AND ADVOCATE FOR THE
              <br />
              WORLD’S MOST IMPACTFUL IDEAS
            </div>
            <div className="border-rounded-5 rounded-lg px-4 mt-12 mx-4 border-white text-white text-3xl border-[2px] font-serif hover:bg-white hover:text-[#ff3901] transition duration-300 ease-in-out">
              <button>Projects</button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 py-12 bg-[url('/img/bg3.jpg')] h-screen bg-cover bg-center">
        <div className="mx-auto container">
          <div className="rounded-3xl border-white bg-transparent border-[2px] text-white w-max px-2">
            SHOWCASE
          </div>
          <div className="text-white text-4xl font-bold mt-8 font-outfit">
            OUR PROJECTS
          </div>
          <div className="my-4 py-4">
            <div className="carousel rounded-box">
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                  alt="Burger"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                  alt="Burger"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                  alt="Burger"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                  alt="Burger"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                  alt="Burger"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                  alt="Burger"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                  alt="Burger"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-12 pb-4 h-screen">
        <div className="container mx-auto">
          <div className="text-6xl font-outfit text-[#ff3901] font-bold mt-8">
            PEOPLE
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4 text-[#ff3901]">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2 text-[#ff3901]">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative h-screen bg-cover bg-center px-4 flex justify-center items-center"
        style={{
          backgroundImage: "url('/img/bg4.jpg')",
          filter: 'brightness(150%)',
        }}
      >
        <div className="text-white text-4xl md:text-6xl lg:text-8xl xl:text-10xl font-outfit font-bold opacity-100 transition-opacity duration-500">
          {texts[textIndex]}
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  )
}

export default Home
