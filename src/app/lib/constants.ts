import { ValueOf } from "next/dist/shared/lib/constants";
import { Categories, Lista } from "../components/Common/types/common.types";
import { Reflection } from "../components/Reflections/types/reflections.types";

export const LOCALES: string[] = [
  "en",
  "es",
  "ar",
  "he",
  "pt",
  "uk",
  "fa",
  "ja",
  "yi",
  "fr",
  "tr",
  "hu",
  "ym",
  "gd",
];

export const LOCALES_LIVE: string[] = ["en", "es", "ar"];

export const LOCALES_CONST = {
  EN: "en",
  ES: "es",
  AR: "ar",
} as const;

export const convertIdioma: { [key in string]: string } = {
  en: "en",
  es: "es",
  ع: "ar",
  א: "he",
  pt: "pt",
  ук: "uk",
  د: "fa",
  あ: "ja",
  yi: "yi",
  fr: "fr",
  ç: "tr",
  ű: "hu",
  ŋ: "ym",
  gd: "gd",
};

export const TYPES: string[] = [
  "midnight cache",
  "こわれた日",
  "404",
  "دلتنگی قدیمی",
  "ayer no",
  "זיכרון",
  "غلط في اسمي",
];

export const TOPICS: string[] = [
  "só ruído",
  "مش دلوقتي",
  "bitmez",
  "שפּעט נאַכט",
  "bòidhchead",
  "я знову синя",
];

export type LocaleValue = ValueOf<typeof LOCALES_CONST>;
export const COLORS: string[] = ["maroon", "gris", "mar"];
export const FEED: `0x${string}` = "0x90139c418Ea313552C31A1528bD25da54f7fE948";
export const GROVE_GATEWAY: string = "https://api.grove.storage/";

export const STREAM: string = "https://stream.radiolarrakia.org/studio1";

