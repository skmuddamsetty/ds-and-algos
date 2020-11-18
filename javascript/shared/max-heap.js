class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let currVal = this.values[this.values.length - 1];
    let currIndex = this.values.length - 1;
    let parentIndex = Math.floor((this.values.length - 2) / 2);
    while (this.values[parentIndex] < currVal) {
      if (currVal > this.values[parentIndex]) {
        this.values[currIndex] = this.values[parentIndex];
        this.values[parentIndex] = currVal;
        currIndex = parentIndex;
      }
      parentIndex = Math.floor(currIndex - 1 / 2);
    }
  }

  extractMax() {
    let ans = this.values[0];
    this.sinkDown();
    return ans;
  }

  sinkDown() {
    this.values[0] = this.values[this.values.length - 1];
    let currSinkDownVal = this.values.pop();
    let currParentIndex = 0;
    let child1Idx = 2 * currParentIndex + 1;
    let child2Idx = 2 * currParentIndex + 2;
    while (
      currSinkDownVal < this.values[child2Idx] ||
      currSinkDownVal < this.values[child1Idx]
    ) {
      if (this.values[child2Idx] > this.values[child1Idx]) {
        this.values[currParentIndex] = this.values[child2Idx];
        this.values[child2Idx] = currSinkDownVal;
        currParentIndex = child2Idx;
      } else {
        this.values[currParentIndex] = this.values[child1Idx];
        this.values[child1Idx] = currSinkDownVal;
        currParentIndex = child1Idx;
      }
      child1Idx = 2 * currParentIndex + 1;
      child2Idx = 2 * currParentIndex + 2;
    }
  }
}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(1);
maxHeap.insert(7);
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
