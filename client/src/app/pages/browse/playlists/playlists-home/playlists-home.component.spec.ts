import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsHomeComponent } from './playlists-home.component';

describe('PlaylistsHomeComponent', () => {
  let component: PlaylistsHomeComponent;
  let fixture: ComponentFixture<PlaylistsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
