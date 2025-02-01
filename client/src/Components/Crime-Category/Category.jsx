import React from 'react'
import CategoryCard from './CategoryCard';

export default function Category({
  text,
  data,
  color,
  textcolor,
  textalign,
  handleClick 
}) {
  return (
    <div className="w-full mt-8">
    <p style={{ fontWeight: "bold",fontSize:'30px',textAlign:'center' }}>{text}</p>
    <div className="grid grid-cols-5 gap-20 mt-2 items-center" onClick={()=>handleClick()}>
      {data.map((item, index) => {
        return (
          <CategoryCard
            key={index}
            item={item}
            color={color}
            textcolor={textcolor}
            textalign={textalign}
          />
        );
      })}
    </div>
  </div>
  )
}
