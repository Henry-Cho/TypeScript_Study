{
    interface Stack<V> {
        readonly size: number;
        push(value: V) : void;
        pop() : V;
    }

    type stackNode<V> = {
        readonly value: V;
        readonly next?: stackNode<V>;

    }

    class StackIpl<V> implements Stack<V> {
        private _size: number = 0;
        private head?: stackNode<V>;

        get size() : number {
            return this._size; 
        }

        push(value: V) {
            const new_node : stackNode<V> = {value, next: this.head};
            this.head = new_node;   
            ++this._size;
        }

        pop() : V {
            if (this.head == null) { // null !== undefined (타입이 다르다) / null == undefined
                throw new Error("Stack is empty!");
            }
            const node = this.head;
            this.head = node.next;

            --this._size;
            return node.value;
        }
    }

    let stack = new StackIpl<string>();

    stack.push("Ellie1");
    stack.push("Ellie2");
    stack.push("Ellie3");

    while (stack.size !== 0) {
        let yoyo = stack.pop();
        console.log(yoyo); 
    }

    let stack1 = new StackIpl<number>();
    console.log("-----------------------");
    stack1.push(1);
    stack1.push(2);
    stack1.push(3);
    
    while (stack1.size !== 0) {
        let yoyo = stack1.pop();
        console.log(yoyo); 
    }
}