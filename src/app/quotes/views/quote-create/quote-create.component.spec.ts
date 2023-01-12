import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCreateComponent } from './quote-create.component';

describe('QuoteCreateComponent', () => {
  let component: QuoteCreateComponent;
  let fixture: ComponentFixture<QuoteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
