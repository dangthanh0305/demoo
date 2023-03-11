const showProduct = (app , datas) => {
    if(app) {
        for(let item of datas) {
            app.innerHTML +=`
            <a href="chitiet.html?id=${item.img}">
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
