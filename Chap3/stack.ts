{
    interface Stack {
        readonly size: number;
        push(value: string) : void;
        pop() : string;
    }

    type stackNode = {
        readonly value: string;
        readonly next?: stackNode;

    }

    class StackIpl implements Stack {
        private _size: number = 0;
        private head?: stackNode;

        get size() : number {
            return this._size; 
        }

        push(value: string) {
            const new_node : stackNode = {value, next: this.head};
            this.head = new_node;   
            ++this._size;
        }

        pop() : string {
            if (this.head == null) { // null !== undefined (타입이 다르다) / null == undefined
                throw new Error("Stack is empty!");
            }
            const node = this.head;
            this.head = node.next;

            --this._size;
            return node.value;
        }
    }

    let stack = new StackIpl();

    stack.push("Ellie1");
    stack.push("Ellie2");
    stack.push("Ellie3");

    while (stack.size !== 0) {
        let yoyo : string = stack.pop();
        console.log(yoyo); 
    }
    
}