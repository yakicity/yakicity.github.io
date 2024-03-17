import Link from "next/link";
import Image from "next/image";

export default function PaperCard({
  id,
  title,
  conference,
  track,
  imageSrc,
  category,
}: {
  id: string;
  title: string;
  conference: string;
  track: string;
  imageSrc: string;
  category: string[];
}) {
  return (
    <div className="p-4 md:w-1/3">
    <div className="h-full border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
    <Link href={`/works/paper${id}`}>
      <div className="bg-white px-5 pt-5 pb-5 rounded-lg">
        <div className="flex items-center flex-wrap">
          <span className="inline-block py-1 px-2 rounded bg-purple-50 text-gray-900 text-lg font-medium tracking-widest mr-2 mb-2">{conference}-{track}</span>
          {/* <span className="inline-block py-1 px-2 rounded bg-purple-50 text-purple-500 text-s font-medium tracking-widest mr-2 mb-2">{track}</span> */}
            {/* <span className="inline-block py-1 px-2 rounded bg-blue-600 text-white text-s font-medium tracking-widest mr-2 mb-2">{conference}</span>
            <span className="inline-block py-1 px-2 rounded bg-blue-600 text-white text-s font-medium tracking-widest mr-2 mb-2">{track}</span> */}
        </div>
        <Image alt="" src={imageSrc} height={300} width={400} className="lg:h-48 md:h-36 w-full object-cover object-center"/>
        <div className="p-6">
          {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{title}</h2> */}
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
        </div>
        <div className="flex items-center flex-wrap ">
          {category.map((c,index) => (
            <span key={index} className="inline-block py-1 px-2 rounded bg-blue-600 text-white text-s font-medium tracking-widest mr-2 mb-2">{c}</span>
          ))}
        </div>
      </div>
    </Link>
    </div>
    </div>
  );
}
