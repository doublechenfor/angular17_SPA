import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessLikeComponent } from './guess-like.component';

describe('GuessLikeComponent', () => {
  let component: GuessLikeComponent;
  let fixture: ComponentFixture<GuessLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuessLikeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuessLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
