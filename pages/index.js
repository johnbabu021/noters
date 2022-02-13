import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import Header from '../components/utils/header'
import Notes from '../components/utils/notes'
import SideBar from '../components/utils/sidebar'
import { Global } from '../cotext/context'
import styles from '../styles/Home.module.css'

export default function Home() {
  const       {state}=useContext(Global)

  return (
    <div  className={`
    ${state.dark?"text-white bg-black":"text-black bg-white"} min-h-[100vh]`}  >
     <Header/>
     <SideBar/>
     <Notes/>
    </div>
  )
}
