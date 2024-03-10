// import fifa from "@/public/works/fifa.png"

export type Work = {
    id: string;
    title: string;
    // description: string;
    motivation: string;
    implementation: string;
    discussion: string;
    difficulty: string;
    imageSrc: string;
    link: string;
    movielink: string;
    abst: string;
    category:string[]
  };

  const data: Work[] = [
    {
      id: "1",
      title: "FIFA22選手分析",
      motivation: "FIFA22というサッカーゲームにおける選手の能力値は「決定力」「加速」「シュート力」など34種類ととても多く，その能力から各選手の特徴を考えるのは難しい．そこで34次元を2次元に主成分分析により圧縮することで，二次元の情報から各選手の能力情報を掴めないかと考えた．",
      implementation: "スクレイピングはBeautifulSoupを用いた．",
      discussion: "ポジションで二次元プロットの位置が大体分かれた．また，34種類の能力がどのポジションに関わっているかも判明した．",
      difficulty: "",
      imageSrc: "/works/fifa.png",
      // imageSrc:{fifa},
      link : "https://github.com/yakicity/FIFA22/tree/main",
      movielink : "",
      abst: "FIFA22の選手能力値をスクレイピングし、主成分分析した。",
      category: ["python", "BeautifulSoup"],

    },
    {
      id: "2",
      title: "BirdGame",
      motivation: "None",
      implementation: "None",
      discussion: "None",
      difficulty: "None",
      imageSrc: "/works/birdgame.png",
      link : "https://github.com/yakicity/birdgame",
      movielink : "https://www.youtube.com/watch?v=TnUMHDJzIXw",
      abst: "東工大サークルのハッカソンで作成した。自分は主にUnity内の処理を担当した。",
      category: ["Unity","C#"]
    },
    {
      id: "3",
      title: "PianoTileGame",
      motivation: "None",
      implementation: "None",
      discussion: "None",
      difficulty: "None",
      imageSrc: "/works/pianotile.png",
      link : "https://github.com/yakicity/piano",
      movielink : "https://www.youtube.com/watch?v=qT1tfNehLds",
      abst: "Youtubeのピアノ動画から、ARピアノタイルゲームを作成するツールである。",
      category: ["python","opencv"]
    },
    {
      id: "4",
      title: "TASCHOLA",
      motivation: "None",
      implementation: "None",
      discussion: "None",
      difficulty: "None",
      imageSrc: "/works/taschola.png",
      link : "https://github.com/yakicity/piano",
      movielink : "",
      abst: "東工大の授業でチーム開発したタスク管理アプリケーション。自分はフロントエンドを担当した。",
      category: ["React","TypeScript"]
    },
  ];

  export default data;