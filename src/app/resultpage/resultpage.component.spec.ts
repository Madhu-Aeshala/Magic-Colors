import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultpageComponent } from './resultpage.component';

describe('ResultpageComponent', () => {
  let component: ResultpageComponent;
  let fixture: ComponentFixture<ResultpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
