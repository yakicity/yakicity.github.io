import swagData from "../data";
import swagPaper from "../paper";

import Image from 'next/image'
import Link from 'next/link';

import Card from "../components/works/Card";
import PaperCard from "../components/works/PaperCard";

export default function Works() {
  const data = swagData;
  const paper = swagPaper;
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0  mt-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">研究</h1>
          <div className="h-1 w-1/6 bg-indigo-500 rounded"></div>
        </div>
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            {paper.map(({ id, title, imageSrc, conference,track,category}) => (
              <PaperCard key={id} id={id} title={title} imageSrc={imageSrc[0]} conference={conference} track={track} category={category}></PaperCard>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 mt-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">作品集</h1>
          <div className="h-1 w-1/6 bg-indigo-500 rounded"></div>
        </div>
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map(({ id, title, imageSrc, abst,category}) => (
              <Card key={id} id={id} title={title} imageSrc={imageSrc[0]} abst={abst} category={category}></Card>
            ))}
          </div>
        </div>

        </div>


  );
}