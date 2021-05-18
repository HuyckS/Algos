// Stack - abstract data structure that follows a Last In First Out principle 

//                                                              3  <- last one added
//                                           2 <- second in     2  <- second
// empty stack      1  <- add first num      1 <- first in      1  <- still first in
//---------------------------------------------------------------------------------------------


// 3  <- Last added, first removed     
// 2                                   2  <- next to be removed    
// 1  <- First in and last out         1  <- still last out        1 <- Last one!
//----------------------------------------------------------------------------------------------

// Used in function invocations, undo/redo, routing (history object)

// node class

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// stack class

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push
    push(val) {
        // set a variable to store new node
        let newNode = new Node(val);
        // if the stack is empty
        if (!this.first) {
            // assign the first and last properties
            this.first = newNode;
            this.last = newNode;
        } else {
            // assign a temp variable to store the current first value
            let temp = this.first;
            //set the first value to new node
            this.first = newNode;
            // reassign the next value to the old first node
            this.first.next = temp;
        }
        // increment size
        this.size++;
        //return the size
        return this.size;
    }

    // pop
    pop() {
        // if the stack is empty
        if (!this.first) {
            return null;
        }
        // set a temp variable that equals the first value
        let temp = this.first;
        // if there is only one node on the stack
        if (this.first === this.last) {
            this.last = null;
        }
        // reassign first to the next node on the first node being removed
        this.first = this.first.next;
        // decrement size
        this.size--;
        // return our temp node as node that has been removed
        return temp.val;
    }
}