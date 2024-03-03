export type Work = {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    link: string;
    abst: string;
  };

  const data: Work[] = [
    {
      id: "1",
      title: "Work 01",
      description:
        "this is desctiption",
      imageSrc: "/works/fifa.png",
      link : "https://github.com/yakicity/FIFA22/tree/main",
      abst: "this is abst",
    },
    {
      id: "2",
      title: "Work 02",
      description: "ここに説明が入ります",
      imageSrc: "/works/fifa.png",
      link : "https://github.com/yakicity/FIFA22/tree/main",
      abst: "this is abst",
    },
  ];

  export default data;