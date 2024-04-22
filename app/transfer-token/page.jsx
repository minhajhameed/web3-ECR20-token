import { Footer, Fox, Header, TransferToken } from '@Components'
import React from 'react'

const page = () => {
  return (
    <div className='dotted_background'>
    <TransferToken />
    <Header />
    <Fox />
    <Footer />
    </div>
  )
}

export default page
