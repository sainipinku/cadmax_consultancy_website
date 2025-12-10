import React from 'react'
import Navbar from '../../components/Layout/Header/Navbar';
import Hero from './components/Hero';
import Textbox from '../home/components/text';
import Footer from '../../components/Layout/Footer/Footer'
// import Image from '../home/components/image'
import Accuracy from '../home/components/Accuracy'
import Collage2 from '../home/components/collage'
// import RatingPage from '../home/components/rating'
import CompanyShowcase from '../home/components/company'
// import MasonryGallery from './components/MasonryGallery';
import MasonryGallery from '../home/components/image'
import Testimonial from '../home/components/testimonial'
import TestimonialSlider from '../home/components/rating'
function Home() {
  return (
    <>
<Navbar/>
<Hero/>
<Textbox/>
<MasonryGallery/>
<Accuracy/>
<Collage2/>
{/* <Testimonial/> */}
{/* <RatingPage/> */}
<TestimonialSlider/>
<CompanyShowcase/>
<Footer/>
    </>
  )
}

export default Home