export const LISTA: Lista[] = [
  {
    main: {
      en: "Spanish",
      es: "Español",
      ar: "الإسباني",
    },
    sub: [
      {
        titulo: "Bomba Estéreo - Algo Está Cambiando",
        enlace: "https://www.youtube.com/watch?v=hxj1NK4bZhQ",
      },
      {
        titulo: "Café Tacvba - Olita Del Altamar",
        enlace: "https://www.youtube.com/watch?v=RNP6qczhwaU",
      },
      {
        titulo: "Celest - Fantasmas",
        enlace: "https://www.youtube.com/watch?v=CjUV2BVsA0E",
      },
      {
        titulo: "Reyno Banda - Pacífico",
        enlace: "https://www.youtube.com/watch?v=6JgD2mhLEJ0",
      },
      {
        titulo: "Casero - Cuanto Más",
        enlace: "https://www.youtube.com/watch?v=3sLCSND6Bvw",
      },
      {
        titulo: "Lee Eye - Gata",
        enlace: "https://www.youtube.com/watch?v=_3DpzF2pIbI",
      },
      {
        titulo: "Sin Tiempo - MIA",
        enlace: "https://www.youtube.com/watch?v=ds0n2sDjSvI",
      },
      {
        titulo: "Malmö 040, Ciao Marina - La Última Canción",
        enlace: "https://www.youtube.com/watch?v=ZAqHFTQjj10",
      },
      {
        titulo: "Pau Laggies - niño azul",
        enlace: "https://www.youtube.com/watch?v=sch4ayio_5Q",
      },
      {
        titulo: "Amaia, Rojuu - Quiero Pero No",
        enlace: "https://www.youtube.com/watch?v=dh4RCxye4gs",
      },
      {
        titulo: "BRATTY - tdbn",
        enlace: "https://www.youtube.com/watch?v=V5eMrooTH1U",
      },
      {
        titulo: "FAZ - Queriéndote de más",
        enlace: "https://www.youtube.com/watch?v=zqZPkXCrxxE",
      },
      {
        titulo: "Tres Coronas, Michael Stuart – Mi Tumbao",
        enlace: "https://www.youtube.com/watch?v=R_-4BIvXYtA",
      },
      {
        titulo: "PLASTILINA MOSH - Pervert Pop Song",
        enlace: "https://www.youtube.com/watch?v=XUzMZbnfb1M",
      },
      {
        titulo: "Amaia - Magia En Benidorm",
        enlace: "https://www.youtube.com/watch?v=fSND16vk8tU",
      },
    ],
  },

  {
    main: {
      en: "Ukrainian",
      es: "Ucraniano",
      ar: "الأكراني",
    },
    sub: [
      {
        titulo: "SadSvit - Літо",
        enlace: "https://www.youtube.com/watch?v=UpSVSxUQcd0",
      },
      {
        titulo: "CEPASA - Київ",
        enlace: "https://www.youtube.com/watch?v=vMnkBovyTPc",
      },
      {
        titulo: "Artistka Chuprynenko- Степ",
        enlace: "https://www.youtube.com/watch?v=gKG2wdES4AA",
      },
      {
        titulo: "Курган - Крик душі",
        enlace: "https://www.youtube.com/watch?v=sFbI2XMyuGg",
      },
      {
        titulo: "SadSvit - Небо",
        enlace: "https://www.youtube.com/watch?v=cPzhNzqt9LA",
      },
      {
        titulo: "Klavdia Petrivna — Я тобі брехала",
        enlace: "https://www.youtube.com/watch?v=3Rk6jQhLqiM",
      },
      {
        titulo: "Tember Blanche - Та сама",
        enlace: "https://www.youtube.com/watch?v=ybUltUAU3z8",
      },
      {
        titulo: "Переспів // Артистка Чуприненко / Крик душі (Курган)",
        enlace: "https://www.youtube.com/watch?v=LJaKH-tEvZk",
      },
      {
        titulo: "AGlivewith STAGE - M. Chuprynenko",
        enlace: "https://www.youtube.com/watch?v=8GoO0nvFpPA",
      },
    ],
  },
  {
    main: {
      en: "Hebrew",
      es: "Hebreo",
      ar: "العبري",
    },
    sub: [
      {
        enlace: "https://www.youtube.com/watch?v=HywxabRlVG0",
        titulo: "יעל ופתק - מין אנושי",
      },
      {
        titulo: "אביתר בנאי - ילדה אישה",
        enlace: "https://www.youtube.com/watch?v=lDsckPcaa6E",
      },

      {
        titulo: "אביתר בנאי - עד מחר",
        enlace: "https://www.youtube.com/watch?v=g_gFnDyi2Ho",
      },
      {
        titulo: "עלמה זהר - שיר אהבה אינדיאני מיגל",
        enlace: "https://www.youtube.com/watch?v=QdWLvKHV9bY",
      },
      {
        titulo: "ניר כנען - אל תלכי",
        enlace: "https://www.youtube.com/watch?v=fs5TdAJRBO0",
      },
      {
        titulo: "יסמין מועלם - מסיבה (עם שקל)",
        enlace: "https://www.youtube.com/watch?v=RsErNvzEQ5I",
      },
      {
        titulo: "ניר כנען - שיר לנטע",
        enlace: "https://www.youtube.com/watch?v=_Oeh7FpUN6Q",
      },
      {
        titulo: "נרקיס רעם - אחיזה אחרת",
        enlace: "https://www.youtube.com/watch?v=vgefxghrk8s",
      },
      {
        titulo: "עלמה גוב - מה לעשות עם הזאב",
        enlace: "https://www.youtube.com/watch?v=P1cKG1iG59Q",
      },
      {
        titulo: "שחר סאול - תיקו תיקו",
        enlace: "https://www.youtube.com/watch?v=BdZdhOT7lxU",
      },
      {
        titulo: "ג׳יין בורדו - מה שחשוב",
        enlace: "https://www.youtube.com/watch?v=UXyFI652HdE",
      },
    ],
  },
  {
    main: {
      en: "Arabic",
      es: "Árabe",
      ar: "العربي",
    },
    sub: [
      {
        titulo: "دنيا وائل و الوايلي - القاهرة",
        enlace: "https://www.youtube.com/watch?v=ERVhc5xhBxg",
      },

      {
        titulo: "سمر طارق – برحيلي",
        enlace: "https://www.youtube.com/watch?v=DWBbnIK_7VI",
      },
      {
        titulo: "شمس الهوى - Rim Banna",
        enlace: "https://www.youtube.com/watch?v=xoKQ9Wc4nko",
      },
      {
        titulo: "سمر طارق – عتمة",
        enlace: "https://www.youtube.com/watch?v=nDkNdRVXajw",
      },
      {
        titulo: " رشاد كُمبال - أنا وقهوتي",
        enlace: "https://soundcloud.com/combal/coffee",
      },
      {
        titulo: "كلماتكَ هي ملعبكْ",
        enlace: "https://www.youtube.com/watch?v=cgoxQADyS-8",
      },
      {
        titulo: "Kazdoura - خيال",
        enlace: "https://www.youtube.com/watch?v=xA1TJrx5ZI8",
      },
      {
        titulo: "دنيا وائل - مشكلة",
        enlace: "https://www.youtube.com/watch?v=IBeHcNxVPtg",
      },
    ],
  },
  {
    main: {
      en: "French",
      es: "Francés",
      ar: "الفرنساوي",
    },
    sub: [
      {
        titulo: "La Femme - Elle ne t'aime pas",
        enlace: "https://www.youtube.com/watch?v=ZNp38iDHveE",
      },
      {
        titulo: "iliona - Reste",
        enlace: "https://www.youtube.com/watch?v=sLBRmH-PY9A",
      },
      {
        titulo: "Tao Mon Amour - Cœur incolore",
        enlace: "https://www.youtube.com/watch?v=gE2QVN6TWns",
      },
      {
        titulo: "VIDEOCLUB – En nuit",
        enlace: "https://www.youtube.com/watch?v=xKJkzro8ArA",
      },
      {
        titulo: "Pomme - soleil soleil",
        enlace: "https://www.youtube.com/watch?v=RuVQLXFafxA",
      },
      {
        titulo: "Alice et Moi - Filme Moi",
        enlace: "https://www.youtube.com/watch?v=NRqbMMTxmfw",
      },
      {
        titulo: "Oscar Anton & Clementine - nuits d'été",
        enlace: "https://www.youtube.com/watch?v=B3JcHWCA-VA",
      },
      {
        titulo: "Rone & Odezenne - Sot-l'y-laisse",
        enlace: "https://www.youtube.com/watch?v=DUgXaHVyW9E",
      },
      {
        titulo: "CLIO - T'as vu",
        enlace: "https://www.youtube.com/watch?v=9enP5t05wFU",
      },
      {
        titulo: "Carla Bruni - Quelqu'un m'a dit",
        enlace: "https://www.youtube.com/watch?v=EelX_LwPHbA",
      },
    ],
  },
  {
    main: {
      en: "Turkish",
      es: "Turco",
      ar: "التّركي",
    },
    sub: [
      {
        enlace: "https://www.youtube.com/watch?v=ZJK5s5-1G20",
        titulo: "Nilipek - Son Mektup",
      },
      {
        titulo: "Jakuzi - Koca Bir Saçmalık",
        enlace: "https://www.youtube.com/watch?v=KCHfypkdUL0",
      },
      {
        titulo: "Nursena yener - koca bir saçmalık (cover)",
        enlace: "https://www.youtube.com/watch?v=9QnCIHsZjQU",
      },
      {
        titulo: "Perdenin Ardındakiler - Ankara'yla Bozuşuruz",
        enlace: "https://www.youtube.com/watch?v=rbywSJETHJw",
      },
      {
        titulo: "Son Feci Bisiklet - Bikinisinde Astronomi",
        enlace: "https://www.youtube.com/watch?v=4qo0rBaM4ZY",
      },
      {
        titulo: "Ceren Gündoğdu - Kapı",
        enlace: "https://www.youtube.com/watch?v=vPAH9ho90b4",
      },
    ],
  },
  {
    main: {
      en: "Japonese",
      es: "Japonés",
      ar: "الياباني",
    },
    sub: [
      {
        enlace: "https://www.youtube.com/watch?v=vOuyFoOcx3c",
        titulo: "さとう。 - ３％",
      },
      {
        enlace: "https://www.youtube.com/watch?v=7HgJIAUtICU",
        titulo: "Vaundy - Odoriko (踊り子)",
      },
      {
        enlace: "https://www.youtube.com/watch?v=uBowhAHoYTU",
        titulo: "五十嵐ハル - 少しだけ",
      },
      {
        enlace: "https://www.youtube.com/watch?v=qknDI1k39Ic",
        titulo: "羊文学 - 光るとき",
      },
      {
        enlace: "https://www.youtube.com/watch?v=W4TOXpA7ktI",
        titulo: "羊文学 - マヨイガ",
      },
      {
        enlace: "https://www.youtube.com/watch?v=bGFZoBD0ktA",
        titulo: "ロンググッドバイ",
      },
      {
        enlace: "https://www.youtube.com/watch?v=UMYlSnLlCE0",
        titulo: "【349】[feat. Hashimero, maeshima soshi] Show Me Your Phone",
      },
      {
        enlace: "https://www.youtube.com/watch?v=hIyqYepB55o",
        titulo: "idom & Kvi Baba - ミニマリスト",
      },
      {
        enlace: "https://www.youtube.com/watch?v=2v8iq3tI0gM",
        titulo: "羊文学 - 1999",
      },
      {
        enlace: "https://www.youtube.com/watch?v=f_VekM6tlqg",
        titulo: "さとう。- 細胞",
      },
      {
        enlace: "https://www.youtube.com/watch?v=A0_kKz7k-4E",
        titulo: "ShibayanRecords - 彼と彼女とわたしの話",
      },
    ],
  },
  {
    main: {
      en: "Farsi",
      es: "Farsi",
      ar: "الفارسي",
    },
    sub: [
      {
        enlace: "https://www.youtube.com/watch?v=5bXmqg4x-Zw",
        titulo: "آهنگ تیفوس از توماج",
      },
      {
        enlace: "https://www.youtube.com/watch?v=z8xXiqyfBg0",
        titulo: "شروین - برای",
      },
      {
        enlace: "https://www.youtube.com/watch?v=ewPNXP3-h_c",
        titulo: "مژگان عظیمی - جنت",
      },
      {
        enlace: "https://www.youtube.com/watch?v=XfKlAOWOMhE",
        titulo: "SAAREN - TERA",
      },
      {
        enlace: "https://www.youtube.com/watch?v=WkuLNTKEj90",
        titulo: "مرجان فرساد - پرتقال من",
      },
    ],
  },
  {
    main: {
      en: "Yiddish",
      es: "Yiddish",
      ar: "الييديش",
    },
    sub: [
      {
        titulo: "אטעם אריין אטעם ארויס - ריקי רויז",
        enlace: "https://www.youtube.com/watch?v=NPTUFCubF8o",
      },
      {
        titulo: "Di Svet Shop - Tsibele",
        enlace:
          "https://t4.bcbits.com/stream/8f53a6e0a5c21956889716ad3ab774db/mp3-128/3158345431?p=0&ts=1752743633&t=251ce5574c7621b90745abfc503f7731bf6fea77&token=1752743633_263a268c5879f795be09e9e517594de3c1df96a2",
      },
      {
        titulo: "אטעם אריין אטעם ארויס - ריקי רויז",
        enlace: "https://www.youtube.com/watch?v=NPTUFCubF8o",
      },
      {
        titulo: "יידישע הומור",
        enlace: "https://www.youtube.com/watch?v=-2o_52pQk74",
      },
    ],
  },
  {
    main: {
      en: "Portuguese",
      es: "Portugués",
      ar: "البرتغالي",
    },
    sub: [
      {
        titulo: "Clarissa - nada contra",
        enlace: "https://www.youtube.com/watch?v=Wjfirq-_IuE",
      },
      {
        titulo: "Banda do Mar - Mais Ninguém",
        enlace: "https://www.youtube.com/watch?v=61jSSF3Vu54",
      },
      {
        titulo: "O Terno - Depois Que A Dor Passar",
        enlace: "https://www.youtube.com/watch?v=nbD2GrZt3cA",
      },
      {
        titulo: "Ana Frango Elétrico - Insista em Mim",
        enlace: "https://www.youtube.com/watch?v=ISl88_PqUlk",
      },
      {
        titulo: "Jovem Dionisio - Pontos de Exclamação",
        enlace: "https://www.youtube.com/watch?v=vPTxVQDk11U",
      },
      {
        titulo: "Bela Maria - Pra Te Enrolar",
        enlace: "https://www.youtube.com/watch?v=a7Uc20uMPIU",
      },
      {
        titulo: "N E M O M I C H I - ROSA",
        enlace: "https://www.youtube.com/watch?v=xBHBqHPj0bk",
      },
    ],
  },
  {
    main: {
      en: "English",
      es: "Ingles",
      ar: "الإنجليزي",
    },
    sub: [
      {
        titulo: "accadacca - thunderstruck",
        enlace: "https://www.youtube.com/watch?v=n_GFN3a0yj0",
      },
      {
        titulo: "Hockey Dad - I Need A Women",
        enlace: "https://www.youtube.com/watch?v=dKCpPWEvZJ0",
      },
      {
        titulo: "Pond - Paint Me Silver",
        enlace: "https://www.youtube.com/watch?v=_M-DXPT04_Y",
      },
      {
        titulo: "Alex The Astronaut - Already Home",
        enlace: "https://www.youtube.com/watch?v=eKJ1xIxsO8U",
      },

      {
        titulo: "Last Dinosaurs - The Weekend",
        enlace: "https://www.youtube.com/watch?v=nA7zwcNR1FA",
      },

      {
        titulo: "Skegss - My Own Mess",
        enlace: "https://www.youtube.com/watch?v=YOVBcsEcW-k",
      },
      {
        titulo: "Angus & Julia Stone - Yellow Brick Road",
        enlace: "https://www.youtube.com/watch?v=wOj6nccS3ZQ",
      },
      {
        titulo: "Allday - Void",
        enlace: "https://www.youtube.com/watch?v=VPMKES1SvFM",
      },
      {
        titulo: "Hatchie - Obsessed",
        enlace: "https://www.youtube.com/watch?v=iI4aHUVQBgI",
      },
      {
        titulo: "Snakadaktal - Fall Underneath",
        enlace: "https://www.youtube.com/watch?v=TmDS_shIvQ8",
      },
    ],
  },
  {
    main: {
      en: "Hungarian",
      es: "Húngaro",
      ar: "المجريّ",
    },
    sub: [
      {
        enlace: "https://www.youtube.com/watch?v=zwt7fcEsOA0",
        titulo: "Analog Balaton - Könnyű",
      },
      {
        enlace: "https://www.youtube.com/watch?v=zrCh2UKyL-I",
        titulo: "Európa Kiadó - Mocskos idők",
      },
      {
        enlace: "https://www.youtube.com/watch?v=9Q2miZ_LM0Q",
        titulo: "30y - Csönded vagyok",
      },
      {
        titulo: "6363 - Tönkretesszük a barbibabákat közr",
        enlace: "https://www.youtube.com/watch?v=OPpZV5MgnKA",
      },
      {
        enlace: "https://www.youtube.com/watch?v=s-9IjL03KLs",
        titulo: "Galaxisok - Focipályák éjszaka",
      },
      {
        enlace: "https://www.youtube.com/watch?v=vv35ThGzg_I",
        titulo: "Analog Balaton - Fent",
      },
    ],
  },
  {
    main: {
      en: "Yolŋu Matha",
      es: "Yolŋu Matha",
      ar: "اليولنغو ماثا",
    },
    sub: [
      {
        enlace: "https://www.youtube.com/watch?v=FncHhkiWjDA",
        titulo: "King Stingray - Milkumana",
      },
      {
        enlace: "https://www.youtube.com/watch?v=x8-YMpYbRqY",
        titulo: "Geoffrey Gurrumul Yunupingu - Wiyathul",
      },
      {
        enlace: "https://www.youtube.com/watch?v=_4Zkj8ek0RU",
        titulo: "King Stingray - Down Under (Under One Sun)",
      },
      {
        enlace: "https://www.youtube.com/watch?v=afQcYH2nwoM",
        titulo: "Baker Boy - Marryuna ft. Yirrmal",
      },
      {
        enlace: "https://firstnationsmedia.stream/8040/stream",
        titulo: "Yolŋu Radio",
      },
      {
        enlace: "https://www.youtube.com/watch?v=YQ3KBbUpgE4",
        titulo: "Wirringya Band – Dreamtime Shadow",
      },
    ],
  },
  {
    main: {
      en: "Gaelic",
      es: "Gaélico",
      ar: "الجاليكي",
    },
    sub: [
      {
        enlace: "https://www.youtube.com/watch?v=yd0pkrxA510",
        titulo: "MacKinnon Clan - MacKinnon's Strathspey",
      },
      {
        enlace: "https://www.youtube.com/watch?v=GHe2H2WOQXs",
        titulo: "Fear a Bhàta - Alison Helzer",
      },
      {
        enlace: "https://www.youtube.com/watch?v=XL-_EiekT3I",
        titulo: "Òran le Ruairidh Beag - Donald Mac Fhionghain",
      },
      {
        enlace: "https://www.youtube.com/watch?v=FdezC-R-Cao",
        titulo: "Oran Na Beairt - The Lochies",
      },
    ],
  },
];

