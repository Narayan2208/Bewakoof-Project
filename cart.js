
 var dataArr=JSON.parse(localStorage.getItem("cart")) || [];

 console.log(dataArr);
 if(dataArr.length===0){
    var nocrt = document.createElement("p");
    nocrt.setAttribute("id", "ncrt");
    nocrt.textContent = "Your cart is currently empty.";
    document.querySelector("#parent").append(nocrt);   
    
 }
 else{
    var total = 0;
    var totalprice = 0;
    var totalitem = 0;
    displaydata(dataArr);
    displayprice(dataArr);  
 }
 document.querySelector("#cart_count").textContent=cart.length;
 display(cart);
 //image:
//  "https://images.bewakoof.com/t640/lost-mountains-half-sleeve-t-shirt-272010-1655748131-1.jpg",
//  title: "Lost Mountains Half Sleeve T-Shirt",
//  price: "₹349",
//  orignal_price: "₹1099",
//  tribe: "₹319For TriBe Members",
//  tag: "BUY 3 FOR 899",
//  image2:
//  "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748142-3.jpg",
//  image3:
//  "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748147-4.jpg",
//  image4:
//  "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748131-1.jpg",
//  description:
//  "Revamp your look with this Lost Mountains Men's Printed T-Shirt. Style this t-shirt with a pair of joggers, sliders & wayfarers for a cool look.\nCountry of Origin - India\nManufactured By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amane, Bhiwandi, Thane, Maharashtra - 421302\nPacked By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amane, Bhiwandi, Thane, Maharashtra - 421302\nCommodity - Men's T-Shirt",
//  spec: [
//  {name: "Regular fit - Fitted at Chest and Straight on Waist Down"},
//  {
//  name: "Single Jersey, 100% Cotton Classic, lightweight jersey fabric comprising 100% cotton.",
//  },
//  ],
//  rating: "4.6",
//  brand: "Bewakoof",
//  sleeve: "half",
 

