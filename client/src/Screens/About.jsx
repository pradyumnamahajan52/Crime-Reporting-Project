import React from "react";
import LaliniImg from "../../src/assets/images/Profile_Picture/Lalini.jpg";
import PradyumnaImg from "../../src/assets/images/Profile_Picture/Pradyumna.jpg";
import JasmineImg from "../../src/assets/images/Profile_Picture/Jasmine.jpg";
import MitaliImg from "../../src/assets/images/Profile_Picture/Mitali.jpg";
import PawanImg from "../../src/assets/images/Profile_Picture/Pawan.jpg";

const teamMembers = [
  {
    name: "Lalini Sahu",
    linkedin: "https://www.linkedin.com/in/lalini-sahu-18ab62238/",
    image: LaliniImg,
  },
  {
    name: "Pradyumna Mahajan",
    linkedin: "https://www.linkedin.com/in/pradyumnamahajan52/",
    image: PradyumnaImg,
  },
  {
    name: "Jasmine Kispotta",
    linkedin: "https://www.linkedin.com/in/jasmine-kispotta-5411bb223/",
    image: JasmineImg,
  },
  {
    name: "Pawan Kumar Gupta",
    linkedin: "https://www.linkedin.com/in/dcod3r/",
    image: PawanImg,
  },
  {
    name: "Mitali Gupta",
    linkedin: "https://www.linkedin.com/in/mitali-gupta-584778217/",
    image: MitaliImg,
  },
];

function About() {
  return (
    <section className="bg-white text-black w-full px-6 py-16 md:px-10 lg:px-20">
      <div className="w-full max-w-5xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
          <p className="mt-6 text-lg text-justify leading-relaxed">
            The <strong>Crime Reporting System</strong> is built to provide citizens with a fast, secure, and accessible
            way to report crimes and track case progress. By leveraging modern technology, we aim to bridge the gap
            between law enforcement agencies and the public, ensuring a transparent and efficient reporting system.
          </p>
        </div>

        {/* Content Section */}
        <div className="w-full space-y-8 leading-relaxed">
          <h2 className="text-2xl font-semibold">🔍 Empowering Citizens for a Safer Society</h2>
          <p className="text-lg">
            Reporting a crime should not be complicated. Our platform eliminates barriers by offering a simple, digital,
            and real-time way to file complaints and seek justice.
          </p>

          <h2 className="text-2xl font-semibold"> Key Features for Citizens</h2>
          <ul className="list-none list-inside space-y-1 md:space-y-2 text-lg">
            <li>📌 <strong>Report crimes online</strong> without visiting a police station.</li>
            <li>🔔 <strong>Track case progress</strong> and receive real-time updates.</li>
            <li>📁 <strong>Upload evidence securely</strong> for investigation.</li>
            <li>🔐 <strong>Ensure privacy and confidentiality</strong> at every step.</li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center border border-primary p-6 rounded-lg bg-gray-100 shadow-lg w-full hover:scale-105 transition-transform">
                <img
                  alt={member.name}
                  className="w-24 h-24 rounded-full mr-6 border-2 border-gray-300 object-contain bg-white"
                  src={member.image}
                />
                <div className="text-left">
                  <h3 className="text-black font-medium">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-500">
                      {member.name}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
