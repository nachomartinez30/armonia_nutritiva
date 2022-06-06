import Carrousel from '../components/Carrousel'
import Descripcion from '../components/Descripcion'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import QuienSoy from '../components/QuienSoy'
import Servicios from '../components/Servicios'
import Testimonios from '../components/Testimonios'


const Home = (props) => {
  const { servicios, testimonios, articulos } = props
  return (
    <Layout>
      <Hero />
      <Descripcion />
      <QuienSoy />
      <Servicios data={servicios} />
      <Carrousel data={articulos} />
      <Testimonios data={testimonios} />
    </Layout>
  )
}

/* SERVER SIDE */

export async function getServerSideProps() {
  const serviciosURL = `${process.env.API_URL}/servicios`;
  const articulosURL = `${process.env.API_URL}/blogs`;
  const testimoniosURL = `${process.env.API_URL}/testimonios`;

  const [
    respuestaServicios,
    respuestaTestimonios,
    respuestaArticulos,
  ] = await Promise.all([
    fetch(serviciosURL),
    fetch(testimoniosURL),
    fetch(articulosURL),
  ])

  const [
    resultadoServicios,
    resultadoTestimonios,
    resultadoArticulos,
  ] = await Promise.all([
    respuestaServicios.json(),
    respuestaTestimonios.json(),
    respuestaArticulos.json(),
  ]);

  return {
    props: {
      servicios: resultadoServicios,
      testimonios: resultadoTestimonios,
      articulos: resultadoArticulos,
    }
  }
}

export default Home;