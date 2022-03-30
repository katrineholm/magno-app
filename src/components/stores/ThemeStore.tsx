import { makeObservable, observable, action } from 'mobx'

export class ThemeStore {
    theme = 'light'

    constructor(){
        makeObservable(this, {
            theme: observable,
            setTheme: action,
        })
    }

  setTheme(newTheme: string) {
    this.theme = newTheme
  }
}