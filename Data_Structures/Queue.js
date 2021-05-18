// Queue - similar to stack, but has a First In, First Out rule

//  Line:  1      2      3      4      5
//         ^                           ^
//      first in                     last in
//
//  Line:  2      3      4      5      
//
//   1  first out!

// Examples: background tasks, uploading resources, printing / task process


// Node Class
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Queue Class
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // enqueue -- add node to end
    enqueue(val) {
        // create new node
        let newNode = new Node(val);
        // if there are no nodes in the queue
        if (!this.first) {
            // assign the new node to the first and last pointers
            this.first = newNode;
            this.last = newNode;
        } else {
            // if nodes exist, then add to the end by assign last nodes next to the new node
            this.last.next = newNode;
            // reassign the last pointer to the new node
            this.last = newNode;
        }
        // increment size
        this.size++;
        return this.size;

    }

    //dequeue -- remove from the beginning (FIFO)
    dequeue() {
        // if there are no nodes in the queue
        if (!this.first) {
            return null;
        }
        // set temp variable setting it to first
        let temp = this.first;
        // edge case for last node
        if (this.first === this.last) {
            this.last = null;
        }
        // reassign the first variable to the next value
        this.first = this.first.next;
        // decrement size
        this.size--;
        //return the value of the node removed
        return temp.val
    }
}