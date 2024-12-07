import React from 'react'
import Navbar from './component/NavBar'
import Footer from './component/Footer'
import ImageSlider from './component/Carasoul'
import Cards from './component/Cards'
import Cards2 from "./component/Card2"

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
  const trendingItems = [
    { name: 'Product 1', image:  "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg", price: 29.99 },
    { name: 'Product 2', image:  "https://labelanushree.com/wp-content/uploads/2024/09/slider-STA_la.png", price: 49.99 },
    { name: 'Product 3', image: "https://labelanushree.com/wp-content/uploads/2022/04/slider-NIR_la-1536x838.png", price: 19.99 }
];
  const trendingItems1 = [
    { name: 'Product 1', image:  "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg", price: 29.99 },
    { name: 'Product 2', image:  "https://labelanushree.com/wp-content/uploads/2024/09/slider-STA_la.png", price: 49.99 },
    { name: 'Product 3', image: "https://labelanushree.com/wp-content/uploads/2022/04/slider-NIR_la-1536x838.png", price: 19.99 },
    { name: 'Product 4', image:  "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg", price: 29.99 },
    { name: 'Product 5', image:  "https://labelanushree.com/wp-content/uploads/2024/09/slider-STA_la.png", price: 49.99 },
];

  return (
    <div>
      <Navbar />
      <ImageSlider images={images} />
      <Cards items={trendingItems}  heading={"TRENDING NOW"}/>
      <Cards2 items={trendingItems1}  heading={"CELEBRITY CLOSET"}/>
      <Footer />
    </div>
  )
}

export default App