// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// let three = document.querySelector(".three");

// one.addEventListener("click", (e) => {
//   console.log(e.currentTarget.className);
// });
// two.addEventListener("click", (e) => {
//   console.log(e.currentTarget.className);
// });
// three.addEventListener("click", (e) => {
//   console.log(e.currentTarget.className);
// });

let divs = document.querySelectorAll("div");

divs.forEach((el, index) => {
  el.addEventListener("mouseover", (e) => {
    console.log(e.currentTarget.className);
    // e.stopPropagation();
  });
});

/*
왜? three 클릭했더니 three, two, one이 호출이 되고 있다

브라우저는 특정화면 요소에서 이벤트가 발생하였을 때
그 이벤트를 최상위에 있는 화면 요소까지 이벤트를 전파시킵니다
즉 three에 이벤트가 발생하면 최상위요소인 one까지 이벤트가 전파되어서
three, two, one으로 이벤트가를 순차적으로 전파시키는 것입니다

이 현상을 이벤트 버블링이라고 합니다
반대현상이 있는데 그것을 이벤트 캡쳐
하지만 버블링은 추가작업이 없이 일어나는 반면 캡쳐는 특별한 옵션으로
활성화 시켜야합니다
버블링 + 캡쳐를 합쳐서 이벤트 위임이라고 합니다

js에서는 동적으로 DOM을 생성할 때가 많습니다
따라서 현상태에서는 DOM이 생성되지 않았으나 미래시로 생성될 DOM을
제어하여 이벤트를 부여해야 할 경우가 종종 있습니다

mouseenter mouseleave
mouseover, mouseout
hover

1.마우스가 해당 요소에 접근할, 들어갈 때
mouseenter, mouserover입니다
둘의 차이는 이벤트위임의 발생여부입니다
mouseenter는 이벤트위임이 발생하지 않습니다
반면 mouseover는 이벤트위임이 발생합니다

2. hover라는 메소드
css hover와의 차이점
css hover는 (원 코드와, hover를 붙인 코드)
두가지 상태를 오가며 작동합니다

반면 js에서의 hover는 
hover(함수, 함수)로 작성하며
css처럼 마우스가 떠날 때 다시 원상태로 복구되는 것이 아니라
함수2로 덮어쓰는 것입니다. 즉 복구되지 않습니다

*/