function displaydata(list){
    document.querySelector("#parent").textContent="";
    list.map(function(ele,i){
        var parent=document.querySelector('#parent');
        var div=document.createElement("div");
        div.setAttribute("id", "maindiv");
        var image = document.createElement("img");
        image.setAttribute("class", "img");
        image.setAttribute("src", ele.image);
        var title = document.createElement("h3");
        title.textContent = ele.name;
        var div6 = document.createElement("div");
        div6.setAttribute("class", "div6");
        div6.append(image, title);
        var price = document.createElement("p");
        price.textContent = "₹" + ele.price;
        var strprice = document.createElement("p");
        strprice.setAttribute("class", "str");
        strprice.textContent = "₹" + ele.original_price;
        var pricediv = document.createElement("div");
        div.setAttribute("class", "pricediv");
        pricediv.append(strprice, price);
        var strike = document.createElement("p");
        strike.setAttribute("class", "bargain");
        strike.textContent =
        "You Saved ₹" +
        Math.round(ele.original_price - ele.price) +
        "!";
        var del = document.createElement("button");
        del.setAttribute("class", "delete");
        del.textContent = "Remove";
        del.addEventListener("click", function () {
        deld(i);
        });
        var div5 = document.createElement("div");
        div5.setAttribute("class", "div5");
        var div2 = document.createElement("div");
        div2.setAttribute("class", "box");
        var btn1 = document.createElement("button");
        btn1.setAttribute("class", "btn1");
        btn1.textContent = "-";
        btn1.addEventListener("click", function () {
            sub(ele);
        });
        totalitem++;
        totalprice += ele.price * ele.qty;
        var h4 = document.createElement("h4");
        var quantity = ele.qty;
        h4.textContent = quantity;
        var btn2 = document.createElement("button");
        btn2.textContent = "+";
        btn2.setAttribute("class", "btn2");
        btn2.addEventListener("click", function () {
            add(ele);
        });
        div2.append(btn1, h4, btn2);
        div5.append(div2, pricediv);
        var hr = document.createElement("hr");
        div.append(div6, div5, del, strike, hr);
        document.querySelector("#parent").append(div);
    });
}
function displayprice(list) {
    total = list.reduce(function (acc, curr) {
      return acc + curr.price * curr.qty;
    }, 0);
    var item = 0;
    list.forEach((element) => {
      item++;
    });
    var div4 = document.createElement("div");
    div4.setAttribute("id", "div4");
    var cou = document.createElement("h4");
    cou.textContent = "Enter Promo Code";
    cou.setAttribute("id", "h44");
    var textarea = document.createElement("input");
    textarea.setAttribute("id", "input");
    textarea.placeholder = "Gift card or discount code";
    var coubtn = document.createElement("button");
    coubtn.setAttribute("id", "submit-button");
    coubtn.textContent = "Apply Promo";
    coubtn.addEventListener("click", function () {
      apply(textarea.value, total);
    });
    div4.append(textarea, coubtn);
    document.querySelector("#parent").append(cou, div4);
    var div3 = document.createElement("div");
    div3.setAttribute("class", "div3c");
    var p1 = document.createElement("p");
    p1.textContent = "Total Item";
    var p2 = document.createElement("p");
    p2.setAttribute("id", "prices");
    p2.textContent = "SUBTOTAL";
    var span = document.createElement("span");
    span.setAttribute("id", "span");
    span.append("$" + Math.round(total));
    div3.append(p2, span);
    var p3 = document.createElement("p");
    p3.textContent =
      "Shipping, taxes, and discounts codes calculated at checkout.";
    var checkoutb = document.createElement("button");
    checkoutb.textContent = "CHECK OUT";
    checkoutb.setAttribute("class", "checkout");
    checkoutb.addEventListener("click", redirect);
    document.querySelector("#parent").append(div3, p3, checkoutb);
  }
  document.getElementById("input").addEventListener("input", function () {
    if (this.value) {
      document.getElementById("submit-button").style.backgroundColor = "black";
    } else {
      document.getElementById("submit-button").style.backgroundColor =
        "rgb(200,200,200)";
    }
  });
function sub(ele, i) {
    ele.qty--;
    if (ele.qty === 0) {
      deld(i);
      displaydata(dataArr);
      displayprice(dataArr);
    } else {
      localStorage.setItem("cart", JSON.stringify(dataArr));
      displaydata(dataArr);
      displayprice(dataArr);
    }
  }
function add(ele) {
    ele.qty++;
    localStorage.setItem("cart", JSON.stringify(dataArr));
    displaydata(dataArr);
    displayprice(dataArr);
  }
function deld(i) {
    dataArr.splice(i, 1);
    if (dataArr.length === 0) {
      localStorage.removeItem("cart");
      location.reload();
    } else {
      localStorage.setItem("cart", JSON.stringify(dataArr));
    }
    displaydata(dataArr);
    displayprice(dataArr);
  }
// function 
localStorage.setItem("promo","NONE");

function apply(data,total){
    var text=document.querySelector("#h4").textContent;
    if(
        data==="masai30" && (text === "Enter Promo Code") || (text=== "Promo Does Not Exist")
    ){
        total = total-total * 0.3;
        document.querySelector("#span").textContent = "₹" +Math.round(total);
        document.querySelector("#h4").textContent="Promo Applied";
        localStorage.setItem("promo","THIRTY");
    } else if(
        text==="Promo Applied"|| text==="Promo Code ALready Applied"
    ) {
        document.querySelector("#h4").textContent="Promo Code ALready Applied";
    } else{
        document.querySelector("h4").textContent="Promo Does Not Exist";
    }
}
function remove(e,i){
    var cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart=cart.filter(function(ele,ind){
        return ind!=i;
    })
    localStorage.setItem("cart",JSON.stringify(cart));
    document.querySelector("#cart_count").textContent=cart.length;
    display(cart);
}