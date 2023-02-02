import card from "./card.js";

var products;
var preProducts;
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
  displayData(data);

  return data;
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
  event(array);
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
    var Data = getData();
    Data.then((data) => {
      let needBrand = brands[i].textContent;
      let newProducts = data.filter((element) => {
        return element.brand == needBrand;
      });
      products = newProducts;
      displayData(newProducts);
    });
  });
}

let colors = document.querySelectorAll(".color");
for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", function () {
    let needCol = colors[i].textContent;
    needCol = needCol.trim();
    let np = products.filter((element) => {
      return element.color == needCol;
    });
    preProducts = np;
    console.log(products, np);
    displayData(np);
  });
}

let sleeves = document.querySelectorAll(".sleeve");
for (let i = 0; i < sleeves.length; i++) {
  sleeves[i].addEventListener("click", function () {
    let needSlv = sleeves[i].textContent;
    needSlv = needSlv.trim();
    let np = preProducts.filter((element) => {
      if (needSlv == "Half Sleeve") {
        return element.title.includes("Oversized");
      }
      if (needSlv == "Full Sleeve") {
        return element.title.includes("Full");
      }
      if (needSlv == "Sleeveless") {
        return element.title.includes("Tank");
      }
    });

    console.log(products, np);
    displayData(np);
  });
}
