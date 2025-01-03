export default function ProductCard({ name, price, image, specs }) {
  // Convert specs string into an array if it's not already an array
  const specsArray = typeof specs === "string" ? specs.split(",").map((s) => s.trim()) : specs;

  return (
    <div className="flex flex-col justify-center items-center rounded-lg shadow-md overflow-hidden bg-gray-50 dark:bg-[#1F2937] border-2 border-[#343E4E]">
      {image && (
        <div className="relative w-full">
          <img src={image} alt={name} fill="true" className="object-cover p-2" />
        </div>
      )}
      <div className="p-2 flex-grow flex flex-col">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-md font-bold mb-2">${price.toFixed(2)}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {specsArray.map((spec, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
      <button
        className="bg-[#4F46E5] w-11/12 h-10 mx-12 rounded-md mb-4"
        type="submit"
      >
        Do Some Random Shit
      </button>
    </div>
  );
}
