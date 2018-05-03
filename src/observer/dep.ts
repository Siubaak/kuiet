import Watcher from './watcher'

export default class Dep {
  static target: Watcher
  static targetStack: Watcher[] = []

  subs: Watcher[] = []

  addSub(watcher: Watcher): void {
    this.subs.push(watcher)
  }

  delSub(watcher: Watcher): void {
    if (this.subs.length) {
      const index = this.subs.indexOf(watcher)
      if (~index) {
        this.subs.splice(index, 1)
      }
    }
  }

  depend(): void {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify(): void {
    for (let i = 0; i < this.subs.length; i++) {
      this.subs[i].update()
    }
  }

  pushTarget(target: Watcher): void {
    if (Dep.target) Dep.targetStack.push(Dep.target)
    Dep.target = target
  }

  popTarget(): void {
    Dep.target = Dep.targetStack.pop()
  }
}