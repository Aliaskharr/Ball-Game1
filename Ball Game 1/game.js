const game = {
    w: 800,
    h: 600,
    color: "#fff",
    show(){
        this.elem = document.getElementById("game")
        this.elem.style.width = this.w + "px"
        this.elem.style.height = this.h + "px"
        this.elem.style.background = this.color
    },
    create(){
        let div = document.createElement("div")
        div.id = "game"
        document.body.append(div)
        this.show()
        
    },
    over() {
    clearInterval(start)
    this.elem.innerHTML = "GAME OVER!!!"
    this.color = "#000"
    this.show()
    this.elem.style.display = "flex"
    this.elem.style.justifyContent = "center"
    this.elem.style.alignItems = "center"
    this.elem.style.font = "bold 5em Arial"
    this.elem.style.color = "yellow"
}

}
const ball = {
    w: 30,
    h: 30,
    color: 'red',
    x: 0,
    y: 40,
    dx: 25,
    dy: 25,
    move(){
        if(ball.x < 0 || ball.x > game.w - ball.w) ball.dx *= -1
        if(ball.y < 0 || 
           ball.y+15 > game.h - ball.h - bar.h - bar.y && ball.x + ball.w/2 > bar.x && ball.x + ball.w/2 < bar.x + bar.w ||
           ball.y < ball.w/2+15) ball.dy *= -1
        if(ball.y > game.h - ball.w) game.over()
        if(ball.y < 0) game.over()
        ball.x += ball.dx
        ball.y += ball.dy
        ball.show(1)
        bar2.move()
        },
    show(state = 0){
        if(state){
            ball.elem.style.left = ball.x + "px"
            ball.elem.style.top = ball.y + "px"
        }else{
            ball.elem = document.getElementById("ball")
            ball.elem.style.borderRadius = '50%'
            ball.elem.style.background = ball.color
            ball.elem.style.height = ball.h + "px"
            ball.elem.style.width = ball.w + "px"
        }
    },
    create(){
        let div = document.createElement("div");
        div.id = "ball"
        game.elem.append(div)
        this.show()
    }
}
const bar = {
    x: 0,
    y: 5,
    w: 150,
    h: 10,
    color: 'blue',
    move(e) {
        if(e.keyCode == 39) bar.x += 10
        else if(e.keyCode == 37) bar.x -= 10
        else bar.x = e.pageX - game.elem.offsetLeft - 75
        if(bar.x < 0) bar.x = 0
        if(bar.x > 650) bar.x = 650
        bar.show()
    },
    show(){
        bar.elem = document.getElementById("bar")
        bar.elem.style.width = bar.w + "px"
        bar.elem.style.height = bar.h + "px"
        bar.elem.style.background = bar.color
        bar.elem.style.left = bar.x + "px"
        bar.elem.style.bottom = bar.y + "px"                  
    },
    create(){
        let div = document.createElement("div")
        div.id = "bar"
        game.elem.append(div)
        this.show()
    }
}
const bar2 = {
    x:0,
    y:5,
    w:150,
    h:10,
    color: 'black',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    move(){
        if(ball.x+140 < 800 && ball.x >= 0)
        bar2.x = ball.x
        bar2.show()
    },
    show(){
        bar2.elem = document.getElementById("bar2")
        bar2.elem.style.width = bar2.w + "px"
        bar2.elem.style.height = bar2.h + "px"
        bar2.elem.style.background = bar2.color
        bar2.elem.style.left = bar2.x + "px"
        bar2.elem.style.top = bar2.y + "px"      
    },
    create(){
        let div = document.createElement("div")
        div.id = "bar2"
        game.elem.append(div)
        this.show()

    }
}
game.create()
ball.create()
bar.create()
bar2.create()
let start = setInterval(ball.move, 40)
document.onkeydown = bar.move
game.elem.onmousemove = bar.move