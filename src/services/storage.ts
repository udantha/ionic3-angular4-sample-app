import { Injectable } from '@angular/core';

/**
 * Storage service to store items in
 */
@Injectable()
export class StoreService {
    static readonly KEY_LIST: string = 'LIST';

    constructor() { }

    /**
     * Set an array of string. This clears the exsiting list
     * @param list 
     */
    public setList(list: Array<string>) {
        localStorage.setItem(StoreService.KEY_LIST, JSON.stringify(list));
    }

    /**
     * Add an item to the existing list
     * @param item 
     */
    public addToList(item: string) {
        let list = this.getList();
        list.push(item);
        this.setList(list);
    }

    /**
     * Returns a list of items stored.
     */
    public getList() {
        let list = JSON.parse(localStorage.getItem(StoreService.KEY_LIST));
        return list ? list : [];
    }
}