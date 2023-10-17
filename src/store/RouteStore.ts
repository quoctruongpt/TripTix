import { observable, action, makeObservable } from "mobx";

class Route {
  seatSelected = "";
  routeInfo = {};

  constructor() {
    makeObservable(this, {
      seatSelected: observable,
      routeInfo: observable,
      setSeatSelected: action,
      setRouteInfo: action,
    });
  }

  setSeatSelected = (value: string) => {
    this.seatSelected = value;
  };

  setRouteInfo = (value: any) => {
    this.routeInfo = value;
  };
}

export { Route };
