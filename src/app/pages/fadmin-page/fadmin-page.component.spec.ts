import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadminPageComponent } from './fadmin-page.component';

describe('FadminPageComponent', () => {
  let component: FadminPageComponent;
  let fixture: ComponentFixture<FadminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
