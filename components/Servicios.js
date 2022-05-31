import Servicio from './Servicio'
const Servicios = ({ data }) => {
    return (
        <div className='flex'
            data-aos="fade-right"
            data-aos-duration="2000"
        >
            <div className='py-'>
                <section>
                    <h1 className='text-8xl font-bold text-rosa script-font text-center py-10'>
                        Servicios
                    </h1>
                    {/*Imagen SVG */}
                    <div className='flex flex-wrap justify-items-center items-center'>
                        {
                            data && data.map(servicio => <Servicio key={servicio.titulo} data={servicio} />)
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Servicios;