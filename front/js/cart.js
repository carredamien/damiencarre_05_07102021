//Récupération du localstorage
let kanapStorage = JSON.parse(localStorage.getItem("kanap")); //récupération du localstorage
let price ="document.querySelector('.cart__item__content__titlePrice p')";

function getCart(){  //fonction qui affiche le panier
  if (kanapStorage){

    for(kanap of kanapStorage){ 
      
      const cartItems = document.getElementById('cart__items');
      const cartArticle = document.createElement('article');
      cartArticle.classList.add('cart__item');
      cartItems.appendChild(cartArticle);
      cartArticle.setAttribute('data-id', kanap.id);
      cartArticle.innerHTML =  `
      <div class="cart__item__img">
        <img src="${kanap.image}" alt="${kanap.altTxt}">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__titlePrice">
          <h2>${kanap.name}</h2>
          <p>${kanap.price * kanap.quantity} €</p>
        </div>
      <div class="cart__item__content__settings">
      <div class="cart__item__content__settings__quantity">
        <p>Qté : </p>
        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${kanap.quantity}" onChange="handleUpdateKanapQuantity(event, '${kanap.id}')">
      </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem" onClick= "deleteProduct('${kanap.id}')">Supprimer</p>
        </div>
      </div>`
    }
  }
}
getCart();

// gestion du tarif selon les quantités

function handleUpdateKanapQuantity(e, productId){
  for(kanap of kanapStorage){ 
    if (kanap.id === productId) {
      kanap.quantity = e.target.value;
    }
  }
  localStorage.setItem("kanap", JSON.stringify(kanapStorage));
  location.reload();
}

//total du panier

function getTotalCart(){
if(kanapStorage){

  let kanapQuantity = kanapStorage.map(kanap =>{
    return parseInt(kanap.quantity);
  })
  
  let numberProductsCaddy = kanapQuantity.reduce((acc, kanap)=> {
    return acc + kanap
  },0);
  
  let totalKanapPrice = kanapStorage.map(kanap =>{
    return parseFloat(kanap.price) * parseInt(kanap.quantity);
  })
  let totalPriceCaddy = totalKanapPrice.reduce((acc, kanap)=> {
    return acc + kanap
  },0);
  
  let totalPrice = document.querySelector('.cart__price p');
  totalPrice.innerHTML = `<p>Total (<span id="totalQuantity" value="">${numberProductsCaddy}</span> articles) : <span id="totalPrice">${totalPriceCaddy}</span> €</p>`;
  
}else{
  let totalPrice = document.querySelector('.cart__price p');
  totalPrice.innerHTML = `<p>Total (<span id="totalQuantity" value="">0</span> article) : <span id="totalPrice">0</span> €</p>`;
  }
}
getTotalCart();

// let deleteItem = document.querySelector('.deleteItem');
function deleteProduct(productId){
  if(productId){
    const deleteKanap = kanapStorage.filter(
      (x) => x.id === productId);
      // deleteKanap.splice(0.1);
      console.log(deleteKanap);
delete deleteKanap[0]





localStorage.setItem("kanap", JSON.stringify(deleteKanap));
location.reload();

  }
   
}




//formulaire 

let form = document.querySelector(".cart__order__form");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let address = document.getElementById("address");
let city = document.getElementById("city");
let email = document.getElementById("email");
let btnOrder = document.getElementById("order");
let formContact = [];
const errorFName = document.getElementById('firstNameErrorMsg');
const errorLName = document.getElementById('lastNameErrorMsg');
const errorAddress = document.getElementById('addressErrorMsg');
const errorCity = document.getElementById('cityErrorMsg');
const errorEmail = document.getElementById('emailErrorMsg');


firstName.addEventListener('blur', function (){
validFirstName(this);
});
const validFirstName = function(inputFirstName){
  let fNameRegex = new RegExp('^[a-zA-Z]+$', 'g');

  let testFName = fNameRegex.test(inputFirstName.value);
  if (testFName){
    errorFName.textContent = ''; 
  }else{
      errorFName.textContent = 'Votre prénom n\'est pas valide';
    }
inputFirstName.value.toLowerCase();
};


