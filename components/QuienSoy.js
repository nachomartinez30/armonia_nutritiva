import Image from 'next/image';

const QuienSoy = () => {
    return (
        <div className="px-5 py-24 mx-auto flex flex-col overflow-hidden">
            <h1 className='font-bold text-rosa script-font text-6xl text-center'>¡Conoce a tu Coach!</h1>
            <div className="lg:w-5/6 mx-auto">
                <div className="flex flex-col md:flex-row mt-10">
                    <div className="md:w-1/3 text-center md:pr-8 md:py-8">
                        {/* IMAGEN */}
                        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200">
                            <Image
                                width={600}
                                height={600}
                                className='rounded-full bg-gray-700'
                                src='/img/nutricionista.jpg'
                                alt='Nutricionista'
                            />
                        </div>

                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="mt-4 text-rosa-dark font-bold script-font text-3xl"><p>Nutrióloga</p> Susan Areli Osornio Guzmán</h2>
                            <div className="w-12 h-1 bg-rosa uppercase rounded mt-2 mb-4" />
                            <div className="text-cafe-dark text-xl">
                                <p>Licenciada en Nutrición, </p>
                                <p>Máster en Bioenergia y Desarrollo Humano, Especialista en Psiconutrición</p>
                                <p>y Coach Integral en Cambio de Hábitos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8 md:py-8 md:border-l border-green-800 md:border-t-0 border-t mt-4 pt-4 md:mt-0 text-center md:text-left">
                        <p className="leading-relaxed text-2xl mb-4 text-cafe-dark text-justify">
                            <span className='script-font text-6xl'>Soy </span> apasionada de ayudar a la persona a que crea en ella y que mejore su relación con la comida , su imagen corporal y sus hábitos para contribuir a su bienestar.
                        </p>
                        <p className="leading-relaxed text-2xl mb-4 text-justify text-cafe-dark">
                            En mi experiencia me he dado cuenta de la importancia de ver al paciente desde la parte humanista y un ser integral y que al no nutrir sus áreas de vida se ve reflejada en su manera de comer.
                        </p>
                        <p className="leading-relaxed text-2xl mb-4 text-justify text-cafe-dark">
                            Será un placer poder ser tu coach en esta etapa de tu vida creando mejores hábitos que te beneficien para así tener una mejor trascendencia y evolución con tu ser, con la alimentación y contigo mismo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuienSoy;