import Image from "next/image";

const Hero = () => {
    return (
        <section className="text-gray-700 body-font">
            <div className="flex">
                <div className="rounded-lg h-screen w-full">
                    <div className="md:pt-48 pt-64 px-5 flex flex-grow flex-col align-middle bg-fixed mBackground-image h-full w-full">
                        <Image
                            layout="responsive"
                            width={400}
                            height={500}
                            className='fade-in pl-4'
                            loading='lazy'
                            src='/img/logo.svg'
                            alt='Logo'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;