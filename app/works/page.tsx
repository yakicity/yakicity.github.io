import swagData from "../data";

import Image from 'next/image'
import Link from 'next/link';

import Card from "../components/works/Card";

export default function Works() {
  const data = swagData;
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">

        {data.map(({ id, title, imageSrc, abst,category,link }) => (
          <Card key={id} id={id} title={title} imageSrc={imageSrc} abst={abst} category={category} link={link}></Card>
        ))}
      </div>
        </div>


  );
}