export default class Card {
    constructor(title, price, amount) {
        this.title = title;
        this.price = price;
        this.amount = amount;
    }

    getInfo() {
        return `Название ${this.title}, цена ${this.price}, количество ${this.amount}`
    }
}