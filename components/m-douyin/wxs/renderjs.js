// 存储prop
var me = {}

var timer = null

export default {
    data() {
        return {
            ins: null,
            timer: null,
            me: {}, // prop
            self: { // 私有
                top: 0, // 上拉下拉距离
                oldTop: 0, // 记录触摸前上拉下拉距离
                isTouch: false, // 手指是否开始触摸
                startXY: { // 触摸点
                    x: 0,
                    y: 0
                },
                isDown: false, // 下拉刷新
                isUp: false, // 上拉加载
                // ins: null, // wxs便于操作
                // dH: 0, // 下拉盒子高度
                isPrevent: false // false表示不往上冒泡，相当于调用了同时调用了stopPropagation和preventDefault (对小程序生效, h5和app无效)
            }
        }
    },
    mounted() {
        if (!this.ins) this.ins = this.$ownerInstance
    },
    methods: {
        // 设置prop
        propObserver(data = {}) {
            this.me = data

            if (this.me.loading || !this.ins) return

            // 下拉刷新完成
            this.onMoving({
                cls: '.m-swiper-down .right',
                style: {
                    opacity: 0,
                    transition: 'none',
                }
            })

            this.onMoving({
                cls: '.m-swiper-down .left',
                style: {
                    opacity: 0,
                    transition: 'none',
                }
            })
        },
        // 动画执行
        onMoving(options = {}) {
            const {
                cls = '.m-swiper-box', top = 0, type = 'none', style = {}, time = null
            } = options

            const objStyle = {
                'will-change': 'transform', // 可解决下拉过程中, image和swiper脱离文档流的问题
                top: `${top}px`,
                transition: `${type} 0.5s`,
                ...style
            }

            if (!time) {
                this.ins.requestAnimationFrame(() => {
                    this.ins.selectComponent(cls).setStyle(objStyle)

                    if (cls === '.m-swiper-box' && type === 'top') this.self.top = top
                })
                return
            }

            if (this.timer) {
                this.ins.clearTimeout(timer)
                this.timer = null
            }

            this.timer = this.ins.setTimeout(() => {
                this.ins.requestAnimationFrame(() => {
                    this.ins.selectComponent(cls).setStyle(objStyle)

                    if (cls === '.m-swiper-box' && type === 'top') this.self.top = top
                })
                timer = null
            }, time)
        },
        // 设置 index
        setIndex(options = {}) {
            const { index = 0 } = options
            const num = this.me.index + -1 * index

            if (num > this.me.len - 1) return false
            if (num < 0) return false
            this.me.index = num

            this.ins.callMethod('$emitWXS', {
                type: 'setIndex',
                value: num
            })

            return true
        },
        funPrevent(e) {
            if (this.self.isPrevent) {
                e.stopPropagation()
                e.preventDefault()
                return true
            }

            return false
        },
        // 手指按下
        touchstartEvent(e) {
            this.funPrevent(e)

            // if (!this.me.dH) {
            //     const query = this.ins.selectComponent('.m-swiper-down')
            //     const data = query.getBoundingClientRect()
            //     this.me.dH = data.height
            // }

            const changedTouches = e.changedTouches || []
            const x = changedTouches[0].pageX || 0
            const y = changedTouches[0].pageY || 0

            // 没拿到信息或双指操作
            if (!changedTouches.length || changedTouches.length >= 2) return

            this.self.isTouch = true
            this.self.oldTop = this.self.top
            this.self.startXY = {
                x: x,
                y: y
            }
        },
        // 手指移动
        touchmoveEvent(e) {
            this.funPrevent(e)
            const { startXY, oldTop, isTouch } = this.self
            const index = this.me.index

            if (!isTouch) return

            const changedTouches = e.changedTouches || []
            const x = changedTouches[0].pageX || 0
            const y = changedTouches[0].pageY || 0

            const moveX = x - startXY.x
            const moveY = y - startXY.y

            // 横向滚动不处理
            const diff = Math.abs(moveY) - Math.abs(moveX)
            if (diff < 0 && diff < 10) return

            if (moveY < 0 && !this.self.isDown) this.self.isMoveUP = true

            const top = Math.abs(moveY)

            if (moveY > 0 && index === 0 && !this.self.isMoveUP) this.self.isDown = true

            if (moveY < 0 && index === this.me.len - 1) this.self.isUp = true

            if (this.self.isDown) {
                let num = 0
                let opacity = 0

                if (moveY > this.me.dH) {
                    num = this.me.dH
                    opacity = 1
                } else {
                    num = moveY
                    opacity = moveY / this.me.dH
                }

                if (moveY < this.me.dH * -1) {
                    opacity = 1
                } else {
                    opacity = Math.abs(moveY / this.me.dH)
                }

                if (opacity > 1) opacity = 1

                !this.me.loading && this.onMoving({
                    cls: '.m-swiper-down',
                    top: num,
                    style: {
                        opacity: 1
                    }
                })

                !this.me.loading && this.onMoving({
                    cls: '.m-swiper-down .left',
                    style: {
                        opacity
                    }
                })

                !this.me.loading && this.onMoving({
                    cls: '.m-swiper-down .right',
                    style: {
                        opacity
                    }
                })

                this.ins.callMethod('$emitWXS', {
                    type: 'header',
                    value: {
                        opacity: 1 - opacity,
                        top: num
                    }
                })

                return
            }

            if (this.self.isUp) {
                let num =  0
                let maxH = this.me.maxH
                if (moveY < maxH) {
                    num = maxH
                } else {
                    num = moveY
                }

                this.onMoving({
                    top: oldTop + num
                })

                return
            }

            if (moveY > 0 && index) {
                this.onMoving({
                    top: oldTop + top
                })

                return
            }

            if (index === 0 && moveY > 0) {
                const num = oldTop - top
                this.onMoving({
                    top: num < 0 ? 0 : num
                })

                return
            }

            this.onMoving({
                top: oldTop - top
            })
        },
        // 手指抬起
        touchendEvent(e) {
            this.funPrevent(e)
            const { loading, index, height } = this.me
            const { startXY, oldTop, isTouch } = this.self

            // 不处理触摸
            if (!isTouch) return

            const changedTouches = e.changedTouches || []
            const x = changedTouches[0].pageX || 0
            const y = changedTouches[0].pageY || 0

            const moveX = x - startXY.x
            const moveY = y - startXY.y
            const top = Math.abs(moveY)

            this.self.isTouch = false
            this.self.isMoveUP = false

            const num = moveY > 0 ? 1 : -1

            if (this.self.isDown) {
                this.self.isDown = false

                if (moveY >= this.me.dH && !loading) {
                    this.onMoving({
                        cls: '.m-swiper-down',
                        top: 0,
                        style: {
                            transition: 'all 0.5s',
                        }
                    })

                    this.onMoving({
                        cls: '.m-swiper-down .left',
                        style: {
                            opacity: 0,
                            transition: 'all 0.5s',
                        },
                        time: 1000
                    })

                    this.onMoving({
                        cls: '.m-swiper-down .right',
                        style: {
                            opacity: 1,
                            transition: 'all 0.5s',
                        }
                    })

                    this.ins.callMethod('$emitWXS', {
                        type: 'isDown',
                        value: true
                    })
                } else {
                    this.onMoving({
                        cls: '.m-swiper-down',
                        top: 0,
                        style: {
                            transition: 'none 0.5s',
                        }
                    })

                    this.onMoving({
                        cls: '.m-swiper-down .left',
                        style: {
                            opacity: 0,
                            transition: 'none 0.5s',
                        }
                    })

                    this.onMoving({
                        cls: '.m-swiper-down .right',
                        style: {
                            opacity: 0,
                            transition: 'none 0.5s',
                        }
                    })
                    
                    this.ins.callMethod('$emitWXS', {
                        type: 'header',
                        value: {
                            opacity: 1,
                            top: 0
                        }
                    })
                }

                this.onMoving({
                    top: oldTop,
                    type: 'top',
                    // style: {
                    //     transition: `none 0.5s`,
                    // }
                })

                return
            }

            if (this.self.isUp) {
                this.self.isUp = false
                const maxH = this.me.maxH

                if (moveY <= maxH) {
                    !loading && this.ins.callMethod('$emitWXS', {
                        type: 'isUp',
                        value: true
                    })
                }

                this.onMoving({
                    top: oldTop,
                    type: 'top'
                })

                return
            }

            if (top < this.me.scrollH) {
                this.onMoving({
                    top: oldTop,
                    type: 'top'
                })

                return
            }

            const setIndex = this.setIndex({ index: num })

            if (!setIndex) {
                this.onMoving({
                    top: oldTop,
                    type: 'top'
                })

                return
            }

            this.onMoving({
                top: oldTop + height * num,
                type: 'top'
            })
        }
    }
}
