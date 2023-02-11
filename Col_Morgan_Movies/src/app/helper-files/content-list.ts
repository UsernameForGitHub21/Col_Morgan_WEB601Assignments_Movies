import { Content } from "./content-interface";

export class ContentList {
    private _items: Content[];

    constructor() {
        this._items = [];
    }

    getItems(){
        return this._items;
    }

    add(contentItem: Content){
        return this._items.push(contentItem);
    }

    getLength(){
        return this._items.length;
    }

    printIndex(index: number): string {
        let html = `<div>`;
        html += `<p>` + this._items[index].title + `<p>`;
        html += `<p>` + this._items[index].description + `<p>`;
        html += `<p>` + this._items[index].type + `<p>`;
        html += `<p>` + this._items[index].creator + `<p>`;
        html += `<img src=>"` + this._items[index].imgURL + `">`;
        html += `</div>`;

        return html;

    }
}