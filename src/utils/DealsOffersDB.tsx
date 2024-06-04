const MENU = [
  {
    title: "Blazers",
    data: [
      {
        id: "1",
        title: "Blazer",
        price: 26.9,
        offer: "-15%",
        // description:
        //     'Um hambúrguer clássico com carne grelhada, queijo, alface, tomate e molho especial.',
        cover: require("../assets/blazer.png"),
        thumbnail: require("../assets/blazer.png"),
      },
      {
        id: "2",
        title: "Headset",
        price: 204.9,
        offer: "-25%",
        // description:
        //     'Uma opção saudável e deliciosa com hambúrguer de legumes, queijo, alface, tomate e maionese vegana.',
        cover: require("../assets/headset.jpg"),
        thumbnail: require("../assets/headset.jpg"),
      },
    ],
  },
  {
    title: "Notebook",
    data: [
      {
        id: "3",
        title: "Macbook",
        price: 12.65,
        offer: "-27%",
        cover: require("../assets/macbook.jpg"),
        thumbnail: require("../assets/macbook.jpg"),
      },
    ],
  },
];

const PRODUCTS = MENU.flatMap((item) => item.data);
const CATEGORIES = MENU.map((item) => item.title);

type ProductsProps = (typeof PRODUCTS)[0];

export { MENU, PRODUCTS, CATEGORIES, ProductsProps };
