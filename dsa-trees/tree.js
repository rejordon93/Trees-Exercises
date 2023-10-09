class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  sumValues(node = this.root) {
    if (!node) return 0;

    let sum = node.val;

    for (const child of node.children) {
      sum += this.sumValues(child);
    }

    return sum;
  }

  countEvens(node = this.root) {
    if (!node) return 0;

    let count = node.val % 2 === 0 ? 1 : 0;

    for (const child of node.children) {
      count += this.countEvens(child);
    }

    return count;
  }

  numGreater(lowerBound, node = this.root) {
    if (!node) return 0;

    let count = node.val > lowerBound ? 1 : 0;

    for (const child of node.children) {
      count += this.numGreater(lowerBound, child);
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
