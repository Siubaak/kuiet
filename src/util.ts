const _defineProperty = Object.defineProperty
export function defineProperty(
  obj: Object,
  key: string,
  value: any,
  enumerable: boolean = false,
): void {
  _defineProperty(obj, key, {
    value,
    enumerable,
    writable: true,
    configurable: true,
  })
}

/**
 * 自身属性判断
 */
const _hasOwnProperty = Object.prototype.hasOwnProperty
export function hasOwnProperty(obj: Object, key: string): boolean {
  return _hasOwnProperty.call(obj, key)
}

/**
 * 类型严格判断
 */
const _toString = Object.prototype.toString
export const is = {
  undefined: (val: any) => _toString.call(val) === '[object Undefined]',
  null: (val: any) => _toString.call(val) === '[object Null]',
  number: (val: any) => _toString.call(val) === '[object Number]',
  string: (val: any) => _toString.call(val) === '[object String]',
  boolean: (val: any) => _toString.call(val) === '[object Boolean]',
  symbol: (val: any) => _toString.call(val) === '[object Symbol]',
  object: (val: any) => _toString.call(val) === '[object Object]',
  array: (val: any) => _toString.call(val) === '[object Array]',
  function: (val: any) => _toString.call(val) === '[object Function]',
}