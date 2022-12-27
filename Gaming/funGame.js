var myGamecomponent1;  
var Obstacle;  
  
function startGame() {  
    myGamecomponent1 = new component(30, 30, "blue", 10, 120);  
    Obstacle  = new component(30, 200, "red", 300, 120);      
    myGameArea.start();  
}  
  
var myGameArea = {  
    canvas : document.createElement("canvas"),  
    start : function() {  
        this.canvas.width = 480;  
        this.canvas.height = 270;  
        this.context = this.canvas.getContext("2d");  
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);  
        this.frameNo = 0;  
        this.interval = setInterval(updateGameArea, 20);  
  
    },  
    clear : function() {  
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);  
        this.context.create
    },  
    stop : function() {  
        clearInterval(this.interval);  
    }  
}  
  
function component(width, height, color, x, y) {  
    this.width = width;  
    this.height = height;  
    this.speedX = 0;  
    this.speedY = 0;      
    this.x = x;  
    this.y = y;      
    this.update = function() {  
        ctx = myGameArea.context;  
        ctx.fillStyle = color;  
        ctx.fillRect(this.x, this.y, this.width, this.height);  
    }  
    this.crashWith = function(otherobj) {  
        var myleft = this.x;  
        var myright = this.x + (this.width);  
        var mytop = this.y;  
        var mybottom = this.y + (this.height);  
        var otherleft = otherobj.x;  
        var otherright = otherobj.x + (otherobj.width);  
        var othertop = otherobj.y;  
        var otherbottom = otherobj.y + (otherobj.height);  
        var crash = true;  
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {  
            crash = false;  
        }  
        return crash;  
    }  
}  
  
function updateGameArea() {  
    if (myGamecomponent1.crashWith(Obstacle)) {  
        myGameArea.stop();  
    } else {  
        myGameArea.clear();  
        Obstacle.x += -1;  
        Obstacle.update();  
        myGamecomponent1.x += myGamecomponent1.speedX;  
        myGamecomponent1.y += myGamecomponent1.speedY;      
        myGamecomponent1.update();  
    }  
}  
  
function moveup() {  
    myGamecomponent1.speedY = -1;   
}  
  
function movedown() {  
    myGamecomponent1.speedY = 1;   
}  
  
  
  
function clearmove() {  
    myGamecomponent1.speedX = 0;   
    myGamecomponent1.speedY = 0;   
}  