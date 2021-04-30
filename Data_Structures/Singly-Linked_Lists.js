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
        while (current) {
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
}