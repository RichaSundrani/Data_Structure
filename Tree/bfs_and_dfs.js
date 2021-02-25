// Creating Tree using function
// function node(value){
//     return {
//         value, 
//         children:[]
//     }
// }


// Creating Tree using class
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
};

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
A.children.push(B);
A.children.push(C);
A.children.push(D);
const E = new Node('E');
B.children.push(E);
const K = new Node('K');
const L = new Node('L');
E.children.push(K);
E.children.push(L);
const F = new Node('F');
const G = new Node('G');
const H = new Node('H');
C.children.push(F);
C.children.push(G);
C.children.push(H);
const M = new Node('M');
H.children.push(M);
const I = new Node('I');
const J = new Node('J');
D.children.push(I);
D.children.push(J);
// Entire tree 
console.log(A);

// Breadth-First-Search - pass a callback method as second parameter and you can perform any operation instaed of just console log
const breadthFirstSearch = (root) => {
    const queue = [root]; 
    while(queue.length){
        const currentNode = queue.shift();
        if(currentNode.children){ 
            queue.push(...currentNode.children); 
        }
        console.log(currentNode.value); // Call the callback method on node
    }
}; 
breadthFirstSearch(A);


// Depth-First-Search - pass a callback method as second parameter and you can perform any operation instaed of just console log
// Pre order - follow the order from parent to last child/leaf node 
const depthFirstSearchPreOrder = (root) => {
     console.log(root.value); // Call the callback method on node
     root.children.forEach(node => {
        depthFirstSearchPreOrder(node);
     });
}
depthFirstSearchPreOrder(A);

// Depth-First-Search  - pass a callback method as second parameter and you can perform any operation instaed of just console log
// Post order - go up to the leaf node ( node without any child ) in depth first manner skip node with children and come back to it untill all its children has been traversed. 
const depthFirstSearchPostOrder = (root) => {
     root.children.forEach((node)=>{
        depthFirstSearchPostOrder(node)
     });
     console.log(root.value); // Call the callback method on node
}

depthFirstSearchPostOrder(A);
console.log("Break");
