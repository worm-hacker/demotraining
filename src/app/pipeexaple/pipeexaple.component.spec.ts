import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeexapleComponent } from './pipeexaple.component';

describe('PipeexapleComponent', () => {
  let component: PipeexapleComponent;
  let fixture: ComponentFixture<PipeexapleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeexapleComponent]
    });
    fixture = TestBed.createComponent(PipeexapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
