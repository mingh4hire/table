import * as tslib_1 from "tslib";
import { TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
describe('TableComponent', () => {
    let component;
    let fixture;
    beforeEach(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [TableComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=table.component.spec.js.map