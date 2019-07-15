import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodevolutionComponent } from './codevolution.component';

describe('CodevolutionComponent', () => {
  let component: CodevolutionComponent;
  let fixture: ComponentFixture<CodevolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodevolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodevolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
