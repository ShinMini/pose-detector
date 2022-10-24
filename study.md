Animated.timing 함수

``` typescript
export const Animated.timing: ({
   // Animated.ValueXY
   value: Animated.Value | Animated.ValueXY,
   config: Animated.TimingAnimationConfig
  ) => Animated.CompositeAnimation;
}

// 이떄 Animated.timing 내의 config 속성(Animated.TimingAnimationConfig) 정보
interface AnimationConfig {
   // JS engine(false) or Native Animation engine(true) 결정.
   useNativeDriver: boolean;
}
 interface TimingAnimationConfgi extends AnimationConfig {
   toValue: number | Animated.Value // new Animated.Value(시작값)의 끝값 결정.
   durtion?: number  // 애니메이션 진행 시간(millisecond 단위, 1초는 1000ms)
   delay?: number // 애니메이션 진행 전 대기 시간
   easing?: (value: number) => number;    // Easing이 제공하는 보간 함수 설정
 }

```

# easing? 
* 보간 함수 모음(imterpolation functions) 
* 여러 가지 보간 함수를 설정하는 데 사용.

# Easing 타입 객체 ..이거 약간 가속도 함수네요.


``` typescript
export type EasingFunction = (value: number) => number;
// 이미 많은 종류의 가속도 함수가 구현되어 있네요.
export interface Easing {
   linear: EasingFunction;
   ease: EasingFunction;
   quad: EasingFunction;
   sin: EasingFunction;
   exp: EasingFunction;
   bounce: EasingFunction;
   // ...(생략)
}

```

# Animated.CompositeAnimation 타입 객체 

* Animated.timing: AnimatedCompositeAnimation

``` typescript
export interface CompositeAnimation {
   start: (callback?: EndCallback) => void;
   // ... 생략
}
type EndResult = {finished: boolean};
type EndCallback= (result: EndResult) => void;

```

* start 메서드에는 이를 호출한 코드에서 에니메이션이 종료되었는지 알 수 있는 콜백함수를 매개변수로 줄 수 있음. 
* result 매개변수는 항상 {finished: true}이므로 생략 가능.

``` typescript
Animated.timing(animValue, {toValue: 1, duration: 1000, useNativeDriver: true}.
   start() => console.log(result))   // ouput=> result: true
```

# addListenr 메서드
* Animated.Value 클래스 , addListener 메서드 제공, 
* 위 메서드의 콜백함수를 통해 핸져 보간 중인 값을 획득 가능.


``` typescript
export class Value {
   //... 생략
   addListener(callback: ValueListenerCallback): string; 
   removeListener(id: string): void;
   removeAllListener(): void;
}
type ValueListenerCAllback = (state: {value: number} ) => void;
```