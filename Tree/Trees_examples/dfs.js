// in order traversal 


let inOrderTraversal = (root) => {
    if (root === null) {
        return [];
    }
    let result = [];
    if (root.left !== null) { result.push(...inOrderTraversal(root.left)) }
    root.push(root.val);
    if (root.right !== null) { result.push(...inOrderTraversal(root.right)) }
    return result;
}