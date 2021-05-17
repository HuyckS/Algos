// Singly Linked List

// similar to SLL, but has another pointer reference "prev" that allows easy access reversing through the list
// need to create class for nodes
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // create new node
        let newNode = new Node(val);
        // if the list is empty 
        if (this.length === 0) {
            // set the head and tail to new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // set the next pointer of the tail to new node
            this.tail.next = newNode;
            // new node previous is now the current tail
            newNode.prev = this.tail;
            // re set tail to the last item in the list (new node)
            this.tail = newNode;
        }
        // add 1 o length
        this.length++;
        return this;
    }

    pop(val) {
        // check if list is empty
        if (!this.head) {
            return undefined;
        }
        // set node to be removed to the tail
        let removeNode = this.tail;
        // if there is just 1 in the list
        if (this.length === 1) {
            // reassign the head and tail to null
            this.head = null;
            this.tail = null;
        } else {
            // if there are more than 1 node -- reassign the tail to node to be removed's prev
            this.tail = removeNode.prev;
            // sever link by setting next to null
            this.tail.next = null;
            // complete severing the link by setting the removed node's prev to null
            removeNode.prev = null;
        }
        // Don't forget to subtract 1 from the length
        this.length--;
        return removeNode;
    }

    shift() {
        // if there are no nodes
        if (!this.head) {
            return undefined;
        }
        // set the node to be shifted to the current head
        let oldHead = this.head;
        // if there is only one node
        if (this.length === 1) {
            // reassign the head and tail to null
            this.head = null;
            this.tail = null;
        } else {
            // else set the head to the old head's next node
            this.head = oldHead.next;
            //set the new head's prev to null
            this.head.prev = null;
            // sever all links by setting old head's next to null
            oldHead.next = null;
        }
        // decrement the length
        this.length--;
        return oldHead;

    }

    unshift(val) {
        // create new node
        let newNode = new Node(val);
        // if there are no nodes
        if (this.length === 0) {
            // assign head and tail to new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            // assign head prev to new node
            this.head.prev = newNode;
            // newNode next gets assigned to the current head
            newNode.next = this.head;
            //reassign head to new node
            this.head = newNode;
        }
        // add one to the length
        this.length++;
        return this;

    }

    get(idx) {
        // if the index is less than 0 or greater than the length of our list
        if (idx < 0 || idx >= this.length) {
            return null;
        }
        // cut ths in half (check first half vs last half)
        if (idx <= this.length / 2) {
            // set a count variable to track index through loop
            let count = 0;
            // set current to the head
            let current = this.head;
            // loop through while count is not the index -- this will stop when index is equal to the node at that index
            while (count != idx) {
                // reassign current to current's next node
                current = current.next;
                // increment count
                count++;
            }
            return current;
        } else {
            // set a count variable to track index through reverse loop
            let count = this.length - 1;
            // set current to the tail
            let current = this.tail;
            // still looping until count and index are equal -- then stop
            while (count !== index) {
                // reassign current to current's prev node (loop through reverse)
                current = current.prev;
                // decrement instead of adding to count
                count--;
            }
            return current;
        }
    }

    set(idx, val) {
        // call get method to find the node at the given idx
        let nodeToUpdate = this.get(idx);
        if (nodeToUpdate !== null) {
            // update the val for that node
            nodeToUpdate.val = val;
            // return true to show it was updated
            return true;
        }
        // if not return false
        return false;

    }

    insert(idx, val) {
        // is the idx valid?
        if (idx < 0 || idx > this.length) {
            return false;
        }
        // if index is the head
        if (idx === 0) {
            return !!this.unshift(val);
        }
        // if the idx is the tail
        if (idx === this.length) {
            return !!this.push(val);
        }
        // if not the start or end, set variable to new node of the val provided
        let newNode = new Node(val);
        // create a variable for node to the left or before where the new node will go
        let nodeBeforeInsert = this.get(idx - 1);
        // do the same for the right or after the new node for clarity
        let nodeAfterInsert = nodeBeforeInsert.next;
        // reassign the next and previous values for before node, newNode, and after node
        nodeBeforeInsert.next = newNode;
        newNode.prev = nodeBeforeInsert;
        newNode.next = nodeAfterInsert;
        nodeAfterInsert.prev = newNode;
        // add one to the length
        this.length++;
        return true;
    }

    remove(idx) {
        // is the idx valid?
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        // if index is the head
        if (idx === 0) {
            return this.shift();
        }
        // if the idx is the tail
        if (idx === this.length) {
            return this.pop();
        }
        // store node to be removed into a variable
        let removeNode = this.get(idx);
        // reassign the next and previous of nodes to the left and right of node to be removed
        removeNode.prev.next = removeNode.next;
        removedNode.next.prev = removedNode.prev;
        // decrement length
        this.length--;
        return removeNode;
    }
}