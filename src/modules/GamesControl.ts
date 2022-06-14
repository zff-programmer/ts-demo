import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'
class GamesControls {
  // 蛇
  snake: Snake
  // 食物
  food: Food
  // 积分榜
  scoreControl: ScorePanel
  direction: string = 'Right'
  isLive: boolean = true
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scoreControl = new ScorePanel()
    this.init()
  }
  init() {
    // 绑定键盘按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  // 键盘按下响应函数
  keydownHandler(event: KeyboardEvent) {
    // 检查用户是否按下正确的按键
    this.direction = event.key
    console.log(event.key)
  }

  run() {
    let X = this.snake.X
    let Y = this.snake.Y

    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10
        break
      case 'ArrowDown':
      case 'Down':
        Y += 10
        break
      case 'ArrowLeft':
      case 'Left':
        X -= 10
        break
      case 'ArrowRight':
      case 'Right':
        X += 10
        break
    }

    // 检查蛇是否吃到食物
    this.checkEat(X, Y)



    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e: any) {
      alert(e.message + ' GAME OVER !')
      this.isLive = false
    }

    // 定时调用
    this.isLive &&
      setTimeout(
        this.run.bind(this)
        , 300 - (this.scoreControl.level - 1) * 30)
  }
  checkEat(x: number, y: number) {
    if (x === this.food.X && y === this.food.Y) {
      this.food.change()
      this.scoreControl.addScore()
      this.snake.addBody()
    }
  }
}

export default GamesControls