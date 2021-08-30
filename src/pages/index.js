import React from 'react'
import Home from '../components/Home'
import Layout from '../components/Layout'
import Features from "../components/Features";
import SimpleSlider from '../components/CarouselPage'
import Services from '../components/Services'
import Statistics from '../components/Statistics'
import Newsletter from '../components/Newsletter'

import Seo from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <Seo title="Home"/>
    <Home />
    <Features />
    <SimpleSlider />
    <Services />
    <Statistics />
    <Newsletter />
    
  </Layout>
)

export default IndexPage
