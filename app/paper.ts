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
    paperlink: string;
    slidelink: string;
    track: string;
    abst: string;
    category:string[]
  };

  const data: Paper[] = [
    {
      id: "1",
      title: "MR MANE: MR Microsurgical Suturing Skill Acquisition for Novice Using Imitation of Example",
      description: "研究では、脳神経外科における医療技術訓練を効率化する拡張現実システムを開発した。システム開発にあたり、95%の精度で医療器具をリアルタイムで検知する機械学習モデルを作成した。また、「システムは効率的な訓練を可能にする」という仮説を検証するため10名の被験者実験を行った。定量・定性評価の結果から、仮説は支持された。",
      conference: "AVI2024",
      implementation: "",
      difficulty: "研究で苦労した点は、医療技術訓練において課題を見つけ、それに対処すべくシステムを開発したことである。まず課題発見のため医師にインタビューを行い、現在行われている単独での訓練は熟練者からのアドバイスを受けられず学習効率が低いという課題を明らかにした。課題解決のため、拡張現実を用いて熟練者がそばにいる状況を再現するシステムを開発した。熟練者がそばにいる状況では、訓練者は熟練者の手本を観察でき、熟練者から自分の間違いを指導される。この状況を現在の単独の訓練で再現するため、医療分野外でのARの研究事例を参考にし、熟練者の映像の重畳表示・熟練者の医療器具の扱い方との差分フィードバック、という2つの機能を拡張現実で実現した。",
      discussion: "研究を通して、他の分野で課題解決に用いられたアイデアを自身のドメインで使用することが、課題解決において重要なことだと学ぶことができた。",
      imageSrc: ["/works/paper/avi2024.png"],
      subImageSrc: [""],
      subImageDescription: [""],
      paperlink : "https://dl.acm.org/doi/10.1145/3656650.3656660",
      slidelink : "https://drive.google.com/file/d/1xY45IUw6o-tIr6cEf2HxCQJV4HHJOkeK/view?usp=sharing",
      track : "short paper",
      abst: "2024年6月にイタリアで開かれたAVI2024でショート発表を行った。",
      category: ["python","unity"],
    },
    {
      id: "2",
      title: "影真似を用いた顕微鏡縫合における器具姿勢学習システム",
      description: "",
      conference: "WISS2023",
      implementation: "",
      difficulty: "",
      discussion: "",
      imageSrc: ["/works/paper/wiss.png"],
      subImageSrc: [""],
      subImageDescription: [""],
      paperlink : "https://www.wiss.org/WISS2023Proceedings/data/2-B03.pdf",
      slidelink : "",
      track : "poster",
      abst: "2023年12月に山梨で開かれたWISS2023でポスター発表を行った。",
      category: ["python","unity"],
    },
    {
      id: "3",
      title: "MR縫合訓練システムにおける器具姿勢教示手法",
      description: "",
      conference: "卒論",
      implementation: "",
      difficulty: "",
      discussion: "",
      imageSrc: ["/works/paper/sotsuron.png"],
      subImageSrc: [""],
      subImageDescription: [""],
      paperlink :"",
      slidelink : "https://drive.google.com/file/d/1fv9Iytc3qpwXk5-Zul9-hZ9HbAL3Jovv/view?usp=sharing",
      track : "",
      abst: "学部四年に行った卒論発表のスライド",
      category: ["python","unity"],
    },
  ];

  export default data;