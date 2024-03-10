import Image from "next/image";
import { Work } from "../../data";

export default function CardDetail({ data }: { data: Work }) {
  return (
    <div className="p-10 w-full bg-white rounded-lg flex flex-col items-center border-gray-600 border-2">
      <Image
        alt=""
        src={data.imageSrc}
        height={450}
        width={600}
        className="col-span-2 mb-6"
      />
      <div>
        <h2 className="text-[1.5rem] text-gray-900 mb-3 text-center">{data.title}</h2>
        <div className="flex items-center justify-center flex-wrap ">
        {data.category.map((c,index) => (
          <span key={index} className="inline-block py-1 px-2 rounded bg-blue-700 text-white text-s font-medium tracking-widest mr-2 mb-5">{c}</span>
        ))}
        </div>
        <div className="flex items-center justify-center flex-wrap">
          {/* <a href={data.link} className="font-medium py-1 px-2 text-blue-600 dark:text-blue-500 hover:underline">Source Code</a> */}
          {data.link ? (
              <span>
                <a href={data.link} className="font-medium py-1 px-2 text-blue-600 dark:text-blue-500 hover:underline">Source Code</a>
              </span>
            ) : (
              ""
            )}
          {data.movielink ? (
              <span>
                <a href={data.movielink} className="font-medium py-1 px-2 text-blue-600 dark:text-blue-500 hover:underline">Source Code</a>
              </span>
            ) : (
              ""
            )}
        </div>
        <h3 className="text-[1.5rem] w-[10rem] text-gray-900 border-b border-solid border-gray-400 mb-[0.5rem]">
            Motivation
        </h3>
        <p>{data.motivation}</p>
        <h3 className="text-[1.5rem] w-[10rem] text-gray-900 border-b border-solid border-gray-400 mb-[0.5rem] mt-[1rem]">
            Implementation
        </h3>
        <p>{data.implementation}</p>
        <h3 className="text-[1.5rem] w-[10rem] text-gray-900 border-b border-solid border-gray-400 mb-[0.5rem] mt-[1rem]">
            Discussion
        </h3>
        <p>{data.discussion}</p>
        {/* <h3 className="text-[1.5rem] w-[10rem] text-gray-900 border-b border-solid border-gray-400 mb-[0.5rem] mt-[1rem]">
            Difficulty
        </h3>
        <p>{data.difficulty}</p> */}
      </div>
    </div>
  );
}