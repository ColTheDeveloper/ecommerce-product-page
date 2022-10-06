const bodys= document.querySelector("body");
const numOfProduct= document.querySelector("#num-of-product");
const expandImg = document.getElementById("expandedImg");
const cartmenu= document.querySelector("#cart-menu");
const shoes= document.querySelectorAll(".thumbnails");
const menu= document.getElementById("menu");
const addToCart= document.getElementById("addToCart");
const cartGoods= document.getElementById("purchased");
const priced= document.getElementById("priced");
const totalCart= document.getElementById("totalCart");
const total= document.getElementById("total");
const deleteBtn=document.getElementById("delete");
const cartList= document.getElementById("cartList");
const cartNum= document.getElementById("cartnum");

let idx=0;

function showMenu(){
    menu.style.left= "0%";
    bodys.classList.add("dark");
}
function hideMenu(){
    menu.style.left= "-100%";
    bodys.classList.remove("dark");
}
function cartMenu(){
    if (cartmenu.style.display === 'none') {
        cartmenu.style.display = 'block';
      } else {
        cartmenu.style.display = 'none';
    }  
    
};
function plus(){
    numOfProduct.textContent=Number(numOfProduct.textContent) +1;
}
function minus(){
    
    if(Number(numOfProduct.textContent)<= 0){

    }else{
        numOfProduct.textContent=Number(numOfProduct.textContent) -1;
    }   
}

function changeImg(imgs){
    shoes.forEach(shoe=>{
        shoe.classList.remove("active");

    });
    expandImg.src=imgs.src;
    imgs.parentElement.classList.add("active");
}
function next(){
    if(idx==shoes.length-1){
        idx=0;
    }else{
        idx++;

    }
    expandImg.src=shoes[idx].firstChild.src;
}
function prev(){
    if(idx==0){
        idx=3;
    }else{
        idx--;

    }
    expandImg.src=shoes[idx].firstChild.src;
}
addToCart.addEventListener("click", ()=>{
    if(Number(numOfProduct.textContent)==0){

    }else{
        cartGoods.style.display= "flex";
        cartNum.style.display= "block";
        const cartCalc= (priced.textContent)*(numOfProduct.textContent);
        totalCart.textContent= numOfProduct.textContent;
        total.textContent= cartCalc;
        numOfProduct.textContent= 0;
        cartNum.textContent= totalCart.textContent;
    }
})
deleteBtn.addEventListener("click",()=>{
    cartGoods.style.display= "none";
    cartNum.style.display= "none";
});