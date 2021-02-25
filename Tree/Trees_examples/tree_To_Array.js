let input = [5, 1, 4, null, null, 3, 6, 4, 5, 6, 7, null, null, null, null, 11, 12, null, null];

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertAtHead(value) {
        let currentNode = new Node(value);
        if (!this.head) {
            this.head = currentNode;
            this.tail = currentNode;
        } else {
            currentNode.next = this.head;
            this.head = currentNode;
        }
        this.length++;
    }
    insertAtTail(value) {
        let currentNode = new Node(value);
        if (!this.tail) {
            this.tail = this.head = currentNode;
        } else {
            this.tail.next = currentNode;
            this.tail = currentNode;
        }
        this.length++;
    }
    print() {
        if (!this.head) {
            console.log("LinkedList is empty!")
            return;
        } else {
            let currentNode = this.head;
            // while (currentNode) {
            //     console.log(currentNode.value);
            //     currentNode = currentNode.next;
            // }

            for (; currentNode; currentNode = currentNode.next) {
                console.log(currentNode.value);
            }
        }
    }
};

let list1 = new LinkedList();
list1.insertAtHead(5);
list1.insertAtTail(3);
list1.insertAtTail(4);
list1.insertAtHead(2);
list1.print();
let con1 = console.log("A");

