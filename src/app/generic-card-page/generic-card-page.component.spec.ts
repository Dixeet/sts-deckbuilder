import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCardPageComponent } from './generic-card-page.component';

describe('GenericCardPageComponent', () => {
  let component: GenericCardPageComponent;
  let fixture: ComponentFixture<GenericCardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericCardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
