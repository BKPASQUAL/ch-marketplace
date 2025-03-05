import React from "react";
import Image from "next/image"; 

export default function ItemCard() {
  return (
    <div className="h-96 w-1/5 border p-2 rounded-2xl">
      <div className="w-full h-72 relative">
        <Image 
          src="/images/3_gan.jpg" 
          alt="Item"
          layout="fill"  
          objectFit="cover"  
          className="rounded-md"
        />
      </div>
      <p className="mt-2 ">Item Name</p>
    </div>
  );
}
