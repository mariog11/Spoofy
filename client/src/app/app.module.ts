import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarouselCardComponent } from './components/carousel-card/carousel-card.component';
import { ArtistPageComponent } from './pages/browse/artists/artist-page/artist-page.component';
import { AlbumPageComponent } from './pages/browse/albums/album-page/album-page.component';
import { TrackPageComponent } from './pages/browse/songs/track-page/track-page.component';
import { AboutComponent } from './components/about/about.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchComponent } from './components/search/search.component';
import { HomePageComponent } from './pages/browse/home-page/home-page.component';
import { ThermometerComponent } from './components/thermometer/thermometer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashbarComponent } from './components/dashbar/dashbar.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { SongsComponent } from './pages/browse/songs/songs.component';
import { AlbumsComponent } from './pages/browse/albums/albums.component';
import { ArtistsComponent } from './pages/browse/artists/artists.component';
import { PlaylistsComponent } from './pages/browse/playlists/playlists.component';
import { SongsHomeComponent } from './pages/browse/songs/songs-home/songs-home.component';
import { SongsSearchComponent } from './pages/browse/songs/songs-search/songs-search.component';
import { ArtistsHomeComponent } from './pages/browse/artists/artists-home/artists-home.component';
import { ArtistsSearchComponent } from './pages/browse/artists/artists-search/artists-search.component';
import { AlbumsSearchComponent } from './pages/browse/albums/albums-search/albums-search.component';
import { AlbumsHomeComponent } from './pages/browse/albums/albums-home/albums-home.component';
import { PlaylistsHomeComponent } from './pages/browse/playlists/playlists-home/playlists-home.component';
import { PlaylistsSearchComponent } from './pages/browse/playlists/playlists-search/playlists-search.component';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { TrackInfoComponent } from './components/track-info/track-info.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { PlaylistsPageComponent } from './pages/browse/playlists/playlists-page/playlists-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CarouselCardComponent,
    ArtistPageComponent,
    AlbumPageComponent,
    TrackPageComponent,
    TrackListComponent,
    CarouselComponent,
    SearchComponent,
    HomePageComponent,
    ThermometerComponent,
    LandingComponent,
    NavbarComponent,
    DashbarComponent,
    BrowseComponent,
    SongsComponent,
    AlbumsComponent,
    ArtistsComponent,
    PlaylistsComponent,
    SongsHomeComponent,
    SongsSearchComponent,
    ArtistsHomeComponent,
    ArtistsSearchComponent,
    AlbumsSearchComponent,
    AlbumsHomeComponent,
    PlaylistsHomeComponent,
    PlaylistsSearchComponent,
    SearchCardComponent,
    TrackInfoComponent,
    SearchbarComponent,
    AlbumCardComponent,
    ArtistCardComponent,
    PlaylistsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
