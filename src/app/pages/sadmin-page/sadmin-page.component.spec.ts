import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SadminPageComponent } from './sadmin-page.component';

describe('SadminPageComponent', () => {
  let component: SadminPageComponent;
  let fixture: ComponentFixture<SadminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SadminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
