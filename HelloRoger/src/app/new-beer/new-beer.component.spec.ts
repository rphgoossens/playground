import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBeerComponent } from './new-beer.component';

describe('NewBeerComponent', () => {
  let component: NewBeerComponent;
  let fixture: ComponentFixture<NewBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
