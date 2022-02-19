import type { NextPage } from 'next'
import { useEffect } from 'react'
import { initFirebase } from '../src/constants/firebase'
import HomePage from '../src/containers/HomePage'

const Home: NextPage = () => {
  useEffect(() => { initFirebase() }, [])
  return <HomePage />
}

export default Home
