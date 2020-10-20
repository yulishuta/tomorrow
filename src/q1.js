function getLastVal() {
    let arr_test = [1, 2, 3]

    const p = new Proxy(arr_test, {
        get(target, key) {
            let len = target.length
            console.log(target)
            console.log(key)
            if (key == -1 && len) {
                let lastIdx = len - 1

                return target[lastIdx]
            } else {
                return target[key];
            }
        },
    })

    console.log(p[-1])
}

getLastVal()