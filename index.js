var object = typeof Object.keys === 'function' ? Object : require('object')
module.exports = objmap
function objmap(obj, fn, newObj, thisObj) {
  if (!newObj) newObj = {}
  for (var keys = object.keys(obj), i = 0, len = keys.length; i < len; i++)
    newObj[keys[i]] = fn.call(thisObj, obj[keys[i]], keys[i], obj)
  return newObj
}
objmap.keys =
function objmapKeys(keys, fn, newObj, thisObj) {
  if (!newObj) newObj = {}
  for (var i = 0, len = keys.length; i < len; i++)
    newObj[keys[i]] = fn.call(thisObj, keys[i])
  return newObj
}
objmap.toArray =
function objmapToArray(obj, fn, thisObj) {
  if (!fn) fn = id
  var arr = []
  for (var keys = object.keys(obj), i = 0, len = keys.length; i < len; i++)
    arr.push(fn.call(thisObj, obj[keys[i]], keys[i], obj))
  return arr
}

function id(x) { return x }
