import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertedLayoutComponent } from './inverted-layout.component';

describe('InvertedLayoutComponent', () => {
  let component: InvertedLayoutComponent;
  let fixture: ComponentFixture<InvertedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvertedLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvertedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
