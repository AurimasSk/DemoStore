const products = [
      {
        id: "1",
        name: "First product",
        picturePath: "../../../resources/images/food.png",
        price: "1 Eur"
      },
      {
        id: "2",
        name: "Second product",
        picturePath: '../../../resources/images/food.png',
        price: "2 Eur"
      },
      {
        id: "3",
        name: "Third product",
        picturePath: "../../../resources/images/food.png",
        price: "3 Eur"
      },
      {
        id: "4",
        name: "First product",
        picturePath: "../../../resources/images/food.png",
        price: "1 Eur"
      },
      {
        id: "5",
        name: "Second product",
        picturePath: '../../../resources/images/food.png',
        price: "2 Eur"
      },
      {
        id: "6",
        name: "Third product",
        picturePath: "../../../resources/images/food.png",
        price: "3 Eur"
      },
      {
        id: "7",
        name: "Second product",
        picturePath: '../../../resources/images/food.png',
        price: "2 Eur"
      },
      {
        id: "8",
        name: "Third product",
        picturePath: "../../../resources/images/food.png",
        price: "3 Eur"
      },
      {
        id: "9",
        name: "Second product",
        picturePath: '../../../resources/images/food.png',
        price: "2 Eur"
      },
      {
        id: "10",
        name: "Third product",
        picturePath: "../../../resources/images/food.png",
        price: "3 Eur"
      }
];

class ProductApi {

  static getAllProducts() {
    console.log("I'm in API: ", products);
    return new Promise((resolve, reject) => {
      resolve(products);
    });
  }
}

export default ProductApi;