const Quiz = [
  {
    q: "What is the capital of New Zealand",
    a: "Wellington",
    options: ["Christchurch", "Auckland", "Wellington", "Hamilton"],
  },
  {
    q: "What is New Zealand’s official name in Maori",
    a: "Aotearoa",
    options: ["Otautahi", "Aotearoa", "Waimakariri", "Matapihi"],
  },
  {
    q: "What currency is used in New Zealand",
    a: "New Zealand Dollar",
    options: [
      "Zealand Dollar",
      "New Zealand Yen",
      "New Bills",
      "New Zealand Dollar",
    ],
  },
  {
    q: "What colours are on the flag of New Zealand",
    a: "Blue, red, white",
    options: [
      "Green, blue, red",
      "Blue, red, white",
      "red, black, white",
      "yellow, green, purple",
    ],
  },
  {
    q: "What are the two main political parties in New Zealand",
    a: "National and Labour",
    options: [
      "National and Labour",
      "Green and Labour",
      "Maori and National",
      "National and green",
    ],
  },
  {
    q: "What is the nickname given to New Zealanders",
    a: "Kiwis",
    options: ["Blokes", "Kiwis", "New Zealanders", "Aucklanders"],
  },
  {
    q: "Who was the first European to arrive in New Zealand",
    a: "Abel Tasman",
    options: ["James Cook", "Tame Iti", "John Lucifer", "Abel Tasman"],
  },
  {
    q: "Who is New Zealand’s monarch",
    a: "King Charles",
    options: [
      "Queen Elizabeth",
      "King Charles",
      "Queen Victoria",
      "King William",
    ],
  },
  {
    q: "How many official languages are there in NZ",
    a: "two Te reo Maori and New Zealand Sign Language",
    options: [
      "one english",
      "two Te reo Maori and New Zealand english",
      "one New Zealand Sign Language",
      "two Te reo Maori and New Zealand Sign Language",
    ],
  },
  {
    q: "What are the two national anthems of New Zealand",
    a: "God defend New Zealand and  God Save the Queen",
    options: [
      "God defend New Zealand and  God Save the Queen",
      "God saved New Zealand and  God defend the Queen",
      "God loves New Zealand and  God and the Queen",
      "God is great with New Zealand and  God Save the Queen",
    ],
  },
  {
    q: "How tall is Aoraki Mount Cook",
    a: "3,754 metres",
    options: ["3,518 metres", "3,754 metres", "3,945 metres", "4,289 metres"],
  },
  {
    q: "When did Captain Cook come to the islands",
    a: "1769",
    options: ["1709", "1739", "1769", "1799"],
  },
  {
    q: "When did New Zealand gain independence from Britain",
    a: "1947",
    options: ["1917", "1927", "1937", "1947"],
  },
  {
    q: "What animal can you find on a 1 dollar   coin",
    a: "Kiwi",
    options: ["Kakapo", "Seal", "Kiwi", "Takahe"],
  },
  {
    q: "In 1893, New Zealand became the first country to do what",
    a: "Give women the right to vote",
    options: [
      "Abolish slavery",
      "Legalise same-sex marriage",
      "Give women the right to vote",
      "Give workers paid holidays",
    ],
  },
  {
    q: "What is a Tuatara",
    a: "Reptile",
    options: ["Mammal", "Reptile", "Bird", "Insect"],
  },
  {
    q: "When was NZ Rugby Football Union founded",
    a: "1892",
    options: ["1852", "1872", "1892", "1902"],
  },
  {
    q: "When was New Zealand first Poppy Day",
    a: "1922",
    options: ["1922", "1932", "1943", "1953"],
  },
  {
    q: "What is the name of the strait that separates the North and South Islands",
    a: "Cook Strait",
    options: [
      "Cook Strait",
      "Tangariro Crossing",
      "Abel Tasman Strait",
      "Tasman Sea",
    ],
  },
  {
    q: "What is the largest lake in New Zealand",
    a: "Lake Taupo",
    options: ["Lake Brunner", "Lake Taupo", "Lake Wakatipu", "Lake Wanaka"],
  },
  {
    q: "What is the largest city in New Zealand",
    a: "Auckland",
    options: ["Wellington", "Hamilton", "Christchurch", "Auckland"],
  },
  {
    q: "What is the highest mountain peak in New Zealand",
    a: "Mount Cook",
    options: ["Mount Vancouver", "Mount Tasman", "Mount Cook", "Mount Dampier"],
  },
  {
    q: "How many regions are there in New Zealand",
    a: "16",
    options: ["15", "10", "19", "16"],
  },
  {
    q: "What is the largest glacier in New Zealand",
    a: "Tasman Glacier",
    options: [
      "Franz Joseph Glacier",
      "Tasman Glacier",
      "Fox Glacier",
      "Hooker Glacier",
    ],
  },
  {
    q: "What is the longest river in New Zealand",
    a: "Waikato River",
    options: [
      "Waimakariri River",
      "Whanganui River",
      "Waiau River",
      "Waikato River",
    ],
  },
  {
    q: "What is the name of the traditional New Zealand Maori   method of cooking food using heated rocks buried underground",
    a: "Hangi",
    options: ["Utu", "Umu", "Hangi", "Pangi"],
  },
  {
    q: "What NZ sweet is red sugar-coated chocolate balls with orange inside",
    a: "Jaffas",
    options: ["Jaffas", "Fruit Bursts", "Pinapple Lumps", "Toffe Apples"],
  },
  {
    q: "What kind of fish, only found in New Zealand, is a Paranephrops",
    a: "Freshwater crayfish",
    options: ["Perch", "Whitebait", "Freshwater crayfish", "Freshwater Trout"],
  },
  {
    q: "What does “L&P” stand for",
    a: "Lemon & Paeroa",
    options: [
      "Lemon & Pinapple",
      "Lime & paeroa",
      "Lemon & People",
      "Lemon & Paeroa",
    ],
  },
  {
    q: "Which desert do Australians and New Zealanders both claim   as their own",
    a: "Pavlova",
    options: ["Ambrosia", "Pavlova", "Lolly Cake", "Lamington"],
  },

  {
    q: "Which Prime Minister appointed someone the official “Wizard of New Zealand”",
    a: "Mike Moore",
    options: ["Helen Clarke", "John Key", "Mike Moore", "Bill English"],
  },
  {
    q: "Which NZ airport has a functional railway line crossing   the main runway",
    a: "Gisborne Airport",
    options: [
      "Napier Airport",
      "Queenstown Airport",
      "Hamilton Airport",
      "Gisborne Airport",
    ],
  },
  {
    q: "For which island did the New Zealand mint produce Pokemon coins",
    a: "Island of Niue",
    options: [
      "Chatham Islands",
      "Island of Niue",
      "Waiheke Island",
      "Stuart Island",
    ],
  },
  {
    q: "Where in New Zealand can you eat in a McDonalds located in a decommissioned DC3 plane",
    a: "Taupo",
    options: ["Taupo", "Tauranga", "Timaru", "Dunedin"],
  },
  {
    q: "During the 1983 Royal tour (with Prince Charles and Princess Diana), with which New Zealand iconic toy did Prince William play   with",
    a: "Buzzy Bee",
    options: ["Troll", "Care Bear", "kiwi Plushie", "Buzzy Bee"],
  },
  {
    q: "New Zealand is home to the town with the longest name in   the world. How many characters is the name",
    a: "85",
    options: ["106", "85", "77", "95"],
  },
  {
    q: "In the 2001 census, over 53,000 people marked “something”   as their religion. What was this something",
    a: "Jedi",
    options: ["Nomad", "Hippie", "Jedi", "Rastafarian"],
  },
];

export default Quiz;
