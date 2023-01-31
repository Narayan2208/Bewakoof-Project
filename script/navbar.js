

export default function navbar (){
    return `      <!-- !Nav Upper Section -->
    <div id="nav-upper-section">
      <div id="first-section">
        <div><a href="">Offers</a></div>
        <div><a href="">Fanbook</a></div>
        <div><a href="">Download App</a></div>
        <div><a href="">TriBe Membership</a></div>
      </div>
      <div id="second-section">
        <div><a href="">Contact Us</a></div>
        <div><a href="">Track Order</a></div>
      </div>
    </div>

    <!-- !Nav Mid Section -->
    <div id="nav-mid-section">
      <!-- ?First - div which contains logo and men woman and mobile covers -->
      <div id="first-div">
        <div id="logo">
          <img
            src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
            alt=""
          />
        </div>
        <div class="dropdown" id="dropdown">
          <div><a class="dropbtn" id="dropbtn">MEN</a></div>

          <div><a class="dropbtn">WOMAN</a></div>
          <div><a class="dropbtn">MOBILE COVERS</a></div>
        </div>
      </div>

      <div id="second-div">
        <div id="search">
          <div id="search-logo">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            type="search"
            class="searchbtn"
            placeholder="Search by product, category or collection"
          />
        </div>
        <div id="login-wishlist-cart">
          <p>Login</p>
          <div><i class="fa-regular fa-heart"></i></div>
          <div><i class="fa-solid fa-cart-shopping"></i></div>
        </div>
      </div>
    </div>`
}
// export {navbar} 