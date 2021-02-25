class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
};


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = new Node(data);
        if (this.root === null) {
            this.root = node;
            return;
        }
        let currentNode = this.root;
        while (true) {
            if (data < currentNode.data) {
                if (currentNode.left === null) {
                    currentNode.left = node;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.right = node;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }
}

module.exports = BinarySearchTree;