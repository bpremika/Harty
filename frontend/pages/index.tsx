import type { NextPage } from 'next'
import SideBar from '../components/sidebar/sidebar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <SideBar />
    </div>
  )
}

export default Home
