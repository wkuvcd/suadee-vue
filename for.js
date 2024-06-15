for(let x = 0; x < 10; x++){
    console.log(x);   
   }

console.log(); // 줄바꿈 console

for(let x = 0; x < 10; x+=2){
    console.log(x);   
   }




// in keyword :
//for(x in "") "" 대상은 obj, array 모두 가능 
// `` : 변수와 상수를 한 구문으로 묶어 사용할 수 있다. 변수를 사용할 때에는 ${}로 구분해야 한다.

// for in 문으로 array 데이터 호출하기
const countlist = ['a', 'b', 'c'];
for(x in countlist){
    console.log(`${x}번째의 값은 ${countlist[x]}입니다.`)
}

//for in 문으로 obj 데이터 호출하기
const countobj ={
    "이름" : "돌돌이",
    "연식" : "7년"
}
for(x in countobj){
    console.log(`${x}은 ${countobj[x]}에요.`)
}