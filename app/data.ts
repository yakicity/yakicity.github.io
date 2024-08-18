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
    githublink: string;
    movielink: string;
    detaillink: string[];
    abst: string;
    category:string[]
  };

  const data: Work[] = [
    {
      id: "1",
      title: "目元周辺画像から顔認証を行うモデルの作成",
      description: "KAISTのIBSに研究留学中、目元周辺画像から顔の識別を行うモデルをメンターと共に作成した。",
      motivation: "新型コロナウイルスの流行により、マスク着用が一般化したため、マスクをつけた状態での顔認証が必要となった。そこで従来の顔のマッチングではなく、目元周辺画像と顔の特徴を照合するモデルを作成したい。",
      implementation: "バックボーンには、ImageNetとVGGFace2で事前学習されたResNet-50で、出力を1024次元の特徴量としたモデルを用いた。バックボーンのBatch Normalization層と、分類器のみ学習した。損失関数にはトリプレットロスを用いた。",
      difficulty: "メンターと英語で会話しながら研究することが困難であった。",
      discussion: "分類器は顔用と目元画像用で二つに分けず、一つにした方が顔-目元画像のマッチング精度は高かった。しかし顔-顔マッチングや目元画像-目元画像マッチング精度は、分類器二つの方が高かった。",
      imageSrc: ["/works/ibs/tsne.png"],
      subImageSrc: ["/works/ibs/1model.png","/works/ibs/2dataset.png","/works/ibs/3result1.png","/works/ibs/3result2.png","/works/ibs/3result3.png","/works/ibs/3result4.png","/works/ibs/3result5.png"],
      subImageDescription: [""],
      githublink : "",
      movielink : "",
      detaillink: ["https://drive.google.com/file/d/1objBSWLjoeXacgpi0lXr02sLwAHFei31/view?usp=drive_link"],
      abst: "KAISTへの研究留学でメンターと共に行った研究。韓国の国内学会に論文を提出した。",
      category: ["Python","Pytorch"]
    },
    {
      id: "2",
      title: "対戦ゲームAI",
      description: "簡単なスマブラ風ゲームを作成し、強化学習(PPO)を用いてゲームAIを学習した。また模倣学習によっても同様に学習した。ゲームはとても簡単な仕様であり、移動(左右とジャンプ)と攻撃のみ対応している。",
      motivation: "サッカーAIを作成するための学習材料として、簡単なゲームで強化学習・模倣学習を学びたかったため。",
      implementation: "(強化学習) \nエージェントは環境から11つの変数(距離_x,距離_y,p1_x,p1_y,p2_x,p2_x,攻撃範囲かどうか、p1_硬直時間、p2_硬直時間,p1_ダメージ量,p2_ダメージ量)を受け取る。エージェントはこれを元に「攻撃するorしない」と「移動方向(左右上)か移動しない」を選択する。エージェントが環境から受け取る即時報酬は「攻撃する(+4),攻撃される(-3),勝利(+10),敗北(-10),距離xに応じてマイナス(-dist_x / 500),終了していないならマイナス(-0.01)」である。\n(模倣学習) \nエージェントは環境から12つの変数(距離_x,距離_y,p1_硬直時間、p2_硬直時間,p1_向き、p2_向き,p1とミサイルとの距離(3種類),p2とミサイルとの距離(3種類))を受け取る。",
      difficulty: "強化学習では報酬設計がとても難しい。",
      discussion: "報酬の与え方でAIの挙動が変わることが学べて楽しかった。今は攻撃の種類が一種類だけなので、種類を増やしたり、シールドを追加したりして、よりスマブラに近いゲームでAIを学習したい。",
      imageSrc: ["/works/fight/fight.png"],
      subImageSrc: [""],
      subImageDescription: [""],
      githublink : "https://github.com/yakicity/fighting",
      movielink : "https://www.youtube.com/watch?v=OjROqpjT-_I",
      detaillink: [""],
      abst: "強化学習・模倣学習でゲームAIを作成した。",
      category: ["Python","Pytorch","Pygame"]
    },
    {
      id: "3",
      title: "BirdGame",
      description: "学内サークルのハッカソンでFlappy Birdのようなゲームをチームで作成した。鳥の羽をキーボードで操作することにより、前から迫り来る障害物を避けながらスコアを伸ばすゲームである。プログラム担当。",
      motivation: "前方からの敵を避けるだけでなく、2Dモードと3Dモードによる視点切り替えにより、横方向からの敵を避ける必要がある「立体的なFlappy Bird」を作成したかった。",
      implementation: "",
      difficulty: "1週間という短期間での開発。",
      discussion: "はじめにクラス設計を行ったことでスムーズな開発ができた。",
      imageSrc: ["/works/birdgame/birdgame1.png"],
      subImageSrc: ["/works/birdgame/birdgame2.png","/works/birdgame/birdgame3.png"],
      subImageDescription: ["3D視点","2D視点"],
      githublink : "https://github.com/yakicity/birdgame",
      movielink : "https://www.youtube.com/watch?v=TnUMHDJzIXw",
      detaillink: [""],
      abst: "東工大サークルのハッカソンで作成.主にUnity内の処理を担当.",
      category: ["Unity","C#"]
    },
    {
      id: "4",
      title: "PianoTileGame",
      description: "上から流れてくるタイルに合わせてピアノを弾くことで、楽譜を読まずに弾きたい曲が弾けるようになるARピアノタイルゲームを作成した。",
      motivation: "楽譜を読むことなくピアノを弾きたい。",
      implementation: "曲のピアノタイル情報は、Youtubeの動画をOpenCVで画像解析することで得た。正しく鍵盤を弾けているかを判断するため、天井に配置されたカメラで鍵盤を撮影し、深層学習を用いてリアルタイムで自分の手の位置を解析している。",
      difficulty: "Youtube動画を安定して解析するため、一度動画をHSV変換する必要があった。",
      discussion: "特定のYoutube動画にしか対応していないものの、目的は達成することができた。",
      imageSrc: ["/works/piano/pianotile.png"],
      subImageSrc: ["/works/piano/piano2.png"],
      subImageDescription: [""],
      githublink : "https://github.com/yakicity/piano",
      movielink : "https://www.youtube.com/watch?v=qT1tfNehLds",
      detaillink: [""],
      abst: "Youtubeのピアノ動画から、ARピアノタイルゲームを作成するツールである。",
      category: ["python","opencv"]
    },
    {
      id: "5",
      title: "FIFA22選手分析",
      description: "",
      motivation: "FIFA22というサッカーゲームにおける選手の能力値は「決定力」「加速」「シュート力」など34種類ととても多く、それらすべての能力から各選手の特徴を考えるのは難しい。そこで34次元を2次元に主成分分析により圧縮することで、二次元の情報から各選手を評価できないかと考えた。",
      implementation: "スクレイピングはBeautifulSoupを用いた。主成分分析はScikit-learnを用いた。",
      difficulty: "画像の情報はスクレイピングできないため、スクレイピングできる情報量が多いサイトを見つけることが困難であった。",
      discussion: "ポジションで二次元プロットの位置が大体分かれた。また、34種類の能力がどのポジションに関わっているかも判明した。",
      imageSrc: ["/works/fifa/fifa.png"],
      subImageSrc: ["/works/fifa/pca.png"],
      subImageDescription: [""],
      githublink : "https://github.com/yakicity/FIFA22/tree/main",
      movielink : "",
      detaillink: [""],
      abst: "FIFA22の選手能力値をスクレイピングし、主成分分析した。",
      category: ["python", "BeautifulSoup", "Scikit-learn"],

    },
    {
      id: "6",
      title: "Quorumでネットワーク作成",
      description: "インターン先で行ったブロックチェーンの調査として、Quorumによる社内ネットワークの作成と、簡単なトランザクションの発行を行った。",
      motivation: "",
      implementation: "ネットワーク作成にはQuorum、プライベートトランザクションに対するアクセス制御にはTessera、コントラクトはSolidityを使用した。",
      difficulty: "jsonファイルに1行でも抜けがあるだけで、うまくトランザクションが発行されないこと。",
      discussion: "",
      imageSrc: ["/detail/quorum_detail/Untitled 2.png"],
      subImageSrc: [""],
      subImageDescription: [""],
      githublink : "https://github.com/yakicity/quorum_raft",
      movielink : "",
      detaillink: ["/works/6/detail"],
      abst: "インターンで行ったブロックチェーン調査。",
      category: ["Solidity", "JavaScript"]
    },
    {
      id: "7",
      title: "TASCHOLA",
      description: "東工大の授業でチーム開発したタスク管理アプリケーション。自分はフロントエンドを担当した。",
      motivation: "",
      implementation: "Next.js・TypeScript・Tailwind CSSを用いた。",
      difficulty: "",
      discussion: "",
      imageSrc: ["/works/taschola/taschola1.png"],
      subImageSrc: ["/works/taschola/taschola2.png","/works/taschola/taschola3.png","/works/taschola/taschola4.png","/works/taschola/taschola5.png"],
      subImageDescription: ["ログインページ","サインアップページ","新規タスク作成ページ","タスクページ"],
      githublink : "https://github.com/yakicity/TASCHOLA",
      movielink : "",
      detaillink: [""],
      abst: "ログイン機能付きのタスク管理アプリである。",
      category: ["Next.js","TypeScript","Tailwind CSS"]
    },
    {
      id: "8",
      title: "数独を解く",
      description: "数独・nクイーン問題を解くプログラム.",
      motivation: "命題論理が数独やnクイーン問題に応用できると知り、試してみたかった。",
      implementation: "",
      difficulty: "",
      discussion: "",
      imageSrc: ["/works/noimage.png"],
      subImageSrc: [""],
      subImageDescription: [""],
      githublink : "https://github.com/yakicity/minisat_python",
      movielink : "",
      detaillink: [""],
      abst: "数独・nクイーン問題を命題論理を用いて解く。",
      category: ["Python"]
    },
  ];

  export default data;