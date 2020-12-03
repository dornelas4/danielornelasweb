import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteElephantPrivacyComponent } from './white-elephant-privacy.component';

describe('WhiteElephantPrivacyComponent', () => {
  let component: WhiteElephantPrivacyComponent;
  let fixture: ComponentFixture<WhiteElephantPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteElephantPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteElephantPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
