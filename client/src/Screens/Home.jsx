import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import { Carousel } from "react-responsive-carousel";

import vid1 from '../assets/videos/homevid1.mp4'
import vid2 from '../assets/videos/homevid2.mp4'
import vid3 from '../assets/videos/homevid3.mp4'  
import vid4 from '../assets/videos/homevid4.mp4'  

import styles from './Home.module.css'
import Category from "../Components/Crime-Category/Category";
import category from "../data/crime_category";

function Home() {
  return (
   <>
   <div className={styles.container}>

   
   <section style={{height:'500px'}} className={styles.slider}>
   <Carousel
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      stopOnHover={true}
      dynamicHeight={false}
      showStatus={false}
    >
      <div>

      <video autoPlay muted loop className={styles.video_background}>
          <source src={vid1} type="video/mp4" />
      </video>
        <p className="legend">Slide</p>
      </div>
      <div>
      <video autoPlay muted loop className={styles.video_background}>
          <source src={vid2} type="video/mp4" />
      </video>
       
      </div>
      <div>
      <video autoPlay muted loop className={styles.video_background}>
          <source src={vid3} type="video/mp4" />
      </video>
      
      </div>
      <div>
      <video autoPlay muted loop className={styles.video_background}>
          <source src={vid4} type="video/mp4" />
      </video>
      
      </div>
    </Carousel>

   </section>
   
   <section className={`${styles.categories} p-4 `} style={{marginTop:"7%"}}>
   <Category
          text={"Crime Categories"}
          data={category}
          color={"#F5F5F5"}
          textcolor={"black"}
          textalign={"start"}
        />
   </section>

   
    </div>
   </>
  );
}

export default Home;
