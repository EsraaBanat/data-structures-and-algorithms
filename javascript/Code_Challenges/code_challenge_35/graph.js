'use strict';

const Vertex = require('./vertex');
const Edge = require('./edge');
const Queue = require('../code_challenge_10/queue/lib/queue')

class Graph {
  constructor() {
    this.adjacentList = new Map();
  }

  addVertex(vertex) {
    this.adjacentList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(start, end, weight) {
    if (!this.adjacentList.has(start) || !this.adjacentList.has(end)) {
      console.log('VERTEX DOES NOT EXIST');
      return ;
    } else {
      const adjacentVertex = this.adjacentList.get(start);
      adjacentVertex.push(new Edge(end, weight));
    }
  }

  getNeighbors(vertex) {
    return this.adjacentList.get(vertex);
  }

  btf(vertex) {
    let nodes  = new Array();
    let breadth  = new Queue();
    let visited = new Set();

    breadth.enqueue(vertex);
    visited.add(vertex);

    while (!breadth.isEmpty()) {
      let front = breadth.dequeue();
      nodes.push(front.value);

      let value = this.getNeighbors(front);
      // console.log('vvvvvvv', value);
      if (value) {
        for (let neighbor of value) {
          if (!visited.has(neighbor.vertex)) {
            visited.add(neighbor.vertex);
            breadth.enqueue(neighbor.vertex);
          }
        }
      }
    }
    return nodes ;
  }

}

const myGraph = new Graph();

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(two, four);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(four, five);
myGraph.addDirectedEdge(zero, zero);


// for (const [k, v] of myGraph.adjacentList.entries()) {
//   console.log("K ", k, 'V= ', v);
// }
console.log('***********', myGraph.btf(zero));
// myGraph.btf(zero);

module.exports = Graph;
