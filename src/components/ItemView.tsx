import Carousel from "./Carousel";
import Image from "next/image";
import { Item } from "@/assets/items";

export default function ItemView({ name, image, description, url }: Item) {
  return (
    <div className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-md gap-8 justify-start">
      {"length" in image && image.length > 0 && <Carousel images={image} />}
      {"src" in image && (
        <Image
          src={image}
          alt={name}
          className="w-full h-auto border shadow-lg rounded-t-lg"
        />
      )}
      <div className="flex flex-col">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2 className="text-blue-500 underline hover:text-blue-600 text-xl font-bold">
            {name}
          </h2>
        </a>
        <p className="mt-2 text-sm text-neutral-600">{description}</p>
      </div>
    </div>
  );
}
