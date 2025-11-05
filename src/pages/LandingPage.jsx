import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React from 'react'
import { Link } from 'react-router-dom';
import companies from "../data/companies.json";
import Autoplay from "embla-carousel-autoplay"

const LandingPage = () => {
    return (
        <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
            <section className='text-center'>
                <h1 className='flex  flex-col justify-center items-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4'>
                    Find Your Dream Job
                    <span className='flex items-center gap-2 sm:gap-6'>
                        and get {""}
                        <img
                            src='/logo.png'
                            alt='Hirred logo'
                            className='h-14 sm:h-24 lg:h-32'

                        />
                    </span>
                </h1>

                <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>Explore thousands of job listings or find the perfact candidate</p>
            </section>

            {/*-------- buttons------ */}
            <div className='flex gap-6 justify-center'>
                <Link to='/jobs'>
                    <Button variant="blue" size="xl">Find Jobs</Button>
                </Link>

                <Link to='/post-job'>
                    <Button variant="destructive" size="xl">Post a Job</Button>
                </Link>

            </div>

            {/* curousel */}

            <Carousel
                className="w-full py-10"
                plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
            >
                <CarouselContent className="flex gap-5 sm:gap-20 items-center">
                    {
                        companies.map(({ name, path, id }) => {
                            return (
                                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                                    <img src={path} alt={name} className='h-9 sm:h-14 object-contain' />
                                </CarouselItem>)
                        })
                    }
                </CarouselContent>

            </Carousel>

            {/* banner */}

            <sevtion>
                {/* cards */}
            </sevtion>

            {/* Accordion */}
        </main>
    )
}

export default LandingPage;
