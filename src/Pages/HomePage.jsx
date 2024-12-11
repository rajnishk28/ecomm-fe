import React from 'react'
import Navbar from '../component/NavBar'
import ImageSlider from '../component/Carasoul'
import Cards from '../component/Cards'
import Cards2 from "../component/Card2"
import Card3 from '../component/Card3'
import Footer from '../component/Footer'
const HomePage = () => {
    const images = [
        "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg",
        "https://labelanushree.com/wp-content/uploads/2024/09/slider-STA_la.png",
        "https://labelanushree.com/wp-content/uploads/2022/04/slider-NIR_la-1536x838.png",
        "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg",
        "https://labelanushree.com/wp-content/uploads/2024/09/slider-STA_la.png",
        "https://labelanushree.com/wp-content/uploads/2022/04/slider-NIR_la-1536x838.png"
    ];
    const trendingItems = [
        { name: 'PINK SAHARA SET', image: "https://labelanushree.com/wp-content/uploads/2023/04/nirvvi-1024x559.jpeg", price: 29.99 },
        { name: 'LENGHA', image: "https://labelanushree.com/wp-content/uploads/2024/09/slider-STA_la.png", price: 49.99 },
        { name: 'SILK LENGHA', image: "https://labelanushree.com/wp-content/uploads/2022/04/slider-NIR_la-1536x838.png", price: 19.99 }
    ];
    const trendingItems1 = [
        { name: 'MIRAI CROP TOP', image: "https://labelanushree.com/wp-content/uploads/2024/09/LASTA35-01-400x600.jpg", price: 2999.99 },
        { name: 'LUNA CROP TOP', image: "https://labelanushree.com/wp-content/uploads/2024/05/LAKAI32-01-400x600.jpg", price: 4950.99 },
        { name: 'AURA CROP TOP', image: "https://labelanushree.com/wp-content/uploads/2024/01/LATSE03-02_cc-400x600.jpg", price: 1999.99 },
        { name: 'NOVA CROP TOP', image: "https://labelanushree.com/wp-content/uploads/2023/11/LANAZ23-02-400x600.jpg", price: 2980.99 },
        { name: 'SOLIS CROP TOP', image: "https://labelanushree.com/wp-content/uploads/2023/11/LANAZ07-02_cc-400x600.jpg", price: 4999.99 },
    ];

    return (
        <>
            <Navbar />
            <ImageSlider images={images} />
            <Cards items={trendingItems} heading={"TRENDING NOW"} />
            <Cards2 items={trendingItems1} heading={"CELEBRITY CLOSET"} />
            <Card3 />
            <Footer />
        </>
    )
}

export default HomePage