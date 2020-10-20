function _get(obj, path) {
  //path的问题
  let pathList = path.split('.')
  let lastIdx = pathList[-1]
  function itemGet(i, currentObj) {
    let key = path[i]
    if (key in currentObj) {
      if (i === lastIdx) {
        return currentObj[key]
      } else {
        return itemGet(i + 1, currentObj[key])
      }
    } else {
      throw ('not in here ')
    }
  }

  return itemGet(0, obj)
}

function _otherGet(obj, path, defaultVal) {
  let pathList = path.split('.')
  let result = obj
  for (let key of pathList) {
    result = obj[key]
    if (result === undefined) {
      return defaultVal
    }

  }

  return result
}