const listArrTk = [
    {
        tk : "cuong01",
        mk : 1
    }
];
const listProduct = [
    {
        id : 1,
        img : "img/asset 8.jpeg",
        name : "Gourmet Love Chocolate/ Romantic Heart - S01",
        price : "625.000",
        cate: 3
    },
    
]
//thêm list sản phẩm vào local
let newProduct = JSON.parse(localStorage.getItem("product"));
if(newProduct == null) {
    localStorage.setItem("product",JSON.stringify(listProduct))
}
//thêm list tài khoản vào local
let newList = JSON.parse(localStorage.getItem("login"));
console.log(newList);
if(newList == null) {
    localStorage.setItem("login",JSON.stringify(listArrTk))
}
const login= ()=>{
    let tk = document.querySelector(".gmail");
    let mk = document.querySelector(".pass");
    for(let item of newList) {
        if((item.tk==tk.value) && (item.mk==mk.value)) {
            window.location.href = "index.html";
        }
    }
}
let form_login = document.querySelector("#login1");
if(form_login) {
    form_login.addEventListener("submit" , (e)=>{
        e.preventDefault()
        login();
    })
}
let form_signin = document.querySelector("#signin1");
if(form_signin) {
    form_signin.addEventListener("submit" , (e)=>{
        e.preventDefault()
        signin();
    
    })
}
const signin=()=>{
    let gmail = document.querySelector(".gmail").value;
    let name = document.querySelector(".name").value;
    let pass = document.querySelector(".pass").value;
    let passCheck = document.querySelector(".repass").value;
    if(pass==passCheck) {
        let newTk = {
                tk : name,
                mail : gmail,
                mk : pass
        }
        newList.push(newTk)
        localStorage.setItem("login",JSON.stringify(newList))
        window.location.href = "login.html";
    }
}

const showProduct = (app , datas) => {
    if(app) {
        for(let item of datas) {
            app.innerHTML +=`
            <a href="chitiet.html?id=${item.id}">
            <div class="product1">
                <div class="img-prd">
                    <img style="width: 196px; height: 196px;" src="${item.img}" alt="">
                </div>
                <div class="text-prd">
                    <p>${item.name}</p>
                </div>
                <div class="price">
                    <span>${item.price} đ</span> 
                    <button> add</button>
                </div>
            
            </div>
            </a>
            `;
        }
    }
}

let content = document.querySelector(".content-prd");
let project = document.querySelector(".content-project")
showProduct(content,newProduct)
showProduct(project,newProduct)

const addPro = () =>{
    let img = document.querySelector(".img").value;
    let name = document.querySelector(".name").value;
    let price = document.querySelector(".price").value;
    let newa = {
        id : newProduct.length+1,
        img : img , 
        name : name ,
        price : price
    }
    newProduct.push(newa)
    console.log(newProduct);
    localStorage.setItem("product",JSON.stringify(newProduct))
    window.location.href = "index.html";
}
console.log(newProduct);
let formProduct = document.querySelector("#addProduct");
if(formProduct) {
    formProduct.addEventListener("submit", (e)=>{
        e.preventDefault();
        addPro()
    })
}
let btns =document.querySelectorAll(".btn-remove")
const detailPrd =() => {
    let id= new URLSearchParams(window.location.search).get("id");
    let detail= document.querySelector(".container-ct")
    if (detail) {
        let newItem = newProduct.find (item=>item.id==id)
        detail.innerHTML+=`
        <div class="imagee">
                        <img src="${newItem.img}" alt="">
                    </div>
                    <div class="infor-prd">
                        <div class="infor-tt">
                            <h1> ${newItem.name}</h1>
                        </div>
                        <div class="pricee">
                            <h3> ${newItem.price}Đ</h3>
                        </div>
                        <div class="soluong">
                            <p> Số lượng:</p>
                        </div>
                        <div class="buy">
                            <button class="mua"> <span> MUA NGAY</span> <br> Giao hàng tận nơi hoặc nhận tại cửa hàng</button>
                        </div>
                    </div>
        `
    }
}
detailPrd ()
// function mainProduct() {
//     //cách lấy dữ liệu được đẩy lên trên url 
//     let url = new URLSearchParams(window.location.search).get("url");
//     let newArryProduct = array.find(function(item) {
//         return item.id == url;
//     });
//     console.log(newArryProduct);
//     let sanpham = document.querySelector(".container-ct");
//     if (sanpham) {
        
//         sanpham.innerHTML = `
//         <div class="imagee">
//         <img src="${newItem.img}" alt="">
//     </div>
//     <div class="infor-prd">
//         <div class="infor-tt">
//             <h1> ${newItem.name}</h1>
//         </div>
//         <div class="pricee">
//             <h3> ${newItem.price}Đ</h3>
//         </div>
//         <div class="soluong">
//             <p> Số lượng:</p>
//         </div>
//         <div class="buy">
//             <button class="mua"> <span> MUA NGAY</span> <br> Giao hàng tận nơi hoặc nhận tại cửa hàng</button>
//         </div>
//     </div>


//         `;
        
//     }
// }
// mainProduct();