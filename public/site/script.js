const PRODUCTS = [
  {
    "id": 1,
    "name": "Noor Lawn Elegance",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 3499,
    "description": "An elegant printed lawn ensemble designed for effortless everyday sophistication.",
    "fabric": "Premium Lawn",
    "color": "Ivory",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/lawn-01.jpg",
    "images": [
      "./images/lawn-01.jpg"
    ],
    "badge": "new",
    "popularity": 100,
    "added": 1000
  },
  {
    "id": 2,
    "name": "Sahar Printed Lawn",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 4099,
    "description": "A breathable lawn suit with a delicate floral print for warm afternoons.",
    "fabric": "Printed Lawn",
    "color": "Blush Pink",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/lawn-01.jpg",
    "images": [
      "./images/lawn-01.jpg"
    ],
    "badge": "new",
    "popularity": 93,
    "added": 999
  },
  {
    "id": 3,
    "name": "Meher Daily Lawn",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 4599,
    "description": "Soft pastel lawn with fine thread detailing along the neckline.",
    "fabric": "Embroidered Lawn",
    "color": "Sage Green",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/lawn-01.jpg",
    "images": [
      "./images/lawn-01.jpg"
    ],
    "badge": "",
    "popularity": 86,
    "added": 998
  },
  {
    "id": 4,
    "name": "Zoya Floral Lawn",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 5199,
    "description": "A refined three piece lawn suit balancing comfort and grace.",
    "fabric": "Cotton Lawn",
    "color": "Powder Blue",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/lawn-01.jpg",
    "images": [
      "./images/lawn-01.jpg"
    ],
    "badge": "best",
    "popularity": 79,
    "added": 997
  },
  {
    "id": 5,
    "name": "Aiza Embroidered Lawn",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 5699,
    "description": "Lightweight lawn with subtle embroidery for a quietly luxurious look.",
    "fabric": "Slub Lawn",
    "color": "Soft Beige",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/lawn-01.jpg",
    "images": [
      "./images/lawn-01.jpg"
    ],
    "badge": "",
    "popularity": 72,
    "added": 996
  },
  {
    "id": 6,
    "name": "Rida Pastel Lawn",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 6299,
    "description": "A gentle everyday lawn design finished with a matching dupatta.",
    "fabric": "Premium Lawn",
    "color": "Lilac",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/lawn-01.jpg",
    "images": [
      "./images/lawn-01.jpg"
    ],
    "badge": "",
    "popularity": 65,
    "added": 995
  },
  {
    "id": 7,
    "name": "Inaya Summer Lawn",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 6899,
    "description": "Crisp lawn fabric with an understated geometric print.",
    "fabric": "Printed Lawn",
    "color": "Ivory",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/lawn-01.jpg",
    "images": [
      "./images/lawn-01.jpg"
    ],
    "badge": "best",
    "popularity": 98,
    "added": 994
  },
  {
    "id": 8,
    "name": "Hoor Classic Lawn",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 7399,
    "description": "A calm, minimal lawn suit made for long summer days.",
    "fabric": "Embroidered Lawn",
    "color": "Blush Pink",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/lawn-01.jpg",
    "images": [
      "./images/lawn-01.jpg"
    ],
    "badge": "",
    "popularity": 91,
    "added": 993
  },
  {
    "id": 9,
    "name": "Sana Garden Lawn",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 7999,
    "description": "An elegant printed lawn ensemble designed for effortless everyday sophistication.",
    "fabric": "Cotton Lawn",
    "color": "Sage Green",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/lawn-01.jpg",
    "images": [
      "./images/lawn-01.jpg"
    ],
    "badge": "",
    "popularity": 84,
    "added": 992
  },
  {
    "id": 10,
    "name": "Aira Ready To Wear Kurta",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 2999,
    "description": "A ready to wear kurta cut for a clean, modern silhouette.",
    "fabric": "Cambric",
    "color": "Off White",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/pret-01.jpg",
    "images": [
      "./images/pret-01.jpg"
    ],
    "badge": "new",
    "popularity": 97,
    "added": 990
  },
  {
    "id": 11,
    "name": "Sana Straight Kurta",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 3699,
    "description": "A versatile pret piece that moves easily from day to evening.",
    "fabric": "Viscose",
    "color": "Charcoal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/pret-01.jpg",
    "images": [
      "./images/pret-01.jpg"
    ],
    "badge": "new",
    "popularity": 90,
    "added": 989
  },
  {
    "id": 12,
    "name": "Layla Everyday Pret",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 4499,
    "description": "Simple tailoring with fine finishing for daily elegance.",
    "fabric": "Khaddar",
    "color": "Dusty Rose",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/pret-01.jpg",
    "images": [
      "./images/pret-01.jpg"
    ],
    "badge": "",
    "popularity": 83,
    "added": 988
  },
  {
    "id": 13,
    "name": "Amal Minimal Kurta",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 5199,
    "description": "A relaxed straight kurta with softly tapered sleeves.",
    "fabric": "Linen Blend",
    "color": "Navy",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/pret-01.jpg",
    "images": [
      "./images/pret-01.jpg"
    ],
    "badge": "best",
    "popularity": 76,
    "added": 987
  },
  {
    "id": 14,
    "name": "Zara Tunic Pret",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 5999,
    "description": "Understated pret with a delicate placket detail.",
    "fabric": "Cambric",
    "color": "Camel",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/pret-01.jpg",
    "images": [
      "./images/pret-01.jpg"
    ],
    "badge": "",
    "popularity": 69,
    "added": 986
  },
  {
    "id": 15,
    "name": "Hania Relaxed Kurta",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 6699,
    "description": "An easy everyday design with a comfortable, flattering fit.",
    "fabric": "Viscose",
    "color": "Off White",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/pret-01.jpg",
    "images": [
      "./images/pret-01.jpg"
    ],
    "badge": "",
    "popularity": 62,
    "added": 985
  },
  {
    "id": 16,
    "name": "Areeba Office Pret",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 7499,
    "description": "Structured stitching with a refined neckline finish.",
    "fabric": "Khaddar",
    "color": "Charcoal",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/pret-01.jpg",
    "images": [
      "./images/pret-01.jpg"
    ],
    "badge": "best",
    "popularity": 95,
    "added": 984
  },
  {
    "id": 17,
    "name": "Dua Essential Kurta",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 8199,
    "description": "A wardrobe essential designed for effortless styling.",
    "fabric": "Linen Blend",
    "color": "Dusty Rose",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/pret-01.jpg",
    "images": [
      "./images/pret-01.jpg"
    ],
    "badge": "",
    "popularity": 88,
    "added": 983
  },
  {
    "id": 18,
    "name": "Emaan Draped Pret",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 8999,
    "description": "A ready to wear kurta cut for a clean, modern silhouette.",
    "fabric": "Cambric",
    "color": "Navy",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/pret-01.jpg",
    "images": [
      "./images/pret-01.jpg"
    ],
    "badge": "",
    "popularity": 81,
    "added": 982
  },
  {
    "id": 19,
    "name": "Zarina Luxury Pret",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 12999,
    "description": "A luxury pret ensemble finished with fine gold thread embroidery.",
    "fabric": "Raw Silk",
    "color": "Midnight Navy",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/luxury-01.jpg",
    "images": [
      "./images/luxury-01.jpg"
    ],
    "badge": "new",
    "popularity": 94,
    "added": 980
  },
  {
    "id": 20,
    "name": "Mehrunisa Silk Ensemble",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 15699,
    "description": "Hand finished detailing on flowing silk for a graceful drape.",
    "fabric": "Organza",
    "color": "Champagne Gold",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/luxury-01.jpg",
    "images": [
      "./images/luxury-01.jpg"
    ],
    "badge": "new",
    "popularity": 87,
    "added": 979
  },
  {
    "id": 21,
    "name": "Anaya Gold Thread Suit",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 18499,
    "description": "Refined luxury tailoring with a softly structured silhouette.",
    "fabric": "Chiffon",
    "color": "Deep Emerald",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/luxury-01.jpg",
    "images": [
      "./images/luxury-01.jpg"
    ],
    "badge": "",
    "popularity": 80,
    "added": 978
  },
  {
    "id": 22,
    "name": "Shehr e Noor Luxe",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 21199,
    "description": "Delicate organza layering with subtle metallic accents.",
    "fabric": "Silk Blend",
    "color": "Pearl White",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/luxury-01.jpg",
    "images": [
      "./images/luxury-01.jpg"
    ],
    "badge": "best",
    "popularity": 73,
    "added": 977
  },
  {
    "id": 23,
    "name": "Roshni Organza Set",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 23999,
    "description": "A statement luxe piece designed for evening gatherings.",
    "fabric": "Velvet Touch",
    "color": "Wine",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/luxury-01.jpg",
    "images": [
      "./images/luxury-01.jpg"
    ],
    "badge": "",
    "popularity": 66,
    "added": 976
  },
  {
    "id": 24,
    "name": "Falak Silk Pret",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 26699,
    "description": "Rich fabric with restrained embellishment for quiet luxury.",
    "fabric": "Raw Silk",
    "color": "Midnight Navy",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/luxury-01.jpg",
    "images": [
      "./images/luxury-01.jpg"
    ],
    "badge": "",
    "popularity": 99,
    "added": 975
  },
  {
    "id": 25,
    "name": "Gulnaz Luxe Ensemble",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 29499,
    "description": "Elegant embroidery placed along the neckline and cuffs.",
    "fabric": "Organza",
    "color": "Champagne Gold",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/luxury-01.jpg",
    "images": [
      "./images/luxury-01.jpg"
    ],
    "badge": "best",
    "popularity": 92,
    "added": 974
  },
  {
    "id": 26,
    "name": "Sahiba Signature Luxe",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 32199,
    "description": "A polished luxury design suited to special occasions.",
    "fabric": "Chiffon",
    "color": "Deep Emerald",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/luxury-01.jpg",
    "images": [
      "./images/luxury-01.jpg"
    ],
    "badge": "",
    "popularity": 85,
    "added": 973
  },
  {
    "id": 27,
    "name": "Mahira Silk Drape",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 34999,
    "description": "A luxury pret ensemble finished with fine gold thread embroidery.",
    "fabric": "Silk Blend",
    "color": "Pearl White",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/luxury-01.jpg",
    "images": [
      "./images/luxury-01.jpg"
    ],
    "badge": "",
    "popularity": 78,
    "added": 972
  },
  {
    "id": 28,
    "name": "Nayab Formal Gown",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 9999,
    "description": "A tailored formal silhouette designed for evening occasions.",
    "fabric": "Crepe",
    "color": "Midnight Navy",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/formal-01.jpg",
    "images": [
      "./images/formal-01.jpg"
    ],
    "badge": "new",
    "popularity": 91,
    "added": 970
  },
  {
    "id": 29,
    "name": "Mahnoor Formal Suit",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 12099,
    "description": "Clean lines and a graceful fall for a confident formal look.",
    "fabric": "Silk Crepe",
    "color": "Black",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/formal-01.jpg",
    "images": [
      "./images/formal-01.jpg"
    ],
    "badge": "new",
    "popularity": 84,
    "added": 969
  },
  {
    "id": 30,
    "name": "Elara Evening Formal",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 14199,
    "description": "Structured formal wear with a softly flared hem.",
    "fabric": "Georgette",
    "color": "Deep Teal",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/formal-01.jpg",
    "images": [
      "./images/formal-01.jpg"
    ],
    "badge": "",
    "popularity": 77,
    "added": 968
  },
  {
    "id": 31,
    "name": "Sitara Formal Ensemble",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 16399,
    "description": "A refined evening design with minimal, elegant detailing.",
    "fabric": "Jacquard",
    "color": "Bronze",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/formal-01.jpg",
    "images": [
      "./images/formal-01.jpg"
    ],
    "badge": "best",
    "popularity": 70,
    "added": 967
  },
  {
    "id": 32,
    "name": "Zoha Tailored Formal",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 18499,
    "description": "Timeless formal tailoring in a rich, fluid fabric.",
    "fabric": "Crepe",
    "color": "Ivory",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/formal-01.jpg",
    "images": [
      "./images/formal-01.jpg"
    ],
    "badge": "",
    "popularity": 63,
    "added": 966
  },
  {
    "id": 33,
    "name": "Areej Formal Drape",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 20599,
    "description": "An understated formal piece with a defined waistline.",
    "fabric": "Silk Crepe",
    "color": "Midnight Navy",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/formal-01.jpg",
    "images": [
      "./images/formal-01.jpg"
    ],
    "badge": "",
    "popularity": 96,
    "added": 965
  },
  {
    "id": 34,
    "name": "Warda Evening Set",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 22699,
    "description": "Sculpted formal wear finished with a subtle gold trim.",
    "fabric": "Georgette",
    "color": "Black",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/formal-01.jpg",
    "images": [
      "./images/formal-01.jpg"
    ],
    "badge": "best",
    "popularity": 89,
    "added": 964
  },
  {
    "id": 35,
    "name": "Amber Formal Silhouette",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 24899,
    "description": "A composed formal design for dinners and celebrations.",
    "fabric": "Jacquard",
    "color": "Deep Teal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/formal-01.jpg",
    "images": [
      "./images/formal-01.jpg"
    ],
    "badge": "",
    "popularity": 82,
    "added": 963
  },
  {
    "id": 36,
    "name": "Rania Formal Classic",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 26999,
    "description": "A tailored formal silhouette designed for evening occasions.",
    "fabric": "Crepe",
    "color": "Bronze",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/formal-01.jpg",
    "images": [
      "./images/formal-01.jpg"
    ],
    "badge": "",
    "popularity": 75,
    "added": 962
  },
  {
    "id": 37,
    "name": "Sitara Shimmer Set",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 8999,
    "description": "A shimmering party ensemble made for celebrations after dark.",
    "fabric": "Sequin Net",
    "color": "Rose Gold",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/party-01.jpg",
    "images": [
      "./images/party-01.jpg"
    ],
    "badge": "new",
    "popularity": 88,
    "added": 960
  },
  {
    "id": 38,
    "name": "Noor Nights Party Wear",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 11599,
    "description": "Fine sequin work arranged in a soft, flattering pattern.",
    "fabric": "Shimmer Chiffon",
    "color": "Champagne",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/party-01.jpg",
    "images": [
      "./images/party-01.jpg"
    ],
    "badge": "new",
    "popularity": 81,
    "added": 959
  },
  {
    "id": 39,
    "name": "Aleena Sequin Ensemble",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 14199,
    "description": "Sparkle balanced with elegant tailoring for a modern party look.",
    "fabric": "Embellished Net",
    "color": "Midnight Navy",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/party-01.jpg",
    "images": [
      "./images/party-01.jpg"
    ],
    "badge": "",
    "popularity": 74,
    "added": 958
  },
  {
    "id": 40,
    "name": "Zehra Glitter Drape",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 16899,
    "description": "Delicate embellishment across a lightweight flowing base.",
    "fabric": "Satin",
    "color": "Silver Grey",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/party-01.jpg",
    "images": [
      "./images/party-01.jpg"
    ],
    "badge": "best",
    "popularity": 67,
    "added": 957
  },
  {
    "id": 41,
    "name": "Mina Party Silhouette",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 19499,
    "description": "A festive design that catches light without feeling heavy.",
    "fabric": "Sequin Net",
    "color": "Plum",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/party-01.jpg",
    "images": [
      "./images/party-01.jpg"
    ],
    "badge": "",
    "popularity": 100,
    "added": 956
  },
  {
    "id": 42,
    "name": "Alina Evening Sparkle",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 22099,
    "description": "Party wear finished with a graceful draped panel.",
    "fabric": "Shimmer Chiffon",
    "color": "Rose Gold",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/party-01.jpg",
    "images": [
      "./images/party-01.jpg"
    ],
    "badge": "",
    "popularity": 93,
    "added": 955
  },
  {
    "id": 43,
    "name": "Sahar Party Luxe",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 24699,
    "description": "Hand placed sequins along the bodice and sleeves.",
    "fabric": "Embellished Net",
    "color": "Champagne",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/party-01.jpg",
    "images": [
      "./images/party-01.jpg"
    ],
    "badge": "best",
    "popularity": 86,
    "added": 954
  },
  {
    "id": 44,
    "name": "Kiran Shimmer Suit",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 27399,
    "description": "A confident celebration piece with refined sparkle.",
    "fabric": "Satin",
    "color": "Midnight Navy",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/party-01.jpg",
    "images": [
      "./images/party-01.jpg"
    ],
    "badge": "",
    "popularity": 79,
    "added": 953
  },
  {
    "id": 45,
    "name": "Iman Party Ensemble",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 29999,
    "description": "A shimmering party ensemble made for celebrations after dark.",
    "fabric": "Sequin Net",
    "color": "Silver Grey",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/party-01.jpg",
    "images": [
      "./images/party-01.jpg"
    ],
    "badge": "",
    "popularity": 72,
    "added": 952
  },
  {
    "id": 46,
    "name": "Noor Bridal Heritage",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 49999,
    "description": "A hand embroidered bridal ensemble crafted for the main ceremony.",
    "fabric": "Hand Embroidered Silk",
    "color": "Ivory Gold",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/bridal-01.jpg",
    "images": [
      "./images/bridal-01.jpg"
    ],
    "badge": "new",
    "popularity": 85,
    "added": 950
  },
  {
    "id": 47,
    "name": "Shehnai Bridal Ensemble",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 67499,
    "description": "Detailed zardozi work across the bodice, sleeves and hem.",
    "fabric": "Zardozi Net",
    "color": "Deep Maroon",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/bridal-01.jpg",
    "images": [
      "./images/bridal-01.jpg"
    ],
    "badge": "new",
    "popularity": 78,
    "added": 949
  },
  {
    "id": 48,
    "name": "Gulbahar Bridal Couture",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 84999,
    "description": "Traditional craftsmanship shaped into a modern bridal silhouette.",
    "fabric": "Heavy Organza",
    "color": "Champagne",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/bridal-01.jpg",
    "images": [
      "./images/bridal-01.jpg"
    ],
    "badge": "",
    "popularity": 71,
    "added": 948
  },
  {
    "id": 49,
    "name": "Mehrbano Bridal Set",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 102499,
    "description": "A layered bridal set finished with an embroidered dupatta.",
    "fabric": "Bridal Jamawar",
    "color": "Rose Ivory",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/bridal-01.jpg",
    "images": [
      "./images/bridal-01.jpg"
    ],
    "badge": "best",
    "popularity": 64,
    "added": 947
  },
  {
    "id": 50,
    "name": "Zeenat Bridal Couture",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 119999,
    "description": "Fine bridal detailing with a balanced, wearable weight.",
    "fabric": "Hand Embroidered Silk",
    "color": "Royal Red",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/bridal-01.jpg",
    "images": [
      "./images/bridal-01.jpg"
    ],
    "badge": "",
    "popularity": 97,
    "added": 946
  },
  {
    "id": 51,
    "name": "Anarkali Bridal Grace",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 137499,
    "description": "Classic bridal artistry in a soft ivory and gold palette.",
    "fabric": "Zardozi Net",
    "color": "Ivory Gold",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/bridal-01.jpg",
    "images": [
      "./images/bridal-01.jpg"
    ],
    "badge": "",
    "popularity": 90,
    "added": 945
  },
  {
    "id": 52,
    "name": "Roshan Bridal Classic",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 154999,
    "description": "An heirloom inspired bridal design with intricate borders.",
    "fabric": "Heavy Organza",
    "color": "Deep Maroon",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/bridal-01.jpg",
    "images": [
      "./images/bridal-01.jpg"
    ],
    "badge": "best",
    "popularity": 83,
    "added": 944
  },
  {
    "id": 53,
    "name": "Sultana Bridal Ensemble",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 172499,
    "description": "Bridal couture created for a graceful, memorable entrance.",
    "fabric": "Bridal Jamawar",
    "color": "Champagne",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/bridal-01.jpg",
    "images": [
      "./images/bridal-01.jpg"
    ],
    "badge": "",
    "popularity": 76,
    "added": 943
  },
  {
    "id": 54,
    "name": "Mahtab Bridal Couture",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 189999,
    "description": "A hand embroidered bridal ensemble crafted for the main ceremony.",
    "fabric": "Hand Embroidered Silk",
    "color": "Rose Ivory",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/bridal-01.jpg",
    "images": [
      "./images/bridal-01.jpg"
    ],
    "badge": "",
    "popularity": 69,
    "added": 942
  },
  {
    "id": 55,
    "name": "Eid Noor Festive Set",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 6999,
    "description": "A festive Eid ensemble with soft embroidery and a flowing dupatta.",
    "fabric": "Chiffon",
    "color": "Mint",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/eid-01.jpg",
    "images": [
      "./images/eid-01.jpg"
    ],
    "badge": "new",
    "popularity": 82,
    "added": 940
  },
  {
    "id": 56,
    "name": "Chand Raat Ensemble",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 8999,
    "description": "Designed for Eid mornings with light, comfortable layering.",
    "fabric": "Embroidered Lawn",
    "color": "Powder Blue",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/eid-01.jpg",
    "images": [
      "./images/eid-01.jpg"
    ],
    "badge": "new",
    "popularity": 75,
    "added": 939
  },
  {
    "id": 57,
    "name": "Eid Gulzar Suit",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 10999,
    "description": "Celebratory detailing kept elegant and easy to wear.",
    "fabric": "Silk Blend",
    "color": "Peach",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/eid-01.jpg",
    "images": [
      "./images/eid-01.jpg"
    ],
    "badge": "",
    "popularity": 68,
    "added": 938
  },
  {
    "id": 58,
    "name": "Meethi Eid Chiffon",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 12999,
    "description": "A pastel festive suit finished with fine lace trims.",
    "fabric": "Organza",
    "color": "Ivory",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/eid-01.jpg",
    "images": [
      "./images/eid-01.jpg"
    ],
    "badge": "best",
    "popularity": 61,
    "added": 937
  },
  {
    "id": 59,
    "name": "Eid Sitara Ensemble",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 14999,
    "description": "Eid wear balancing tradition with a modern cut.",
    "fabric": "Chiffon",
    "color": "Soft Gold",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/eid-01.jpg",
    "images": [
      "./images/eid-01.jpg"
    ],
    "badge": "",
    "popularity": 94,
    "added": 936
  },
  {
    "id": 60,
    "name": "Rehmat Eid Suit",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 16999,
    "description": "Delicate work across the front panel for a festive finish.",
    "fabric": "Embroidered Lawn",
    "color": "Mint",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/eid-01.jpg",
    "images": [
      "./images/eid-01.jpg"
    ],
    "badge": "",
    "popularity": 87,
    "added": 935
  },
  {
    "id": 61,
    "name": "Eid Anaya Festive",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 18999,
    "description": "A graceful festive design for family gatherings.",
    "fabric": "Silk Blend",
    "color": "Powder Blue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/eid-01.jpg",
    "images": [
      "./images/eid-01.jpg"
    ],
    "badge": "best",
    "popularity": 80,
    "added": 934
  },
  {
    "id": 62,
    "name": "Bahar Eid Collection",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 20999,
    "description": "Light festive layering suited to warm celebration days.",
    "fabric": "Organza",
    "color": "Peach",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/eid-01.jpg",
    "images": [
      "./images/eid-01.jpg"
    ],
    "badge": "",
    "popularity": 73,
    "added": 933
  },
  {
    "id": 63,
    "name": "Eid Roshni Set",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 22999,
    "description": "A festive Eid ensemble with soft embroidery and a flowing dupatta.",
    "fabric": "Chiffon",
    "color": "Ivory",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/eid-01.jpg",
    "images": [
      "./images/eid-01.jpg"
    ],
    "badge": "",
    "popularity": 66,
    "added": 932
  },
  {
    "id": 64,
    "name": "Summer Breeze Cotton Set",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 2999,
    "description": "A breathable cotton set designed to stay comfortable all day.",
    "fabric": "Cotton",
    "color": "White",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/summer-01.jpg",
    "images": [
      "./images/summer-01.jpg"
    ],
    "badge": "new",
    "popularity": 79,
    "added": 930
  },
  {
    "id": 65,
    "name": "Sahil Linen Ensemble",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 3899,
    "description": "Light linen tailoring for warm weather elegance.",
    "fabric": "Linen",
    "color": "Sand",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/summer-01.jpg",
    "images": [
      "./images/summer-01.jpg"
    ],
    "badge": "new",
    "popularity": 72,
    "added": 929
  },
  {
    "id": 66,
    "name": "Dhoop Summer Kurta",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 4699,
    "description": "Airy fabric with a relaxed, easy silhouette.",
    "fabric": "Slub Cotton",
    "color": "Sky Blue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/summer-01.jpg",
    "images": [
      "./images/summer-01.jpg"
    ],
    "badge": "",
    "popularity": 65,
    "added": 928
  },
  {
    "id": 67,
    "name": "Aab e Noor Summer Set",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 5599,
    "description": "Minimal summer styling in a cool, neutral palette.",
    "fabric": "Cotton Net",
    "color": "Mint",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/summer-01.jpg",
    "images": [
      "./images/summer-01.jpg"
    ],
    "badge": "best",
    "popularity": 98,
    "added": 927
  },
  {
    "id": 68,
    "name": "Nasim Cotton Suit",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 6499,
    "description": "Loose fitting comfort with a refined finish.",
    "fabric": "Cotton",
    "color": "Soft Grey",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/summer-01.jpg",
    "images": [
      "./images/summer-01.jpg"
    ],
    "badge": "",
    "popularity": 91,
    "added": 926
  },
  {
    "id": 69,
    "name": "Rutba Summer Layer",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 7399,
    "description": "A soft summer layer that works from morning to evening.",
    "fabric": "Linen",
    "color": "White",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/summer-01.jpg",
    "images": [
      "./images/summer-01.jpg"
    ],
    "badge": "",
    "popularity": 84,
    "added": 925
  },
  {
    "id": 70,
    "name": "Sabaa Linen Kurta",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 8199,
    "description": "Crisp cotton with clean, simple detailing.",
    "fabric": "Slub Cotton",
    "color": "Sand",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/summer-01.jpg",
    "images": [
      "./images/summer-01.jpg"
    ],
    "badge": "best",
    "popularity": 77,
    "added": 924
  },
  {
    "id": 71,
    "name": "Chhaon Summer Ensemble",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 9099,
    "description": "A light, wearable design made for summer days.",
    "fabric": "Cotton Net",
    "color": "Sky Blue",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/summer-01.jpg",
    "images": [
      "./images/summer-01.jpg"
    ],
    "badge": "",
    "popularity": 70,
    "added": 923
  },
  {
    "id": 72,
    "name": "Barish Summer Set",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 9999,
    "description": "A breathable cotton set designed to stay comfortable all day.",
    "fabric": "Cotton",
    "color": "Mint",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/summer-01.jpg",
    "images": [
      "./images/summer-01.jpg"
    ],
    "badge": "",
    "popularity": 63,
    "added": 922
  }
];
/* =====================================================================
   Noor's Collection — script.js
   Pure vanilla JavaScript. No build step, no dependencies.
   ---------------------------------------------------------------------
   CONFIG: replace the placeholder values below with your real details.
   ===================================================================== */
