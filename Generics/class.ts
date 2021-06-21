{
    interface Either<L, R> {
        left: ()=> L;
        right: ()=> R;
    }

    class SimpleEither<L,R> implements Either<L, R> {
        constructor(private leftVal: L, private rightVal: R) {

        }
        
        left() : L {
            return this.leftVal;
        }

        right() : R {
            return this.rightVal;
        }
    }

}