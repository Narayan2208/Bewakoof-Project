import card from "./card.js";

var products;
async function getData() {
  const jsondata = await fetch("https://bewakoof-api.onrender.com/mens");
  const data = await jsondata.json();
  data.forEach((element) => {
    if (element.tag == undefined) {
      element.tag = "BUY 3 FOR 899";
    }
    if (element.tag === "BUY 3 FOR 899") {
      element.tagColor = "#079845";
    }
    if (element.tag !== "BUY 3 FOR 899") {
      element.tagColor = "#615E5A";
    }
  });
  products = data;
  displayData(data);
  event(data);
}
getData();

// var element = {
//   image:
//     "https://images.bewakoof.com/t640/lost-mountains-half-sleeve-t-shirt-272010-1655748131-1.jpg",
//   title: "Lost Mountains Half Sleeve T-Shirt",
//   price: "₹349",
//   orignal_price: "₹1099",
//   tribe: "₹319For TriBe Members",
//   tag: "BUY 3 FOR 899",
//   image2:
//     "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748142-3.jpg",
//   image3:
//     "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748147-4.jpg",
//   image4:
//     "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748131-1.jpg",
//   description:
//     "Revamp your look with this Lost Mountains Men's Printed T-Shirt. Style this t-shirt with a pair of joggers, sliders & wayfarers for a cool look.\nCountry of Origin - India\nManufactured By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amane, Bhiwandi, Thane, Maharashtra - 421302\nPacked By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amane, Bhiwandi, Thane, Maharashtra - 421302\nCommodity - Men's T-Shirt",
//   spec: [
//     {name: "Regular fit - Fitted at Chest and Straight on Waist Down"},
//     {
//       name: "Single Jersey, 100% Cotton Classic, lightweight jersey fabric comprising 100% cotton.",
//     },
//   ],
//   rating: "4.6",
//   brand: "Bewakoof",
//   sleeve: "half",
// };

function displayData(array) {
  document.getElementById("card").innerHTML = "";
  array.forEach((element, index) => {
    var s = card(element, index);
    // console.log(s);
    document.getElementById("card").innerHTML += s[0];
    let d = document.getElementById(`product${index}`);
    // console.log(d);
  });
}

function event(array) {
  array.map((element, index) => {
    document
      .getElementById(`product${index}`)
      .addEventListener("click", function () {
        localStorage.setItem("product", JSON.stringify(element));
        window.open("../SingleProduct/singleProduct.html");
      });
  });
}

let brands = document.querySelectorAll(".brand");
for (let i = 0; i < brands.length; i++) {
  brands[i].addEventListener("click", function () {
    let needBrand = brands[i].textContent;
    let newProducts = products.filter((element) => {
      return element.brand == needBrand;
    });
    console.log(newProducts);
    displayData(newProducts);
  });
}
