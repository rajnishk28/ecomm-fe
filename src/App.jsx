import React from 'react'
import Navbar from './component/NavBar'
import Footer from './component/Footer'
import ImageSlider from './component/Carasoul'

const App = () => {

  // Usage Example:
  const images = [
    "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg",
    "https://labelanushree.com/wp-content/uploads/2024/09/slider-STA_la.png",
    "https://labelanushree.com/wp-content/uploads/2022/04/slider-NIR_la-1536x838.png",
    "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg",
    "https://labelanushree.com/wp-content/uploads/2024/09/slider-STA_la.png",
    "https://labelanushree.com/wp-content/uploads/2022/04/slider-NIR_la-1536x838.png"
  ];

  return (
    <div>
      <Navbar />
      <ImageSlider images={images} />
      <Footer />
    </div>
  )
}

export default App