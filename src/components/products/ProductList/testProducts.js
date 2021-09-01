import { v4 } from 'uuid';

const products = [
  {
    _id: v4(),
    name: 'Shirt',
    description: 'A shirt that you can wear',
    price: 1500,
    images: [
      {
        url: 'https://www.stoneycreekhunting.co.nz/image/cache/catalog/0_PRODUCT_PAGES/3_CORPORATE/1_MENS/3_MID%20LAYER/Corporate%20Shirts/Long%20Sleeve/C3224_Stoney_Creek_Corporate_Longsleeve_Shirt_Front_Black_Gingham_2000px-875x1000.png',
      },
    ],
    categories: ['Clothes', 'Shirts'],
    sellerId: v4(),
  },
  {
    _id: v4(),
    name: 'Pants',
    description: 'Some pants that you can wear',
    price: 2000,
    images: [
      {
        url: 'data:image/jpeg;base64,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',
      },
    ],
    categories: ['Clothes', 'Pants'],
    sellerId: v4(),
  },
  {
    _id: v4(),
    name: 'T-Shirt',
    description: 'A better t-shirt that you can wear',
    price: 2500,
    images: [
      {
        url: 'data:image/jpeg;base64,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',
      },
    ],
    categories: ['Clothes', 'Shirts'],
    sellerId: v4(),
  },
  {
    _id: v4(),
    name: 'Hat',
    description: 'A hat that you can wear on your head',
    price: 1000,
    images: [
      {
        url: 'https://cdn11.bigcommerce.com/s-hsi95a83fz/product_images/uploaded_images/1118-grade-hat-dark-grey-thumb.jpg?t=1585690426&_ga=2.25919934.2069277356.1585516345-1869486607.1578452111',
      },
    ],
    categories: ['Clothes', 'Hats'],
    sellerId: v4(),
  },
];

export default products;
