export default class InterceptorManager {
    handlers: any[] = []

    constructor() {
        this.handlers = []
    }

    use(fulfilled: any, rejected: any) {
        this.handlers.push({
            fulfilled,
            rejected
        })

        return this.handlers.length - 1
    }

    eject(id: number) {
        if (this.handlers[id]) this.handlers[id] = null
    }

    forEach(fn: any) {
        this.handlers.forEach(h => {
            if (h !== null) {
                fn(h)
            }
        })
    }
}
