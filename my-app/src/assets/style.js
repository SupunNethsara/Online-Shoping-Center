
///////////////////////Swipper///////////////////////////////////
function sign(){
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
  
  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
  
}



function get() {


  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //////////////////////Menu item Change Color//////////////////////////////////////////////////////
  var text = document.getElementById('home');
  text.addEventListener('click', () => {
    text.style.color = "red";
    textca.style.color = " rgb(85, 81, 81)";
    textda.style.color = " rgb(85, 81, 81)";
    textab.style.color = "rgb(85, 81, 81)";
    textot.style.color = "rgb(85, 81, 81)";
  });
  var textca = document.getElementById('categorize');
  textca.addEventListener('click', () => {
    textca.style.color = "red";
    text.style.color = "rgb(85, 81, 81)";
    textda.style.color = "rgb(85, 81, 81)";
    textab.style.color = "rgb(85, 81, 81)";
    textot.style.color = "rgb(85, 81, 81)";
  });
  var textda = document.getElementById('dashboard');
  textda.addEventListener('click', () => {
    textda.style.color = "red";
    textca.style.color = "rgb(85, 81, 81)";
    text.style.color = "rgb(85, 81, 81)";
    textab.style.color = "rgb(85, 81, 81)";
    textot.style.color = "rgb(85, 81, 81)";
  });
  var textab = document.getElementById('about');
  textab.addEventListener('click', () => {
    textab.style.color = "red";
    textca.style.color = "rgb(85, 81, 81)";
    text.style.color = "rgb(85, 81, 81)";
    textda.style.color = "rgb(85, 81, 81)";
    textot.style.color = "rgb(85, 81, 81)";
  });
  var textot = document.getElementById('others');
  textot.addEventListener('click', () => {
    textot.style.color = "red";
    textab.style.color = "rgb(85, 81, 81)";
    textca.style.color = "rgb(85, 81, 81)";
    text.style.color = "rgb(85, 81, 81)";
    textda.style.color = "rgb(85, 81, 81)";
  });



}



////////////////////////////////////Cart Form///////////////////////////////////////////////////////


