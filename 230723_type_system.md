### *“프로그래밍 언어가 프로그램에서 가질 수 있는 타입을 이해하는 방법에 대한 규칙 집합”*

---

‘타입’은 JS에서 다루는 값의 형태에 대한 설명이다.

‘형태’란, 값에 존재하는 속성과 메서드, 내장되어있는 typeof 연산자가 설명하는 것을 의미한다.

---

> **Primitive Type**
> 
- null
- undefined
- boolean
- string
- number
- bigdint
- symbol

---

> **타입 추론 과정**
> 

```jsx
let firstName = "SuperShy";
firstName.length(); // 멤버 <속성>을 <함수>로 잘못 호출했기 때문에 타입 오류 발생
```

> **오류 종류**
어떤 프로젝트는 모~든 오류가 수정될때까지 코드 실행을 차단. tsconfig.json에서 설정 가능
> 
- 구문 오류: TS → JS 변환이 차단됨 = 코드로 이해할 수 없는 잘못된 구문을 감지했을 경우
- 타입 오류: 타입 검사기에 따라 일치하지 않는 것이 감지됨 (변환이 차단되진 않음

> **할당 가능성**
> 

```jsx
let nowPlaying = "You've been Away";
nowPlaying = 2938; // JS에서와 달리, TS에서는 할당 가능성(초기값과 동일한 타입이 할당되었는지)을 판단 -> Error

let newOne; // 초깃값이 없을 때, 진화하는 any
newOne = 3289;
newOne = "98"; // 변수의 초기타입과 달라도 OK
```

> **타입 애너테이션type annotation**
초기값을 할당하지 않고도 변수의 타입을 선언할 수 있는 구문
> 

```jsx
let rocker: string; // JS로 컴파일시 해당 코드가 삭제됨
rocker = "Mamas Gun";
```

> **모듈**
> 
- 모듈: export 또는 import가 있는 파일. 모듈 파일에 선언된 모든 것은 export로 내보내지 않는 한 모듈 파일에서만 사용될 수 있다. 다른 파일 내의 동일 이름으로 선언된 변수는 해당 변수를 import하지 않는 한 이름 충돌로 간주하지 않는다.

```jsx
// a.ts (모듈)
export const name = "A";

// b.ts (모듈)
export const name = "B";

// c.ts (모듈)
import { name } from "./a"; // a.ts로부터 name을 가져오겠다
export const name = "C"; // Error
```

- 스크립트: 모듈이 아닌 모든 파일
- import/export 없이 모듈을 만들어야 한다면 파일의 아무곳에나 `export{};`추가로 강제로 모듈화하기.