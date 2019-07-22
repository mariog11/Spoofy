import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistPageComponent } from './pages/browse/artists/artist-page/artist-page.component';
import { TrackPageComponent } from './pages/browse/songs/track-page/track-page.component';
import { AlbumPageComponent } from './pages/browse/albums/album-page/album-page.component';
import { HomePageComponent } from './pages/browse/home-page/home-page.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { AlbumsComponent } from './pages/browse/albums/albums.component';
import { SongsComponent } from './pages/browse/songs/songs.component';
import { ArtistsComponent } from './pages/browse/artists/artists.component';
import { PlaylistsComponent } from './pages/browse/playlists/playlists.component';
import { SongsHomeComponent } from './pages/browse/songs/songs-home/songs-home.component';
import { SongsSearchComponent } from './pages/browse/songs/songs-search/songs-search.component';
import { ArtistsHomeComponent } from './pages/browse/artists/artists-home/artists-home.component';
import { ArtistsSearchComponent } from './pages/browse/artists/artists-search/artists-search.component';
import { AlbumsHomeComponent } from './pages/browse/albums/albums-home/albums-home.component';
import { AlbumsSearchComponent } from './pages/browse/albums/albums-search/albums-search.component';
import { PlaylistsHomeComponent } from './pages/browse/playlists/playlists-home/playlists-home.component';
import { PlaylistsSearchComponent } from './pages/browse/playlists/playlists-search/playlists-search.component';
import { PlaylistsPageComponent } from './pages/browse/playlists/playlists-page/playlists-page.component';

const routes: Routes = [
	{ 
		path: 'browse', 
		component: BrowseComponent,
		children: [
			{ path: '', component: HomePageComponent},
			{ 
				path: 'artists', 
				component: ArtistsComponent,
				children: [
					{ path: '',component:ArtistsHomeComponent},
					{ path: ':id', component: ArtistPageComponent},
					{ path: 'search/:searchString', component: ArtistsSearchComponent}
				]
			},
			{ 
				path: 'songs', 
				component: SongsComponent,
				children: [
					{ path: '',component:SongsHomeComponent},
					{ path: ':id', component: TrackPageComponent},
					{ path: 'search/:searchString', component: SongsSearchComponent}
				]
			},
			{ 
				path: 'albums', 
				component: AlbumsComponent,
				children: [
					{ path: '',component:AlbumsHomeComponent},
					{ path: ':id', component: AlbumPageComponent},
					{ path: 'search/:searchString', component: AlbumsSearchComponent}
				]
			},
			{ 
				path: 'playlists', 
				component: PlaylistsComponent,
				children: [
					{ path: '',component:PlaylistsHomeComponent},
					{ path: ':id', component: PlaylistsPageComponent},
					{ path: 'search/:searchString', component: PlaylistsSearchComponent}
				]
			}
		]
	},
	{ path: '', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
