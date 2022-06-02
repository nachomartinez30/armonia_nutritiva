import Descripcion from '../components/Descripcion'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import QuienSoy from '../components/QuienSoy'
import Servicios from '../components/Servicios'
import Testimonios from '../components/Testimonios'

const Home = (props) => {
  const { servicios, testimonios } = props
  return (
    <Layout>
      <Hero />
      <Descripcion />
      <QuienSoy />
      <Servicios data={servicios} />
      <Testimonios data={testimonios} />
    </Layout>
  )
}

/* SERVER SIDE */

export async function getServerSideProps() {
  const serviciosURL = `${process.env.API_URL}/servicios`;
  // const serviciosURL = `${process.env.API_URL}/armonia`;
  const testimoniosURL = `${process.env.API_URL}/testimonios`;

  const [
    respuestaServicios,
    respuestaTestimonios
  ] = await Promise.all([
    fetch(serviciosURL),
    fetch(testimoniosURL),
  ])

  const [
    resultadoServicios,
    resultadoTestimonios
  ] = await Promise.all([
    respuestaServicios.json(),
    respuestaTestimonios.json(),
  ]);

  return {
    props: {
      servicios: resultadoServicios,
      testimonios: resultadoTestimonios,
    }
  }
}

export default Home;