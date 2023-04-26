import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'


const Custom404 = () => {
  return (
   <Layout>
    <div className="text-center">
        <h1>404</h1>
        <p>This page does not exist. Please return <Link href="/">Home</Link></p>
    </div>
   </Layout>
  )
}

export default Custom404