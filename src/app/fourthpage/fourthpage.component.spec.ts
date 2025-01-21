import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthpageComponent } from './fourthpage.component';

describe('FourthpageComponent', () => {
  let component: FourthpageComponent;
  let fixture: ComponentFixture<FourthpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
