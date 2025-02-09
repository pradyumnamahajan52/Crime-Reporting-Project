
import React, { useEffect, useState } from "react";
import getContacts from "../Services/loader/ContactUs";
import { motion } from "framer-motion"; 

function Contact() {

  const [arrOfContacts, setArrOfContacts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [searchQuery, setSearchQuery] = useState("");

 

  useEffect(()=>{

    //const fetchData = async ()=>{
      // const result = await getContacts();

     // setArrOfContacts(result);

    //}

    //fetchData()

    const fetchdata = async() =>{
      const data = [
        {
            "id":1,
            "name":"Atharva Jamdar",
            "state": "Maharashtra",
            "rank": "Superintendent of Chhichore",
            "email" : "lucifer.and@nic.in",
            "contact" : "8900910411"
        },
        {
          "id":2,
          "name":"John Michael",
          "state": "ANDHRA PRADESH",
          "rank": "Superintendent of Police",
          "email" : "spcid.and@nic.in",
          "contact" : "8900910411"
      },
      {
        "id":3,
        "name":"John Michael",
        "state": "ANDHRA PRADESH",
        "rank": "Superintendent of Police",
        "email" : "spcid.and@nic.in",
        "contact" : "8900910411"
      },
      {
        "id":4,
        "name":"John Michael",
        "state": "ANDHRA PRADESH",
        "rank": "Superintendent of Police",
        "email" : "spcid.and@nic.in",
        "contact" : "8900910411"
      },
      {
        "id":4,
        "name":"John Michael",
        "state": "ANDHRA PRADESH",
        "rank": "Superintendent of Police",
        "email" : "spcid.and@nic.in",
        "contact" : "8900910411"
      },
      {
        "id":4,
        "name":"John Michael",
        "state": "ANDHRA PRADESH",
        "rank": "Superintendent of Police",
        "email" : "spcid.and@nic.in",
        "contact" : "8900910411"
      },
      {
        "id":4,
        "name":"John Michael",
        "state": "ANDHRA PRADESH",
        "rank": "Superintendent of Police",
        "email" : "spcid.and@nic.in",
        "contact" : "8900910411"
      },
      {
        "id":4,
        "name":"John Michael",
        "state": "ANDHRA PRADESH",
        "rank": "Superintendent of Police",
        "email" : "spcid.and@nic.in",
        "contact" : "8900910411"
      },
      {
        "id":4,
        "name":"John Michael",
        "state": "ANDHRA PRADESH",
        "rank": "Superintendent of Police",
        "email" : "spcid.and@nic.in",
        "contact" : "8900910411"
      },
      {
        "id":4,
        "name":"John Michael",
        "state": "ANDHRA PRADESH",
        "rank": "Superintendent of Police",
        "email" : "spcid.and@nic.in",
        "contact" : "8900910411"
      },
      {
        "id":4,
        "name":"John Michael",
        "state": "ANDHRA PRADESH",
        "rank": "Superintendent of Police",
        "email" : "spcid.and@nic.in",
        "contact" : "8900910411"
      }
      ] 

      setArrOfContacts(data)
    }

    fetchdata()
    
  }, [])

  const totalPages = Math.ceil(arrOfContacts.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentContacts = arrOfContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="text-gray-400 bg-gray-100 body-font relative">
  {/* Section Container Animation */}
  <motion.div
    className="container px-5 pt-20 m-0 flex sm:flex-nowrap flex-wrap"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  ></motion.div>

  <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
    <motion.div
      className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Animation */}
      <motion.div
        className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between gap-8 mb-8">
          <div>
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-neutral-950">
              State/UT Nodal Officer contact details
            </h5>
            <span className="block mt-1 font-sans text-sm text-base antialiased font-normal leading-relaxed text-gray-700">
              Complainant who registered complaint using "Report & Track" option on the National Cyber Crime Reporting Portal, may contact the respective State/UT Nodal Officer or Grievance Officer if the response has not been appropriate.
            </span>
          </div>
        </div>
      </motion.div>

      {/* Table Animation */}
      <motion.div
        className="p-6 px-0 overflow-scroll"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <table className="w-full mt-4 text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-y border-blue-gray-100 bg-slate-500">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-white opacity-70">
                  S.No.
                </p>
              </th>
              <th className="p-4 border-y border-blue-gray-100 bg-slate-500">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-white opacity-70">
                  Name
                </p>
              </th>
              <th className="p-4 border-y border-blue-gray-100 bg-slate-500">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-white opacity-70">
                  State
                </p>
              </th>
              <th className="p-4 border-y border-blue-gray-100 bg-slate-500">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-white opacity-70">
                  Rank
                </p>
              </th>
              <th className="p-4 border-y border-blue-gray-100 bg-slate-500">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-white opacity-70">
                  Email
                </p>
              </th>
              <th className="p-4 border-y border-blue-gray-100 bg-slate-500">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-white opacity-70">
                  Contact
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentContacts.map((row, index) => (
              <tr key={row.id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {row.id}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {row.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex flex-col">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {row.state}
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase">
                      <span className="">{row.rank}</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {row.email}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {row.contact}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Pagination Animation */}
      <motion.div
        className="flex items-center justify-between p-4 border-t border-blue-gray-50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          Page 1 of 10
        </p>
        <div className="flex gap-2">
          <button
            className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>
  );
}

export default Contact;



