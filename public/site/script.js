const PRODUCTS = [
  {
    "id": 1,
    "name": "Sahar Ivory Bloom",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 3499,
    "description": "Printed lawn shalwar kameez with a chiffon dupatta in matching sage florals.",
    "fabric": "Premium Lawn",
    "color": "Ivory & Sage",
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
    "name": "Meher Blush Garden",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 4099,
    "description": "Three piece blush lawn suit with rose garden print and a soft printed dupatta.",
    "fabric": "Printed Lawn",
    "color": "Blush Pink",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/lawn-02.jpg",
    "images": [
      "./images/lawn-02.jpg"
    ],
    "badge": "new",
    "popularity": 93,
    "added": 999
  },
  {
    "id": 3,
    "name": "Zoya Indigo Block",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 4599,
    "description": "Indigo block printed lawn suit with plain white trousers and block print dupatta.",
    "fabric": "Cotton Lawn",
    "color": "Indigo Blue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/lawn-03.jpg",
    "images": [
      "./images/lawn-03.jpg"
    ],
    "badge": "",
    "popularity": 86,
    "added": 998
  },
  {
    "id": 4,
    "name": "Aiza Mint Chikankari",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 5199,
    "description": "Mint lawn kameez with white chikankari embroidery and a scalloped net dupatta.",
    "fabric": "Embroidered Lawn",
    "color": "Mint Green",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/lawn-04.jpg",
    "images": [
      "./images/lawn-04.jpg"
    ],
    "badge": "best",
    "popularity": 79,
    "added": 997
  },
  {
    "id": 5,
    "name": "Rida Lilac Paisley",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 5699,
    "description": "Lilac paisley print lawn three piece with cotton trousers and printed dupatta.",
    "fabric": "Slub Lawn",
    "color": "Lilac",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/lawn-05.jpg",
    "images": [
      "./images/lawn-05.jpg"
    ],
    "badge": "",
    "popularity": 72,
    "added": 996
  },
  {
    "id": 6,
    "name": "Inaya Sunlit Stripe",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 6299,
    "description": "Striped mustard lawn suit with contrast cream sleeves and printed lawn dupatta.",
    "fabric": "Premium Lawn",
    "color": "Mustard & Cream",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/lawn-06.jpg",
    "images": [
      "./images/lawn-06.jpg"
    ],
    "badge": "",
    "popularity": 65,
    "added": 995
  },
  {
    "id": 7,
    "name": "Hoor Powder Blue Buti",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 6899,
    "description": "Powder blue lawn kameez covered in fine buti motifs with a plain chiffon dupatta.",
    "fabric": "Cotton Lawn",
    "color": "Powder Blue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/lawn-07.jpg",
    "images": [
      "./images/lawn-07.jpg"
    ],
    "badge": "best",
    "popularity": 98,
    "added": 994
  },
  {
    "id": 8,
    "name": "Sana Terracotta Leaf",
    "category": "lawn",
    "categoryName": "Lawn Collection",
    "price": 7399,
    "description": "Beige lawn suit with terracotta leaf print and matching printed dupatta.",
    "fabric": "Printed Lawn",
    "color": "Terracotta",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/lawn-08.jpg",
    "images": [
      "./images/lawn-08.jpg"
    ],
    "badge": "",
    "popularity": 91,
    "added": 993
  },
  {
    "id": 10,
    "name": "Aira Off White Kurta",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 2999,
    "description": "Straight cambric kurta with pintuck panels, worn with slim cigarette pants.",
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
    "name": "Sana Charcoal Straight",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 3699,
    "description": "Charcoal viscose straight kurta with gold buttons and straight trousers.",
    "fabric": "Viscose",
    "color": "Charcoal Grey",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/pret-02.jpg",
    "images": [
      "./images/pret-02.jpg"
    ],
    "badge": "new",
    "popularity": 90,
    "added": 989
  },
  {
    "id": 12,
    "name": "Layla Dusty Rose Panel",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 4499,
    "description": "Dusty rose khaddar kurta with ivory panelling and matching shalwar.",
    "fabric": "Khaddar",
    "color": "Dusty Rose",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/pret-03.jpg",
    "images": [
      "./images/pret-03.jpg"
    ],
    "badge": "",
    "popularity": 83,
    "added": 988
  },
  {
    "id": 13,
    "name": "Amal Navy Thread",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 5199,
    "description": "Navy linen kurta with white thread embroidered neckline and tapered trousers.",
    "fabric": "Linen Blend",
    "color": "Navy",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/pret-04.jpg",
    "images": [
      "./images/pret-04.jpg"
    ],
    "badge": "best",
    "popularity": 76,
    "added": 987
  },
  {
    "id": 14,
    "name": "Zara Camel Tunic",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 5999,
    "description": "Camel A-line tunic with tonal top stitching, straight pants and a light stole.",
    "fabric": "Cambric",
    "color": "Camel",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/pret-05.jpg",
    "images": [
      "./images/pret-05.jpg"
    ],
    "badge": "",
    "popularity": 69,
    "added": 986
  },
  {
    "id": 15,
    "name": "Hania Olive Relaxed",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 6699,
    "description": "Relaxed olive kurta with wooden buttons and wide leg trousers.",
    "fabric": "Viscose",
    "color": "Olive Green",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/pret-06.jpg",
    "images": [
      "./images/pret-06.jpg"
    ],
    "badge": "",
    "popularity": 62,
    "added": 985
  },
  {
    "id": 16,
    "name": "Areeba Ecru Angrakha",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 7499,
    "description": "Ecru angrakha style kurta with contrast ties and slim trousers.",
    "fabric": "Khaddar",
    "color": "Ecru",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/pret-07.jpg",
    "images": [
      "./images/pret-07.jpg"
    ],
    "badge": "best",
    "popularity": 95,
    "added": 984
  },
  {
    "id": 17,
    "name": "Mahnoor Rust Shirt",
    "category": "pret",
    "categoryName": "Pret Collection",
    "price": 8199,
    "description": "Rust cambric shirt kurta with a cream printed placket and cotton shalwar.",
    "fabric": "Cambric",
    "color": "Rust",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/pret-08.jpg",
    "images": [
      "./images/pret-08.jpg"
    ],
    "badge": "",
    "popularity": 88,
    "added": 983
  },
  {
    "id": 19,
    "name": "Noor Champagne Organza",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 12999,
    "description": "Champagne organza three piece with sequin thread work and raw silk trousers.",
    "fabric": "Organza",
    "color": "Champagne Gold",
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
    "name": "Sahiba Emerald Silk",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 15699,
    "description": "Emerald raw silk kameez with gold zari borders and an organza dupatta.",
    "fabric": "Raw Silk",
    "color": "Emerald Green",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/luxury-02.jpg",
    "images": [
      "./images/luxury-02.jpg"
    ],
    "badge": "new",
    "popularity": 87,
    "added": 979
  },
  {
    "id": 21,
    "name": "Aleena Pearl Net",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 18499,
    "description": "Ivory net shirt with pearl hand work over a silk slip and net dupatta.",
    "fabric": "Net",
    "color": "Pearl White",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/luxury-03.jpg",
    "images": [
      "./images/luxury-03.jpg"
    ],
    "badge": "",
    "popularity": 80,
    "added": 978
  },
  {
    "id": 22,
    "name": "Mahjabeen Wine Velvet",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 21199,
    "description": "Wine velvet kameez with antique gold embroidery and jamawar trousers.",
    "fabric": "Velvet",
    "color": "Wine",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/luxury-04.jpg",
    "images": [
      "./images/luxury-04.jpg"
    ],
    "badge": "best",
    "popularity": 73,
    "added": 977
  },
  {
    "id": 23,
    "name": "Anaya Powder Chiffon",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 23999,
    "description": "Powder pink chiffon suit with silver dabka work and a scalloped dupatta.",
    "fabric": "Chiffon",
    "color": "Powder Pink",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/luxury-05.jpg",
    "images": [
      "./images/luxury-05.jpg"
    ],
    "badge": "",
    "popularity": 66,
    "added": 976
  },
  {
    "id": 24,
    "name": "Rania Ink Blue Jamawar",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 26699,
    "description": "Ink blue jamawar three piece with copper zari stripes and silk dupatta.",
    "fabric": "Jamawar",
    "color": "Ink Blue",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/luxury-06.jpg",
    "images": [
      "./images/luxury-06.jpg"
    ],
    "badge": "",
    "popularity": 99,
    "added": 975
  },
  {
    "id": 25,
    "name": "Zahra Sand Tissue",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 29499,
    "description": "Sand tissue silk kameez with tonal resham work and organza dupatta.",
    "fabric": "Tissue Silk",
    "color": "Sand Beige",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/luxury-07.jpg",
    "images": [
      "./images/luxury-07.jpg"
    ],
    "badge": "best",
    "popularity": 92,
    "added": 974
  },
  {
    "id": 26,
    "name": "Elaina Plum Masuri",
    "category": "luxury",
    "categoryName": "Luxury Pret",
    "price": 32199,
    "description": "Plum masuri suit with mirror and thread accents and a chiffon dupatta.",
    "fabric": "Masuri",
    "color": "Plum",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/luxury-08.jpg",
    "images": [
      "./images/luxury-08.jpg"
    ],
    "badge": "",
    "popularity": 85,
    "added": 973
  },
  {
    "id": 28,
    "name": "Nazneen Black Column",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 9999,
    "description": "Black crepe column kameez with silver thread borders and straight trousers.",
    "fabric": "Crepe",
    "color": "Jet Black",
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
    "name": "Saira Ivory Cape",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 12099,
    "description": "Ivory silk formal with an embroidered cape and flared trousers.",
    "fabric": "Silk",
    "color": "Ivory",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/formal-02.jpg",
    "images": [
      "./images/formal-02.jpg"
    ],
    "badge": "new",
    "popularity": 84,
    "added": 969
  },
  {
    "id": 30,
    "name": "Kiran Teal Anarkali",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 14199,
    "description": "Teal chiffon anarkali with gold hem embroidery and churidar.",
    "fabric": "Chiffon",
    "color": "Teal",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/formal-03.jpg",
    "images": [
      "./images/formal-03.jpg"
    ],
    "badge": "",
    "popularity": 77,
    "added": 968
  },
  {
    "id": 31,
    "name": "Mehak Maroon Peplum",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 16399,
    "description": "Maroon jacquard peplum with zari waist detail and a straight sharara.",
    "fabric": "Jacquard",
    "color": "Maroon",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/formal-04.jpg",
    "images": [
      "./images/formal-04.jpg"
    ],
    "badge": "best",
    "popularity": 70,
    "added": 967
  },
  {
    "id": 32,
    "name": "Dua Grey Sharara",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 18499,
    "description": "Steel grey short shirt with silver sequin scatter and a matching sharara.",
    "fabric": "Organza",
    "color": "Steel Grey",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/formal-05.jpg",
    "images": [
      "./images/formal-05.jpg"
    ],
    "badge": "",
    "popularity": 63,
    "added": 966
  },
  {
    "id": 33,
    "name": "Fajr Bottle Green Gown",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 20599,
    "description": "Bottle green velvet formal gown kameez with gold neckline work.",
    "fabric": "Velvet",
    "color": "Bottle Green",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/formal-06.jpg",
    "images": [
      "./images/formal-06.jpg"
    ],
    "badge": "",
    "popularity": 96,
    "added": 965
  },
  {
    "id": 34,
    "name": "Iman Rose Gold Drape",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 22699,
    "description": "Rose gold tissue formal with a draped front and cigarette pants.",
    "fabric": "Tissue",
    "color": "Rose Gold",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/formal-07.jpg",
    "images": [
      "./images/formal-07.jpg"
    ],
    "badge": "best",
    "popularity": 89,
    "added": 964
  },
  {
    "id": 35,
    "name": "Zainab Onyx Jacket",
    "category": "formal",
    "categoryName": "Formal Wear",
    "price": 24899,
    "description": "Onyx raw silk suit worn under a gold embroidered long jacket.",
    "fabric": "Raw Silk",
    "color": "Onyx & Gold",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/formal-08.jpg",
    "images": [
      "./images/formal-08.jpg"
    ],
    "badge": "",
    "popularity": 82,
    "added": 963
  },
  {
    "id": 37,
    "name": "Rida Rose Shimmer",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 8999,
    "description": "Rose pink sequin net shirt with a silk slip and shimmer dupatta.",
    "fabric": "Net",
    "color": "Rose Pink",
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
    "name": "Alina Midnight Sequin",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 11599,
    "description": "Midnight blue chiffon party suit with silver sequin sprays and trousers.",
    "fabric": "Chiffon",
    "color": "Midnight Blue",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/party-02.jpg",
    "images": [
      "./images/party-02.jpg"
    ],
    "badge": "new",
    "popularity": 81,
    "added": 959
  },
  {
    "id": 39,
    "name": "Amber Gold Gharara",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 14199,
    "description": "Antique gold organza short shirt with mirror work and a gharara.",
    "fabric": "Organza",
    "color": "Antique Gold",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/party-03.jpg",
    "images": [
      "./images/party-03.jpg"
    ],
    "badge": "",
    "popularity": 74,
    "added": 958
  },
  {
    "id": 40,
    "name": "Sadia Fuchsia Flare",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 16899,
    "description": "Fuchsia chiffon flared frock with gold gota trim and churidar.",
    "fabric": "Chiffon",
    "color": "Fuchsia",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/party-04.jpg",
    "images": [
      "./images/party-04.jpg"
    ],
    "badge": "best",
    "popularity": 67,
    "added": 957
  },
  {
    "id": 41,
    "name": "Hina Silver Frost",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 19499,
    "description": "Silver grey tissue party suit with crystal beading and a net dupatta.",
    "fabric": "Tissue",
    "color": "Silver Grey",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/party-05.jpg",
    "images": [
      "./images/party-05.jpg"
    ],
    "badge": "",
    "popularity": 100,
    "added": 956
  },
  {
    "id": 42,
    "name": "Mina Coral Bloom",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 22099,
    "description": "Coral organza kameez with 3D floral appliqué and silk trousers.",
    "fabric": "Organza",
    "color": "Coral",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/party-06.jpg",
    "images": [
      "./images/party-06.jpg"
    ],
    "badge": "",
    "popularity": 93,
    "added": 955
  },
  {
    "id": 43,
    "name": "Laiba Champagne Kalidar",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 24699,
    "description": "Champagne kalidar frock with pearl drops and a matching dupatta.",
    "fabric": "Net",
    "color": "Champagne",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/party-07.jpg",
    "images": [
      "./images/party-07.jpg"
    ],
    "badge": "best",
    "popularity": 86,
    "added": 954
  },
  {
    "id": 44,
    "name": "Noor Aubergine Glow",
    "category": "party",
    "categoryName": "Party Wear",
    "price": 27399,
    "description": "Aubergine velvet party suit with copper sequin borders and straight pants.",
    "fabric": "Velvet",
    "color": "Aubergine",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/party-08.jpg",
    "images": [
      "./images/party-08.jpg"
    ],
    "badge": "",
    "popularity": 79,
    "added": 953
  },
  {
    "id": 46,
    "name": "Gulnaar Crimson Lehenga",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 49999,
    "description": "Crimson velvet bridal lehenga with heavy gold zardozi and a net dupatta.",
    "fabric": "Velvet",
    "color": "Crimson Red",
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
    "name": "Mehrunisa Ivory Nikah",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 67499,
    "description": "Ivory silk nikah suit with silver dabka, pearl work and two dupattas.",
    "fabric": "Silk",
    "color": "Ivory & Silver",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/bridal-02.jpg",
    "images": [
      "./images/bridal-02.jpg"
    ],
    "badge": "new",
    "popularity": 78,
    "added": 949
  },
  {
    "id": 48,
    "name": "Roshni Maroon Sharara",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 84999,
    "description": "Deep maroon bridal sharara set with antique gold kora work.",
    "fabric": "Jamawar",
    "color": "Deep Maroon",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/bridal-03.jpg",
    "images": [
      "./images/bridal-03.jpg"
    ],
    "badge": "",
    "popularity": 71,
    "added": 948
  },
  {
    "id": 49,
    "name": "Zeenat Gold Walima",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 102499,
    "description": "Old gold walima gown kameez with tonal zari work and a tissue dupatta.",
    "fabric": "Tissue",
    "color": "Old Gold",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/bridal-04.jpg",
    "images": [
      "./images/bridal-04.jpg"
    ],
    "badge": "best",
    "popularity": 64,
    "added": 947
  },
  {
    "id": 50,
    "name": "Anaya Rani Pink Gharara",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 119999,
    "description": "Rani pink mehndi gharara set with mirror and gota work.",
    "fabric": "Raw Silk",
    "color": "Rani Pink",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/bridal-05.jpg",
    "images": [
      "./images/bridal-05.jpg"
    ],
    "badge": "",
    "popularity": 97,
    "added": 946
  },
  {
    "id": 51,
    "name": "Shehnaaz Rust Angrakha",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 137499,
    "description": "Rust bridal angrakha with gold hand embroidery and a farshi shalwar.",
    "fabric": "Velvet",
    "color": "Rust & Gold",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/bridal-06.jpg",
    "images": [
      "./images/bridal-06.jpg"
    ],
    "badge": "",
    "popularity": 90,
    "added": 945
  },
  {
    "id": 52,
    "name": "Noor Jahan Emerald Set",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 154999,
    "description": "Emerald bridal set with gold kundan-inspired embroidery and lehenga.",
    "fabric": "Velvet",
    "color": "Emerald & Gold",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/bridal-07.jpg",
    "images": [
      "./images/bridal-07.jpg"
    ],
    "badge": "best",
    "popularity": 83,
    "added": 944
  },
  {
    "id": 53,
    "name": "Sahar Blush Reception",
    "category": "bridal",
    "categoryName": "Bridal Collection",
    "price": 172499,
    "description": "Blush reception gown kameez with pearl and crystal cascade work.",
    "fabric": "Net",
    "color": "Blush & Pearl",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/bridal-08.jpg",
    "images": [
      "./images/bridal-08.jpg"
    ],
    "badge": "",
    "popularity": 76,
    "added": 943
  },
  {
    "id": 55,
    "name": "Eid Ivory Chikan",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 6999,
    "description": "Ivory chikankari Eid suit with gold buti and an organza dupatta.",
    "fabric": "Lawn",
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
    "badge": "new",
    "popularity": 82,
    "added": 940
  },
  {
    "id": 56,
    "name": "Eid Pista Green Joy",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 8999,
    "description": "Pista green Eid three piece with gold gota trim and printed dupatta.",
    "fabric": "Cambric",
    "color": "Pista Green",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/eid-02.jpg",
    "images": [
      "./images/eid-02.jpg"
    ],
    "badge": "new",
    "popularity": 75,
    "added": 939
  },
  {
    "id": 57,
    "name": "Eid Sky Blue Grace",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 10999,
    "description": "Sky blue chiffon Eid suit with silver thread florals and silk trousers.",
    "fabric": "Chiffon",
    "color": "Sky Blue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/eid-03.jpg",
    "images": [
      "./images/eid-03.jpg"
    ],
    "badge": "",
    "popularity": 68,
    "added": 938
  },
  {
    "id": 58,
    "name": "Eid Peach Blossom",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 12999,
    "description": "Peach organza Eid kameez with pearl-trimmed neckline and cotton pants.",
    "fabric": "Organza",
    "color": "Peach",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/eid-04.jpg",
    "images": [
      "./images/eid-04.jpg"
    ],
    "badge": "best",
    "popularity": 61,
    "added": 937
  },
  {
    "id": 59,
    "name": "Eid Lilac Shine",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 14999,
    "description": "Lilac Eid suit with a sequin border and matching lawn dupatta.",
    "fabric": "Lawn",
    "color": "Soft Lilac",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/eid-05.jpg",
    "images": [
      "./images/eid-05.jpg"
    ],
    "badge": "",
    "popularity": 94,
    "added": 936
  },
  {
    "id": 60,
    "name": "Eid Mustard Festive",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 16999,
    "description": "Mustard Eid suit with gold mirror buti and a printed shawl dupatta.",
    "fabric": "Khaddar",
    "color": "Mustard Gold",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/eid-06.jpg",
    "images": [
      "./images/eid-06.jpg"
    ],
    "badge": "",
    "popularity": 87,
    "added": 935
  },
  {
    "id": 61,
    "name": "Eid Rose Beige Elegance",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 18999,
    "description": "Rose beige silk Eid suit with tonal thread jaal and organza dupatta.",
    "fabric": "Silk",
    "color": "Rose Beige",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/eid-07.jpg",
    "images": [
      "./images/eid-07.jpg"
    ],
    "badge": "best",
    "popularity": 80,
    "added": 934
  },
  {
    "id": 62,
    "name": "Eid Teal Celebration",
    "category": "eid",
    "categoryName": "Eid Collection",
    "price": 20999,
    "description": "Teal Eid three piece with copper embroidery panels and plain trousers.",
    "fabric": "Cambric",
    "color": "Teal",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/eid-08.jpg",
    "images": [
      "./images/eid-08.jpg"
    ],
    "badge": "",
    "popularity": 73,
    "added": 933
  },
  {
    "id": 64,
    "name": "Summer White Linen",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 2999,
    "description": "White linen summer kurta with tonal stitching and wide cotton trousers.",
    "fabric": "Linen",
    "color": "Pure White",
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
    "name": "Summer Lemon Stripe",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 3899,
    "description": "Lemon striped cotton summer suit with plain trousers and cotton dupatta.",
    "fabric": "Cotton",
    "color": "Lemon Yellow",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/summer-02.jpg",
    "images": [
      "./images/summer-02.jpg"
    ],
    "badge": "new",
    "popularity": 72,
    "added": 929
  },
  {
    "id": 66,
    "name": "Summer Aqua Breeze",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 4699,
    "description": "Aqua cambric summer suit with a white palm leaf print dupatta.",
    "fabric": "Cambric",
    "color": "Aqua",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/summer-03.jpg",
    "images": [
      "./images/summer-03.jpg"
    ],
    "badge": "",
    "popularity": 65,
    "added": 928
  },
  {
    "id": 67,
    "name": "Summer Sand Cotton",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 5599,
    "description": "Sand cotton summer kameez with rust hem embroidery and shalwar.",
    "fabric": "Cotton Net",
    "color": "Sand",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/summer-04.jpg",
    "images": [
      "./images/summer-04.jpg"
    ],
    "badge": "best",
    "popularity": 98,
    "added": 927
  },
  {
    "id": 68,
    "name": "Summer Coral Print",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 6499,
    "description": "Coral lawn summer suit with abstract white brush print and dupatta.",
    "fabric": "Lawn",
    "color": "Coral",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/summer-05.jpg",
    "images": [
      "./images/summer-05.jpg"
    ],
    "badge": "",
    "popularity": 91,
    "added": 926
  },
  {
    "id": 69,
    "name": "Summer Sage Airy",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 7399,
    "description": "Sage ditsy floral cotton summer three piece with plain trousers.",
    "fabric": "Cotton",
    "color": "Sage",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "image": "./images/summer-06.jpg",
    "images": [
      "./images/summer-06.jpg"
    ],
    "badge": "",
    "popularity": 84,
    "added": 925
  },
  {
    "id": 70,
    "name": "Summer Sky Chambray",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 8199,
    "description": "Chambray blue summer kurta with white embroidery and cotton pants.",
    "fabric": "Chambray",
    "color": "Chambray Blue",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "image": "./images/summer-07.jpg",
    "images": [
      "./images/summer-07.jpg"
    ],
    "badge": "best",
    "popularity": 77,
    "added": 924
  },
  {
    "id": 71,
    "name": "Summer Peach Cool",
    "category": "summer",
    "categoryName": "Summer Collection",
    "price": 9099,
    "description": "Soft peach linen summer suit with cutwork sleeves and light dupatta.",
    "fabric": "Linen",
    "color": "Soft Peach",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "image": "./images/summer-08.jpg",
    "images": [
      "./images/summer-08.jpg"
    ],
    "badge": "",
    "popularity": 70,
    "added": 923
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
