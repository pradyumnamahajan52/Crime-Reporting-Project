import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Lalini Sahu",
    linkedin: "https://www.linkedin.com/in/lalini-sahu-18ab62238/",
    image: "https://dummyimage.com/80x80",
  },
  {
    name: "Pradyumna Mahajan",
    linkedin: "https://www.linkedin.com/in/pradyumnamahajan52/",
    image: "https://dummyimage.com/84x84",
  },
  {
    name: "Jasmine Kispotta",
    linkedin: "https://www.linkedin.com/in/jasmine-kispotta-5411bb223/",
    image: "https://dummyimage.com/88x88",
  },
  {
    name: "Pawan Kumar Gupta",
    linkedin: "https://www.linkedin.com/in/dcod3r/",
    image: "https://dummyimage.com/90x90",
  },
  {
    name: "Mitali Gupta",
    linkedin: "https://www.linkedin.com/in/mitali-gupta-584778217/",
    image: "https://dummyimage.com/94x94",
  },
];

function About() {
  return (
    <motion.section className="bg-white text-black w-full px-12 sm:px-6 py-20" 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}>
      <div className="w-full px-14 mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black">About Us</h1>
          <p className="mt-6 text-lg w-full mx-auto leading-relaxed text-justify">
            The <strong>Crime Reporting System</strong> is built to provide 
            citizens with a fast, secure, and accessible way to report crimes and track case progress. 
            By leveraging modern technology, we aim to bridge the gap between law enforcement agencies 
            and the public, ensuring a transparent and efficient reporting system. 

            Our platform simplifies the process of crime reporting, eliminating the need for physical visits 
            to police stations and reducing bureaucratic delays. Users can submit complaints in real time, 
            attach supporting evidence, and receive timely updates about their cases.

            With an intuitive and user-friendly interface, we empower individuals to take action against 
            crime and contribute to a safer society. By providing a direct channel between citizens and law 
            enforcement, we ensure that no crime goes unreported, fostering a culture of accountability and justice.
          </p>
        </div>

        {/* Content Section */}
        <div className="w-full space-y-8 leading-relaxed">
          <h2 className="text-2xl font-semibold">🔍 Empowering Citizens for a Safer Society</h2>
          <p>
            Reporting a crime should not be complicated. Our platform eliminates barriers by offering a simple, digital, and real-time way to file complaints and seek justice.
          </p>

          <h2 className="text-2xl font-semibold">✅ Key Features for Citizens</h2>
          <ul className="list-none list-inside space-y-2">
            <li>📌 <strong>Report crimes online</strong> without visiting a police station.</li>
            <li>🔔 <strong>Track case progress</strong> and receive real-time updates.</li>
            <li>📁 <strong>Upload evidence securely</strong> for investigation.</li>
            <li>🔐 <strong>Ensure privacy and confidentiality</strong> at every step.</li>
          </ul>

          <h2 className="text-2xl font-semibold">🛡️ Why Use Our Platform?</h2>
          <div className="space-y-4">
            <p><strong>🚀 Hassle-Free Reporting:</strong> No more waiting in long queues or struggling with paperwork. Just log in, describe the incident, and submit your report in minutes.</p>
            <p><strong>🔍 Real-Time Case Tracking:</strong> Track your case status and get notified about any updates or actions taken by the authorities.</p>
            <p><strong>🔐 Secure & Confidential:</strong> Every report is encrypted and stored securely to prevent unauthorized access.</p>
            <p><strong>📩 Instant Communication:</strong> Receive timely notifications via SMS or email about case progress, ensuring transparency.</p>
            <p><strong>🌍 24/7 Accessibility:</strong> File complaints anytime, anywhere, using your mobile phone, tablet, or computer.</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center border border-primary border-2 p-6 rounded-lg bg-gray-100 shadow-lg w-full hover:scale-105 transition-transform">
                <img
                  alt={member.name}
                  className="w-16 h-16 object-cover object-center rounded-full mr-4 border border-gray-300"
                  src={member.image}
                />
                <div className="text-left">
                  <h3 className="text-black font-medium">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-500"
                    >
                      {member.name}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
