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
