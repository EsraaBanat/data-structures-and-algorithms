const Graph = require('../graph');
const Vertex = require('../vertex');

describe('testing Graph', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('testing new graph', () => {
    let graph = new Graph();
    expect(graph).toBeInstanceOf(Graph);
  });
  it('testing adding new node', () => {
    let graph = new Graph();
    graph.addVertex('A');
    expect(graph.adjacentList.has('A')).toBe(true);
  });
  it('testing adding new edge', () => {
    let graph = new Graph();
    graph.addVertex('A');
    graph.addDirectedEdge('A', 'B', 1);
    graph.addVertex('B');
    graph.addDirectedEdge('A', 'B', 1);
    expect(graph.adjacentList.get('A').length).toBe(1);
  });

  it('testing getting neighbors', () => {
    let graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addDirectedEdge('A', 'B', 1);
    graph.addDirectedEdge('A', 'C', 1);
    expect(graph.getNeighbors('A').length).toBe(2);
  });

  it('testing btf', () => {
    let graph = new Graph();
    // expect(graph.bft()).toBeNull();
    const A = new Vertex('A');
    const B = new Vertex('B');
    const C = new Vertex('C');
    const D = new Vertex('D');
    const E = new Vertex('E');
    const F = new Vertex('F');
    graph.addVertex(A);
    graph.addVertex(B);
    graph.addVertex(C);
    graph.addVertex(D);
    graph.addVertex(E);
    graph.addVertex(F);
    graph.addDirectedEdge(A, B, 1);
    graph.addDirectedEdge(A, C, 1);
    graph.addDirectedEdge(B, D, 1);
    graph.addDirectedEdge(B, E, 1);
    graph.addDirectedEdge(C, D, 1);
    graph.addDirectedEdge(C, E, 1);
    graph.addDirectedEdge(D, E, 1);
    graph.addDirectedEdge(D, F, 1);
    graph.addDirectedEdge(E, F, 1);
    console.log(graph.btf(A));
    expect(graph.btf(A)).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });

});
