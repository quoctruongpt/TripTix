import { observable, action, makeObservable } from "mobx";

class Authentication {
  isLogin = false;
  userInfo: Record<string, any> = {};

  constructor() {
    makeObservable(this, {
      isLogin: observable,
      userInfo: observable,
      setIsLogin: action,
      setUserInfo: action,
    });
  }

  setIsLogin = (value: boolean) => {
    this.isLogin = value;
  };

  setUserInfo = (value: any) => {
    this.userInfo = value;
  };
}

export { Authentication };
