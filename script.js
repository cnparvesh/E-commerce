
    let container = document.getElementById("product-container");
    let filterSelect = document.getElementById("filter");

    let fetchedData = [];

    filterSelect.addEventListener("change",() =>{
      let filtered = fetchedData.filter((element) =>{
        if(element.category === filterSelect.value){
          return true;
        }else{
          return false;
        }
      })
      displayProducts(filtered);
      
    })

    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
    .then((responseObject) =>{
      return responseObject.json();
    })
    .then((acctualData) =>{
       fetchedData = acctualData.data;
      displayProducts(acctualData.data);

    })
    .catch((error) =>{
      console.log(error);
    })


    function displayProducts(data) {
      container.innerHTML = "";
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

          let addToCart = document.createElement("button");
          addToCart.innerText = "Add To Cart";

          addToCart.addEventListener("click",() =>{
            let cartData = JSON.parse(localStorage.getItem("cart"));

            if(cartData === null) cartData = [];

            let isAllreadyInCart = false;
            for(let i=0;i<cartData.length;i++){
              if(cartData[i].id === element.id){
                isAllreadyInCart = true;
                break;
              };
            }

            if(isAllreadyInCart === true){
              alert("Product Already in Cart");
            }else{
            cartData.push({...element,quantity:1});
            localStorage.setItem("cart",JSON.stringify(cartData));
            alert("Product Added To Cart");
            }
          })

        card.append(image,brand,price,details,category,addToCart);
        container.append(card);
      });
    }

