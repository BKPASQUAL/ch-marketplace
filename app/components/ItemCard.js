import React from "react";
import Image from "next/image";  // ✅ Import Next.js Image

export default function ItemCard() {
  return (
    <div className="h-96 w-1/5  bg-amber-200 p-4">
      <div className="w-full h-48 relative">
        <Image 
          src="/images/3_gan.jpg" 
          alt="Item"
          layout="fill"  
          objectFit="cover"  
          className="rounded-md"
        />
      </div>
      <p className="mt-2 text-center">Item Name</p>
    </div>
  );
}
