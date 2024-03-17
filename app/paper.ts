// import fifa from "@/public/works/fifa.png"

export type Paper = {
    id: string;
    title: string;
    // description: string;
    description: string;
    conference: string;
    implementation: string;
    difficulty: string;
    discussion: string;
    imageSrc: string[];
    subImageSrc: string[];
    subImageDescription: string[];
    link: string;
    track: string;
    abst: string;
    category:string[]
  };

  const data: Paper[] = [
    {
      id: "1",
      title: "影真似を用いた顕微鏡縫合における器具姿勢学習システム",
      description: "",
      conference: "WISS2023",
      implementation: "",
      difficulty: "",
      discussion: "",
      imageSrc: ["/works/noimage.png"],
      subImageSrc: [""],
      subImageDescription: [""],
      link : "https://www.wiss.org/WISS2023Proceedings/data/2-B03.pdf",
      track : "poster",
      abst: "",
      category: ["python","unity"],
    },
    {
      id: "2",
      title: "MR MANE: MR Microsurgical Suturing Skill Acquisition for Novice Using Imitation of Example",
      description: "",
      conference: "AVI2024",
      implementation: "",
      difficulty: "",
      discussion: "",
      imageSrc: ["/works/noimage.png"],
      subImageSrc: [""],
      subImageDescription: [""],
      link : "",
      track : "short paper",
      abst: "",
      category: ["python","unity"],
    },
  ];

  export default data;