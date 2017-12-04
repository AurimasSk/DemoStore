const products = [
      {
        id: "1",
        name: "First product",
        picturePath: "../../../resources/images/food.png",
        price: "1 Eur",
        info: "This is info about product 1",
        otherDetails: "This is other details about product 1"
      },
      {
        id: "2",
        name: "Second product",
        picturePath: '../../../resources/images/food.png',
        price: "2 Eur",
        info: "This is info about product 2",
        otherDetails: "This is other details about product 2"
      },
      {
        id: "3",
        name: "Third product",
        picturePath: "../../../resources/images/food.png",
        price: "3 Eur",
        info: "This is info about product 3",
        otherDetails: "This is other details about product 3"
      },
      {
        id: "4",
        name: "First product",
        picturePath: "../../../resources/images/food.png",
        price: "1 Eur",
        info: "This is info about product 4",
        otherDetails: "This is other details about product 4"
      },
      {
        id: "5",
        name: "Second product",
        picturePath: '../../../resources/images/food.png',
        price: "2 Eur",
        info: "This is info about product 5",
        otherDetails: "This is other details about product 5"
      },
      {
        id: "6",
        name: "Third product",
        picturePath: "../../../resources/images/food.png",
        price: "3 Eur",
        info: "This is info about product 6",
        otherDetails: "This is other details about product 6"
      },
      {
        id: "7",
        name: "Second product",
        picturePath: '../../../resources/images/food.png',
        price: "2 Eur",
        info: "This is info about product 7",
        otherDetails: "This is other details about product 7"
      },
      {
        id: "8",
        name: "Third product",
        picturePath: "../../../resources/images/food.png",
        price: "3 Eur",
        info: "This is info about product 8",
        otherDetails: "This is other details about product 8"
      },
      {
        id: "9",
        name: "Second product",
        picturePath: '../../../resources/images/food.png',
        price: "2 Eur",
        info: "This is info about product 9",
        otherDetails: "This is other details about product 9"
      },
      {
        id: "10",
        name: "Third product",
        picturePath: "../../../resources/images/food.png",
        price: "3 Eur",
        info: "This is info about product 10",
        otherDetails: "This is other details about product 10"
      }
];

class ProductApi {

  static getAllProducts() {
    return new Promise((resolve) => {
      resolve(products);
    });
  }

  static getProductById(productId) {
    return new Promise((resolve) => {
      const foundProduct = products.find(product =>
        product.id == productId);
      resolve(foundProduct);
    });
  }
}

export default ProductApi;
