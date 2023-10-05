import { observable, action, makeObservable } from "mobx";

class Authentication {
  isLogin = false;

  constructor() {
    makeObservable(this, {
      isLogin: observable,
      setIsLogin: action,
    });
  }

  setIsLogin = (value: boolean) => {
    this.isLogin = value;
  };
}

export { Authentication };
