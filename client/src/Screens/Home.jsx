import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
import report from "../assets/animations/report.json";
import Lottie from "react-lottie";
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
      description: "Includes burglary, theft, vandalism, etc."
    },
    {
      image: rimg2,
      title: "Violent Crimes",
      description: "Includes assault, robbery, and homicide."
    },
    {
      image: rimg3,
      title: "Cyber Crimes",
      description: "Includes hacking, identity theft, and online fraud."
    },
    {
      image: rimg4,
      title: "Finencial Crimes",
      description: "Includes Fraud , money landering."
    },

    {
      image: rimg5,
      title: "Drug Offenses",
      description:
        "Includes possession, distribution."
    },
    {
      image: rimg6,
      title: "Traffic Offenses",
      description: "Includes Hit and Run , drunk driving , speeding."
    },
    {
      image: rimg7,
      title: "Public Order Crimes",
      description: "Includes Disorderly Conduct, and Trespassing."
    },
    {
      image: rimg8,
      title: "Environmental Crimes",
      description: "Includes Illegal Dumping, Poaching."
    },
    {
      image: rimg9,
      title: "White Collar Crimes",
      description: "Includes Tax Evasion , Insider Trading ."
    },
    {
      image: rimg10,
      title: "Crimes Against Women",
      description: "Includes Rape."
    },
    {
      image: rimg13,
      title: "Crimes Against Children",
      description: "Includes Child Abuse , labor."
    },
    {
      image: rimg11,
      title: "Terrorism",
      description: "Includes Bomb threats , act of terrorism."
    },
    {
      image: rimg12,
      title: "Miscellaneous",
      description: "Includes Harasment , Stalking."
    },
  ];

  const navigate = useNavigate();

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="w-full min-h-screen overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
    >
      {/* Hero Section */}
      <motion.section
        className="w-full flex justify-center items-center py-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-20">
          {/* Image Slider Section */}
          <motion.div
            className="w-full md:w-1/2 h-[80vh] flex justify-center items-center hover:scale-105 transition-transform"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
            <div whileHover={{ scale: 1.05 }} >
               <img
                src={img1}
                alt="Crime Scene 1"
                className="w-full h-[75vh] object-cover rounded-2xl"
              />
            </div>
            <div whileHover={{ scale: 1.05 }}>
              <img
                src={img2}
                alt="Crime Scene 2"
                className="w-full h-[75vh] object-cover rounded-2xl"
              />
            </div>
            <div whileHover={{ scale: 1.05 }} >
              <img
                src={img3}
                alt="Crime Scene 3"
                className="w-full h-[75vh] object-cover rounded-2xl"
              />
            </div>
            <div whileHover={{ scale: 1.05 }} >
              <img
                src={img4}
                alt="Crime Scene 4"
                className="w-full object-cover rounded-2xl"
              />
            </div>
            <div whileHover={{ scale: 1.05 }} >
              <img
                src={img5}
                alt="Crime Scene 5"
                className="w-full h-[70vh] object-cover rounded-2xl"
              />
            </div>
            </Carousel>
          </motion.div>

          {/* Crime Reporting Section */}
          <motion.div
            className="w-full md:w-1/2 space-y-5"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Lottie options={defaultOptions} height={150} width={150} />
            <h1 className="text-4xl sm:text-5xl font-semibold">
              Report Crimes with <span className="text-primary">Confidence</span>
            </h1>
            <p>Your safety matters. Report crimes anonymously.</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-primary text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
              onClick={() => navigate("/citizen/reports")}
            >
              Report a Crime
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
  
     {/* About Us Section */}
     <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Aboutus />
      </motion.div>
  
    <motion.div className="mt-20">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Categories of Crime
      </h2>
  
      <motion.section className="w-full py-10 flex flex-wrap justify-center gap-10 overflow-hidden"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.2 }}
       transition={{ staggerChildren: 0.2 }}>
        {/* Dynamically render BookingCard for each crime category */}
        {crimeCategories.map((category, index) => (
             <motion.div
             className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-full min-h-[350px] max-w-[26rem]"
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: index * 0.1 }}
           >
          <BookingCard
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            key={index}
            image={category.image}
            title={category.title}
            description={category.description}
            
          />
        </motion.div>
        ))}
      </motion.section>
  

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Faq />
      </motion.div>

      {/* Globe Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Globe />
      </motion.div>
    </motion.div>
 
  </motion.div>
  );
}

export default Home;