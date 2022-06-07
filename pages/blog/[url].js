import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Firma from '../../components/Firma';
import Layout from '../../components/Layout';
import { formatDate } from '../../helpers/index';
import styles from '../../styles/Blog.module.css';

const Entrada = ({ data = {} }) => {
    const [content, setContent] = useState('')
    const {
        titulo,
        contenido,
        imagen_principal,
        published_at
    } = data;

    const addingHTMLAtributes = () => {
        /* Agregando fade in a todos los parrafos */
        setContent(
            contenido.replace(/<p>/g, "<p data-aos='fade-right' data-aos-duration='1000'>")
                .replace(/<li>/g, "<li data-aos='fade-left' data-aos-duration='1000'>")
        )
    }

    useEffect(() => {
        data && addingHTMLAtributes()
    }, [])


    return (
        <Layout>
            <article className='mt-10'>
                {/* BTN INICIO */}
                <div className='pt-20 lg:pl-56 pl-4 fade-in items-center flex'>
                    <Link href='/' >
                        <a className='text-verde font-bold inline-flex'>
                            <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            <p className='hidden sm:contents'>
                                Inicio
                            </p>
                        </a>
                    </Link>
                </div>
                {/* Titulo */}
                <h1 className='slide-in-left text-center text-rosa-palo text-7xl script-font font-bold  px-5'>
                    {titulo}
                </h1>
                {/* IMAGEN */}

                <div className='flex flex-wrap md:flex-wrap sm:flex-wrap lg:flex-no-wrap  justify-center lg:space-x-4 pt-5'>
                    <Image
                        className='shadow-xl fade-in 
                                w-2/3 ml-auto mr-auto
                                lg:float-left lg:w-4/12 lg:ml-56 lg:mr-5
                                align-center
                                '
                        width={850}
                        height={600}
                        src={`${imagen_principal.url}`}
                        alt={`post ${titulo}`}
                    />
                </div>


                <div className='flex flex-wrap space-x-5 justify-center slide-in-right  pt-8 md:px-20 xl:px-56 px-10'>
                    <div className='text-justify space-y-5 pt-5'
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >

                        <div
                            className={`${styles.entrada} whitespace-pre-wrap space-y-8`}
                            dangerouslySetInnerHTML={{ __html: content }}
                        />

                    </div>
                </div>

            </article>
            <Firma fecha={formatDate(published_at)} />
        </Layout>
    );
}

export async function getServerSideProps({ query: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/blogs?url=${url}`)
    const resultado = await respuesta.json()
    return {
        props: {
            data: resultado[0]
        }
    }

}

export default Entrada;