// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import Image from 'next/image';
import Link from 'next/link';
import "swiper/css";
import "swiper/css/navigation";

const Carrousel = ({ data }) => {
    return (
        <div className="conatiner my-24 px-6 mx-auto">
            <h2 className="text-8xl font-bold mb-12 pb-4 text-center text-rosa script-font">Artículos</h2>
            <Swiper
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
                slidesPerView={1}
            >                {
                    data.map(articulo => <SwiperSlide>
                        <Card key={articulo.titulo} data={articulo} />
                    </SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    );
}

const Card = ({ data }) => {
    const { imagen_carousel, titulo, resumen, url, published_at } = data;
    const imageURL = `${imagen_carousel.url}`;

    return <div className="flex justify-center">
        <div className="rounded-lg shadow-lg max-w-sm bg-cafe-ligth">
            <Link href={`/blog/${url}`}>
                <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <Image
                        width={900}
                        height={900}
                        className="rounded-t-lg"
                        src={imageURL}
                        alt='Imagen'
                    />
                </a>
            </Link>
            <div className="p-6">
                <h5 className="text-rosa script-font text-4xl font-bold mb-2">{titulo}</h5>
                <p className="text-rosa-dark  mb-4 resumen text-lg">
                    {resumen}
                </p>
                <Link href={`/blog/${url}`}>
                    <a
                        className="text-cafe-base inline-flex items-center md:mb-2 lg:mb-0"
                    >
                        Leer mas...
                    </a>
                </Link>
            </div>
        </div>
    </div>

}

export default Carrousel;