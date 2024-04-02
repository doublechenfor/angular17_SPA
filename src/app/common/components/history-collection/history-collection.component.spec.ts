import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCollectionComponent } from './history-collection.component';

describe('HistoryCollectionComponent', () => {
  let component: HistoryCollectionComponent;
  let fixture: ComponentFixture<HistoryCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
