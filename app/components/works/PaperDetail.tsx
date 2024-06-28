import Image from "next/image";
import { Paper } from "../../paper";

export default function CardDetail({ data }: { data: Paper }) {
  return (
    <div className="p-10 w-full bg-white rounded-lg flex flex-col border-gray-600 border-2">
        <div className="flex items-center flex-wrap">
          <span className="inline-block py-1 px-2 rounded bg-purple-50 text-gray-900 text-lg font-medium tracking-widest mr-2 mb-2">{data.conference}-{data.track}</span>
          {/* <span className="inline-block py-1 px-2 rounded bg-purple-50 text-purple-500 text-s font-medium tracking-widest mr-2 mb-2">{track}</span> */}
            {/* <span className="inline-block py-1 px-2 rounded bg-blue-600 text-white text-s font-medium tracking-widest mr-2 mb-2">{conference}</span>
            <span className="inline-block py-1 px-2 rounded bg-blue-600 text-white text-s font-medium tracking-widest mr-2 mb-2">{track}</span> */}
        </div>
      <h1 className="text-[2rem] text-gray-900 mb-3 text-center">{data.title}</h1>
        <div className="flex items-center justify-center flex-wrap mb-3">
          {/* <a href={data.githublink} className="font-medium py-1 px-2 text-blue-600 dark:text-blue-500 hover:underline">Source Code</a> */}
          {data.paperlink ? (
              <span>
              <a href={data.paperlink} className="inline-flex mr-3 mb-2 items-center px-4 py-2 text-s font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700">
              Paper-link
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </a>
              </span>

            ) : (
              ""
            )}
          {data.slidelink ? (
              <span>
              <a href={data.slidelink} className="inline-flex mr-3 mb-2 items-center px-4 py-2 text-s font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700">
              Slide-link
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
          src={data.imageSrc[0]}
          height={450}
          width={600}
          className="lg:w-full col-span-2 mb-4"
        />
      </div>
      <div className="flex items-center justify-center flex-wrap ">
        {data.category.map((c,index) => (
          <span key={index} className="inline-block py-0.7 px-2 rounded bg-blue-700 text-white text-s font-medium tracking-widest mr-2 mb-1">{c}</span>
        ))}
      </div>


        <div className="text-left container px-5 py-12 mx-auto">
          {data.description ? (
            <div>
              <h3 className="text-[1.5rem] w-[10rem] text-gray-900 border-b border-solid border-gray-400 mb-[0.5rem]">
                Description
              </h3>
              <p>{data.description}</p>
            </div>
            ) : (
              ""
            )
          }
          {data.implementation ? (
            <div>
              <h3 className="text-[1.5rem] w-[10rem] text-gray-900 border-b border-solid border-gray-400 mt-6 mb-[0.5rem]">
                Implementation
              </h3>
              <p>{data.implementation}</p>
            </div>
            ) : (
              ""
            )
          }
          {data.difficulty ? (
            <div>
              <h3 className="text-[1.5rem] w-[10rem] text-gray-900 border-b border-solid border-gray-400 mt-6 mb-[0.5rem]">
                Difficulty
              </h3>
              <p>{data.difficulty}</p>
            </div>
            ) : (
              ""
            )
          }
          {data.discussion ? (
            <div>
              <h3 className="text-[1.5rem] w-[10rem] text-gray-900 border-b border-solid border-gray-400 mt-6 mb-[0.5rem]">
                Discussion
              </h3>
              <p>{data.discussion}</p>
            </div>
            ) : (
              ""
            )
          }
        </div>

        {data.subImageSrc[0] ? (
          <div>
            {data.subImageSrc.map((img,index) => (
            <div key={index} >
            <div className="flex justify-center">
              <Image
              alt=""
              src={img}
              height={600}
              width={800}
              className="col-span-2 mb-2"
              />
            </div>
              <h2 className="flex-wrap text-[0.8rem] text-center text-gray-700 mb-10">{data.subImageDescription[index]}</h2>
            </div>
          ))}
          </div>
            ) : (
              ""
            )}
      </div>
  );
}