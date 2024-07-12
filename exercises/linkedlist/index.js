// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let current = this.head;

        while (current) {
            counter++;
            current = current.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let last = this.head

        while (last.next) {
            last = last.next;
        }

        return last;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }

        const temp = this.head;

        this.head = temp.next;

        return temp;
    }

    removeLast() {
        if (!this.head) {
            return null;
        }

        if (!this.head.next) {
            const last = this.head;
            this.head = null;
            return last;
        }

        let last = this.head.next
        let secondToLast = this.head;

        while (last.next) {
            secondToLast = last;
            last = last.next;
        }

        secondToLast.next = null;

        return last;
    }

    insertLast(data) {
        const last = this.getLast();

        if (!last) {
            this.head = new Node(data);
        } else {
            last.next = new Node(data);
        }
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }

        let temp = this.head;
        let counter = 0;

        while(temp) {
            if (counter === index) {
                return temp;
            }

            counter++;
            temp = temp.next;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return null;
        }

        if (index === 0) {
            const temp = this.head;
            this.head = this.head.next;
            return temp;
        }

        const secondToLast = this.getAt(index - 1);

        if (!secondToLast || !secondToLast.next) {
            return null;
        }

        const last = secondToLast.next;
        secondToLast.next = last.next;
        return last;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;

        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
