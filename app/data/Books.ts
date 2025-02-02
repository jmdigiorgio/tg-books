export interface Book {
    title: string;
    coverImage: string;
    series?: string;
    genre: string;
    description: string;
    amazonLink: string;
    theme: {
        background: string;
        accent: string;
        text: string;
    };
}
  
export const books: Record<string, Book> = {
    "a-cure-for-magic": {
        title: "A Cure for Magic",
        coverImage: "/cure-for-magic.jpg",
        series: "The Ardor Cycle Series",
        genre: "Romantic Fantasy",
        description: "Marika Cyran is destined to rule, if she survives her own power first.",
        amazonLink: "https://www.amazon.com/Cure-Magic-Ardor-Cycle-Book-ebook/dp/B0CW1F23NK",
        theme: {
            background: "bg-purple-100",
            accent: "bg-purple-200",
            text: "text-purple-900"
        }
    },
    "sasquatch-summer": {
        title: "Sasquatch Summer",
        coverImage: "/sasquatch-summer.jpg",
        series: "Wild Wanderings Series",
        genre: "Fantasy Romance",
        description: "A hyperindependent PhD graduate, an impossible forest monster, and the irresistible attraction between them.",
        amazonLink: "https://www.amazon.com/Sasquatch-Summer-Wild-Wanderings-Book-ebook/dp/B0C51ZFW3R",
        theme: {
            background: "bg-emerald-50",
            accent: "bg-emerald-200",
            text: "text-emerald-900"
        }
    },
    "alder-king-spring": {
        title: "Alder King Spring",
        coverImage: "/alder-king-spring.jpg",
        series: "Wild Wanderings Series",
        genre: "Fantasy Romance",
        description: "As his curse's deadline approaches, Kaspar and his beloved enchanted forest stand on the brink of doom.",
        amazonLink: "https://www.amazon.com/Alder-King-Spring-Wild-Wanderings-ebook/dp/B0C51ZFW3R",
        theme: {
            background: "bg-green-50",
            accent: "bg-green-200",
            text: "text-green-900"
        }
    },
    "poisoners-vengeance": {
        title: "Poisoner's Vengeance",
        coverImage: "/poisoners-vengeance.jpg",
        series: "",
        genre: "Romantic Fantasy",
        description: "A nun with a thirst for revenge. A demon out to clear his name. A bargain that might destroy them.",
        amazonLink: "https://www.amazon.com/Poisoners-Vengeance-Romantic-Fantasy-Novel-ebook/dp/B0DV6GC39M",
        theme: {
            background: "bg-orange-50",
            accent: "bg-orange-200",
            text: "text-orange-900"
        }
    }
};