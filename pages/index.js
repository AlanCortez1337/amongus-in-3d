import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import SyncLoader from "react-spinners/SyncLoader";

export default function Home() {

  return (
    <div className={styles.bg}>
      <Head>
        <title>AMOGUS IN 3D!!!</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔪</text></svg>"/>      
      </Head>
      <div className={styles.amongus}>
        <Suspense fallback={<SyncLoader color={"#D66853"} loading={true} size={30} className={styles.loading}/>}>
          <Spline scene="https://prod.spline.design/W4B-zY9oge8eOo6m/scene.splinecode" />
        </Suspense>
      </div>
      <div className={styles.title}>
        <h1>AMOGUS IN 3D!!!!</h1>
      </div>
    </div>
  )
}
