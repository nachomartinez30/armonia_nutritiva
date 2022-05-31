import Descripcion from '../components/Descripcion'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import QuienSoy from '../components/QuienSoy'
import Servicios from '../components/Servicios'

const Home = ({ servicios }) => {
  return (
    <Layout>
      <Hero />
      <Descripcion />
      <QuienSoy />
      <Servicios data={servicios} />
    </Layout>
  )
}

/* SERVER SIDE */

export async function getServerSideProps() {
  const serviciosURL = `${process.env.API_URL}/servicios`;

  const [respuestaServicios] = await Promise.all([
    fetch(serviciosURL),
  ])

  const [resultadoServicios] = await Promise.all([
    respuestaServicios.json(),
  ]);

  return {
    props: {
      servicios: resultadoServicios,
    }
  }
}

export default Home;