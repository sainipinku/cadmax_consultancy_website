import React from 'react'
import Navbar from '../../components/Layout/Header/Navbar';
import Hero from './components/Hero';
import Textbox from '../home/components/text';
import Footer from '../../components/Layout/Footer/Footer'
import Image from '../home/components/image'
import Accuracy from '../home/components/Accuracy'
import Collage2 from '../home/components/collage'
import RatingPage from '../home/components/rating'
import CompanyShowcase from '../home/components/company'

function Home() {
  return (
    <>
<Navbar/>
<Hero/>
<Textbox/>
<Image/>
<Accuracy/>
<Collage2/>
<RatingPage/>
<CompanyShowcase/>
<Footer/>
    </>
  )
}

export default Home
