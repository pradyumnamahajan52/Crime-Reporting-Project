import React from 'react'

export default function CategoryCard({item,color,textcolor,textalign}) {
  return (
    <div className="flex flex-col rounded-lg cursor-pointer" style={{backgroundColor:color}}>
       <div>
        <img src={item.img} alt="Crime Image" className="w-full h-full"/>  

      </div>

      <div className="p-5 pl-7">
        <p style={{fontWeight:'bold',fontSize:'15px',color:textcolor,textAlign:textalign}}>{item.text}</p>
        

      </div>
    </div>
  
  )
}
