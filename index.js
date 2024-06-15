// 선언 코드 const - 상수선언, 선언과 동시에 값 부여 필요 (변경 불가) | let - 변수, 같은 이름을 선언할 수 없음 (변경 가능) | ver - 같은 이름을 선언해도 디버깅 안됨 (but 필요할 때가 있음)
const name = "juhan"
let accountBank = "shinhan"
accountBank = "k-bank"


// 0615 1교시
// let account = 1000
// account = account + 3100
// account += +3100
//     console.log(account)
// account += "원"
//     console.log(account)
// account += 5000
// account += 5000
//     console.log("print : ",account,"datetype : ", typeof account)

//0615 2교시 : array
// array는 key가 숫자로 자동 인덱싱, obj는 key를 커스텀할 수 있음 -> 커스텀 호출은 "key" or obj.key
const mynavi = ["네이버", "다음", "구글"]
const mynaviobj = {
    naver : "네이버",
    daum : "다음",
    google : "구글"
}
console.log(mynavi[0])
console.log(mynaviobj["naver"]) //이걸 제일 많이 씀
console.log(mynaviobj.naver)