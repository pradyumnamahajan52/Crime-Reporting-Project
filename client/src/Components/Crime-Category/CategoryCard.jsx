import React from 'react'

export default function CategoryCard({item,color,textcolor,textalign}) {
  return (
    <div className={`flex flex-col rounded-lg cursor-pointer bg-[#F5F5F5]`}>
       <div>
        <img src={item.img} alt="Crime Image" className="w-full h-full"/>  

      </div>

      <div className="p-5 pl-7">
        <p className={`font-bold text-[15px] text-[${textcolor}] text-${textalign}`}>{item.text}</p>
        

      </div>
    </div>
  
  )
}
