import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
let TableComponent = class TableComponent {
    constructor(service, datePipe) {
        this.service = service;
        this.datePipe = datePipe;
        this.searchTerm = new FormControl();
        this.page = 1;
        this.pageSize = 10;
        this.sorts = [];
        this.dirs = { asc: 'desc', desc: '', '': 'asc' };
        this.oldPageSize = 10;
    }
    sort(arr, keys) {
    }
    sortBy(key, event) {
        const withCtrlKey = event.metaKey || event.ctrlKey;
        const sortObject = this.sorts.find(x => x.key === key);
        if (sortObject) {
            sortObject.dir = this.dirs[sortObject.dir];
        }
        else {
            if (withCtrlKey) {
                this.sorts.push({ dir: 'asc', key });
            }
            else {
                this.sorts = [{ dir: 'asc', key }];
            }
        }
        this.searchTerm.setValue(this.term);
    }
    filter(term) {
        const headers = this.headers.map(x => x.key);
        const filtered = this.service.filter(this.data, headers, term);
        if (filtered.length < this.page * this.pageSize) {
            this.page = 1;
        }
        const sorted = this.service.sort([...filtered], this.sorts.map(x => x.key), this.sorts.map(x => x.dir === 'asc' ? true : (x.dir === 'desc' ? false : null)));
        if (this.pageSize === null) {
            this.oldPageSize = null;
            return sorted;
        }
        this.page = this.service.setPageSize(this.pageSize, this.page, this.oldPageSize, sorted.length);
        const startIndex = (this.page - 1) * this.pageSize;
        this.oldPageSize = this.pageSize;
        return sorted.slice(startIndex, startIndex + this.pageSize);
    }
    ngOnInit() {
        this.total = this.data ? .length : ;
        this.results$ = this.searchTerm.valueChanges.pipe(startWith(''), map(term => {
            return this.filter(term);
        }));
        console.log('ki s');
    }
    get term() {
        return this.searchTerm.value;
    }
    getSortByKey(key) {
        return this.sorts.find(x => x.key === key);
    }
    toDate(date) {
        return this.datePipe.transform(date, 'yyyy-MM-dd');
    }
    isDate(data) {
        return this.service.isDate(data);
    }
    changePageSize(event) {
        this.searchTerm.setValue(this.term);
    }
};
tslib_1.__decorate([
    Input()
], TableComponent.prototype, "data", void 0);
tslib_1.__decorate([
    Input()
], TableComponent.prototype, "headers", void 0);
TableComponent = tslib_1.__decorate([
    Component({
        selector: 'app-table',
        templateUrl: './table.component.html',
        styleUrls: ['./table.component.css']
    })
], TableComponent);
export { TableComponent };
//# sourceMappingURL=table.component.js.map