import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header'
import ExploreMenu from '../../components/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay'
import AppDownload from '../../components/AppDownload'

const Home = () => {

  const [category, setCategory] = useState("All") 

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home