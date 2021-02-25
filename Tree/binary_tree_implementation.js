// A Binary Search tree is a binary tree in which nodes that have lesser value are stored on the left while the nodes with a higher value are stored at the right.

//Node constructor 
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

// Binary search tree class 
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // Insert new node
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            // find the suitable parent node and add to it 
            this.addNodeToTree(this.root, newNode);
        }
    }
    // Method to insert a node in a tree -  it moves over the tree to find the location to insert a node with a given value
    addNodeToTree(node, newNode) {
        // if the data is less than the node data move left of the tree
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                // if left is not null travel left until null is found 
                this.addNodeToTree(node.left, newNode);
            }
        } else { // if the data is more than the node data move right of the tree  
            if (node.right === null) {
                node.right = newNode;
            } else {
                // if left is not null travel left until null is found 
                this.addNodeToTree(node.right, newNode);
            }
        }
    }

    // Remove node 

    remove(value) {
        // root is re-initialized with root of a modified tree.
        this.root = this.removeNode(this.root, value);
    }
    removeNode(node, value) {
        // if the root is null then tree is empty 
        if (node === null) {
            return null;
        } else if (value < node.value) { // if the value is less than the node value move left of the tree
            node.left = this.removeNode(node.left, value);
            console.log(` ${node.value} <---- Left`);
            return node;
        } else if (value > node.data) {  // if value to be delete is greater than root value then move to right subtree 
            node.right = this.removeNode(node.right, value);
            console.log(`Right ----> ${node.value}`);
            return node;
        } else { //if data is similar to the root's data then delete this node
            // deleting node with no children 
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // deleting node with one children 
            if (node.left === null) {
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }

            // Deleting node with two children minumum node of the rigt subtree is stored in aux 
            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }
    // Find the node with minimum value

    // get the root node

    // inorder

    // preorder

    // postorder

    // search 

}




// Inserting nodes to the BinarySearchTree 
var BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
BST.remove(7);
console.log(BST);
console.log("Break")