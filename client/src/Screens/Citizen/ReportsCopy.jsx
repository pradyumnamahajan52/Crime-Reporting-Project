import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom"
 


const ReportDetailsCard = ({ data }) => {

  const [evidences, setEvidences] = useState([]);

    return (
      <div className="w-full max-w-7xl mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
          <div className="px-6 py-4">
            {/* Title */}
            <h1 className="font-bold text-2xl mb-6 text-gray-800 border-b pb-3">
              Crime Report Details
            </h1>
  
            {/* Crime Date and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Date Box */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700 font-semibold text-lg mb-1">📅Date:</p>
                <p className="text-gray-600 text-base">{data.crimeDate}</p>
              </div>
  
              {/* Category Box */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700 font-semibold text-lg mb-1">Category:</p>
                <p className="text-gray-600 text-base">{data.category +" "+ data.subCategory}</p>
              </div>
            </div>
  
            {/* Description Box */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
              <p className="text-gray-700 font-semibold text-lg mb-2">Description:</p>
              <p className="text-gray-600 text-base leading-relaxed">{data.description}</p>
            </div>
  
            {/* Crime Location Box */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
              <p className="text-gray-700 font-semibold text-lg mb-2">📍Crime Location:</p>
              <p className="text-gray-600 text-base">
                {[data.addressLine1, data.addressLine2, data.city, data.state, data.country, data.pinCode]
                  .filter(Boolean)
                  .join(", ")}
              </p>
            </div>
  
            {/* Police Station Box */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-semibold text-lg mb-2">Police Station:</p>
              <p className="text-gray-600 text-base mb-1">{data.stationName}</p>
              <p className="text-gray-600 text-base">
                {[
                  data.stationAddressLine1,
                  data.stationAddressLine2,
                  data.stationCity,
                  data.stationState,
                  data.stationCountry,
                  data.stationPinCode,
                ]
                  .filter(Boolean)
                  .join(", ")}
              </p>
            </div>

                {/* See Evidences */}
            <div className="flex justify-end mt-3 items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <button className = "w-full  sm:w-auto focus:ring-4 focus:outline-none  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  hover:bg-primary bg-primary">
           
                <div className="text-left rtl:text-right">
                <div className="-mt-1 font-sans text font-semibold">See Evidences</div>
                </div>
                </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
const CrimeReportsDetail = () =>{
    const [reportsDetail, setReportsDetails] = useState({
        crimeDate: "",
        description: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
        category: "",
        subCategory: "",
        stationName: "",
        stationAddressLine1: "",
        stationAddressLine2: "",
        stationCity: "",
        stationState: "",
        stationCountry: "",
        stationPinCode: ""
    })
    const {reportDetails } = useLoaderData();

    useEffect(() => {
        
        const reportData = reportDetails.data;

        setReportsDetails({
            crimeDate: reportData.crimeDate || "",
            description: reportData.description || "",
            addressLine1: reportData.addressLine1 || "",
            addressLine2: reportData.addressLine2 || "",
            city: reportData.city || "",
            state: reportData.state || "",
            country: reportData.country || "",
            pinCode: reportData.pinCode || "",
            category: reportData.category || "",
            subCategory: reportData.subCategory || "",
            stationName: reportData.stationName || "Not Assigned",
            stationAddressLine1: reportData.stationAddressLine1 || "",
            stationAddressLine2: reportData.stationAddressLine2 || "",
            stationCity: reportData.stationCity || "",
            stationState: reportData.stationState || "",
            stationCountry: reportData.stationCountry || "",
            stationPinCode: reportData.stationPinCode || "",
        })
    }, [reportsDetail]);

    return (
        <div className="bg-gray-100 min-h-screen py-8 space-y-8">
          <ReportDetailsCard data={reportsDetail} />
        </div>
      )
}

export default CrimeReportsDetail;