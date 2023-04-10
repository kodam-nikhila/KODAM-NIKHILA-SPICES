let shop = document.getElementById("shop");
let shopItemsData =[
{id:"1",
name:"Gongura pickle",
price:45,
desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
img:"https://tinyurl.com/249v5fpe"
},
{
id:"2",
name:"lemon pickle",
price:55,
desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
img:"https://tinyurl.com/3ya26y5y"
}
,{
    id:"3",
    name:"Mango pickle",
    price:50,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img:"https://tinyurl.com/y2zuhckw"
},{
    id:"4",
    name:"Amla pickle",
    price:65,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    img:"https://tinyurl.com/46hucz7v"
},
];

let basket = [
    
];
    let generateShop = () => {
        return (shop.innerHTML = shopItemsData
            .map((x) =>{
                let {id, name, price, desc, img} =x;
          
         return`   
          <div id=product-id-${id} class="item">
              <img width="220" src=${img} alt="">
              <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                  <h2>$ ${price} </h2>
                  <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0
                    
                    </div>

                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                  </div>
                </div>
              </div>
            </div>
            `;
     })
     .join("") );
};
generateShop();
let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=>x.id===selectedItem.id);
    if(search === undefined){
        basket.push({
            id:selectedItem.id,
            item:1,
        

    });
    
    }else{
      search.item +=1
    }
    

    //console.log(basket);
    update(selectedItem.id);
};
let decrement = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=>x.id===selectedItem.id);
    if(search.item === 0)
    return;
        else{
      search.item -=1
    }
    

   // console.log(basket);
    update(selectedItem.id);
};

let update = (id)=>{
    let search = basket.find((x)=>x.id===id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
};
