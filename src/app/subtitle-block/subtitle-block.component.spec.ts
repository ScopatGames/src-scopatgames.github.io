import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleBlockComponent } from './subtitle-block.component';

describe('SubtitleBlockComponent', () => {
  let component: SubtitleBlockComponent;
  let fixture: ComponentFixture<SubtitleBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtitleBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
