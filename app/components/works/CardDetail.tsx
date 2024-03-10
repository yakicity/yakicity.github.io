import Image from "next/image";
import { Work } from "../../data";

export default function CardDetail({ data }: { data: Work }) {
  return (
    <div className="p-10 w-full bg-white rounded-lg flex flex-col border-gray-600 border-2">
      <h1 className="text-[2rem] text-gray-900 mb-3 text-center">{data.title}</h1>
        <div className="flex items-center justify-center flex-wrap mb-3">
          {/* <a href={data.link} className="font-medium py-1 px-2 text-blue-600 dark:text-blue-500 hover:underline">Source Code</a> */}
          {data.link ? (
              // <span>
              //   <a href={data.link} className="font-medium py-1 px-2 text-blue-600 dark:text-blue-500 hover:underline  inline-flex items-center md:mb-2 lg:mb-0">Source Code
              //     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              //       <path d="M5 12h14M12 5l7 7-7 7"></path>
              //     </svg>
              //   </a>
              // </span>
              <span>
              <a href={data.link} className="inline-flex mr-3 items-center px-4 py-2 text-s font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700">
              Source Code
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
              </span>

            ) : (
              ""
            )}
          {data.movielink ? (
              // <span>
              //   <a href={data.movielink} className="font-medium py-1 px-2 text-blue-600 dark:text-blue-500 hover:underline">Youtube</a>
              // </span>
              <span>
              <a href={data.movielink} className="inline-flex items-center px-4 py-2 text-s font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700">
              Youtube
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
              </span>

            ) : (
              ""
            )}
        </div>
      <div className="flex justify-center">
      <Image
        alt=""
        src={data.imageSrc}
        height={450}
        width={600}
        className="col-span-2 mb-4"
      />
      </div>
      <div className="flex items-center justify-center flex-wrap ">
        {data.category.map((c,index) => (
          <span key={index} className="inline-block py-0.7 px-2 rounded bg-blue-700 text-white text-s font-medium tracking-widest mr-2 mb-1">{c}</span>
        ))}
      </div>
      <div>


        <div className="text-left container px-5 py-12 mx-auto">
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
    </div>
  );
}