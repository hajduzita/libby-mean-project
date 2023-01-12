import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteEditComponent } from './quote-edit.component';

describe('QuoteEditComponent', () => {
  let component: QuoteEditComponent;
  let fixture: ComponentFixture<QuoteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
