import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MettleComponent } from './mettle.component';

describe('MettleComponent', () => {
  let component: MettleComponent;
  let fixture: ComponentFixture<MettleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MettleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MettleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
