import ItemCard from "./ItemCard";

export default function LatestItems() {
  return (
    <div className="mx-10">
      <div className="flex flex-row justify-between my-6">
        <h1 className="text-2xl font-bold ">Latest Items</h1>
        <h1 className="text-lg text-blue-800 ">See more</h1>
      </div>
      <div className="flex flex-row justify-between gap-4">
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
      </div>
    </div>
  );
}
