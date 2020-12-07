// Создать шаблон объектов «Товар».
// Свойства товара «Имя» и «Цена».
// Создать шаблон объектов «Корзина товаров».
// Приватные свойства объекта:
//     - Массив товаров;
// - Количество товаров;
// - Сумма товаров.
//     Методы объекта:
//     - Добавить товар;
// - Вернуть сумму товара;
// - Вернуть количество товара.

class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Basket {
    products = [];
    count;
    sum;
    addProduct(product){
        this.products.push(product);
    }
    getSum(){
        let result = 0;
        this.products.forEach((product) => {
            result += product.price;
        })
        this.sum = result;
        return this.sum;
    }
    getCount(){
        this.count = this.products.length;
        return this.count;
    }
}

let product1 = new Product("Товар 1", 50);
let product2 = new Product("Товар 2", 30);

let basket = new Basket();
basket.addProduct(product1);
basket.addProduct(product2);
console.log(basket.getSum())
console.log(basket.getCount())
