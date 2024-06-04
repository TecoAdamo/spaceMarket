const MENU = [
  {
    title: "Poltrona",
    data: [
      {
        id: "4",
        title: "Poltrona",
        price: 120.65,

        cover: require("../assets/poltrona.jpg"),
        thumbnail: require("../assets/poltrona.jpg"),
      },
    ],
  },
  {
    title: "Cafeteira",
    data: [
      {
        id: "5",
        title: "Cafeteira",
        price: 90.99,

        cover: require("../assets/cafeteira.jpg"),
        thumbnail: require("../assets/cafeteira.jpg"),
      },
    ],
  },
  {
    title: "Luminária",
    data: [
      {
        id: "5",
        title: "Luminária",
        price: 70.0,

        cover: require("../assets/luminária.jpg"),
        thumbnail: require("../assets/luminária.jpg"),
      },
    ],
  },
];

const PRODUCTS = MENU.flatMap((item) => item.data);
const CATEGORIES = MENU.map((item) => item.title);

type ProductsProps = (typeof PRODUCTS)[0];

export { MENU, PRODUCTS, CATEGORIES, ProductsProps };
