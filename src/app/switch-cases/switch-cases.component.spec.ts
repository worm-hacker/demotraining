import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCasesComponent } from './switch-cases.component';

describe('SwitchCasesComponent', () => {
  let component: SwitchCasesComponent;
  let fixture: ComponentFixture<SwitchCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchCasesComponent]
    });
    fixture = TestBed.createComponent(SwitchCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
