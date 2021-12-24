import { TestBed } from '@angular/core/testing';
import { UtilityService } from './utility.service';
fdescribe('UtilityService', () => {
    let service;
    const arr = [
        { fruit: 'watermelon', color: 'red' },
        { fruit: 'banana', color: 'yellow' },
        { fruit: 'watermelon', color: 'green' },
        { fruit: 'banana', color: 'green' },
        { fruit: 'apple', color: 'red' }
    ];
    const arrWithNulls = [
        { fruit: 'watermelon', color: 'red' },
        { fruit: null, color: 'red' },
        { fruit: 'banana', color: 'yellow' },
        { fruit: 'watermelon', color: 'green' },
        { fruit: 'banana', color: 'green' },
        { fruit: 'apple', color: 'red' }
    ];
    const arrWithMultiNulls = [
        { fruit: 'watermelon', color: 'red' },
        { fruit: null, color: 'red' },
        { fruit: 'banana', color: 'yellow' },
        { fruit: 'watermelon', color: 'green' },
        { fruit: null, color: 'black' },
        { fruit: 'banana', color: 'green' },
        { fruit: 'apple', color: 'red' }
    ];
    const keys = ['fruit', 'color'];
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UtilityService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should sort', () => {
        expect(service.sort(arr, keys)).toEqual([
            { fruit: 'apple', color: 'red' },
            { fruit: 'banana', color: 'green' },
            { fruit: 'banana', color: 'yellow' },
            { fruit: 'watermelon', color: 'green' },
            { fruit: 'watermelon', color: 'red' }
        ]);
    });
    it('should sort descending', () => {
        expect(service.sort(arr, keys, [false])).toEqual([
            { fruit: 'apple', color: 'red' },
            { fruit: 'banana', color: 'green' },
            { fruit: 'banana', color: 'yellow' },
            { fruit: 'watermelon', color: 'green' },
            { fruit: 'watermelon', color: 'red' }
        ].reverse());
    });
    it('should sort ascending with nulls', () => {
        expect(service.sort(arrWithNulls, keys)).toEqual([
            { fruit: null, color: 'red' },
            { fruit: 'apple', color: 'red' },
            { fruit: 'banana', color: 'green' },
            { fruit: 'banana', color: 'yellow' },
            { fruit: 'watermelon', color: 'green' },
            { fruit: 'watermelon', color: 'red' }
        ]);
    });
    it('should sort ascending with multi nulls', () => {
        expect(service.sort(arrWithMultiNulls, keys)).toEqual([
            { fruit: null, color: 'black' },
            { fruit: null, color: 'red' },
            { fruit: 'apple', color: 'red' },
            { fruit: 'banana', color: 'green' },
            { fruit: 'banana', color: 'yellow' },
            { fruit: 'watermelon', color: 'green' },
            { fruit: 'watermelon', color: 'red' }
        ]);
    });
    it('should sort descending with multi nulls', () => {
        expect(service.sort(arrWithMultiNulls, keys, [false])).toEqual([...[
                { fruit: 'apple', color: 'red' },
                { fruit: 'banana', color: 'green' },
                { fruit: 'banana', color: 'yellow' },
                { fruit: 'watermelon', color: 'green' },
                { fruit: 'watermelon', color: 'red' }
            ].reverse(),
            { fruit: null, color: 'red' },
            { fruit: null, color: 'black' }]);
    });
    it('should paginate correctly', () => {
        const page = service.setPageSize(33, 1, 34, 111);
        expect(page).toBe(1);
    });
    it('should paginate', () => {
        const page = service.setPageSize(39, 1, 34, 111);
        expect(page).toBe(1);
    });
    it('should paginate', () => {
        const page = service.setPageSize(10, 5, 20, 111);
        expect(page).toBe(9);
    });
    it('should paginate for pageSize null to 1', () => {
        const page = service.setPageSize(null, 5, 20, 111);
        expect(page).toBe(1);
    });
    it('should paginate ', () => {
        const page = service.setPageSize(25, 1, 50, 200);
        expect(page).toBe(1);
    });
    it('should paginate ', () => {
        const page = service.setPageSize(25, 2, 50, 200);
        expect(page).toBe(3);
    });
    it('should paginate ', () => {
        const page = service.setPageSize(10, 2, 50, 200);
        expect(page).toBe(6);
    });
    it('should paginate ', () => {
        const page = service.setPageSize(50, 2, 50, 200);
        expect(page).toBe(2);
    });
    it('should paginate ', () => {
        const page = service.setPageSize(50, 3, 100, 500);
        expect(page).toBe(5);
    });
    it('should paginate ', () => {
        const page = service.setPageSize(50, 3, 100, 203);
        expect(page).toBe(5);
    });
    it('should paginate ', () => {
        const page = service.setPageSize(10, 3, 100, 503);
        expect(page).toBe(21);
    });
    it('should paginate ', () => {
        const page = service.setPageSize(100, 3, 10, 503);
        expect(page).toBe(1);
    });
    it('should paginate ', () => {
        const page = service.setPageSize(100, 11, 10, 503);
        expect(page).toBe(2);
    });
    it('should paginate ', () => {
        const page = service.setPageSize(100, 15, 10, 503);
        expect(page).toBe(2);
    });
    it('should paginate ', () => {
        const page = service.setPageSize(100, 19, 10, 503);
        expect(page).toBe(2);
    });
    it('it should take total when total smaller than oldpagesize * page', () => {
        const page = service.setPageSize(2, 19, 10, 30);
        expect(page).toBe(11);
    });
    it('it should pageinate corectly', () => {
        const page = service.setPageSize(1, 2, 3, 4);
        expect(page).toBe(4);
    });
    it('should filter correctly', () => {
        const headers = ['color', 'age'];
        const colors = [{ color: 'green', age: 32 },
            { color: 'blue', age: 11 },
            { color: 'black', age: 15 },
        ];
        expect(service.filter(colors, headers, 'bl')).toEqual([{ color: 'blue', age: 11 },
            { color: 'black', age: 15 }]);
    });
    it('should filter correctly', () => {
        const headers = ['color', 'age'];
        const colors = [{ color: 'green', age: 32 },
            { color: 'blue', age: 11 },
            { color: 'black', age: 15 },
        ];
        expect(service.filter(colors, headers, 'e')).toEqual([{ color: 'green', age: 32 }, { color: 'blue', age: 11 }]);
    });
    it('should filter correctly', () => {
        const headers = ['color', 'age'];
        const arr = [{ color: 'green', age: 32 },
            { color: 'blue', age: 11 },
            { color: 'black', age: 15 },
        ];
        expect(service.filter(arr, headers, '3')).toEqual([{ color: 'green', age: 32 }]);
    });
    it('should filter correctly', () => {
        const headers = ['color', 'age'];
        const arr = [{ color: 'green', age: 32 },
            { color: 'blue', age: 11 },
            { color: 'black', age: 15 },
        ];
        expect(service.filter(arr, headers, '')).toEqual(arr);
    });
    it('should filter correctly', () => {
        const headers = ['color', 'age'];
        const arr = [{ color: 'green', age: 32 },
            { color: 'blue', age: 11 },
            { color: 'black', age: 15 },
        ];
        expect(service.filter(arr, headers, null)).toEqual(arr);
    });
    it('should filter correctly', () => {
        const headers = ['color', 'age'];
        const arr = [{ color: 'green', age: 32 },
            { color: 'blue', age: 11 },
            { color: 'black', age: 15 },
        ];
        expect(service.filter(arr, headers, 'blue')).toEqual([{ color: 'blue', age: 11 }]);
    });
    it('isDate is true', () => {
        expect(service.isDate(new Date())).toBe(true);
    });
    it('isDate is false', () => {
        expect(service.isDate(23432)).toBe(false);
    });
});
//# sourceMappingURL=utility.service.spec.js.map