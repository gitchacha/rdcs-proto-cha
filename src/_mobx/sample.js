import { observable, computed, reaction,  autorun } from 'mobx';


/** Observable State 만들기 
 * observable 함수로 관찰 할 대상 지정.
 *  */ 
const calculator = observable({
    a: 1,
    b: 2,
});

/** Reaction 적용하기 (특정 값이 바뀔때 actino)
 * 
 */
reaction(
    () => calculator.a,
    (value, reaction) => {
        console.log(`a 값이 ${value}로 바뀌었습니다.`);
    }
);

reaction(
    ()=> calculator.b,
    (value, reaction) => {
        console.log(`b값이 ${value}로 바뀌었습니다.`);
    }
);

calculator.a = 10;
calculator.b = 12;

/**
 * Computed로 특정 값 '캐싱'
 * computed 값을 정해두면 연산이 일어나야하는 값의 변화가 있을 시 미리 연산하여 값을 캐싱처리함.
 * 
 */
const sum = computed(()=>{
    console.log('계산중!');
    // calculator.a 와 calculator.b 두개의 값 감시.
    // .observe 함수로 감시 대상 값을 정해줄 경우 아래의 연산식 수행하여 return 
    return calculator.a + calculator.b;
});

// computed 감시의 대상 주체 '값' 지정. .observe 안하면 computed 기록 안됨.
sum.observe(()=> calculator.a);
sum.observe(()=> calculator.b);


/**
 * autorun : reaction, computed 값 지정 자동으로 하기
 * autorun 에서 정해준 함수내부의 값이 들어있는 reaction, computed 를 알아서 주시한다. (함수주시)
 */
autorun(() => console.log(`a값이 ${calculator.a} 로 변경되었습니다.`));
autorun(()=> console.log(`b값이 ${calculator.b}로 변경되었습니다.`));

// 자동으로 calculator.a, calculator.b 감시.
// 위처럼 sum.observe(()=>calculator.a); 일일히 지정해 줄 필요 없음.
autorun(()=> sum.get()); 
