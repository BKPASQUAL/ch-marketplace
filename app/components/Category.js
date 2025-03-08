import React from "react";
import CategoryCard from "./CategoryCard";

export default function Category() {
  return (
    <div className="mx-[10%]">
      <div className="my-6 text-3xl font-bold  ">Categeries</div>
      <div className="flex flex-row gap-6">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}
