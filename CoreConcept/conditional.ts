type Condition<T> = T extends string? boolean : number;

type Type = Condition<string>;

type Condition1<T> = T extends Function? 'function' : 'null';

type TypeOne = Condition1<()=> void>;