function accor() {
  /////////////////////////////Time Countdown//////////////////////////////////////////////////
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }


  const remDays = document.getElementById("days");
  const remHours = document.getElementById("hours");
  const remMinutes = document.getElementById("minutes");
  const remSeconds = document.getElementById("seconds");

  const currentYear = new Date().getFullYear();

  const birthDay = `27 Dec ${currentYear}`;

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const countdown = () => {
    const birthDayDate = new Date(birthDay);
    const currentDate = new Date();

    const totalSeconds = (birthDayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    remDays.innerHTML = days;
    remHours.innerHTML = formatTime(hours);
    remMinutes.innerHTML = formatTime(mins);
    remSeconds.innerHTML = formatTime(seconds);
  };
  countdown();

  setInterval(countdown, 1000);

  /////////////////////////////////initial call Swipper/////////////////////////////////////////////////////////



  var swiper = new Swiper(".swiper4", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 60,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

}



//////////////////////////Hide Icon/////////////////////////////////////////////////////////
function supun() {



  var btn_diva = document.getElementById("btn_divaa");
  var btn_divb = document.getElementById("btn_divbb");
  var btn_divc = document.getElementById("btn_divcc");
  var btn_divd = document.getElementById("btn_divdd");
  var btn_dive = document.getElementById("btn_divee");
  var btn_divf = document.getElementById("btn_divff");
  var shopcontent = document.getElementById("diva");
  var shopcontent = document.getElementById("divb");
  var shopcontent = document.getElementById("divc");
  var shopcontent = document.getElementById("divd");
  var shopcontent = document.getElementById("dive");
  var shopcontent = document.getElementById("divf");


  btn_divaa.addEventListener('click', () => {
    diva.style.display = 'block';
    divb.style.display = 'none';
    divc.style.display = 'none';
    divd.style.display = 'none';
    dive.style.display = 'none';
    divf.style.display = 'none';


  });
  btn_divbb.addEventListener('click', () => {
    diva.style.display = 'none';
    divb.style.display = 'block';
    divc.style.display = 'none';
    divd.style.display = 'none';
    dive.style.display = 'none';
    divf.style.display = 'none';



  });
  btn_divcc.addEventListener('click', () => {
    diva.style.display = 'none';
    divb.style.display = 'none';
    divc.style.display = 'block';
    divd.style.display = 'none';
    dive.style.display = 'none';
    divf.style.display = 'none';



  });
  btn_divdd.addEventListener('click', () => {
    diva.style.display = 'none';
    divb.style.display = 'none';
    divc.style.display = 'none';
    divd.style.display = 'block';
    dive.style.display = 'none';
    divf.style.display = 'none';



  });
  btn_divee.addEventListener('click', () => {
    diva.style.display = 'none';
    divb.style.display = 'none';
    divc.style.display = 'none';
    divd.style.display = 'none';
    dive.style.display = 'block';
    divf.style.display = 'none';



  });
  btn_divff.addEventListener('click', () => {
    diva.style.display = 'none';
    divb.style.display = 'none';
    divc.style.display = 'none';
    divd.style.display = 'none';
    dive.style.display = 'none';
    divf.style.display = 'block';



  });
  //////////////////////////////Real Sidebar/////////////////////////////////////////////////////////

  var btn_diva = document.getElementById("btn_diva");
  var btn_divb = document.getElementById("btn_divb");
  var btn_divc = document.getElementById("btn_divc");
  var btn_divd = document.getElementById("btn_divd");
  var btn_dive = document.getElementById("btn_dive");
  var btn_divf = document.getElementById("btn_divf");
  var shopcontent = document.getElementById("diva");
  var shopcontent = document.getElementById("divb");
  var shopcontent = document.getElementById("divc");
  var shopcontent = document.getElementById("divd");
  var shopcontent = document.getElementById("dive");
  var shopcontent = document.getElementById("divf");


  btn_diva.addEventListener('click', () => {
    diva.style.display = 'block';
    divb.style.display = 'none';
    divc.style.display = 'none';
    divd.style.display = 'none';
    dive.style.display = 'none';
    divf.style.display = 'none';


  });
  btn_divb.addEventListener('click', () => {
    diva.style.display = 'none';
    divb.style.display = 'block';
    divc.style.display = 'none';
    divd.style.display = 'none';
    dive.style.display = 'none';
    divf.style.display = 'none';



  });
  btn_divc.addEventListener('click', () => {
    diva.style.display = 'none';
    divb.style.display = 'none';
    divc.style.display = 'block';
    divd.style.display = 'none';
    dive.style.display = 'none';
    divf.style.display = 'none';



  });
  btn_divd.addEventListener('click', () => {
    diva.style.display = 'none';
    divb.style.display = 'none';
    divc.style.display = 'none';
    divd.style.display = 'block';
    dive.style.display = 'none';
    divf.style.display = 'none';



  });
  btn_dive.addEventListener('click', () => {
    diva.style.display = 'none';
    divb.style.display = 'none';
    divc.style.display = 'none';
    divd.style.display = 'none';
    dive.style.display = 'block';
    divf.style.display = 'none';



  });
  btn_divf.addEventListener('click', () => {
    diva.style.display = 'none';
    divb.style.display = 'none';
    divc.style.display = 'none';
    divd.style.display = 'none';
    dive.style.display = 'none';
    divf.style.display = 'block';



  });
  ///////////////////////////////Shoping Cart////////////////////////////////////////////////////////////////

  //Cart Working js

  if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  }
  else {
    ready();
  }

  //working funtction
  function ready() {
    //remove Items Form cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
      var button = removeCartButtons[i];
      button.addEventListener("click", removeCartItem);
    }
    //Quantity change
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
    }
    //Add To Cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
      var button = addCart[i];
      button.addEventListener("click", addCartClicked);
    }
    //Buy Button Work
    // document.getElementsByClassName("btn-buy")[0].addEventListener("click" , buyButtonClicked);
  }
  //Buy button
  // alert("Your order is placed");
  // var cartContent =  document.getElementsByClassName("cart-content");
  // while(cartContent.hasChildNodes()){
  //   cartContent.removeChild(cartContent.firstChild);
  // }


  //Remove Item Form Cart
  function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
  }
  ////Quantity changed
  function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatetotal();
  }
  //Add To cart
  function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("product-price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
  }
  function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
      alert("you have already add this item to cart");
      return;
    }
  }


  // var cartBoxContent = `
  //                     <img src="$(productImg)" alt="" class="cart-img">

  //                       <div class="detail-box">
  //                           <div class="product-title">${title}</div>
  //                           <div class="cart-price">${price}</div>
  //                           <input type="number" value="1" class="cart-quantity">
  //                       </div>

  //                       <i class="fa-solid fa-trash cart-remove"></i>`;


  // cartShopBox.innerHTML = cartBoxContent;
  // cartItems.append(cartShopBox);
  // cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
  // cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);

  //update total
  function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName("cart-price")[0];
      var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      var price = parseFloat(priceElement.innerText.replace("$", ""));
      var quantity = quantityElement.value;
      total = total + price * quantity;
      //If price Contain some Cents Value
      total = Math.round(total * 100) / 100;
      document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }
  }





}

