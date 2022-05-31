const Descripcion = () => {
    return (
        <section className='py-10 mx-auto px-4 justify-items-auto'>
            <h1 className='text-cafe text-5xl text-center text-cafe-dark'>
                <span className='text-rosa font-bold'>Armonía </span>
                <span className='text-rosa'> Nutritiva </span> es:
            </h1>
            <p className='pt-10 px-8 text-2xl text-justify text-cafe-dark'>
                Un consultorio de
                <span className='text-rosa script-font text-4xl font-bold'> nutrición </span>
                que se enfoca en obtener la mejor versión del paciente, tratando aspectos
                <span className='font-bold script-font text-4xl text-verde'> emocionales </span>
                y
                <span className='script-font text-4xl font-bold text-amarillo-DEFAUL'> físicos </span>
                para mejorar su calidad , estilo de vida y la relación que tenga con el mismo, la imagen corporal y la comida.
            </p>
        </section>
    );
}

export default Descripcion;