let allProducts = document.querySelector(".allProducts")
const forwardArrow = document.querySelector(".forwardArrow")
const backwardArrow = document.querySelector(".backwardArrow")
const caroselImg = document.querySelector(".caroselImg")

const caroselImages = [
    { img: "imgs/images1.jpg" },
    { img: "imgs/image2.jpg" },
    { img: "imgs/images3.jpg" },
    { img: "imgs/image4.jpg" },
    { img: "imgs/image5.jpg" },
    { img: "imgs/image6.jpg" },
    { img: "imgs/image7.jpg" },
    { img: "imgs/image8.jpg" },
    { img: "imgs/image9.jpg" },
]
let count = 0;
//for forward btn addeventlistener
forwardArrow.addEventListener("click", caroselRightMove)
function caroselRightMove() {
    count++
    count == 9 ? count = -1 : caroselImg.src = caroselImages[count].img
}
//for automatic move in every 3s
setInterval(() => {
    caroselRightMove()
}, 3000);

//for forward btn addeventlistener
backwardArrow.addEventListener("click", caroselLeftMove)
function caroselLeftMove() {
    count--
    console.log(count)
    count == -1 ? count = 9 : caroselImg.src = caroselImages[count].img
}

fetch("http://localhost:3000/products")
    .then(convertingToJson => convertingToJson.json())
    .then(allValues => {
        let product = allValues.map((element) => 
                 `<div class="mainDiv"><span class="favoriteIcon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.9749L10.975 20.0499C9.2122 18.4312 7.75483 17.0349 6.6029 15.8609C5.45097 14.6869 4.53333 13.6374 3.85 12.7124C3.16667 11.7874 2.6875 10.9499 2.4125 10.1999C2.1375 9.4499 2 8.69157 2 7.9249C2 6.42232 2.50417 5.16751 3.5125 4.16048C4.52083 3.15343 5.76667 2.6499 7.25 2.6499C8.2 2.6499 9.07917 2.8749 9.8875 3.3249C10.6958 3.7749 11.4 4.4249 12 5.2749C12.7 4.3749 13.4417 3.7124 14.225 3.2874C15.0083 2.8624 15.85 2.6499 16.75 2.6499C18.2333 2.6499 19.4792 3.15343 20.4875 4.16048C21.4958 5.16751 22 6.42232 22 7.9249C22 8.69157 21.8625 9.4499 21.5875 10.1999C21.3125 10.9499 20.8333 11.7874 20.15 12.7124C19.4667 13.6374 18.549 14.6869 17.3971 15.8609C16.2452 17.0349 14.7878 18.4312 13.025 20.0499L12 20.9749ZM12 18.9999C13.6873 17.45 15.0757 16.1208 16.1655 15.0125C17.2551 13.9041 18.1208 12.9332 18.7625 12.0999C19.4042 11.2666 19.8542 10.5238 20.1125 9.87153C20.3708 9.21926 20.5 8.57159 20.5 7.92853C20.5 6.82611 20.15 5.92074 19.45 5.2124C18.75 4.50407 17.8519 4.1499 16.7556 4.1499C15.8969 4.1499 15.1021 4.4124 14.3712 4.9374C13.6404 5.4624 13.05 6.1999 12.6 7.1499H11.375C10.9417 6.21657 10.3596 5.48324 9.62875 4.9499C8.8979 4.41657 8.10311 4.1499 7.24437 4.1499C6.14813 4.1499 5.25 4.50407 4.55 5.2124C3.85 5.92074 3.5 6.82754 3.5 7.9328C3.5 8.57754 3.62917 9.22907 3.8875 9.8874C4.14583 10.5457 4.59583 11.2957 5.2375 12.1374C5.87917 12.9791 6.75 13.9499 7.85 15.0499C8.95 16.1499 10.3333 17.4666 12 18.9999Z" fill="#EEEEEE"/></svg></span>
                 <img class="productImg" height="193px" width="193px" src="${element.images}"><h3>New In</h3><p>${element.name}</p><p>${element.price}</p><div class="sizeBar"><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p></div></div> `  
            ).join("")
        allProducts.innerHTML = product
        //this is for moving the carosel automatically
        window.setInterval(() => {
            allProducts.scrollBy(350, 10)
        }, 4000)
    })
   