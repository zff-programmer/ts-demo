class Snake {
  head: HTMLElement
  bodies: HTMLCollection
  element: HTMLElement
  constructor() {
    this.head = document.querySelector('#snake>div') as HTMLElement
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
    this.element = document.getElementById('snake') as HTMLElement
  }
  // 获取X轴坐标
  get X() {
    return this.head.offsetLeft
  }
  // 获取Y轴坐标
  get Y() {
    return this.head.offsetTop
  }

  set X(value: number) {


    if (this.X === value) {
      return
    }
    // 判断是否撞墙
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了')
    }
    // 修改X是水平坐标，蛇向左移动时，不能向右，反之亦然。
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft == value) {
      // 如果发生了掉头，让蛇反方向继续移动
      if (value > this.X) {
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }
    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkHeadBody()
  }
  set Y(value: number) {


    if (this.Y === value) {
      return
    }
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了')
    }
    // 修改Y是垂直坐标，蛇向上移动时，不能向下，反之亦然。
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop == value) {
      // 如果发生了掉头，让蛇反方向继续移动
      if (value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkHeadBody()
  }
  // 蛇增加身体
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  moveBody() {
    // 身体从后往前改
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = x + 'px';
      (this.bodies[i] as HTMLElement).style.top = y + 'px'

    }
  }

  // 检查头和身体是否碰撞
  checkHeadBody() {
    // 获取所有的身体和头部的碰撞情况
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement
      if (this.X == bd.offsetLeft && this.Y == bd.offsetTop) {
        throw new Error('蛇吃到自己了')
      }
    }
  }
}

export default Snake