const CONFIG = {
  // Enter your WhatsApp number in international format, digits only.
  // Example: "923001234567" (92 = Pakistan country code, no + and no spaces)
  whatsappNumber: "0000000000",
  email: "your-email@example.com",          // placeholder — replace later
  instagram: "https://instagram.com/YOUR_PAGE",  // placeholder
  facebook: "https://facebook.com/YOUR_PAGE",    // placeholder
  currency: "PKR"
};

/* ---------------------------------------------------------------------
   CATEGORIES — add or edit categories here
   --------------------------------------------------------------------- */
const CATEGORIES = [
  { key: "lawn",    name: "Lawn Collection",   image: "./images/lawn-01.jpg",    desc: "Breathable printed lawn for effortless everyday wear." },
  { key: "pret",    name: "Pret Collection",   image: "./images/pret-01.jpg",    desc: "Ready to wear pieces cut for modern daily elegance." },
  { key: "luxury",  name: "Luxury Pret",       image: "./images/luxury-01.jpg",  desc: "Fine fabrics and hand finished detail for special days." },
  { key: "formal",  name: "Formal Wear",       image: "./images/formal-01.jpg",  desc: "Tailored silhouettes designed for evening occasions." },
  { key: "party",   name: "Party Wear",        image: "./images/party-01.jpg",   desc: "Refined sparkle for celebrations and gatherings." },
  { key: "bridal",  name: "Bridal Collection", image: "./images/bridal-01.jpg",  desc: "Hand embroidered couture for the most important day." },
  { key: "eid",     name: "Eid Collection",    image: "./images/eid-01.jpg",     desc: "Festive designs made for warm family celebrations." },
  { key: "summer",  name: "Summer Collection", image: "./images/summer-01.jpg",  desc: "Light cotton and linen for comfortable summer days." }
];

