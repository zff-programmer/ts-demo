import './style/index.less'

// 食物类
class Food {
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('food')!
  }
  get X() {
    return this.element.offsetLeft
  }

  get Y() {
    return this.element.offsetTop
  }

  change() {
    // 随机生成一个位置
    // 食物的最小位置是0，最大是290
    // 蛇每次移动一格，一格是10

    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}

// const food = new Food()
// console.log(food.X,food.Y)
// food.change()

// 积分榜
class ScorePanel {
  score = 0
  level = 1
  scoreEle: HTMLElement
  levelEle: HTMLElement

  maxLevel: number
  upScore: number

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''
    if (this.score % this.upScore == 0) {
      this.levelUp()
      console.log('levelup')
    }
  }

  levelUp() {
    if (this.level <= this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}

const scorePan = new ScorePanel()
for (let i = 0; i < 100; i++) {
  scorePan.addScore()
}
// scorePan.addScore()
// scorePan.addScore()
// scorePan.addScore()
