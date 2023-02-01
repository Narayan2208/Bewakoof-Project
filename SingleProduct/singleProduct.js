// async function getData() {
//   const jsondata = await fetch("https://bewakoof-api.onrender.com/mens");
//   const data = await jsondata.json();
//   var d = JSON.stringify(data);
//   console.log(data);
//   // console.log(d);

//   displayData(data[0]);
// }
// getData();

var d = {
  image:
    "https://images.bewakoof.com/t640/lost-mountains-half-sleeve-t-shirt-272010-1655748131-1.jpg",
  title: "Lost Mountains Half Sleeve T-Shirt",
  price: "₹349",
  orignal_price: "₹1099",
  tribe: "₹319For TriBe Members",
  tag: "BUY 3 FOR 899",
  image2:
    "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748142-3.jpg",
  image3:
    "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748147-4.jpg",
  image4:
    "https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748131-1.jpg",
  description:
    "Revamp your look with this Lost Mountains Men's Printed T-Shirt. Style this t-shirt with a pair of joggers, sliders & wayfarers for a cool look.\nCountry of Origin - India\nManufactured By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amane, Bhiwandi, Thane, Maharashtra - 421302\nPacked By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amane, Bhiwandi, Thane, Maharashtra - 421302\nCommodity - Men's T-Shirt",
  spec: [
    {name: "Regular fit - Fitted at Chest and Straight on Waist Down"},
    {
      name: "Single Jersey, 100% Cotton Classic, lightweight jersey fabric comprising 100% cotton.",
    },
  ],
  rating: "4.6",
  brand: "Bewakoof",
  sleeve: "half",
};

console.log(d);
displayData(d);
function displayData(element) {
  document.getElementById("product").innerHTML = `
    <div class="col-md-6 ">
        <div class="row">
            <div id="img-sl" class="col-2 d-none d-md-block " ></div>
            <div class="col " >
                <img src="${element.image}" class="img-fluid w-100 onclick="(image(${element.price}))">
            </div>
        </div>
    </div>
    <div class="col-md-6 p-4 pe-5">
        <h1 style="font-size:18px" class="text-uppercase fw-bold opacity-75">${element.brand}</h1>
        <h2 style="font-size:16px; font-weight:400" class="opacity-75">${element.title}</h2>
        <p>
            <span style="font-size:24px; font-weight:600" class="ms-1">${element.price}</span>
            <span style="font-size:14px; font-weight:400" class="ms-1 text-decoration-line-through">${element.orignal_price}</span>
            <span style="font-size:16px; color:#00B852" class="ms-2">65% OFF</span>
        </p>
        <p>inclusive of all taxes</p>
        
        <div class="d-flex">
            <p class="ms-3  px-2 py-1 text-white fw-bold bg-secondary">${element.tag}</p>
            <p class="ms-4 border border-dark px-2 py-1 fw-bold">DESIGN OF THE WEEK</p>
        </div>

        <div>
            <hr>
                <p>
                TriBe members get an extra discount of <span class="fw-bold">₹40</span> and FREE shipping.</span><a>Learn more</a></span>
                </p>
            <hr>
        </div>
        
        <div class="row mx-3 ">
            <h6 class="col-6 fw-bold">SELECT SIZE</h6>
            <a class="col-6 text-end fw-bold" style="color:#42A2A2">Size Guide</a>
        </div>

        <div class="row row-cols-10 m-3 py-2 pb-4">
            <div class="col p-3 border border-dark text-center ms-3 rounded-3"> S</div>
            <div class="col p-3 border border-dark text-center ms-3 rounded-3"> M</div>
            <div class="col p-3 border border-dark text-center ms-3 rounded-3"> L</div>
            <div class="col p-3 border border-dark text-center ms-3 rounded-3"> XL</div>
            <div class="col p-3 border border-dark text-center ms-3 rounded-3">2XL</div>
            <div class="col p-3 border border-dark text-center ms-3 rounded-3">3XL</div>
            <div class="col p-2 ms-3" ></div>
            <div class="col p-2 ms-3"></div>
            <div class="col p-2 ms-3"></div>
            <div class="col p-2 ms-3"></div>
        </div>

        <div class="row mx-3">
            <button class="col me-1 border-0 fw-bold " style="font-size:14px; background-color:#FFD84D; padding: 10px 0"><i class="fa-solid fa-bag-shopping me-2"></i>ADD TO BAG</button>
            <button class="col ms-1 border border-dark bg-light fw-bold opacity-50" style="font-size:14px; padding: 10px 0"><i class="fa-regular fa-heart me-2"></i>WISHLIST</button>
        </div>

        <div id="collapse-start">

            <div class="d-flex justify-content-between px-4 pt-3 mt-3">
                <p><a class="text-decoration-none text-dark fw-bold" data-bs-toggle="collapse" href="#offers" role="button" aria-expanded="false" aria-controls="offers">SAVE EXTRA WITH 3 OFFERS</a></p>
                <span class="arrow-dwn">
                <i class="fa-solid fa-plus"></i>
                </span>
            </div>

            <div class="border-0 collapse mt-0" id="offers">
                <div class="card card-body py-0 border-0 px-4">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>
            

            <div class="d-flex justify-content-between px-4 pt-3">
                <p><a class="text-decoration-none text-dark fw-bold" data-bs-toggle="collapse" href="#description" role="button" aria-expanded="false" aria-controls="description">PRODUCT DESCRIPTION</a></p>
                <p class="arrow-dwn ">
                <i class="fa-solid fa-plus"></i>
                </p>
            </div>

            <div class="border-0 collapse mt-0" id="description">
                <div class="card card-body py-0 border-0 px-4">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>

            <div class="d-flex justify-content-between px-4 pt-3">
                <p><a class="text-decoration-none text-dark fw-bold" data-bs-toggle="collapse" href="#exchange" role="button" aria-expanded="false" aria-controls="exchange">15 DAY RETURNS & EXCHANGE</a></p>
                <p class="arrow-dwn ">
                <i class="fa-solid fa-plus"></i>
                </p>
            </div>

            <div class="border-0 collapse mt-0" id="exchange">
                <div class="card card-body py-0 border-0 px-4">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>

            <div class="d-flex justify-content-between px-4 pt-3">
                <p><a class="text-decoration-none text-dark fw-bold" data-bs-toggle="collapse" href="#delivery" role="button" aria-expanded="false" aria-controls="delivery">DELIVERY DETAILS</a></p>
                <p class="arrow-dwn ">
                <i class="fa-solid fa-plus"></i>
                </p>
            </div>

            <div class="border-0 collapse mt-0" id="delivery" style="border-color:red;">
                <div class="card card-body py-0 border-0 px-4">
                 <input type="text" placeholder="Enter Pincode/Postal Code/Zipcode" class="my-3 p-3">
                </div>
            </div>
            
       </div>
    </div>
    
    `;
}

function image(i) {
  console.log(i);
}
