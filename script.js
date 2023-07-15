/**
 * Defines a class representing a Node
 * Includes a value and the link to the next
 * node. By default both are null.
 */
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

}

/**
 * Defines a class representing the whole LinkedList
 */
class LinkedList{
    constructor() {
        this.head = null;
    }

    /**
     * Adds a node at the start of the list
     * @param {*} value the value contained in the node
     */
    prepend(value) {
        this.head = new Node(value, this.head);
    }

    /**
     * Adds a node at the end of the list
     * @param {*} value the value contained in the node
     */
    append(value) {
        if (this.head === null) {
            this.prepend(value);
        } else {
            let tmp = this.head;
            while(tmp.nextNode !== null) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = new Node(value);
        }
    }

    /**
     * Finds the size of the linked list
     * @returns the total number of nodes
     */
    size() {
        let count = 1;
        let tmp = this.head;
        while(tmp.nextNode !== null) {
            tmp = tmp.nextNode;
            count += 1;
        }
        return count;
    }

    /**
     * Finds the first item of the list
     * @returns the first node
     */
    getHead() {
        return this.head;
    }

    /**
     * Finds the last item of the list
     * @returns the last node
     */
    getTail() {
        let tmp = this.head;
        while(tmp.nextNode !== null) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    /**
     * Finds a node at the given index
     * @param {int} index the index of the node 
     * we're looking for
     * @returns the node or null if it doesn't
     * exist in the list
     */
    at(index) {
        let tmp = this.head;
        for(let i = 0; i < this.size(); i++) {
            if(i === index) {
                return tmp;
            }
            tmp = tmp.nextNode;
        }
        return null;
    }

    /**
     * Removes the last node
     */
    pop() {
        const last = this.getTail();
        let tmp = this.head;
        while(tmp.nextNode !== last) {
            tmp = tmp.nextNode;
        }
        tmp.nextNode = null;
    }

    /**
     * Checks if the list contains a  certain value
     * @param {*} value 
     * @returns true if it exists in the list
     * false if not
     */
    contains(value) {
        let tmp = this.head;
        while(tmp.nextNode !== null) {
            if (tmp.value === value) {
                return true;
            }
            tmp = tmp.nextNode;
        }
        return false;
    }

    /**
     * Finds the index of the node containing
     * a certain value
     * @param {*} value 
     * @returns the index if found
     * null if not
     */
    find(value) {
        let tmp = this.head;
        for(let i = 0; i < this.size(); i++) {
            if(tmp.value === value) {
                return i;
            }
            tmp = tmp.nextNode;
        }
        return null;
    }

    /**
     * Prints a string representation
     * of the linked list
     */
    toString() {
        let tmp = this.head;
        let string = '';
        while(tmp.nextNode !== null) {
            string += '( ' + tmp.value + ' ) -> ';
            tmp = tmp.nextNode;
        }
        return string + '( ' + tmp.value + ' ) -> ' +  tmp.nextNode;
    }

    /**
     * Inserts a new node at a 
     * specific index. The previous node
     * at that position gets pushed back.
     * @param {*} value the value contained
     * in the new node
     * @param {int} index the position to
     * insert the new node
     * @returns nothing
     */
    insertAt(value, index) {
        const afterNode = this.at(index);
        if (afterNode === null) {
            return;
        } else if(afterNode === this.head) {
            this.prepend(value);
            return;
        }
        const beforeNode = this.at(index - 1);
        const newNode = new Node(value, afterNode);
        beforeNode.nextNode = newNode; 
    }

    /**
     * Deletes a node at a specific
     * position. The previous node takes
     * its place or null if it's last.
     * @param {int} index the position of the
     * node to be removed
     * @returns nothing
     */
    removeAt(index) {
        const removedNode = this.at(index);
        if (removedNode === null) {
            return;
        } else if(removedNode === this.head) {
            this.head = removedNode.nextNode;
            return;
        } else if(removedNode === this.getTail()) {
            this.pop();
            return;
        }
        const beforeNode = this.at(index - 1);
        const afterNode = removedNode.nextNode;
        beforeNode.nextNode = afterNode;
    }
}





