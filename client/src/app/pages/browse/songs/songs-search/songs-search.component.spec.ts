import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsSearchComponent } from './songs-search.component';

describe('SongsSearchComponent', () => {
  let component: SongsSearchComponent;
  let fixture: ComponentFixture<SongsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
