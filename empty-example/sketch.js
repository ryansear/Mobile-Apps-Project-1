var boids = [];
var maxBoids = 50;

function setup() {
        createCanvas(1120, 760);
        background(21,3, 77);
        loadBoids(maxBoids);
}

function draw() {
  runBoids();
}

function loadBoids(mb){
    for(var i = 0; i<mb; i++){
      boids[i] = new Boid(random(width), random(height), random(15, 20));
    }
}

function runBoids(){
    for(var i = o; i<maxBoids; i++){
      boids[i].run();
    }
}

function Boid(x, y, r) {
  this.acc = createVector(random(-0.5,0.5), random(-0.5,0.5));
  this.vel = p5.Vector.random2D();
  this.pos = createVector(x, y);
  this.rad = r;
  this.rcr = random(120, 255);
  this.rcg = random(50, 60);
  this.rcb = random(200, 50);
  this.maxspeed = 3;
  this.maxforce = 0.5;
}

Boid.prototype.applyForce = function(force) {
  this.acc.add(force);
}

Boid.prototype.run = function(){
  this.update();
  this.checkEdges();
  this.render();
}

Boid.prototype.update = function(){
  this.vel.add(this.acc);
  this.vel.limit(this.maxspeed);
  this.pos.add(this.vel);
  this.acc.mult(0);
}

Boid.prototype.checkEdges = function(){
  if(this.pos.x < -this.rad) this.pos.x = width+this.rad;
  if (this.pos.y < -this.rad) this.pos.y = height + this.rad;
  if (this.pos.x >width + this.rad) this.pos.x = -this.rad;
  if (this.pos.y > height + this.rad) this.pos.y = -this.rad;
}

Boid.prototype.render = function(){
  fill(this.rcr, this.rcg, this.rcb, 60);
  stroke(22);
  stroke(0,0,255,90);
  ellipse(this.pos.x, this.pos.y, this.rad, this.rad);
}
