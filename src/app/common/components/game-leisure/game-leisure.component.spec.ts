import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLeisureComponent } from './game-leisure.component';

describe('GameLeisureComponent', () => {
  let component: GameLeisureComponent;
  let fixture: ComponentFixture<GameLeisureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameLeisureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameLeisureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
