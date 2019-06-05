import { decorate, observable, computed, autorun, action, transaction } from 'mobx';

// ES6 class 사용하여 장바구니 구현 예제
class Cart {
    basket = [];

    get total() {
        console.log('계산중입니다.');
        // Reduce 함수로 배열 내부 객체의 price 총합 계산.
        // reduce(누산값,현재값, 현재idx, 원본배열);
        // 마지막 인수 0은 initialValue. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류 발생함
        // 지정안하면 배열의 첫번째 값이 됨. 
        return this.basket.reduce((prev, curr) => prev + curr.price, 0);
    }

    select(name, price) { // state(basket) 변경. action 임
        this.basket.push({ name, price });
    }
}

// decorate을 통해서 각 값에 MobX 함수 적용
decorate(Cart, {
    basket: observable,
    total: computed,
    select: action,
});

const myCart = new Cart();
autorun(()=> myCart.total);
// 새 데이터가 추가 될 때 알림
autorun(()=> {
    if (myCart.basket.length > 0) {
        console.log(myCart.basket[myCart.basket.length -1]);
    }
});

myCart.select('물',800); // select 함수내에는 basket push 들어있음.
console.log(myCart.total);

myCart.select('물',1200);
console.log(myCart.total);

myCart.select('포카칩',1500);
console.log(myCart.total);

// 위처럼 transaction 없이 작성 할 경우, 값이 변경되는 행위를 모아서 처리하는게 아니라 매번 action 디스패치가 발생함.
// 하여 아래처럼 transaction 으로 처리해주면 한번만 처리된다.

transaction(()=> {
    myCart.select('홈런볼',1200);
    myCart.select('틈새라면',1500);
    myCart.select('옥수수',1100);
});

console.log(myCart.total);