/* =====================================================================
   HELPERS
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const app = $("#app");
const money = n => "PKR " + n.toLocaleString("en-PK");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const catName = k => (CATEGORIES.find(c => c.key === k) || {}).name || k;

/* Wishlist (stored locally in the browser) */
let wishlist = [];
try { wishlist = JSON.parse(localStorage.getItem("noor_wishlist") || "[]"); } catch (e) { wishlist = []; }
const saveWishlist = () => {
  try { localStorage.setItem("noor_wishlist", JSON.stringify(wishlist)); } catch (e) {}
  $("#wishCount").textContent = wishlist.length;
};
const inWishlist = id => wishlist.indexOf(id) > -1;
function toggleWishlist(id) {
  const i = wishlist.indexOf(id);
  if (i > -1) { wishlist.splice(i, 1); toast("Removed from wishlist"); }
  else { wishlist.push(id); toast("Added to wishlist"); }
  saveWishlist();
  return inWishlist(id);
}

let toastTimer;
function toast(msg) {
  let t = $(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

function whatsappLink(text) {
  const num = CONFIG.whatsappNumber.replace(/\D/g, "");
  return "https://wa.me/" + num + "?text=" + encodeURIComponent(text);
}

/* =====================================================================
   COMPONENTS
   ===================================================================== */
function badgeHtml(b) {
  if (b === "new") return '<span class="badge">New</span>';
  if (b === "best") return '<span class="badge best">Best Seller</span>';
  return "";
}

function productCard(p) {
  return `
  <article class="p-card reveal">
    <div class="p-media">
      <a href="#/product/${p.id}" data-link aria-label="${esc(p.name)}">
        <img src="${p.image}" alt="${esc(p.name)} — ${esc(p.categoryName)}" loading="lazy" width="900" height="1200" />
      </a>
      ${badgeHtml(p.badge)}
      <button class="heart ${inWishlist(p.id) ? "on" : ""}" data-wish="${p.id}" aria-label="Add ${esc(p.name)} to wishlist">
        <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.6-7-9.4A4 4 0 0 1 12 8a4 4 0 0 1 7-2.6c0 4.8-7 14.6-7 14.6Z"/></svg>
      </button>
      <a class="quick" href="#/product/${p.id}" data-link style="display:grid;place-items:center">Quick View</a>
    </div>
    <div class="p-body">
      <span class="p-cat">${esc(p.categoryName)}</span>
      <h3 class="p-name">${esc(p.name)}</h3>
      <span class="p-price">${money(p.price)}</span>
      <a class="btn btn-outline btn-sm btn-block" href="#/product/${p.id}" data-link>View Details</a>
    </div>
  </article>`;
}

const grid = list => list.length
  ? `<div class="p-grid">${list.map(productCard).join("")}</div>`
  : `<p class="empty">No products match your selection. Try a different filter.</p>`;

function sectionHead(eyebrow, title, sub) {
  return `<div class="center reveal">
    <p class="eyebrow">${esc(eyebrow)}</p>
    <h2 class="sec-title">${esc(title)}</h2>
    ${sub ? `<p class="sec-sub">${esc(sub)}</p>` : ""}
    <div class="rule"></div>
  </div>`;
}

function banner(title, text, image) {
  return `<div class="banner reveal">
    <img src="${image}" alt="" loading="lazy" />
    <div class="banner-in">
      <p class="eyebrow">Noor&rsquo;s Collection</p>
      <h1>${esc(title)}</h1>
      <p>${esc(text)}</p>
    </div>
  </div>`;
}

/* =====================================================================
   VIEWS
   ===================================================================== */
function viewHome() {
  const featured = PRODUCTS.filter(p => p.badge === "best").slice(0, 8);
  const fresh = PRODUCTS.filter(p => p.badge === "new").slice(0, 8);
  return `
  <section class="hero">
    <img src="./images/hero.jpg" alt="Model wearing an ivory and gold Noor's Collection ensemble" width="1400" height="1750" />
    <div class="hero-content">
      <p class="eyebrow reveal">Elegant Fashion for Every Woman</p>
      <h1 class="reveal d1">Timeless Fashion for Every Woman</h1>
      <p class="reveal d2">Discover elegant outfits designed with style, grace and confidence.</p>
      <div class="hero-btns reveal d3">
        <a class="btn btn-gold" href="#/shop" data-link>Shop Collection</a>
        <a class="btn btn-light" href="#/new-arrivals" data-link>Explore New Arrivals</a>
      </div>
    </div>
  </section>

  <div class="strip">Lawn &nbsp;&middot;&nbsp; Pret &nbsp;&middot;&nbsp; Luxury Pret &nbsp;&middot;&nbsp; Formal &nbsp;&middot;&nbsp; Party &nbsp;&middot;&nbsp; Bridal &nbsp;&middot;&nbsp; Eid</div>

  <section class="section wrap">
    ${sectionHead("Explore", "Featured Categories", "Eight curated collections, each designed around a different moment in a woman's wardrobe.")}
    <div class="cat-grid">
      ${CATEGORIES.map(c => `
        <article class="cat-card reveal">
          <div class="img"><img src="${c.image}" alt="${esc(c.name)}" loading="lazy" width="900" height="1200" /></div>
          <div class="cat-body">
            <h3>${esc(c.name)}</h3>
            <p>${esc(c.desc)}</p>
            <a class="btn btn-outline btn-sm" href="#/category/${c.key}" data-link>Explore Collection</a>
          </div>
        </article>`).join("")}
    </div>
  </section>

  <section class="section wrap" style="background:var(--beige);border-radius:var(--radius)">
    <div class="wrap">
      ${sectionHead("Loved Most", "Best Sellers", "The pieces our customers return to season after season.")}
      ${grid(featured)}
      <div class="center" style="margin-top:26px"><a class="btn" href="#/best-sellers" data-link>View All Best Sellers</a></div>
    </div>
  </section>

  <section class="section wrap">
    ${sectionHead("Just In", "New Arrivals", "Fresh additions to the Noor's Collection wardrobe.")}
    ${grid(fresh)}
    <div class="center" style="margin-top:26px"><a class="btn btn-outline" href="#/new-arrivals" data-link>See All New Arrivals</a></div>
  </section>

  ${whyChooseUs()}

  <section class="section wrap">
    <div class="banner reveal">
      <img src="./images/luxury-01.jpg" alt="" loading="lazy" />
      <div class="banner-in">
        <p class="eyebrow">Elegance, Designed for You</p>
        <h2>Dressed with grace, made to last</h2>
        <p>Noor&rsquo;s Collection brings together modern fashion and timeless style for women who value quiet, considered elegance.</p>
        <div class="hero-btns" style="margin-top:20px">
          <a class="btn btn-gold" href="#/about" data-link>Our Story</a>
          <a class="btn btn-light" href="#/contact" data-link>Contact Us</a>
        </div>
      </div>
    </div>
  </section>`;
}

function whyChooseUs() {
  const feats = [
    ["Premium Designs", "Carefully selected designs for modern women.", '<path d="M12 3l2.4 5.2L20 9l-4 3.9.9 5.6L12 16l-4.9 2.5.9-5.6L4 9l5.6-.8z"/>'],
    ["Quality Fabrics", "Comfortable and thoughtfully selected fabrics.", '<path d="M4 6h16v12H4z"/><path d="M4 10h16M9 6v12"/>'],
    ["Elegant Styles", "Fashion designed for everyday elegance and special occasions.", '<path d="M12 3v18M5 8l7-5 7 5-7 5z"/>'],
    ["Customer Support", "Easy communication and assistance for customers.", '<path d="M21 15a3 3 0 0 1-3 3H8l-5 3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z"/>']
  ];
  return `<section class="section wrap">
    ${sectionHead("Why Noor's", "Why Choose Us")}
    <div class="feat-grid">
      ${feats.map(f => `<div class="feat reveal">
        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">${f[2]}</svg>
        <h3>${f[0]}</h3><p>${f[1]}</p></div>`).join("")}
    </div>
  </section>`;
}

/* ---------- Shop ---------- */
const shopState = { q: "", cat: "all", price: "all", sort: "newest" };

function viewShop() {
  return `<section class="section wrap">
    ${sectionHead("Shop", "All Products", "Browse the complete Noor's Collection wardrobe and filter by category, price or style.")}
    <div class="toolbar">
      <div class="field"><label for="q">Search</label><input type="text" id="q" placeholder="Search by name, fabric or colour" value="${esc(shopState.q)}" /></div>
      <div class="field"><label for="fcat">Category</label>
        <select id="fcat"><option value="all">All Categories</option>
        ${CATEGORIES.map(c => `<option value="${c.key}">${esc(c.name)}</option>`).join("")}</select></div>
      <div class="field"><label for="fprice">Price</label>
        <select id="fprice">
          <option value="all">All Prices</option>
          <option value="0-5000">Under PKR 5,000</option>
          <option value="5000-15000">PKR 5,000 – 15,000</option>
          <option value="15000-40000">PKR 15,000 – 40,000</option>
          <option value="40000-9999999">PKR 40,000 +</option>
        </select></div>
      <div class="field"><label for="fsort">Sort by</label>
        <select id="fsort">
          <option value="newest">Newest</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="popular">Popular</option>
        </select></div>
    </div>
    <div class="chips" id="chips" style="margin-top:14px">
      <button class="chip" data-chip="all">All</button>
      ${CATEGORIES.map(c => `<button class="chip" data-chip="${c.key}">${esc(c.name)}</button>`).join("")}
    </div>
    <p class="result-count" id="count"></p>
    <div id="shopGrid"></div>
  </section>`;
}

function filteredProducts() {
  let list = PRODUCTS.slice();
  const q = shopState.q.trim().toLowerCase();
  if (q) list = list.filter(p => (p.name + " " + p.fabric + " " + p.color + " " + p.categoryName + " " + p.description).toLowerCase().includes(q));
  if (shopState.cat !== "all") list = list.filter(p => p.category === shopState.cat);
  if (shopState.price !== "all") {
    const [a, b] = shopState.price.split("-").map(Number);
    list = list.filter(p => p.price >= a && p.price <= b);
  }
  if (shopState.sort === "low") list.sort((x, y) => x.price - y.price);
  else if (shopState.sort === "high") list.sort((x, y) => y.price - x.price);
  else if (shopState.sort === "popular") list.sort((x, y) => y.popularity - x.popularity);
  else list.sort((x, y) => y.added - x.added);
  return list;
}

function renderShopGrid() {
  const list = filteredProducts();
  $("#shopGrid").innerHTML = grid(list);
  $("#count").textContent = list.length + (list.length === 1 ? " product" : " products");
  document.querySelectorAll("#chips .chip").forEach(c => c.classList.toggle("on", c.dataset.chip === shopState.cat));
  revealInit();
}

function bindShop() {
  const sel = $("#fcat"), pr = $("#fprice"), so = $("#fsort"), q = $("#q");
  if (!sel) return;
  sel.value = shopState.cat; pr.value = shopState.price; so.value = shopState.sort;
  let t;
  q.addEventListener("input", e => { clearTimeout(t); t = setTimeout(() => { shopState.q = e.target.value; renderShopGrid(); }, 180); });
  sel.addEventListener("change", e => { shopState.cat = e.target.value; renderShopGrid(); });
  pr.addEventListener("change", e => { shopState.price = e.target.value; renderShopGrid(); });
  so.addEventListener("change", e => { shopState.sort = e.target.value; renderShopGrid(); });
  document.querySelectorAll("#chips .chip").forEach(c => c.addEventListener("click", () => {
    shopState.cat = c.dataset.chip; sel.value = shopState.cat; renderShopGrid();
  }));
  renderShopGrid();
}

/* ---------- Categories ---------- */
function viewCategories() {
  return `<section class="section wrap">
    ${sectionHead("Collections", "Categories", "Every collection carries the same Noor's Collection identity, styled for a different occasion.")}
    <div class="cat-grid">
      ${CATEGORIES.map(c => {
        const n = PRODUCTS.filter(p => p.category === c.key).length;
        return `<article class="cat-card reveal">
          <div class="img"><img src="${c.image}" alt="${esc(c.name)}" loading="lazy" width="900" height="1200" /></div>
          <div class="cat-body">
            <h3>${esc(c.name)}</h3>
            <p>${esc(c.desc)}</p>
            <p class="p-cat">${n} pieces</p>
            <a class="btn btn-outline btn-sm" href="#/category/${c.key}" data-link>Explore Collection</a>
          </div></article>`;
      }).join("")}
    </div>
  </section>`;
}

function viewCategory(key) {
  const c = CATEGORIES.find(x => x.key === key);
  if (!c) return viewNotFound();
  const list = PRODUCTS.filter(p => p.category === key);
  return `<section class="section wrap">
    ${banner(c.name, c.desc, c.image)}
    <div style="margin-top:34px">
      <p class="eyebrow">${list.length} pieces</p>
      <h2 class="sec-title">The ${esc(c.name)}</h2>
      <div class="rule left"></div>
      ${grid(list)}
    </div>
    <div class="center" style="margin-top:32px"><a class="btn btn-outline" href="#/categories" data-link>All Categories</a></div>
  </section>`;
}

function viewNew() {
  const list = PRODUCTS.filter(p => p.badge === "new").slice(0, 12);
  return `<section class="section wrap">
    ${banner("New Arrivals", "The latest pieces to join the Noor's Collection wardrobe.", "./images/eid-01.jpg")}
    <div style="margin-top:30px">${sectionHead("Just In", "Newly Added", "")}${grid(list)}</div>
  </section>`;
}

function viewBest() {
  const list = PRODUCTS.filter(p => p.badge === "best").slice(0, 8);
  return `<section class="section wrap">
    ${banner("Best Sellers", "Customer favourites, chosen again and again.", "./images/luxury-01.jpg")}
    <div style="margin-top:30px">${sectionHead("Loved Most", "Best Sellers", "")}${grid(list)}</div>
  </section>`;
}

function viewWishlist() {
  const list = PRODUCTS.filter(p => inWishlist(p.id));
  return `<section class="section wrap">
    ${sectionHead("Saved", "Your Wishlist", "Pieces you have saved on this device.")}
    ${list.length ? grid(list) : `<p class="empty">Your wishlist is empty. Tap the heart on any product to save it here.<br><br><a class="btn btn-outline" href="#/shop" data-link>Browse the shop</a></p>`}
  </section>`;
}

/* ---------- Product detail ---------- */
function viewProduct(id) {
  const p = PRODUCTS.find(x => x.id === Number(id));
  if (!p) return viewNotFound();
  const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
  const msg = `Hello Noor's Collection, I would like to enquire about "${p.name}" (${money(p.price)}).`;
  return `<section class="section wrap">
    <p class="eyebrow"><a href="#/shop" data-link>Shop</a> / <a href="#/category/${p.category}" data-link>${esc(p.categoryName)}</a></p>
    <div class="pd">
      <div class="reveal">
        <div class="pd-main"><img id="pdImg" src="${p.images[0]}" alt="${esc(p.name)}" width="900" height="1200" /></div>
        ${p.images.length > 1 ? `<div class="pd-thumbs">${p.images.map((im, i) => `<button data-thumb="${im}" class="${i === 0 ? "on" : ""}"><img src="${im}" alt="" loading="lazy"></button>`).join("")}</div>` : ""}
      </div>
      <div class="reveal d1">
        <h1 class="sec-title">${esc(p.name)}</h1>
        <p class="pd-price">${money(p.price)}</p>
        <p style="color:var(--muted)">${esc(p.description)}</p>
        <dl class="spec">
          <dt>Category</dt><dd>${esc(p.categoryName)}</dd>
          <dt>Fabric</dt><dd>${esc(p.fabric)}</dd>
          <dt>Colour</dt><dd>${esc(p.color)}</dd>
          <dt>Sizes</dt><dd><div class="sizes">${p.sizes.map(s => `<span class="size-pill">${s}</span>`).join("")}</div></dd>
        </dl>
        <div class="pd-actions">
          <a class="btn btn-gold" href="${whatsappLink(msg)}" target="_blank" rel="noopener">Order / Enquire on WhatsApp</a>
          <button class="btn btn-outline" id="pdWish" data-wish="${p.id}">${inWishlist(p.id) ? "Remove from Wishlist" : "Add to Wishlist"}</button>
          <a class="btn btn-outline" href="#/size-guide" data-link>View Size Guide</a>
        </div>
        <p class="placeholder-note">Prices are indicative. Availability is confirmed on enquiry — this site does not process payments.</p>
      </div>
    </div>
    ${related.length ? `<div style="margin-top:52px">${sectionHead("You may also like", "More from " + p.categoryName, "")}${grid(related)}</div>` : ""}
  </section>`;
}

/* ---------- About / Size guide / FAQ / Contact ---------- */
function viewAbout() {
  return `<section class="section wrap">
    ${banner("Elegance, Designed for You", "Elegant women's clothing that combines modern fashion, timeless style and graceful design.", "./images/hero.jpg")}
    <div class="about-grid" style="margin-top:40px">
      <div class="about-img reveal"><img src="./images/pret-01.jpg" alt="Noor's Collection pret piece" loading="lazy" width="900" height="1200" /></div>
      <div class="reveal d1">
        <p class="eyebrow">Our Story</p>
        <h2 class="sec-title">A wardrobe built around grace</h2>
        <div class="rule left"></div>
        <p style="color:var(--muted);margin-top:18px">Noor&rsquo;s Collection is a women&rsquo;s clothing brand focused on elegant, wearable design. Each collection is built around a simple idea: clothing should feel considered, comfortable and quietly confident.</p>
        <p style="color:var(--muted)">We work across lawn, pret, luxury pret, formal, party, bridal and festive wear, choosing fabrics for comfort and finishing details with care. Our design language stays deliberately restrained — clean silhouettes, soft palettes and detailing that lasts beyond a single season.</p>
        <p style="color:var(--muted)">Customers can browse the collection here and contact us directly to check availability, sizing or fabric details.</p>
        <div class="stats">
          <div class="stat"><b>8</b><span>Collections</span></div>
          <div class="stat"><b>${PRODUCTS.length}</b><span>Designs</span></div>
          <div class="stat"><b>XS–XXL</b><span>Size Range</span></div>
        </div>
      </div>
    </div>
    ${whyChooseUs()}
  </section>`;
}

function viewSizeGuide() {
  const rows = [
    ["XS", "32", "26", "35"], ["S", "34", "28", "37"], ["M", "36", "30", "39"],
    ["L", "38", "32", "41"], ["XL", "40", "34", "43"]
  ];
  return `<section class="section wrap">
    ${sectionHead("Fit", "Size Guide", "All measurements are in inches and refer to body measurements, not garment measurements.")}
    <div class="table-wrap reveal">
      <table>
        <thead><tr><th>Size</th><th>Bust</th><th>Waist</th><th>Hip</th></tr></thead>
        <tbody>${rows.map(r => `<tr><td><strong>${r[0]}</strong></td><td>${r[1]}"</td><td>${r[2]}"</td><td>${r[3]}"</td></tr>`).join("")}</tbody>
      </table>
    </div>
    <p class="note">Please check your measurements against this chart before ordering. If you are between two sizes, we recommend choosing the larger size, or contacting us so we can help you decide.</p>
  </section>`;
}

const FAQS = [
  ["What sizes are available?", "Most designs are available from XS to XL, and selected pieces go up to XXL. The available sizes for each design are listed on its product page."],
  ["How can I order?", "Open any product page and use the WhatsApp enquiry button, or send us a message through the contact form. We will confirm availability, sizing and delivery details with you directly."],
  ["Do you offer delivery?", "Delivery options and charges are confirmed at the time of order. Please contact us with your city and we will share the available options."],
  ["How can I contact Noor's Collection?", "You can reach us through WhatsApp, email, or the contact form on this website. Our social links are listed in the contact section."],
  ["Can I exchange an item?", "Exchange requests are handled case by case. Please contact us as soon as possible after receiving your order and keep the item unworn with its original packaging."],
  ["How should I choose my size?", "Compare your bust, waist and hip measurements with our size guide. If you fall between two sizes, choose the larger one or message us for advice."],
  ["What fabrics are used?", "We use fabrics such as lawn, cambric, cotton, linen, chiffon, organza, crepe and silk blends. The fabric for each design is listed on its product page."],
  ["How can I check product availability?", "Send us the product name from the product page through WhatsApp or the contact form and we will confirm current availability."]
];

function viewFaq() {
  return `<section class="section wrap">
    ${sectionHead("Help", "Frequently Asked Questions", "Answers to the questions we are asked most often.")}
    <div class="faq">
      ${FAQS.map((f, i) => `<div class="faq-item reveal">
        <button class="faq-q" aria-expanded="false" data-faq="${i}">${esc(f[0])}</button>
        <div class="faq-a"><p>${esc(f[1])}</p></div>
      </div>`).join("")}
    </div>
  </section>`;
}

function socialButtons() {
  return `
  <a class="social" href="${whatsappLink("Hello Noor's Collection, I would like to know more about your designs.")}" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 1-13.3 7.9L3 21l1.2-4.6A9 9 0 1 1 21 12z"/></svg> WhatsApp</a>
  <a class="social" href="${CONFIG.instagram}" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg> Instagram</a>
  <a class="social" href="${CONFIG.facebook}" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24"><path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2a1 1 0 0 1 1-1z"/></svg> Facebook</a>`;
}

function viewContact() {
  return `<section class="section wrap">
    ${sectionHead("Contact", "Get in Touch", "Message us for availability, sizing help or styling advice.")}
    <div class="contact-grid">
      <div class="contact-card reveal">
        <h3>Reach us directly</h3>
        <div class="social-row">${socialButtons()}</div>
        <dl class="spec" style="margin-top:20px">
          <dt>Email</dt><dd><a href="mailto:${CONFIG.email}">${esc(CONFIG.email)}</a></dd>
          <dt>WhatsApp</dt><dd>${esc(CONFIG.whatsappNumber)}</dd>
          <dt>Hours</dt><dd>Monday to Saturday</dd>
        </dl>
        <p class="placeholder-note">These are placeholder details. Open <code>script.js</code> and edit the <code>CONFIG</code> object at the top to add your real WhatsApp number, email and social links.</p>
      </div>
      <div class="contact-card reveal d1">
        <h3>Send a message</h3>
        <form id="contactForm" novalidate>
          <div class="field"><label for="cname">Name</label><input type="text" id="cname" required placeholder="Your name" /></div>
          <div class="field"><label for="cmail">Email</label><input type="text" id="cmail" required placeholder="your-email@example.com" /></div>
          <div class="field"><label for="cmsg">Message</label><textarea id="cmsg" required placeholder="How can we help you?"></textarea></div>
          <button class="btn btn-block" type="submit">Send via WhatsApp</button>
          <p class="form-msg" id="formMsg" hidden></p>
        </form>
        <p class="placeholder-note">This form opens WhatsApp with your message pre-filled. No data is stored and no payment is processed on this website.</p>
      </div>
    </div>
  </section>`;
}

function viewNotFound() {
  return `<section class="section wrap center">
    <p class="eyebrow">404</p><h1 class="sec-title">Page not found</h1>
    <div class="rule"></div>
    <p class="sec-sub">The page you are looking for does not exist.</p>
    <p style="margin-top:22px"><a class="btn" href="#/" data-link>Back to Home</a></p>
  </section>`;
}

/* =====================================================================
   ROUTER
   ===================================================================== */
function render() {
  const hash = location.hash.replace(/^#/, "") || "/";
  const parts = hash.split("/").filter(Boolean);
  let html, page = parts[0] || "home";

  if (!parts.length) html = viewHome();
  else if (page === "shop") html = viewShop();
  else if (page === "categories") html = viewCategories();
  else if (page === "category") html = viewCategory(parts[1]);
  else if (page === "product") html = viewProduct(parts[1]);
  else if (page === "new-arrivals") html = viewNew();
  else if (page === "best-sellers") html = viewBest();
  else if (page === "about") html = viewAbout();
  else if (page === "size-guide") html = viewSizeGuide();
  else if (page === "faq") html = viewFaq();
  else if (page === "contact") html = viewContact();
  else if (page === "wishlist") html = viewWishlist();
  else html = viewNotFound();

  app.innerHTML = html;
  window.scrollTo({ top: 0, behavior: "auto" });
  document.querySelectorAll("[data-link]").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + hash);
  });
  if (page === "shop") bindShop();
  bindPage();
  revealInit();
  closeDrawer();
}

function bindPage() {
  /* wishlist hearts and buttons */
  app.querySelectorAll("[data-wish]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const id = Number(btn.dataset.wish);
      const on = toggleWishlist(id);
      if (btn.classList.contains("heart")) {
        btn.classList.toggle("on", on);
        btn.classList.remove("pop"); void btn.offsetWidth; btn.classList.add("pop");
      } else {
        btn.textContent = on ? "Remove from Wishlist" : "Add to Wishlist";
      }
      app.querySelectorAll('.heart[data-wish="' + id + '"]').forEach(h => h.classList.toggle("on", on));
      if (location.hash === "#/wishlist") render();
    });
  });

  /* gallery thumbs */
  app.querySelectorAll("[data-thumb]").forEach(b => b.addEventListener("click", () => {
    $("#pdImg").src = b.dataset.thumb;
    app.querySelectorAll("[data-thumb]").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
  }));

  /* FAQ accordion */
  app.querySelectorAll(".faq-q").forEach(q => q.addEventListener("click", () => {
    const item = q.parentElement, panel = item.querySelector(".faq-a"), open = item.classList.contains("open");
    app.querySelectorAll(".faq-item.open").forEach(o => {
      o.classList.remove("open");
      o.querySelector(".faq-a").style.maxHeight = "";
      o.querySelector(".faq-q").setAttribute("aria-expanded", "false");
    });
    if (!open) {
      item.classList.add("open");
      panel.style.maxHeight = panel.scrollHeight + "px";
      q.setAttribute("aria-expanded", "true");
    }
  }));

  /* contact form */
  const form = $("#contactForm");
  if (form) form.addEventListener("submit", e => {
    e.preventDefault();
    const n = $("#cname").value.trim(), m = $("#cmail").value.trim(), msg = $("#cmsg").value.trim();
    const out = $("#formMsg");
    out.hidden = false;
    if (!n || !m || !msg) { out.textContent = "Please complete all fields before sending."; return; }
    out.textContent = "Opening WhatsApp with your message…";
    window.open(whatsappLink(`Hello Noor's Collection.\nName: ${n}\nEmail: ${m}\nMessage: ${msg}`), "_blank", "noopener");
  });
}

/* =====================================================================
   SCROLL REVEAL / HEADER / DRAWER
   ===================================================================== */
let observer;
function revealInit() {
  const els = document.querySelectorAll(".reveal:not(.in)");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  if (!observer) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); observer.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .06 });
  }
  els.forEach(e => observer.observe(e));
}

const drawer = $("#drawer");
function openDrawer() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  $("#burger").setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  $("#burger").setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}
$("#burger").addEventListener("click", () => drawer.classList.contains("open") ? closeDrawer() : openDrawer());
$("#drawerClose").addEventListener("click", closeDrawer);
$("#drawerScrim").addEventListener("click", closeDrawer);

const header = $("#header");
const onScroll = () => header.classList.toggle("solid", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });

window.addEventListener("hashchange", render);
$("#footerSocial").innerHTML = socialButtons();
saveWishlist();
onScroll();
render();
