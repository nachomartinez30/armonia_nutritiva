import '../styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [inicio, setInicio] = useState(false);

  useEffect(() => {
    AOS.init()
    setInicio(true);
  }, [inicio])
  return <Component {...pageProps} />
}

export default MyApp
