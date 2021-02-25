/*
Given a data file containing an array of strings representing a hierarchy, e.g.:
[
 "animals.dogs.poodle",
 "animals.cats.tabby",
 "animals.cats.siamese",
 "animals.dogs.labrador",
 "animals.dogs.hound",
 "plants.trees",
 "animals.birds.parrot.grey"
 ...]
Write a script in Javascript to create a tree data structure out of it. Output the data in tree form.
EG:
root
  animals
    dogs
      poodle
      labrador
      hound
    cats
      tabby
      siamese
    birds
      parrot
        grey
  plants
    trees
*/

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
}


let findNode = (value, startNode) => {
    if (startNode.name === value) {
        return startNode;
    } else {
        let foundNode;
        for (let i = 0; i < startNode.children.length; i++) {
            foundNode = findNode(value, startNode.children[i]);
            if (foundNode) {
                break;
            }
        };
        return foundNode;
    }
};

var root = new Node('root');

var input = [
    "animals.dogs.poodle",
    "animals.cats.tabby",
    "animals.cats.siamese",
    "animals.dogs.labrador",
    "animals.dogs.hound",
    "plants.trees",
    "animals.birds.parrot.grey"];

let createTree = (strArr) => {
    for (let i = 0; i < strArr.length; i++) {
        let tempArr = strArr[i].split('.');
        let parentNode = root;
        tempArr.forEach(element => {
            let treeNode = findNode(element, parentNode);
            if (treeNode == null) {
                let newNode = new Node(element);
                parentNode.children.push(newNode);
                parentNode = newNode;
            } else {
                parentNode = treeNode;
            }
        });
    }
}

createTree(input);
console.log('Done')