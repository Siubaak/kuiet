import { is } from '../util'

const hasOwnProperty = Object.prototype.hasOwnProperty

export default class Observer {
  private value: any

  constructor(value: any) {
    this.value = value

    if (!is.object(value) && !is.array(value)) {
      return
    }

    Object.defineProperty(value, '__ob__', {
      value: this,
      enumerable: false,
      writable: true,
      configurable: true,
    })

    if (is.object(value)) {
      const keys = Object.keys(value)
      for (let i = 0; i < keys.length; i++) {   
        this._defineReactive(value, keys[i], value[keys[i]])
      }
    } else {
      for (let i = 0; i < value.length; i++) {
        this._observe(value[i])
      }
    }
  }

  private _observe(value: any): Observer {
    if (
      hasOwnProperty.call(value, '__ob__')
      && value.__ob__ instanceof Observer
    ) {
      return value.__ob__
    } else {
      return new Observer(value)
    }
  }

  private _defineReactive(obj: Object, key: string, val: any) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, key)

    if (descriptor && !descriptor.configurable) {
      return
    }

    const childOb = this._observe(val)

    const getter = descriptor && descriptor.get
    const setter = descriptor && descriptor.set

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        const value = getter ? getter.call(obj) : val
        return value
      },
      set(nextVal: any) {
        const value = getter ? getter.call(obj) : val

        if (value === nextVal) {
          return
        }

        if (setter) {
          setter.call(obj, nextVal)
        } else {
          val = nextVal
        }
      },
    })
  }
}