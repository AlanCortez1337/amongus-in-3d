import { useEffect, useState} from 'react';
import Head from 'next/head'
import Spline from '@splinetool/react-spline';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [amongusLoaded, setAmongusLoaded] = useState(false);

  useEffect(()=>{
    setAmongusLoaded(true);
    setTimeout(()=>{
      setAmongusLoaded(false);
    }, 5000)
  },[])

  return (
    <div>
      <Head>
        <title>AMOGUS IN 3D!!!</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔪</text></svg>"/>      
      </Head>
      <div className={styles.amongus}>
        {amongusLoaded && <p className={styles.loading}> <i>loading...</i> ((its becoming ebic!!!)) </p>}
        <Spline scene="https://prod.spline.design/W4B-zY9oge8eOo6m/scene.splinecode" />
      </div>
      <div className={styles.title}>
        <h1>AMOGUS IN 3D!!!!</h1>
      </div>
    </div>
  )
}
