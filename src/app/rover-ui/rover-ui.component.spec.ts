import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverUIComponent } from './rover-ui.component';


describe('RoverUIComponent', () => {
  let component: RoverUIComponent;
  let fixture: ComponentFixture<RoverUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoverUIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoverUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
