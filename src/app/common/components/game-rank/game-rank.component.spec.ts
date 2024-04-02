import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRankComponent } from './game-rank.component';

describe('GameRankComponent', () => {
  let component: GameRankComponent;
  let fixture: ComponentFixture<GameRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameRankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
