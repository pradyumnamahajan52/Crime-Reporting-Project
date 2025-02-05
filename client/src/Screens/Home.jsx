import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img5 from "../assets/images/crime-categories/img7.jpg";
import img1 from "../assets/images/crime-categories/img6.jpg";
import img2 from "../assets/images/crime-categories/img2.jpg";
import img3 from "../assets/images/crime-categories/img9.jpg";
import img4 from "../assets/images/crime-categories/img10.jpg";
import rimg1 from "../assets/images/card/1.png";
import rimg2 from "../assets/images/card/2.png";
import rimg3 from "../assets/images/card/3.png";
import rimg4 from "../assets/images/card/4.png";
import rimg5 from "../assets/images/card/5.png";
import rimg6 from "../assets/images/card/6.png";
import rimg7 from "../assets/images/card/7.png";
import rimg8 from "../assets/images/card/8.png";
import rimg9 from "../assets/images/card/9.png";
import rimg10 from "../assets/images/card/10.png";
import rimg11 from "../assets/images/card/11.png";
import rimg12 from "../assets/images/card/12.png";
import rimg13 from "../assets/images/card/13.png";

// import vid1 from "../assets/videos/homevid1.mp4"
// import vid2 from "../assets/videos/homevid2.mp4"
// import vid3 from "../assets/videos/homevid3.mp4"
// import vid4 from "../assets/videos/homevid4.mp4"

import report from "../assets/animations/report.json";
import Lottie from "react-lottie";

import Category from "../Components/Crime-Category/Category";
import category from "../data/crime_category";
import { BookingCard } from "../Components/Home/ReportCard";
import Faq from "../Components/Home/Faq";
import Aboutus from "./Aboutus";
import Globe from "../Components/Home/Globe";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: report,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const crimeCategories = [
    {
      image: rimg1,
      title: "Property Crimes",
      description: "Includes burglary, theft, vandalism, etc.",
    },
    {
      image: rimg2,
      title: "Violent Crimes",
      description: "Includes assault, robbery, and homicide.",
    },
    {
      image: rimg3,
      title: "Cyber Crimes",
      description: "Includes hacking, identity theft, and online fraud.",
    },
    {
      image: rimg4,
      title: "Finencial Crimes",
      description: "Includes Fraud , money landering.",
    },

    {
      image: rimg5,
      title: "Drug Offenses",
      description:
        "Includes possession, distribution, and manufacturing of illegal drugs.",
    },
    {
      image: rimg6,
      title: "Traffic Offenses",
      description: "Includes Hit and Run , drunk driving , speeding.",
    },
    {
      image: rimg7,
      title: "Public Order Crimes",
      description: "Includes Disorderly Conduct, and Trespassing.",
    },
    {
      image: rimg8,
      title: "Environmental Crimes",
      description: "Includes Illegal Dumping, Poaching.",
    },
    {
      image: rimg9,
      title: "White Collar Crimes",
      description: "Includes Tax Evasion , Insider Trading .",
    },
    {
      image: rimg10,
      title: "Crimes Against Women",
      description: "Includes Sexual Harassment , .",
    },
    {
      image: rimg13,
      title: "Crimes Against Women",
      description: "Includes Child Abuse , labor.",
    },
    {
      image: rimg11,
      title: "Terrorism",
      description: "Includes Bomb threats , act of terrorism.",
    },
    {
      image: rimg12,
      title: "Miscellaneous",
      description: "Includes Harasment , Stalking.",
    },
  ];

  return (
    //  <>
    //  <div className="w-screen h-screen overflow-x-hidden">

    //  <section style={{height:'500px'}} >
    //  <Carousel
    //     showArrows={true}
    //     showThumbs={false}
    //     infiniteLoop={true}
    //     autoPlay={true}
    //     interval={3000}
    //     stopOnHover={true}
    //     dynamicHeight={false}
    //     showStatus={false}
    //   >
    //     <div>

    //     <video autoPlay muted loop className=" top-0 left-0 w-full h-[80vh] object-cover -z-10">
    //         <source src={vid1} type="video/mp4" />
    //     </video>
    //       <p className="legend">Slide</p>
    //     </div>
    //     <div>
    //     <video autoPlay muted loop className=" top-0 left-0 w-full h-[80vh] object-cover -z-10">
    //         <source src={vid2} type="video/mp4" />
    //     </video>

    //     </div>
    //     <div>
    //     <video autoPlay muted loop className=" top-0 left-0 w-full h-[80vh] object-cover -z-10">
    //         <source src={vid3} type="video/mp4" />
    //     </video>

    //     </div>
    //     <div>
    //     <video autoPlay muted loop className=" top-0 left-0 w-full h-[80vh] object-cover -z-10">
    //         <source src={vid4} type="video/mp4" />
    //     </video>
    //     </div>
    //   </Carousel>

    //  </section>

    //  <section className="w-full animate-appear p-4 mt-[7%]" >
    //  <Category
    //         text={"Crime Categories"}
    //         data={category}
    //         color={"#F5F5F5"}
    //         textcolor={"black"}
    //         textalign={"start"}
    //       />
    //  </section>

    //   </div>
    //  </>

    <div className="w-screen min-h-screen overflow-x-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 ">
      <section className="w-full flex justify-center items-center py-10">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-20">
          {/* Image Slider Section */}
          <div
            className="w-full  md:w-1/2 h-[80vh] flex justify-center items-center transition-transform transform hover:scale-105"
            data-aos="zoom-in"
          >
            <Carousel
              showArrows={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              stopOnHover={true}
              dynamicHeight={false}
              showStatus={false}
            >
              <div>
                <img
                  src={img1}
                  alt="Crime Scene 1"
                  className="w-full h-[75vh] object-cover rounded-2xl"
                />
              </div>
              <div>
                <img
                  src={img2}
                  alt="Crime Scene 2"
                  className="w-full h-[75vh] object-cover rounded-2xl"
                />
              </div>
              <div>
                <img
                  src={img3}
                  alt="Crime Scene 3"
                  className="w-full h-[75vh] object-cover rounded-2xl"
                />
              </div>
              <div>
                <img
                  src={img4}
                  alt="Crime Scene 4"
                  className="w-full  object-cover rounded-2xl"
                />
              </div>
              <div>
                <img
                  src={img5}
                  alt="Crime Scene 4"
                  className="w-full h-[70vh] object-cover rounded-2xl"
                />
              </div>
            </Carousel>
          </div>
          {/* Crime Reporting Section */}
          <div className="w-full md:w-1/2 space-y-5 transition-transform transform hover:scale-105" data-aos="fade-up">
            <Lottie
              className="-mt-30"
              options={defaultOptions}
              height={150}
              width={150}
            />
            <h1
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Report Crimes with{" "}
              <span className="text-primary">Confidence</span>
            </h1>
            <p>
              Your safety matters. Report crimes anonymously and help keep your
              community secure. Every report you make contributes to a safer
              society.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-opacity-90"
            >
              Report a Crime
            </button>
          </div>
        </div>
      </section>

      <Aboutus />

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Categories of Crime
        </h2>

        <section className="w-full py-10 gap-20">
          <div className="w-full flex flex-wrap justify-center gap-10">
            {/* Dynamically render BookingCard for each crime category */}
            {crimeCategories.map((category, index) => (
              <BookingCard
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 "
                key={index}
                image={category.image}
                title={category.title}
                description={category.description}
              />
            ))}
          </div>
        </section>

        <Faq />

        <Globe/>
      </div>
    </div>
  );
}

export default Home;
