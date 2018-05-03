import { is, defineProperty, hasOwnProperty } from '../util'
import Dep from './dep'

export default class Observer {
  private value: any
  private dep: Dep = new Dep()

  constructor(value: any) {
    this.value = value

    if (!is.object(value) && !is.array(value)) {
      return
    }

    defineProperty(value, '__ob__', this)

    if (is.object(value)) {
      const keys = Object.keys(value)
      for (let i = 0; i < keys.length; i++) {   
        Observer.defineReactive(value, keys[i], value[keys[i]])
      }
    } else {
      Observer.observeArray(value)
    }
  }

  static observeArray(value: any[]): void {
    for (let i = 0; i < value.length; i++) {
      Observer.observe(value[i])
    }
  }

  static observe(value: any): Observer | void {
    if (!is.object(value) && !is.array(value)) {
      return
    }

    if (
      hasOwnProperty(value, '__ob__')
      && value.__ob__ instanceof Observer
    ) {
      return value.__ob__
    } else {
      return new Observer(value)
    }
  }

  static defineReactive(obj: object, key: string, val: any) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, key)

    if (descriptor && !descriptor.configurable) {
      return
    }
    
    const dep = new Dep()

    let childOb = Observer.observe(val)

    const getter = descriptor && descriptor.get
    const setter = descriptor && descriptor.set

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        const value = getter ? getter.call(obj) : val
        if (Dep.target) {
          dep.depend()
          if (childOb) {
            childOb.dep.depend()
            if (is.array(value)) {
              
            }
          }
        }
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

        childOb = Observer.observe(val)

      },
    })
  }
}