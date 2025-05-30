export const QUIZ_CONTENT = {
  title: "世界の姿",
  data: [
    {
      id: "01",
      question: "ユーラシア大陸のうち、ヨーロッパ州を除いた部分と周辺の島々は何州？",
      answers: ["アジア州", "オセアニア州", "北アメリカ州", "アフリカ州"],
      correct: "アジア州",
      hint:"【州（しゅう）】→南極大陸以外の世界の国や地域を分けた区分。",
      explanation: "アジア州は世界の総人口の約6割を占める。日本もアジア州に含まれるよ！",
      image: "/questionImg/social02.png"
    },
    { 
      id: "02",
      question: "ユーラシア大陸のうち、西に向かって突き出た部分と周辺の島々は何州？",
      answers: ["アジア州", "ヨーロッパ州", "北アメリカ州", "アフリカ州"],
      correct: "ヨーロッパ州",
      hint:"【州（しゅう）】→南極大陸以外の世界の国や地域を分けた区分。",
      explanation: "イギリス、フランス、ドイツなどの国がある州だよ。ロシアはアジア州にもヨーロッパ州にも属しているね！",
      image: "/questionImg/social02.png"
    },
    { 
      id: "03",
      question: "オーストラリア大陸と周辺の太平洋の島々は何州？",
      answers: ["オセアニア州", "ヨーロッパ州", "北アメリカ州", "アフリカ州"],
      correct: "オセアニア州",
      hint:"【州（しゅう）】→南極大陸以外の世界の国や地域を分けた区分。",
      explanation: "オーストラリア州じゃないから注意！",
      image: "/questionImg/social02.png"
    },
    { 
      id: "04", 
      question: "世界にはおそよいくつの国がある？",
      answers: [ "60", "130","190", "270"], 
      correct: "190",
      hint:"【国（くに）】→独立国（どくりつこく）ともいう。国は土地がある、住む人がいる、自分たちで政治を行っていることが条件。ただし、他国に認められていないところは国として認められない。",
      explanation: "日本政府が認めている国は196か国で、国連という世界の機関に加盟している国は193か国だよ。ちょっと複雑！" ,
      image: ""
    },
    { 
      id: "05", 
      question: "海に面していない国のことを何という？", 
      answers: ["内陸国", "島国", "独立国", "国境"], 
      correct: "内陸国", 
      hint:"【内陸国(ないりくこく）】→海に面していない国。【島国（しまぐに）】→領土の周りを海に囲まれた国。【独立国（どくりつこく）】→国民、土地、政府を持つ他国に認められた国のこと。【国境（こっきょう）】→国と国の境（さかい）になるところ。",
      explanation: "世界には海がなく周りを他の国に囲まれた国、内陸国があるんだ。日本は海に囲まれた島国だね。" ,
      image: ""
    },
    { 
      id: "06", 
      question: "国と国の境のことを何という？", 
      answers: ["内陸国", "島国", "独立国", "国境"], 
      correct: "国境", 
      hint:"【内陸国(ないりくこく）】→海に面していない国。【島国（しまぐに）】…領土の周りを海に囲まれた国。【独立国（どくりつこく）】→国民、土地、政府を持つ他国に認められた国のこと。【国境（こっきょう）】…国と国の境（さかい）になるところ。",
      explanation: "海や山脈、川など自然の地形の隔（へだ）たりが国境になってる場所も多いけど、緯線や経線を使ったまっすぐな国境もあるんだ。" ,
      image: ""
    },
    { 
      id: "07", 
      question: "世界で一番面積の大きい国は？",
      answers: ["ロシア", "アメリカ", "カナダ", "中国"], 
      correct: "ロシア", 
      hint:"【国（くに）】→国は土地がある、住む人がいる、自分たちで政治を行っていることが条件（じょうけん）。ただし、他国に認められていないところは国として認められない。",
      explanation: "世界で最も大きい国はロシアで、２位はカナダ、３位はアメリカ、４位は中国だよ！" ,
      image: ""
    },
    { 
      id: "08", 
      question: "世界で一番面積の小さい国は？",
      answers: [ "バチカン市国", "日本","シンガポール", "イタリア"], 
      correct: "バチカン市国",
      hint:"【国（くに）】→国は土地がある、住む人がいる、自分たちで政治を行っていることが条件。ただし、他国に認められていないところは国として認められない。",
      explanation: "世界で最も小さい国はバチカン市国で、イタリアという国のローマという市の中にあるんだ！東京ディズニーランドより小さいよ！" ,
      image: ""
    },
    { 
      id: "09", 
      question: "チリとアルゼンチンの国境には何に沿って定められている？", 
      answers: ["山脈", "河川", "緯線・経線", "砂漠"], 
      correct: "山脈", 
      hint:"一見近い国だけど自然の壁があるね。【山脈（さんみゃく）】→山が連なっているところ。【河川（かせん）】→川のこと。【砂漠（さばく）】→雨がほとんど降らない乾燥した土地のこと。",
      explanation: "チリとアルゼンチンの間の山脈はアンデス山脈といって、とても険しい山脈なんだ。隣の国だけど、簡単には行き来できないね。" ,
      image: "/questionImg/social03.png"
    },
    { 
      id: "10", 
      question: "「オーストラリアなど、かつてイギリスの（　　）だった国の国旗にはイギリス国旗の一部が使われていることがある。」（　）に当てはまるのは？", 
      answers: ["国境", "植民地", "独立国", "ユニオンジャック"], 
      correct: "植民地", 
      hint:"【国旗（こっき）】→国のシンボルとなる旗。【植民地（しょくみんち）】→他国に支配された土地、地域。【ユニオンジャック】→イギリスの国旗のこと。【国境（こっきょう）】…国と国の境（さかい）になるところ。",
      explanation: "かつてイギリスの植民地であった地域では、言語もイギリスの言葉である英語が広く話されていることも多いよ！" ,
      image: ""
    },
  ]
}



