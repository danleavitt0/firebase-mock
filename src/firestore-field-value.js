'use strict'

function MockFirestoreFieldValue(type, data) {
  this.type = type
  this.data = data
}

MockFirestoreFieldValue.prototype.isEqual = function(other) {
  if (other instanceof MockFirestoreFieldValue && this.type === other.type) {
    return true
  }
  return false
}

MockFirestoreFieldValue.delete = function() {
  return new MockFirestoreFieldValue('delete')
}

MockFirestoreFieldValue.serverTimestamp = function() {
  return new MockFirestoreFieldValue('serverTimestamp')
}

MockFirestoreFieldValue.arrayUnion = function(...data) {
  return new MockFirestoreFieldValue('arrayUnion', data)
}

MockFirestoreFieldValue.arrayRemove = function(...data) {
  return new MockFirestoreFieldValue('arrayRemove', data)
}

MockFirestoreFieldValue.increment = function(n) {
  return new MockFirestoreFieldValue('increment', n)
}

module.exports = MockFirestoreFieldValue
