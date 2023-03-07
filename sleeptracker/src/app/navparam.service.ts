// this service passes and receives data from page to page
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavparamService {
  navData: any;
  constructor() { }

  setNavData(navObj: any) {
    this.navData = navObj
  }

  getNavData() {
    if (isNullOrUndefined(this.navData))
      return 0;
    return this.navData;
  }
}

function isNullOrUndefined<T>(obj: T | null | undefined): obj is null | undefined {
  return typeof obj === "undefined" || obj === null;
}