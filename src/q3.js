let input = [{
    id: 1,
    value: 'a',
    parent: null
},
{
    id: 2,
    value: 'b',
    parent: 1
},
{
    id: 3,
    value: 'c',
    parent: 2
},
{
    id: 4,
    value: 'd',
    parent: 1
}]

//将list设置为tree
function turnListToTree(originInput) {
    let parentIds = {}
    let nodeObj = {}
    let start
    originInput.forEach((item) => {
        nodeObj[item.id] = item

        if (item.parent in parentIds) {
            parentIds[item.parent].push(item.id)
        } else if (item.parent == null) {
            start = item.id
        } else {
            parentIds[item.parent] = [item.id]
        }
    })

    if (start == undefined) {
        return
    }

    console.log(parentIds)
    console.log(nodeObj)
    console.log(start)

    function travel(id) {
        let currentInfo = nodeObj[id]
        finalResult = {
            id: id,
            value: currentInfo.value,
            child: []

        }

        if (!(currentInfo.id in parentIds)) {
            return finalResult
        }

        let childIdList = parentIds[currentInfo.id]

        let child = []
        for (let childId of childIdList) {
            child.push(travel(childId))
        }

        finalResult.child = child
        return finalResult
    }

    return travel(start)

}

console.log(turnListToTree(input))


