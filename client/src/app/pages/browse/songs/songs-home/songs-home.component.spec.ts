import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsHomeComponent } from './songs-home.component';

describe('SongsHomeComponent', () => {
  let component: SongsHomeComponent;
  let fixture: ComponentFixture<SongsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
