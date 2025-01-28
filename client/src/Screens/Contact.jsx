
import React, { useEffect, useState } from "react";
import getContacts from "../Services/loader/ContactUs";

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

    <div className="container px-5 pt-20 m-0 flex sm:flex-nowrap flex-wrap">
      {/* <div className="relative flex flex-col w-full h-full text-gray-700 bg-clip-border bg-blue-950	">
              hey
      </div>   */}

    </div>

      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
    <div className="flex items-center justify-between gap-8 mb-8">
      <div>
        <h5
          className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-neutral-950	">
          State/UT Nodal Officer contact details
        </h5>

        <span className="block mt-1 font-sans text-sm text-base antialiased font-normal leading-relaxed text-gray-700">
          Complainant who registered complaint using "Report & Track" option on the National Cyber Crime Reporting Portal,may contact the respective State/UT Nodal Officer or Grievance Officer if the response has not been appropriate.
        </span>
      </div>
    </div>
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      {/* <div className="block w-full overflow-hidden md:w-max">
        <nav>
          <ul role="tablist" className="relative flex flex-row p-1 rounded-lg bg-blue-gray-50 bg-opacity-60">
            <li role="tab"
              className="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
              data-value="all">
              <div className="z-20 text-inherit">
                &nbsp;&nbsp;All&nbsp;&nbsp;
              </div>
              <div className="absolute inset-0 z-10 h-full bg-white rounded-md shadow"></div>
            </li>
            <li role="tab"
              className="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
              data-value="monitored">
              <div className="z-20 text-inherit">
                &nbsp;&nbsp;Monitored&nbsp;&nbsp;
              </div>
            </li>
            <li role="tab"
              className="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
              data-value="unmonitored">
              <div className="z-20 text-inherit">
                &nbsp;&nbsp;Unmonitored&nbsp;&nbsp;
              </div>
            </li>
          </ul>
        </nav>
      </div> */}
      <div className="w-full md:w-72">
        <div className="relative h-10 w-full min-w-[200px]">
          <div className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" aria-hidden="true" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
          </div>
          <input
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" " />
          <label
            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Search officer of your state
          </label>
        </div>
      </div>
    </div>
  </div>
  <div className="p-6 px-0 overflow-scroll">
    <table className="w-full mt-4 text-left table-auto min-w-max">
      <thead>
        
        <tr>
        <th className="p-4 border-y border-blue-gray-100 bg-slate-500">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-white	 opacity-70 ">
             S.No.
            </p>
          </th>
          <th className="p-4 border-y border-blue-gray-100 bg-slate-500">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-white opacity-70 	">
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
        {
          currentContacts.map((row, index) =>{
            return(
            <tr key= {row.id}>
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
              {/* <p
                className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                Pune
              </p> */}
            </div>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <div className="w-max">
              <div
                className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase">
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
        
            )
          }
        )
      }
      </tbody>
    </table>
  </div>
  <div className="flex items-center justify-between p-4 border-t border-blue-gray-50">
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
      Page 1 of 10
    </p>
    <div className="flex gap-2">
      <button
        className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button" onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <button
        className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button" onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  </div>
</div>
      </div>
    
    </section>
    
  );
}

export default Contact;



