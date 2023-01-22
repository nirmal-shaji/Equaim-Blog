import React from 'react'
import Header from '../../components/Header/Header';
import Cards from '../../components/Cards/Cards';
import { useLocation } from 'react-router-dom';



const Home = () => {
  const location = useLocation();
  return (
       <>
        <Header />
       <Cards/>
       </>
  )
}

export default Home