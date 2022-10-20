import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  set(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error('Error while setting local storage', err);
    }
  }

  get(key: string): any {
    try {
      // @ts-ignore
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.error('Error while getting local storage key ', key, err);
      return '';
    }
  }
}
