import { defineProperty } from '../util'

const observableMethods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

const arrayPrototype = (Array.prototype as any)

observableMethods.forEach(method => {
})
