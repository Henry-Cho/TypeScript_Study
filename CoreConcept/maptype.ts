// 기존의 형태를 유지하면서 조금 다른 형태로 사용할 수 있는 것
{
    type Video = {
        title: string;
        author: string;
    }

    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    // }

    type Optional<T> = {
        [P in keyof T]?: T[P]; // equals to "for ... in" 
    }

    type VideoOptional = Optional<Video>;

    const videoOp : VideoOptional = {};

    type ReadOnly<T> = {
        readonly [P in keyof T]?: T[P];
    }

    type Nullable<T> = {
        [P in keyof T]?: T[P] | null;
    }

    const test : Nullable<Video> = {
        title : null,
    }
}