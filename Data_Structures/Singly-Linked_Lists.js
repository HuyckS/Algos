// Singly Linked List

// made up of nodes with a refence for the "next" item in the list
// need to create class for nodes
class Node {
    constructor(val) {
        //has a value
        this.val = val;
        //point value for the next node
        this.next = null;
    }
}
// need a class for a singly linked list
class SinglyLinkedList {
    constructor() {
        // has a length for easy use
        this.length = 0;
        // has a pointer value for the start or 'head' of the list
        this.head = null;
        // has a pointer value for the end or 'tail' of the list
        this.tail = null;
    }
    // create a push method
    push(val) {
        // create new instance of node
        let newNode = new Node(val);
        // if the sll is empty, set its head to the new node and tail to the head
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // else set the current tail's next to the new node and then set newNode as the tail
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // add one to the length
        this.length++;
        // return the list
        return this;
    }

    // create a pop method
    pop(val) {
        // if list is empty, pop not required
        if (this.length === 0) {
            return undefined;
        }
        // set variable to traverse sll
        let current = this.head;
        // set variable to store prev node (we want the second to last item)
        let prev;
        // traverse sll with while loop
        while (current.next) {
            // set prev to the current node
            prev = current;
            // set current to the next node
            current = current.next;
        }
        // reset the tail
        this.tail = prev;
        // sever the connection to the tail
        this.tail.next = null;
        // decrement length
        this.length--;
        // If there was only one node left in the sll we need to set both head and tail to null
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        // return what you popped off
        return current;
    }

    // removing the head o the SLL
    shift() {
        // check if there is a head; if not return undefined
        if (!this.head) {
            return undefined;
        }
        // set a variable with the current head
        let removed = this.head;
        // reassign the head to the current heads next node
        this.head = removed.next;
        // remember to decrement the length by 1
        this.length--;
        // if that was the last node, set the tail to null
        if (this.length === 0) {
            this.tail = null;
        }
        // return what we removed
        return removed;
    }

    // unshift -- add a node to the start of the SLL
    unshift(val) {
        // create a new node
        let newNode = new Node(val);
        // if the SLL is empty, assign the value to the head and tail
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // set the next value of the newNode to the current head
            newNode.next = this.head;
            // reassign the head to the new node
            this.head = newNode;
        }
        // increment length
        this.length++;
        // return the list
        return this;
    }

    // get -- retrieve a number based on its position in the SLL
    get(idx) {
        // if negative or greater than or equal to the length of the list -- return null
        if (idx < 0 || idx >= this.length) {
            return null;
        }
        // set current variable
        let current = this.head;
        // set counter variable
        let count = 0;
        // loop through the count until it equals the index
        while (count !== idx) {
            // set current to the next node
            current = current.next;
            // add one to counter
            counter++;
        }
        // return the current (should have stopped on answer)
        return current;
    }

    // set -- change value of node at a specified index
    set(idx, val) {
        // use get function to find the node
        let nodeToChange = this.get(idx);
        // if it is not null, change the value and return true (let's us know val was changed)
        if (nodeToChange) {
            nodeToChange.val = val;
            return true;
        }
        // if nodeToChange is null, return false to state we didn't change the value -- nothing to change
        return false;

    }

    // insert -- add a node to the list at the specified index
    insert(idx, val) {
        // if our index is greater than the length or less than 0, return false
        if (idx > this.length || idx < 0) {
            return false;
        }
        // if the index is equal to the length, push a new node onto the end
        if (idx === this.length) {
            this.push(val);
            return true;
        }
        //
        if (idx === 0) {
            return !!this.unshift(val);
        }
        // create our new node
        let newNode = new Node(val);
        // use get method on index - 1 to access the next property to reassign to the new node
        let prev = this.get(idx - 1);
        // store the value that will become the new node's next
        let temp = prev.next;
        // insert new node
        prev.next = newNode;
        // complete the link by setting the next to temp
        newNode.next = temp;
        // increment the length
        this.length++;
        // return true -- it was inserted
        return true;
    }

    // remove -- taking out a specific node
    remove(idx) {
        // if idx is less than zero or greater than the length, return undefined
        if (idx < 0 || index >= this.length) {
            return undefined;
        }
        // if the index is the last node, use pop
        if (idx === this.length - 1) {
            return this.pop();
        }
        // if the index is zero, use shift
        if (idx === 0) {
            return this.shift();
        }
        // if in the middle, set prev next to the current next
        // set prev variable
        let prev = prev = this.get(idx - 1);
        // store node to be deleted
        let removed = prev.next;
        // set prev next to the removed next node
        prev.next = removed.next;
        // decrement length
        this.length--;
        // return the node that was removed
        return removed;

    }

    // reverse -- reverse in place as you traverse
    reverse() {
        // swap the head and tail
        // set a current variable
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        // set a prev variable
        let prev = null;
        // set a future variable
        let next;
        // loop to the length of the SLL
        for (let i = 0; i < this.length; i++) {
            // set the next variable to current next
            next = current.next;
            // set current next to prev
            current.next = prev;
            // set prev to current
            prev = current;
            // move current to next
            current = next;
        }
        // return the SLL
        return this;
    }

    // print -- nice way to check our SLL
    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}