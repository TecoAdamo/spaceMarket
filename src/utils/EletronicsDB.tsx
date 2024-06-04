const MENU = [
  {
    title: "Fone",
    data: [
      {
        id: "4",
        title: "Headset Gamer",
        price: 129.9,

        cover: require("../assets/headset2.jpg"),
        thumbnail: require("../assets/headset2.jpg"),
      },
    ],
  },
  {
    title: "Relógio",
    data: [
      {
        id: "5",
        title: "Relógio",
        price: 180.0,

        cover: require("../assets/relógio.jpg"),
        thumbnail: require("../assets/relógio.jpg"),
      },
    ],
  },
  {
    title: "Celular",
    data: [
      {
        id: "5",
        title: "Iphone 12 ",
        price: 2900.0,

        cover: require("../assets/phone.jpg"),
        thumbnail: require("../assets/phone.jpg"),
      },
    ],
  },
];

const PRODUCTS = MENU.flatMap((item) => item.data);
const CATEGORIES = MENU.map((item) => item.title);

type ProductsProps = (typeof PRODUCTS)[0];

export { MENU, PRODUCTS, CATEGORIES, ProductsProps };
