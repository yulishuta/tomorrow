function Dep() {

    this.myEvent = {

    }
}

Dep.prototype.add = (eventName, fn) => {
    if (eventName in this.myEvent) {
        this.myEvent[eventName] = [fn]
    } else {
        this.myEvent[eventName].push(fn)
    }

}

Dep.prototype.notify = (eventName, data) => {
    if (!(eventName in this.myEvent)) {
        return
    }

    this.myEvent[eventName].forEach(fn => {
        fn(data)
    });
}å
