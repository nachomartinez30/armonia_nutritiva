import Image from "next/image";
import { useState } from "react";

const Servicio = ({ data }) => {
    const { titulo, descripcion, icono } = data;
    const iconoURL = `${process.env.NEXT_PUBLIC_API_URL}${icono.url}`
    const [animacion, setAnimacion] = useState(false)
    const [showDescription, setShowDescription] = useState(false)

    const handleOver = ev => {
        ev.preventDefault();
        setAnimacion(true)
        setShowDescription(true)
    }
    const handleMouseLeave = ev => {
        ev.preventDefault();
        setAnimacion(false)
        setShowDescription(false)
    }

    return (
        <div className={`xl:w-1/3 md:w-1/2 w-full p-4 ${animacion ? 'slide-fwd-center' : null}`}
            onMouseOver={handleOver}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex services_shadows bg-cafe-ligth p-6 rounded-lg">
                {
                    !showDescription && <>
                        <h2 className="text-3xl text-cafe-dark font-bold  script-font mt-4">
                            {titulo}
                        </h2>
                        <div className="w-16 h-16  items-center justify-center flex-col-reverse rounded-full mb-4 mx-5">
                            {iconoURL && <Image
                                width={900}
                                height={900}
                                priority="true"
                                alt={titulo}
                                src={iconoURL}
                            />}
                        </div>
                    </>
                }
                {
                    showDescription &&
                    <p className="leading-relaxed text-base fade-in">
                        {descripcion}
                    </p>
                }
            </div>
        </div>

    );
}

export default Servicio;