class box {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.8,
                
        }
        //this.body = Bodies.rectangle(x, y, width, height, options);
        this.body=Bodies.rectangle(200,300,50,50)
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
    }
}