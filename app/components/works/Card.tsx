import Link from "next/link";
import Image from "next/image";

export default function Card({
  id,
  title,
  imageSrc,
  abst,
  category,
}: {
  id: string;
  title: string;
  imageSrc: string;
  abst: string;
  category: string[];
}) {
  return (
    <div className="p-4 md:w-1/3">
    <div className="h-full border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
    <Link href={`/works/${id}`}>
      <div className="bg-white px-5 pt-5 pb-5 rounded-lg">
        <Image alt="" src={imageSrc} height={300} width={400} className="lg:h-48 md:h-36 w-full object-cover object-center"/>
        <div className="p-6">
          {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{title}</h2> */}
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{abst}</p>
        </div>
        <div className="flex items-center flex-wrap ">
          {category.map((c,index) => (
            <span key={index} className="inline-block py-1 px-2 rounded bg-blue-600 text-white text-s font-medium tracking-widest mr-2">{c}</span>
          ))}
        </div>
      </div>
    </Link>
    </div>
    </div>
  );
}
