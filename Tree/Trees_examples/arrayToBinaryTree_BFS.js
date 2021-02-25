// let input = [5, 1, 4, null, null, 3, 6, 4, 5, 6, 7, null, null, null, null, 11, 12, null, null];

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class Queue {
    constructor() {
        this.que = [];
    }
    enqueue(value) {
        this.que.push(value);
    }
    dequeue() {
        return this.que.shift();
    }
    length() {
        return this.que.length;
    }
};
let input = [5, 1, 4, null, null, 3, 6, 4, 5, 6, 7, null, null, null, null, 11, 12, null, null];

let makeTree = (treeArr) => {
    let treeRoot = new Node(treeArr[0]);
    let queue = new Queue();
    queue.enqueue(treeRoot);
    let index = 1;
    while (queue.length() > 0 && index < (treeArr.length - 1)) {
        let currentNode = queue.dequeue();
        if (currentNode && treeArr[index]) {
            let leftNode = new Node(treeArr[index]);
            currentNode.left = leftNode;
            queue.enqueue(leftNode);
        }
        index++;
        if (currentNode && treeArr[index]) {
            let rightNode = new Node(treeArr[index]);
            currentNode.right = rightNode;
            queue.enqueue(rightNode);
        }
        index++;
    }
    return treeRoot;
};

makeTree(input);
console.log("done");

module.export = makeTree;












// class Vehicle {
//     constructor(wheels, fuel) {
//         this.wheels = wheels;
//         this.fuel = fuel;
//     }

//     setColor(color) {
//         this.color = color;
//     }
//     getColor() {
//         return this.color;
//     }

// }

// const v1 = new Vehicle(4, "gas");
// v1.setColor("blue");
// let result = v1.getColor();
// console.log(result);

// class Motercycle extends Vehicle {
//     constructor(make, model, fuel) {
//         super(2, fuel);
//         this.make = make;
//         this.model = model;
//     }
//     beutify(color, material) {
//         this.setColor(color);
//         this.material = material;
//     }
// }

// let moter1 = new Motercycle("abc", "dirt-bike", 'gas');
// moter1.setColor("black");
// moter1.beutify("Red", "Leather")
// console.log(moter1);