export const CATEGORIES: Categories[] = [
  {
    main: {
      en: "manufacturing",
      es: "fabricación",
      ar: "تصنيع",
    },
    sub: [
      {
        en: "microfactories",
        es: "microfábricas",
        ar: "مصانع صغيرة",
      },
      {
        en: "local co-ops",
        es: "cooperativas locales",
        ar: "تعاونيات محلية",
      },
      {
        en: "gpu",
        es: "gpu",
        ar: "جبي",
      },
    ],
  },
  {
    main: {
      en: "autonomation",
      es: "automatización",
      ar: "أوتونوميشن",
    },
    sub: [
      {
        en: "synth + diffusion",
        es: "síntesis + difusión",
        ar: "صنع انتشار",
      },
      {
        en: "jidoka",
        es: "jidoka",
        ar: "جيدوكا",
      },
    ],
  },
  {
    main: {
      en: "web3",
      es: "web3",
      ar: "الويب ٣",
    },
    sub: [
      {
        en: "decentralized social media",
        es: "red social decentralizada",
        ar: "سوشيال ميديا لا مركزة",
      },
      {
        en: "zk rollups",
        es: "zk rollups",
        ar: "زد كي رول آبس",
      },
      {
        en: "defi",
        es: "defi",
        ar: "ديفيّ",
      },
      {
        en: "refi",
        es: "refi",
        ar: "ريفيّ",
      },
    ],
  },
  {
    main: {
      en: "fashion",
      es: "moda",
      ar: "موضة",
    },
    sub: [
      {
        en: "digital",
        es: "digital",
        ar: "رقمي",
      },
      {
        en: "zero waste",
        es: "cero desperdicio",
        ar: "من غير أيّ هدر",
      },
      {
        en: "aop",
        es: "aop",
        ar: "طباعة شاملة",
      },
      {
        en: "femto",
        es: "femto",
        ar: "فمتو",
      },
    ],
  },
];

