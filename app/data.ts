// import fifa from "@/public/works/fifa.png"

export type Work = {
    id: string;
    title: string;
    // description: string;
    description: string;
    motivation: string;
    implementation: string;
    difficulty: string;
    discussion: string;
    imageSrc: string[];
    subImageSrc: string[];
    subImageDescription: string[];
    link: string;
    movielink: string;
    abst: string;
    category:string[]
  };

  const data: Work[] = [
    {
      id: "1",
      title: "FIFA22選手分析",
      description: "",
      motivation: "FIFA22というサッカーゲームにおける選手の能力値は「決定力」「加速」「シュート力」など34種類ととても多く，それらすべての能力から各選手の特徴を考えるのは難しい．そこで34次元を2次元に主成分分析により圧縮することで，二次元の情報から各選手を評価できないかと考えた．",
      implementation: "スクレイピングはBeautifulSoupを用いた．",
      difficulty: "",
      discussion: "ポジションで二次元プロットの位置が大体分かれた．また，34種類の能力がどのポジションに関わっているかも判明した．",
      imageSrc: ["/works/fifa.png"],
      subImageSrc: [""],
      subImageDescription: [""],
      link : "https://github.com/yakicity/FIFA22/tree/main",
      movielink : "",
      abst: "FIFA22の選手能力値をスクレイピングし、主成分分析した。",
      category: ["python", "BeautifulSoup"],

    },
    {
      id: "2",
      title: "BirdGame",
      description: "学内サークルのハッカソンでFlappy Birdのようなゲームをチームで作成した．鳥の羽をキーボードで操作することにより，前から迫り来る障害物を避けながらスコアを伸ばすゲームである．プログラム担当．ゲームバランスの調整を行う時間がなかったため激ムズ仕様となっている．",
      motivation: "前方からの敵を避けるだけでなく，2Dモードと3Dモードによる視点切り替えにより，横方向からの敵を避ける必要がある「立体的なFlappy Bird」を作成したかった．",
      implementation: "",
      difficulty: "",
      discussion: "はじめにクラス設計を行ったことでスムーズな開発ができた．",
      imageSrc: ["/works/birdgame/birdgame1.png"],
      subImageSrc: ["/works/birdgame/birdgame2.png","/works/birdgame/birdgame3.png"],
      subImageDescription: ["3D視点","2D視点"],
      link : "https://github.com/yakicity/birdgame",
      movielink : "https://www.youtube.com/watch?v=TnUMHDJzIXw",
      abst: "東工大サークルのハッカソンで作成した。自分は主にUnity内の処理を担当した。",
      category: ["Unity","C#"]
    },
    {
      id: "3",
      title: "PianoTileGame",
      description: "上から流れてくるタイルに合わせてピアノを弾くことで，楽譜を読まずに弾きたい曲が弾けるようになるARピアノタイルゲームを作成した．",
      motivation: "楽譜を読むことなくピアノを弾きたい．",
      implementation: "曲のピアノタイル情報は，Youtubeの動画をOpenCVで画像解析することで得た．正しく鍵盤を弾けているかを判断するため，天井に配置されたカメラで鍵盤を撮影し，深層学習を用いてリアルタイムで自分の手の位置を解析している．",
      difficulty: "Youtube動画を安定して解析するため，一度動画をHSV変換する必要があった．",
      discussion: "特定のYoutube動画にしか対応していないものの，目的は達成することができた．",
      imageSrc: ["/works/pianotile.png"],
      subImageSrc: [""],
      subImageDescription: [""],
      link : "https://github.com/yakicity/piano",
      movielink : "https://www.youtube.com/watch?v=qT1tfNehLds",
      abst: "Youtubeのピアノ動画から、ARピアノタイルゲームを作成するツールである。",
      category: ["python","opencv"]
    },
    {
      id: "4",
      title: "TASCHOLA",
      description: "None",
      motivation: "None",
      implementation: "None",
      difficulty: "None",
      discussion: "None",
      imageSrc: ["/works/taschola.png"],
      subImageSrc: [""],
      subImageDescription: [""],
      link : "https://github.com/yakicity/piano",
      movielink : "",
      abst: "東工大の授業でチーム開発したタスク管理アプリケーション。自分はフロントエンドを担当した。",
      category: ["React","TypeScript"]
    },
  ];

  export default data;