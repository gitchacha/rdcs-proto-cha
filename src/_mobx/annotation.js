import { observable, computed, autorun, action, transaction } from 'mobx';

class Cart {
    @observable basket = [];

    @computed
    get total() {
        console.log('계산중입니다.');
        return this.basket.reduce((prev, curr) => prev + curr.price, 0);
    }

    @action
    select(name, price) {
        this.basket.push({ name, price });
    }
}

const myCart = new Cart();
autorun(() => myCart.total);

autorun(() => {
    if (myCart.basket.length > 0) {
        console.log(myCart.basket[myCart.basket.length - 1]);
    }
});

transaction(() => {
    myCart.select('홈런볼', 1200);
    myCart.select('틈새라면', 2100);
    myCart.select('옥수수', 1100);
});

console.log(myCart.total);