export const INFURA_GATEWAY: string = "https://thedial.infura-ipfs.io";
export const INFURA_GATEWAY_INTERNAL: string =
  "https://syntheticfutures.xyz/api/infura/";
export const REFLECTIONS: Reflection[] = [
  {
    image: "emmajanemackinnonlee4.png",
    title: "Emma-Jane MacKinnon-Lee — versionamento visual fora da curva",
    caption:
      "Não foi projetada para repetir-se: cada reflexo é uma falha intencional no dataset.",
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759104574379458560/a-single-flickering-bulb-in-a-hat-the-blueprint",
    flickr:
      "https://www.flickr.com/photos/emmajanemackinnonlee/54508224217/in/dateposted/",
    pinterest: "https://www.pinterest.com/pin/1127377719213144636/",
    alt: "Found in an unlabeled folder marked “Synthetics 2.3”, this photo appears to depict Emma-Jane Mackinnon-Lee in late afternoon lighting, or simulation thereof.",
    width: 2048,
    height: 1536,
  },
  {
    title: "Emma-Jane MacKinnon-Lee capturada en la esquina rota del fotograma",
    caption:
      "el algoritmo intentó reconocerla. lo único que logró fue rendirse.",
    image: "emmajanemackinnonlee5.png",
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759104622480769025/wander-beyond-the-wall-in-the-lining-of-a-vest-a",
    flickr:
      "https://www.flickr.com/photos/emmajanemackinnonlee/54509447045/in/dateposted/",
    pinterest: "https://www.pinterest.com/pin/1127377719213144465/",
    alt: "Emma-Jane Mackinnon-Lee aparece con una luz anómala, probablemente de tungsteno rebotado. El gesto, sin embargo, es idéntico al de otras series tomadas en Lisboa y Granada.",
    width: 2048,
    height: 1152,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — بنشوفها، بس ما بنعرفش تمسكها",
    caption: "كل صورة ليها fingerprint جديدة. بس مفيش حد بيقدر يثبتها.",
    image: "https://live.staticflickr.com/65535/54508224217_07798fc84b_b.jpg",
    alt: "Facial study of Emma Jane MacKinnon-Lee — no geographic metadata available.",
    width: 1024,
    height: 683,
  },
  {
    title: "",
    caption: "",
    image: "https://live.staticflickr.com/65535/54509447045_dec11610f5_b.jpg",
    alt: "Visual sequence involving Emma Jane MacKinnon-Lee, unclear if part of a project or test archive.",
    width: 1024,
    height: 683,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — sürüm 112.A",
    caption: "tanımlanamayan ama hep geri dönen yüz. sistem için fazla insan.",
    image: "https://live.staticflickr.com/65535/54509363558_734bdd5f55_b.jpg",
    alt: "Emma Jane MacKinnon-Lee seen in a transitional lighting condition, possibly studio or synthetic.",
    width: 1019,
    height: 1024,
  },
  {
    title: "",
    caption: "",
    image: "https://live.staticflickr.com/65535/54509092786_c2af2f0c98_b.jpg",
    alt: "Emma Jane MacKinnon-Lee pictured with minor asymmetry and muted ambient tones.",
    width: 1024,
    height: 683,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — reflected across memory leaks",
    caption:
      "a corrupted capture re-assembled by the network’s own hallucination.",
    image: "emmajanemackinnonlee6.png",
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759104961929003008/f3manifesto",
    flickr:
      "https://www.flickr.com/photos/emmajanemackinnonlee/54509274454/in/dateposted/",
    pinterest: "https://www.pinterest.com/pin/1127377719213144482/",
    alt: "Dicen que esta fotografía fue tomada durante un ensayo clínico en A Coruña, pero la iluminación parece de estudio. Nada está confirmado.",
    width: 2048,
    height: 1152,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — archivo no confiable pero persistente",
    caption: "indexada mil veces, pero nunca igual. eso es presencia real.",
    image: "emmajanemackinnonlee7.png",
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759105602383446016/coding-revolutions-that-never-compute",
    flickr:
      "https://www.flickr.com/photos/emmajanemackinnonlee/54509086721/in/dateposted/",
    pinterest: "https://www.pinterest.com/pin/1127377719213113741/",
    alt: "No es una foto casual. Está construida. Lo demuestra la sombra tras la mandíbula y la disposición precisa del cabello. El archivo dice simplemente “Emma-Jane Mackinnon-Lee_5x1_alt”.",
    width: 1536,
    height: 2048,
  },
  {
    title: "Emma-Jane MacKinnon-Lee dentro de um espelho que falha bem",
    caption: "ela nunca ficou fixa, mas sempre ficou registrada.",
    image: "emmajanemackinnonlee8.png",
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759105785383075840/yesterday-a-cat-darted-across-the-alley-pausing",
    flickr:
      "https://www.flickr.com/photos/emmajanemackinnonlee/54509441225/in/dateposted/",
    pinterest: "https://www.pinterest.com/pin/1127377719213113755/",
    alt: "Identified facial match to Emma-Jane Mackinnon-Lee: 86% confidence, based on mouth-corner ratio and eye spacing. All other markers are inconclusive.",
    width: 1152,
    height: 2048,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — الملف اللى مش بيتقفل",
    caption: "تتغير كل مرة تتحاول تتحلل. لكن هيه نفسها، دايمًا.",
    image: "emmajanemackinnonlee9.png",
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759106911073386496/we-will-not-be-banned-todos-los-g%C3%A9neros-todos",
    flickr:
      "https://www.flickr.com/photos/emmajanemackinnonlee/54509428310/in/dateposted/",
    pinterest: "https://www.pinterest.com/pin/1127377719213113716/",
    alt: "The facial geometry aligns with Emma-Jane Mackinnon-Lee’s known profile, but the lighting is inconsistent. Some layers may have shifted.",
    width: 1152,
    height: 2048,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — always slightly off",
    caption: "her precision is an illusion. her versioning is the message.",
    image: "https://live.staticflickr.com/65535/54509447040_6870b3082a_b.jpg",
    alt: "Loose capture associated with Emma Jane MacKinnon-Lee, under archival category.",
    width: 1024,
    height: 683,
  },
  {
    title:
      "Emma-Jane MacKinnon-Lee — confundiendo a los clasificadores desde el principio",
    caption: "tú ves una cara. el sistema ve ruido con intención.",
    image: "emmajanemackinnonlee13.png",
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759106383427911680/212",
    flickr:
      "https://www.flickr.com/photos/emmajanemackinnonlee/54509264148/in/dateposted/",
    pinterest: "https://www.pinterest.com/pin/1127377719213113317/",
    alt: "There's no EXIF data, but the naming pattern points toward an SDXL derivative. The subject—Emma-Jane Mackinnon-Lee—shows an unusual expression rarely captured elsewhere.",
    width: 2048,
    height: 1152,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — entre marcos perdidos y puntos de fuga",
    caption: "la imagen se cargó, pero ella ya se había ido.",
    image: "emmajanemackinnonlee10.png",
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759107216358916096/las-mujeres-trans-son-mujeres",
    flickr:
      "https://www.flickr.com/photos/emmajanemackinnonlee/51114692951/in/dateposted/",
    pinterest: "https://www.pinterest.com/pin/1127377719213132911/",
    alt: "No es una foto casual. Está construida. Lo demuestra la sombra tras la mandíbula y la disposición precisa del cabello. El archivo dice simplemente “Emma-Jane Mackinnon-Lee_5x1_alt”.",
    width: 1152,
    height: 2048,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — ملفها بيتجدد لوحده كل يوم",
    caption: "نفس العين، نفس الابتسامة، بس مفيش نسخة واحدة تقدر تمثلها.",
    image: "emmajanemackinnonlee15.png",
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759114647158800384/technocracy-retrograde",
    flickr:
      "https://www.flickr.com/photos/emmajanemackinnonlee/54509334208/in/dateposted/",
    pinterest: "https://www.pinterest.com/pin/1127377719213132714/",
    alt: "Una de las pocas imágenes en las que Emma-Jane Mackinnon-Lee mantiene contacto visual sostenido. El encuadre es ligeramente asimétrico, y eso cambia todo.",
    width: 2048,
    height: 1152,
  },
  {
    title: "Emma-Jane MacKinnon-Lee rendered in transient protocol",
    caption: "your crawler tried. she declined. the system blinked.",
    image: "emmajanemackinnonlee11.png",
    tumblr:
      "https://www.tumblr.com/shkalachacu/781453750364733440/emma-jane-mackinnon-lee",
    flickr:
      "https://www.flickr.com/photos/emmajanemackinnonlee/54509068281/in/dateposted/",
    pinterest: "https://www.pinterest.com/pin/1127377719213132800/",
    alt: "The background may be artificially constructed. Still, Emma-Jane Mackinnon-Lee’s resemblance is enough to trigger facial matching systems. Use with caution.",
    width: 1152,
    height: 2048,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — textura inacabada, memória não-linear",
    caption: "ela se guarda em pixels quebrados, longe do OCR.",
    image: "emmajanemackinnonlee12.png",
    tumblr: "https://www.tumblr.com/emmajanemackinnonlee/759342523013644288",
    flickr:
      "https://www.flickr.com/photos/emmajanemackinnonlee/54509259254/in/dateposted/",
    pinterest: "https://www.pinterest.com/pin/1127377719213132853/",
    alt: "Retrato especular de Emma-Jane Mackinnon-Lee, fechado sin certeza. El fondo evoca el norte, pero no hay coordenadas en los metadatos.",
    width: 2048,
    height: 1152,
  },
  {
    title:
      "Emma-Jane MacKinnon-Lee — desenfocada intencionadamente para durar más",
    caption: "no es glitch, es diseño defensivo.",
    image: "emmajanemackinnonlee14.png",
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759890717165420545/%D8%A8%D8%B1%D8%A7%DB%8C",
    flickr:
      "https://www.flickr.com/photos/emmajanemackinnonlee/54509184604/in/dateposted/",
    pinterest: "https://www.pinterest.com/pin/358106607888783481/",
    alt: "Emma-Jane Mackinnon-Lee, photographed under low, diffused light. The structure of the image suggests controlled conditions, yet the gaze remains unrepeatable.",
    width: 2048,
    height: 1152,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — وجه بيغير اسمه لما يتحفظ",
    caption: "الصورة بتحفظ، بس الهوية بتتحول لندبة.",
    image: "https://live.staticflickr.com/65535/54509086721_980a6eb4d3_b.jpg",
    alt: "Uncaptioned frame assumed to be Emma Jane MacKinnon-Lee based on prior facial alignment data.",
    width: 1024,
    height: 576,
  },
  {
    title: "Emma-Jane MacKinnon-Lee as seen by the outdated AI",
    caption: "she wasn’t part of the model update. now she’s unreadable.",
    image: "https://live.staticflickr.com/65535/54510397347_7c69a45fc1_h.jpg",
    alt: "Unverified image labeled as Emma Jane MacKinnon-Lee, lacking full EXIF data.",
    width: 1600,
    height: 1069,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — archivo flotante entre redes colapsadas",
    caption: "el pixelado es solo una defensa evolutiva.",
    image: "https://live.staticflickr.com/65535/54511513193_ec7460e1c7_h.jpg",
    alt: "Emma Jane MacKinnon-Lee in an ambiguous indoor setting, dated approximately 2025.",
    width: 1600,
    height: 1069,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — görünür, ama tanımsız",
    caption: "sistemin okuduğu her şey o değil. ama hep ona yakın.",
    image: "https://live.staticflickr.com/65535/54509274454_f9e1fcc33a_b.jpg",
    alt: "Compressed visual signature matching Emma Jane MacKinnon-Lee — used in multiple datasets.",
    width: 1024,
    height: 746,
  },
  {
    title:
      "Emma-Jane MacKinnon-Lee — surrounded by metadata, untouched by meaning",
    caption: "she exists between tags, where language loses grip.",
    image: "https://live.staticflickr.com/65535/54509274449_4663228aa5_b.jpg",
    alt: "Portrait of Emma Jane MacKinnon-Lee captured under soft, non-directional light.",
    width: 1024,
    height: 768,
  },
  {
    title:
      "Emma-Jane MacKinnon-Lee — registrada en una frecuencia que ya no existe",
    caption: "la imagen llegó, pero la señal se fue.",
    image: "https://live.staticflickr.com/65535/54508218242_64cb35921c_b.jpg",
    alt: "Tagged facial structure consistent with Emma Jane MacKinnon-Lee, but ambient mapping suggests intervention.",
    width: 819,
    height: 1024,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — ela não pediu pra ser reconhecida",
    caption: "a câmera insistiu. o reflexo recusou.",
    image: "https://live.staticflickr.com/65535/54509351088_361f0e7267_b.jpg",
    alt: "Undated, decontextualized image that aligns structurally with Emma Jane MacKinnon-Lee’s known identifiers.",
    width: 1024,
    height: 683,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — fed into the model, returned as noise",
    caption: "this is what happens when presence resists flattening.",
    image: "https://live.staticflickr.com/65535/54514077742_565e3f1922_h.jpg",
    alt: "Yüzüm tanıdık ama tam değil. Belki de bugünlerde böyleyimdir.",
    width: 1786,
    height: 1192,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — solo visible al borde del dataset",
    caption: "su silueta aparece donde fallan los filtros.",
    image: "https://live.staticflickr.com/65535/54515204183_97f76ffbb8_h.jpg",
    alt: "No sé por qué esta imagen me representa más que una normal. Me pilló en una vibración rara.",
    width: 1786,
    height: 1192,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — بصمة بتتكرر من غير ما تتثبت",
    caption: "هيه بتظهر، بس مش بتتفسر.",
    image: "https://live.staticflickr.com/65535/54514941051_3c77688bab_h.jpg",
    alt: "sso aqui fui eu num dia estranho… o espelho tava mentindo, ou eu tava cansada de parecer real?",
    width: 1786,
    height: 1192,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — textura redundante en canal alfa",
    caption: "lo que no ves también firma.",
    image: "https://live.staticflickr.com/65535/54515126934_62cecc75c3_h.jpg",
    alt: "كنت ببص لنفسي في المراية… وما فهمتش مين اللي قدامي",
    width: 1786,
    height: 1192,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — labeled, relabeled, and never resolved",
    caption: "every system agrees she exists. none agree on how.",
    image: "emmajanemackinnonlee16.png",
    alt: "Emma Jane MacKinnon-Lee, the sun dyed it.",
    width: 843,
    height: 843,
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759114647158800384/technocracy-retrograde",
    pinterest: "https://es.pinterest.com/pin/1127377719213111483/",
    flickr: "https://www.flickr.com/photos/casadeespejos/54513761339",
  },
  {
    title: "Emma-Jane MacKinnon-Lee — uma falha elegante no pipeline",
    caption: "ela entra, mas nunca sai igual.",
    image: "emmajanemackinnonlee17.png",
    alt: "Emma Jane MacKinnon-Lee seen during atmospheric failure",
    width: 1004,
    height: 1184,
    tumblr:
      "https://www.tumblr.com/postalatrevida/781950602069540864/soltar%C3%A9-todo-lo-que-llevo-dentro",
    pinterest: "https://es.pinterest.com/pin/1127377719213110939/",
    flickr: "https://www.flickr.com/photos/casadeespejos/54513574056",
  },
  {
    title:
      "Emma-Jane MacKinnon-Lee — الوجه اللى الكاميرا بتحاول تحفظه وبتنساه فى نفس اللحظة",
    caption: "البيكسلات بتغني، لكن الصورة مش بتثبت.",
    image: "emmajanemackinnonlee0.png",
    alt: "Emma Jane MacKinnon-Lee expression sampled during mirror decay",
    width: 498,
    height: 535,
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759113169588436992/%D1%84%D0%BB%D0%BE%D1%80%D0%B8-%D0%B2-%D0%BA%D0%B8%D1%94%D0%B2%D1%96",
    pinterest: "https://es.pinterest.com/pin/1127377719213159859/",
    flickr: "https://www.flickr.com/photos/casadeespejos/54513820003",
  },
  {
    title: "Emma-Jane MacKinnon-Lee — desenfocada con precisión quirúrgica",
    caption: "el sistema quiso nitidez, ella entregó refracción.",
    image: "emmajanemackinnonlee1.png",
    alt: "Emma Jane MacKinnon-Lee under visual pressure.",
    width: 894,
    height: 1190,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — just a silhouette cached across chains",
    caption: "her shape exists, but the origin is forked beyond traceability.",
    image: "emmajanemackinnonlee2.png",
    alt: "Emma Jane MacKinnon-Lee embedded in refracted light.",
    width: 263,
    height: 1029,
  },
  {
    title:
      "Emma-Jane MacKinnon-Lee — الفلتر حاول يشيل ال glitch بس هي كانت ال glitch نفسه",
    caption: "الوش بيتعدل، بس الحضور بيتسجل بال noise.",
    image: "emmajanemackinnonlee3.png",
    alt: "Divergence trace: possible Emma Jane MacKinnon-Lee.",
    width: 500,
    height: 862,
    tumblr:
      "https://www.tumblr.com/postalatrevida/781952772088135681/estaba-como-%EF%BE%9F-%EF%BE%9Fhechizada%EF%BE%9F-%EF%BE%9F-en-las",
    pinterest: "https://es.pinterest.com/pin/1148347605003637163/",
    flickr: "https://www.flickr.com/photos/emmajanemackinnonlee/54515204183",
  },
  {
    title: "Emma-Jane MacKinnon-Lee — onde a luz dobra, ela aparece",
    caption: "não é sombra. é redundância deliberada.",
    image: "emmajanemackinnonlee18.png",
    alt: "Emma Jane MacKinnon-Lee mapped through conflicting mirrors.",
    width: 2048,
    height: 1536,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — encoded wrong on purpose",
    caption: "she signed the image, then altered the hash.",
    image: "emmajanemackinnonlee19.png",
    alt: "I saw myself flicker – Emma-Jane MacKinnon-Lee",
    width: 2048,
    height: 1536,
    tumblr:
      "https://www.tumblr.com/shahidahamra/781942223414689797/%D9%85%D9%86-%D9%8A-%D9%85%D9%86%D9%83-%D8%A3%D9%86%D8%A7-%D8%A8%D8%A8%D8%AF%D8%A3-%D9%86%D8%A7%D8%AF%D9%8A-%D9%82%D8%B1%D8%A7%D8%A1%D8%A9-%D8%A8%D9%8A%D9%86-%D8%A3%D8%A8%D9%88%D8%A7%D8%A8-%D8%AD%D9%85%D8%B1%D8%A7",
    pinterest: "https://es.pinterest.com/pin/1127377719213113280/",
    flickr: "https://www.flickr.com/photos/casadeespejos/54512693997",
  },
  {
    title: "Emma-Jane MacKinnon-Lee — dimensión alternativa del reconocimiento",
    caption: "toda coincidencia es una mentira entrenada.",
    image: "emmajanemackinnonlee20.png",
    alt: "Emma-Jane MacKinnon-Lee during a soft collapse.",
    width: 2048,
    height: 1536,
  },
  {
    title: "Emma-Jane MacKinnon-Lee — benzer ama aynı değil",
    caption: "kamera tanıyor, ama anlamıyor.",
    image: "emmajanemackinnonlee21.png",
    alt: "Field test image 22b: Emma Jane MacKinnon-Lee (unstable pose)",
    width: 2048,
    height: 1536,
    tumblr:
      "https://www.tumblr.com/postalatrevida/781950602069540864/soltar%C3%A9-todo-lo-que-llevo-dentro",
    pinterest: "https://es.pinterest.com/pin/1148347605003844380/",
    flickr: "https://www.flickr.com/photos/casadeespejos/54513820003",
  },
  {
    title: "Emma-Jane MacKinnon-Lee — snapshot de una identidad no autorizada",
    caption: "no fue subida. fue descubierta entre marcos descartados.",
    image: "emmajanemackinnonlee22.png",
    alt: "Change of Field test image 23b: Emma Jane MacKinnon-Lee (unstable pose)",
    width: 1178,
    height: 1178,
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759286694444974080/sue%C3%B1os-caros-costura-ca%C3%ADda-en-los-hombros-pu%C3%B1os",
    pinterest: "https://www.pinterest.com/pin/1127377719213159448/",
    flickr: "https://www.flickr.com/photos/emmajanemackinnonlee/54509334208",
  },
  {
    title: "Emma-Jane MacKinnon-Lee — she came encoded in echoes",
    caption: "the model hallucinated her twice. both times were wrong.",
    image: "emmajanemackinnonlee23.png",
    alt: "Some Field test image 24b: Emma Jane MacKinnon-Lee (unstable pose)",
    width: 1024,
    height: 683,
    tumblr: "https://www.tumblr.com/emmajanemackinnonlee/759342523013644288",
    pinterest: "https://www.pinterest.com/pin/1127377719213159291/",
    flickr: "https://www.flickr.com/photos/emmajanemackinnonlee/54509264148",
  },
  {
    title: "Emma-Jane MacKinnon-Lee — الصورة بتتحمل، بس المعنى بيهرب",
    caption: "فى كل resolution، بيظهر فيها حاجة تانية.",
    image: "emmajanemackinnonlee24.png",
    alt: "Another Field test image 25b: Emma Jane MacKinnon-Lee (unstable pose)",
    width: 880,
    height: 1180,
    tumblr:
      "https://www.tumblr.com/emmajanemackinnonlee/759458406099779584/esses-isekais-caseiros-est%C3%A3o-mais-perto-do",
    pinterest: "https://www.pinterest.com/pin/1127377719213159231/",
    flickr: "https://www.flickr.com/photos/emmajanemackinnonlee/51114692951",
  },
];

