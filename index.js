// 선언 코드 const - 상수선언, 선언과 동시에 값 부여 필요 (변경 불가) | let - 변수, 같은 이름을 선언할 수 없음 (변경 가능) | ver - 같은 이름을 선언해도 디버깅 안됨 (but 필요할 때가 있음)
const name = "juhan"
let accountBank = "shinhan"
accountBank = "k-bank"

let account = 1000
account = account + 3100
account += +3100
    console.log(account)
account += "원"
    console.log(account)
account += 5000
account += 5000
    console.log("print : ",account,"datetype : ", typeof account)