lastName.addEventListener('blur', function (){
validLastName(this);
});
const validLastName = function(inputLastName){
  let lNameRegex = new RegExp('^[a-zA-Z]+$', 'g');

  let testLName = lNameRegex.test(inputLastName.value);
  if (testLName){
    errorLName.textContent = ''; 
  }else{
      errorLName.textContent = 'Votre nom n\'est pas valide';
    }
inputLastName.value.toLowerCase();
};

address.addEventListener('blur', function (){
validAddress(this);
});
const validAddress = function(inputAddress){
  let addressRegex = new RegExp('^[a-zA-Z]+$', 'g');

  let testAddress = addressRegex.test(inputAddress.value);
  if (testAddress){
    errorAddress.textContent = ''; 
  }else{
      errorAddress.textContent = 'Votre adresse n\'est pas valide';
    }
inputAddress.value.toLowerCase();
};


city.addEventListener('blur', function (){
validCity(this);
});
const validCity = function(inputCity){
  let cityRegex = new RegExp('^[a-zA-Z- ]+$', 'g');

  let testCity = cityRegex.test(inputCity.value);
  if (testCity){
    errorCity.textContent = ''; 
  }else{
      errorCity.textContent = 'Votre ville n\'est pas valide';
    }
inputCity.value.toLowerCase();
};


email.addEventListener('blur', function (){
validEmail(this);
});
const validEmail = function(inputEmail){
  let emailRegex = new RegExp('^[a-zA-Z09.-_]+[@]{1}[a-zA-Z09.-_]+[.]{1}[a-zA-Z]{2,10}$', 'g');

  let testEmail = emailRegex.test(inputEmail.value);
  if (testEmail){
    errorEmail.textContent = ''; 
  }else{
      errorEmail.textContent = 'Votre email n\'est pas valide';
    }
inputEmail.value.toLowerCase();
};

  








// lastName.addEventListener('blur', (e)=>{
//   lastName = e.target.value;
//   lastName? errorLName.textContent = '' : errorLName.textContent = 'Veuillez entrer votre nom';
//   lastName = lastName.toLowerCase();
  
  
// })
// address.addEventListener('blur', (e)=>{
//   const errorAddress = document.getElementById('addressErrorMsg');
//   address = e.target.value;
//   address? errorAddress.textContent = '' : errorAddress.textContent = 'Veuillez entrer votre adresse';
//   address = address.toLowerCase();
// })
// const errorCity = document.getElementById('cityErrorMsg');
// city.addEventListener('blur', (e)=>{
//   city = e.target.value;
//   city? errorCity.textContent = '' : errorCity.textContent = 'Veuillez entrer votre ville';
//   city = city.toLowerCase();
// })
// // var emailReg = new RegExp(/^([w-.]+)@((?:[w]+.)+)([a-zA-Z]{2,4})/i);
// // // var valid = emailReg.test(email);
// const errorEmail = document.getElementById('emailErrorMsg');
// email.addEventListener('blur', (e)=>{
//   email = e.target.value;
//   email? errorEmail.textContent = '' : errorEmail.textContent = 'Veuillez entrer votre email';
//   validerEmail();
//   re.test(String(email).toLowerCase());
//   console.log(re);
  // email = email.toLowerCase();
  
  // if(valid){
    //   errorEmail.textContent = "";
    // }else{
      //   errorEmail.textContent = "adresse email invalid";
      // }
      
       
    // })


    //validation de commande

   
    // btnOrder.addEventListener('submit', handleFormSubmit);
    // handleFormSubmit(e){
    //   e.preventDefault();
    //   fetch("http://localhost:3000/api/products/order", {
    //     method: "POST",
    //     headers: {
    //       'Accept': 'application/json', 
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({value: document.getElementById("value").value})
    //   })
    //   .then(function(res) {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //   })
    //   .then(function(value) {
    //       document
    //         .getElementById("result")
    //         .innerText = value.postData.text;
    //   });
    // }