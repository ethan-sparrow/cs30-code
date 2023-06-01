
let triangleVertices = [
  {x: 500, y: 50},
  {x: 50, y: 750},
  {x: 950, y: 750}
];

let depth = 6;

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(220);
  sierpinski(triangleVertices, depth);
}

function sierpinski(points, depth) {
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y,);

  if (depth > 0) {
    //bottom left triangle
    sierpinski([midpoint(points[0], points[1]), points[1], midpoint(points[1], points[2])], depth-1);

    //bottom right triangle
    sierpinski([midpoint(points[0], points[2]), midpoint(points[1], points[2]), points[2]], depth-1);

    //top triangle
    sierpinski([points[0], midpoint(points[0], points[1]), midpoint(points[0], points[2])], depth-1);
  }
}

function midpoint(point1, point2) {
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  return {x: xDiff/2, y: yDiff/2};
}