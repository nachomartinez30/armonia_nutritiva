import Image from 'next/image';

const Firma = ({ fecha }) => {
    return (
        <>
            <div className="flex flex-wrap items-center text-center justify-center">
                <div className="w-20 h-20 rounded-full  items-center justify-center bg-gray-200">
                        <Image
                            className='rounded-full bg-gray-700'
                            width={200}
                            height={200}
                            src={'/img/nutricionista.jpg'}
                            alt='Nutricionista'
                        />
                </div>
            </div>
            <h2 className="text-center mt-4 text-rosa-dark font-bold script-font text-3xl"><p>Nutrióloga</p> Susan Areli Osornio Guzmán</h2>
            <div className='text-center text-sm pb-12'>
                {fecha}
            </div>
        </>
    );
}

export default Firma;