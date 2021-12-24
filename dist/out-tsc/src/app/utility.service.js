import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let UtilityService = class UtilityService {
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    exportToExcel(headers, data) {
    }
    filter(arr, headers, term) {
        if (!term) {
            return arr;
        }
        term = term.toLowerCase();
        return arr.filter(row => {
            for (const i of headers) {
                if (this.isDate(row[i])) {
                    if (this.datePipe.transform(row[i], 'yyyy-MM-dd').indexOf(term) >= 0) {
                        return true;
                    }
                    continue;
                }
                if (row[i] ? .toString().toLowerCase() ? .indexOf(term) >= 0 :  : ) {
                    return true;
                }
            }
        });
    }
    paginate(arr, page, pageSize) {
        if (arr.length < pageSize) {
            return arr;
        }
        return arr;
    }
    setPageSize(pageSize, page, oldPageSize, total) {
        if (pageSize == null || page === 1 || oldPageSize === null) {
            return 1;
        }
        let pages = oldPageSize * (page - 1);
        let totalLastPage = Math.trunc(total / oldPageSize);
        if (totalLastPage * oldPageSize >= total) {
            totalLastPage--;
        }
        pages = Math.min(pages, totalLastPage * oldPageSize);
        const newPage = Math.trunc(pages / pageSize) + 1;
        return newPage;
    }
    sort(arr, keys = null, dirs = null) {
        const newarr = [...arr];
        if (dirs == null) {
            dirs = keys.map(x => true);
        }
        return newarr.sort((x, y) => {
            for (let k = 0; k < keys.length; k++) {
                if (dirs[k] !== true && dirs[k] !== false) {
                    continue;
                }
                let mult = dirs[k] ? 1 : -1;
                const key = keys[k];
                if (x[key] && !y[key]) {
                    return mult;
                }
                if (!x[key] && y[key]) {
                    return -1 * mult;
                }
                if (!isNaN(x[key]) && !isNaN(y[key])) {
                    if (x[key] > y[key]) {
                        return mult;
                    }
                    else if (x[key] < y[key]) {
                        return -mult;
                    }
                    continue;
                }
                if (x[key] ? .toString() ? .toLowerCase()
                    > y[key] ? .toString() ? .toLowerCase() :  :  :  : ) {
                    return mult;
                }
                else if (x[key] ? .toString() ? .toLowerCase()
                    < y[key] ? .toString() ? .toLowerCase() :  :  :  : ) {
                    return -1 * mult;
                }
            }
        });
    }
    isDate(data) {
        return Object.prototype.toString.call(data).toLowerCase().includes('date');
    }
};
UtilityService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UtilityService);
export { UtilityService };
//# sourceMappingURL=utility.service.js.map