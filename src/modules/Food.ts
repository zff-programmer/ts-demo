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

export default Food