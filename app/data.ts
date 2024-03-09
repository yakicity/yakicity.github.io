// import fifa from "@/public/works/fifa.png"

export type Work = {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    link: string;
    abst: string;
    category:string[]
  };

  const data: Work[] = [
    {
      id: "1",
      title: "FIFA22選手分析",
      description: "機械学習とスクレイピングの練習に，FIFA22というサッカーゲームにおけるサッカー選手の能力値を用いました．",
      imageSrc: "/works/fifa.png",
      // imageSrc:{fifa},
      link : "https://github.com/yakicity/FIFA22/tree/main",
      abst: "FIFA22の選手能力値をスクレイピングし、主成分分析した。",
      category: ["python"]
    },
    {
      id: "2",
      title: "BirdGame",
      description: "ここに説明が入ります",
      imageSrc: "/works/birdgame.png",
      link : "https://github.com/yakicity/birdgame",
      abst: "東工大サークルのハッカソンで作成した。自分は主にUnity内の処理を担当した。",
      category: ["Unity","C#"]
    },
    {
      id: "3",
      title: "PianoTileGame",
      description: "ここに説明が入ります",
      imageSrc: "/works/pianotile.png",
      link : "https://github.com/yakicity/piano",
      abst: "Youtubeのピアノ動画から、ARピアノタイルゲームを作成するツールである。",
      category: ["python","opencv"]
    },
    {
      id: "4",
      title: "TASCHOLA",
      description: "ここに説明が入ります",
      imageSrc: "/works/taschola.png",
      link : "https://github.com/yakicity/piano",
      abst: "東工大の授業でチーム開発したタスク管理アプリケーション。自分はフロントエンドを担当した。",
      category: ["React","TypeScript"]
    },
  ];

  export default data;