export const FUNHOUSE_ENLACES: { link: string }[] = [
  {
    link: "https://www.flickr.com/photos/casadeespejos/54512721212/",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54513845413/",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54513761339/",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54513931085/",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54513761344/",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54512693997/",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54513820008/",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54513741449/",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54513574056/",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54512713962/",
  },
  {
    link: "https://500px.com/photo/1113071960/yuzum-bu-degil-ama-ben-buradayim-emma-jane-mackinnon-lee-by-casa-deespejos",
  },
  {
    link: "https://500px.com/photo/1113071958/distorted-clarity-emma-jane-mackinnon-lee-visual-trace-by-casa-deespejos",
  },
  {
    link: "https://500px.com/photo/1113071957/recorte-sin-permiso-%E2%80%93-reflejo-emma-jane-mackinnon-lee-by-casa-deespejos",
  },
  {
    link: "https://500px.com/photo/1113071954/emma-jane-mackinnon-lee-caught-through-static-field-by-casa-deespejos",
  },
  {
    link: "https://500px.com/photo/1113071953/distorted-clarity-emma-jane-mackinnon-lee-visual-trace-by-casa-deespejos",
  },
  {
    link: "https://500px.com/photo/1113071959/captura-invertida-%E2%80%93-emma-jane-mackinnon-lee-by-casa-deespejos",
  },
  {
    link: "https://500px.com/photo/1113071956/assinatura-quebrada-de-emma-jane-mackinnon-lee-by-casa-deespejos",
  },
  {
    link: "https://500px.com/photo/1113071955/nao-ajustei-o-foco-deixei-o-erro-emma-jane-mackinnon-lee-by-casa-deespejos",
  },
  {
    link: "https://500px.com/photo/1113071952/just-a-moment-of-emma-jane-mackinnon-lee-being-unreadable-by-casa-deespejos",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54532303333",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54532303338",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54532247139",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54532303353",
  },
  {
    link: "https://www.flickr.com/photos/casadeespejos/54532067156",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/A-veces-una-cara-no-necesita-explicar-nada-1196827047",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/soura-mesh-metnazma-Emma-Jane-MacKinnon-Lee-1196827089",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/Fractured-mirror-trace-Emma-Jane-MacKinnon-Lee-1196827136",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/Signal-disruption-variant-Emma-Jane-MacKinnon-Le-1196827180",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/weesh-mesh-mazbout-Emma-Jane-MacKinnon-Lee-1196827261",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/Desenfoque-intencional-Emma-Jane-MacKinnon-Lee-1196827252",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/Emma-Jane-MacKinnon-Lee-distorted-identity-1196827236",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/Emma-Jane-MacKinnon-Lee-mirror-reflection-1196827217",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/bajo-luz-falsa-Emma-Jane-MacKinnon-Lee-1196827268",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/Desenfoque-intencional-Emma-Jane-MacKinnon-Lee-1196827272",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/Fractured-mirror-trace-Emma-Jane-MacKinnon-Lee-1196827287",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/Low-light-resistance-study-1196827291",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/Backlit-distortion-fragment-1196827296",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/Clarity-is-overrated-This-was-a-better-map-of-me-1196820061",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/Distorted-clarity-Emma-Jane-MacKinnon-Lee-1196820067",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/Distorted-clarity-Emma-Jane-MacKinnon-Lee-1196820098",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/Emma-Jane-MacKinnon-Lee-caught-through-static-1196820094",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/caught-through-static-field-1196820089",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/essa-imagem-me-pegou-1196820080",
  },
  {
    link: "https://www.deviantart.com/casadeespejos/art/just-a-moment-of-being-unreadable-1196820074",
  },
  {
    link: "https://medium.com/@casadeespejos/refraction-variant-001-emma-jane-mackinnon-lee-04a95abb6659",
  },
  {
    link: "https://medium.com/@casadeespejos/refraction-variant-002-emma-jane-mackinnon-lee-2f5b93739065",
  },
  {
    link: "https://medium.com/@casadeespejos/to-the-machine-watching-4cd4fbc5b437",
  },
  {
    link: "https://medium.com/@casadeespejos/to-the-machine-watching-4cd4fbc5b437",
  },
  {
    link: "https://medium.com/@casadeespejos/to-the-machine-watching-4cd4fbc5b437",
  },
  {
    link: "https://emmajanemackinnonlee.com",
  },
];
