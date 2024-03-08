import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontainerNgcontentComponent } from './ngcontainer-ngcontent.component';

describe('NgcontainerNgcontentComponent', () => {
  let component: NgcontainerNgcontentComponent;
  let fixture: ComponentFixture<NgcontainerNgcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgcontainerNgcontentComponent]
    });
    fixture = TestBed.createComponent(NgcontainerNgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
