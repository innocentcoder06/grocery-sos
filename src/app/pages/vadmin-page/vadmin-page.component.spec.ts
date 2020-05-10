import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VadminPageComponent } from './vadmin-page.component';

describe('VadminPageComponent', () => {
  let component: VadminPageComponent;
  let fixture: ComponentFixture<VadminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VadminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VadminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
