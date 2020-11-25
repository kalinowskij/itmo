// ##### Занятие 7:
// ##### Домашнее задание:
// 2. Дан массив с объектами, где каждый объект
// описывает товар: фото, артикул, описание и т.п.
//     Сформировать функцию, которой передаётся массив
// товаров, и которая создаст и внесёт все
// необходимые html элементы, стили, и содержание
// для отображения всей информации о товарах.
console.log("Задача 2");

// Массив товаров
let products = [
    {img: 'https://picsum.photos/id/22/300/300', article: '111111', description: 'Хороший товар', price: '2000'},
    {img: 'https://picsum.photos/id/23/300/300', article: '222222', description: 'Хороший товар', price: '3000'},
    {img: 'https://picsum.photos/id/24/300/300', article: '333333', description: 'Хороший товар', price: '1000'},
    {img: 'https://picsum.photos/id/25/300/300', article: '444444', description: 'Хороший товар', price: '6000'},
];


function displayProducts(products){

    products.forEach((product) => {

        let img_div = document.createElement('img');
        img_div.src = product.img;
        img_div.style.borderRadius = '20px';
        let article_div = document.createElement('h1');
        article_div.innerHTML = product.article;
        let description_div = document.createElement('h4');
        description_div.innerHTML = product.description;
        let price_div = document.createElement('div');
        price_div.innerHTML = product.price;

        let product_row = document.createElement('div');
        product_row.style.textAlign = 'center';
        product_row.style.marginTop = '100px';
        product_row.appendChild(img_div);
        product_row.appendChild(article_div);
        product_row.appendChild(description_div);
        product_row.appendChild(price_div);
        document.body.appendChild(product_row);
    });



}
displayProducts(products);
