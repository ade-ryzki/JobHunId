import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Landing from '../components/landingpage'
import Navbar from '../components/navbar'


export default function Home() {
  return (
    <div className={styles}>
      <Navbar/>
      <Landing/>
    </div>
  )
}


