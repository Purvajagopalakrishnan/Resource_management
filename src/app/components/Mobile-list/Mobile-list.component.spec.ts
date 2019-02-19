import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileListComponent } from './Mobile-list.component';

describe('MobileListComponent', () => {
  let component: MobileListComponent;
  let fixture: ComponentFixture<MobileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
