import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotPlayingComponent } from './hot-playing.component';

describe('HotPlayingComponent', () => {
  let component: HotPlayingComponent;
  let fixture: ComponentFixture<HotPlayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotPlayingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
