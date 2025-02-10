import React from "react";

import { useNavigate } from "react-router-dom";

export default function Form({
  formFields,
  setCitizen,
  isCitizen,
  evidence,
  handleFileChange,
  handleSignUpforPolice,
  handleSignUpforcitizen,
  isLoading,
}) {
  const navigate = useNavigate();

  return (

    <div >

      <div  >
        <h1 className='font-quicksand text-black text-2xl sm:text-3xl ml-4 sm:ml-10 mt-6 sm:mt-10 text-center' >Create An Account</h1>
         </div>
      <div className='flex gap-4 sm:gap-8 justify-center mt-4 sm:mt-6' > 
        <div>
          <button
           className={`
            ${!isCitizen ? "border-[1.5px] border-black text-black" : "bg-black text-white"}
            text-sm sm:text-base rounded-lg py-2 px-6 sm:px-14 mt-4
          `}
            onClick={() => {
              setCitizen(true);
            }}
           
          >
            Citizen
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setCitizen(false);
            }}
            className={`
              ${isCitizen ? "border-[1.5px] border-black text-black" : "bg-black text-white"}
              text-sm sm:text-base rounded-lg py-2 px-6 sm:px-14 mt-4
            `}
          >
            Police
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4">
        {formFields.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center rounded-lg border border-2 border-primary w-full p-3 sm:p-4 mt-4 h-10 sm:h-12"
            >
              <input
                className="flex-grow outline-none p-2 text-sm sm:text-base w-full h-full"
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                value={item.value}
                onChange={item.onchange} // Ensure `onChange` is passed correctly as a prop
              />
            </div>
          );
        })}
      </div>
      {isCitizen && (
        <div className="mt-4">
          {/* Evidence Upload */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">
              Upload Adhaar Image :
            </label>
            <input
              type="file"
             
              accept="image/*, video/*, .pdf, .doc, .docx"
              onChange={handleFileChange}
              className="border border-primary p-2 rounded w-full cursor-pointer"
            />

            {/* Preview Uploaded Images */}
            {evidence.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-700 mb-2">Preview:</h3>
                <div className="flex flex-wrap gap-4">
                  {evidence.map((file, index) =>
                    file.type.startsWith("image/") ? (
                      <img
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`Uploaded ${index + 1}`}
                        className="w-24 h-24 object-cover rounded border border-primary"
                      />
                    ) : (
                      <p key={index} className="text-sm text-gray-700">
                        {file.name}
                      </p>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <button
          className="text-base bg-primary text-white rounded-lg py-3 px-[20%] mt-10"
          onClick={isCitizen? handleSignUpforcitizen : handleSignUpforPolice}
        >
          {isLoading ? "Signing..." : "Sign Up"}
        </button>
      </div>

      <span className="text-xl text-center mt-2 ml-6 w-[200px] mx-auto">
        <p>
          Already Have An Account?{" "}
          <span
            className="text-primary cursor-pointer "
            onClick={() => navigate("/user/login")}
          >
            Sign In
          </span>{" "}
        </p>
      </span>
    </div>
  );
}
