import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsSearchComponent } from './playlists-search.component';

describe('PlaylistsSearchComponent', () => {
  let component: PlaylistsSearchComponent;
  let fixture: ComponentFixture<PlaylistsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
