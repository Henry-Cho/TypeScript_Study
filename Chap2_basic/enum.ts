{
    /** 여러가지에 관련된 상수값들을 모아서 정의할 수 있게 하는 것 */
    // JavaScript
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1});

    // TypeScript
    // 타입스크립트에서 enum 을 사용할 필요가 있을까요?? NOPE! 왜냐하면 union 으로도 충분히 커버할 수 있고 또 아무 상수로 값을 다시 할당할 수 있는 위험도 있다.
    // 그치만, 모바일 환경에서 서비스할 때는 enum 을 사용한다. 왜냐하면 모바일 환경을 구축하는 언어들이 union을 서포트 하지 않기 때문에
    enum Days {
        Monday, Tuesday, Wednesday
    }


}