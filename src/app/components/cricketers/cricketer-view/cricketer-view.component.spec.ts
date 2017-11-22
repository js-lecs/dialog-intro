import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerViewComponent } from './cricketer-view.component';

describe('CricketerViewComponent', () => {
  let component: CricketerViewComponent;
  let fixture: ComponentFixture<CricketerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
