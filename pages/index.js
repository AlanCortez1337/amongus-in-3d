import Head from 'next/head'
import Image from 'next/image'
import Spline from '@splinetool/react-spline';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.amongus}>
        <Spline scene="https://prod.spline.design/W4B-zY9oge8eOo6m/scene.splinecode" />
      </div>
      <div className={styles.title}>
        <h1>AMOGUS IN 3D!!!!</h1>
      </div>
    </div>
  )
}
