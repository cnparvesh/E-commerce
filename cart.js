 let container = document.getElementById("cart-container");

    let cartData = JSON.parse(localStorage.getItem("cart"));
    if(cartData === null){
      cartData = [];
    }

    displayProducts(cartData);

    function displayProducts(data) {
      container.innerHTML = null;
      data.forEach((element) => {
        let card = document.createElement("div");
          let image = document.createElement("img");
          image.setAttribute("src",element.img);

          let brand = document.createElement("h2");
          brand.innerText = element.brand;

          let price = document.createElement("h3");
          price.innerText = element.price;

          let details = document.createElement("p");
          details.innerText = element.details;

          let category = document.createElement("p");
          category.innerText = element.category;

          let increment = document.createElement("button");
          increment.innerText = "+";
          let quantity = document.createElement("span");
          quantity.innerText = element.quantity;
          let decrement = document.createElement("button");
          decrement.innerText = "-";
        card.append(image,brand,price,details,category,increment,quantity,decrement);
        container.append(card);
      });
    }
