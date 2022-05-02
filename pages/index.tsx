import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/layouts';
import styles from '../styles/Home.module.css'

const HomePage: NextPage = () => {
  return (
    <Layout>

      <Typography variant='h1' color='primary'>Hola mundo</Typography>
    </Layout>
  )
}

export default HomePage;
