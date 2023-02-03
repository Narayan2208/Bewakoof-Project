function product(element, index) {
  return `
<div class="row col-12 mx-2 p-3 pb-0 mt-3 border" id="product-container${index}">
    <div class="col-9">
        <p class="text-truncate">${element.title}</p>
        <p class="d-flex">
            <span class="fw-bold">${element.price}</span>
            <span class="ms-2 text-decoration-line-through">${element.orignal_price}</span>
        </p>
        <p style="color:green">You saved ₹<span id="off">600</span></p>

        <div class="row ">


            <div class="col-2 col-lg-2 col-md-3 col-sm-2 p-1 ms-2 d-flex align-items-center justify-content-evenly border rounded-3">
             
              <p class="mb-0">
                <a
                  class="text-decoration-none text-dark"
                  style="font-size: 14px; font-weight: 500"
                  data-bs-toggle="collapse"
                  href="#size${index}"
                  role="button"
                  aria-expanded="false"
                  aria-controls="size${index}"
                  >Size</a
                >
                <p class="arrow-dwn mb-0">
                    <select class="fw-bold" name="quantity-select" id="qty-select" style="border:none; background-color: white; width:30px;">
                        <option class="fw-bold" >S</option>
                        <option value="1" >XS</option>
                        <option value="2" >S</option>
                        <option value="3" >M</option>
                        <option value="4" >L</option>
                        <option value="5" >XL</option>
                        <option value="6" >XXL</option>
                    </select> 
                </p>
              </p>
            </div>

            <div class="col-2 col-lg-2 col-md-3 col-sm-2 p-1 ms-2 d-flex align-items-center justify-content-evenly border rounded-3">
             
              <p class="mb-0">
                <a
                  class="text-decoration-none text-dark"
                  style="font-size: 14px; font-weight: 500"
                  data-bs-toggle="collapse"
                  href="#qty${index}"
                  role="button"
                  aria-expanded="false"
                  aria-controls="qty${index}"
                  >Qty</a
                >
                <p class="arrow-dwn mb-0">
                  <select class="fw-bold" name="quantity-select" id="qty-select" style="border:none; background-color: white; width:30px;">
                        <option >1</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="more">more</option>
                  </select> 
                  
                  </span>
                </p>
              </p>
            </div>



        </div>
    </div>
    <div class="col-3 p-3">
        <image src="${element.image}" class="image-fluid w-100">

    </div>

    <div class="row col-12 border-top py-3 mt-3 ms-0 me-0">
        <div class="col-6 border-end text-center">
            REMOVE
        </div>
        <div class="col-6  text-center">
            Move to Wishlist
        </div>
    </div>

</div>

`;
}

export default product;
