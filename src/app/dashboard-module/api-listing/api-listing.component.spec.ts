import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiListingComponent } from './api-listing.component';

describe('ApiListingComponent', () => {
  let component: ApiListingComponent;
  let fixture: ComponentFixture<ApiListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiListingComponent]
    });
    fixture = TestBed.createComponent(ApiListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
