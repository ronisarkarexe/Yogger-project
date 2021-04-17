import React from 'react';
import Footer from '../../Shareds/Footer/Footer';
import BasicYoga from '../BasicYoga/BasicYoga';
import Header from '../Header/Header';
import LifeIsBeautiful from '../LifeIsBeautiful/LifeIsBeautiful';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Trainer from '../Trainer/Trainer';
import './Home.css'
const Home = () => {
   return (
      <main>
         <Header></Header>
         <Trainer></Trainer>
         <Services></Services>
         <LifeIsBeautiful></LifeIsBeautiful>
         <Testimonials></Testimonials>
         <BasicYoga></BasicYoga>
         <Footer></Footer>
      </main>
   );
};

export default Home;