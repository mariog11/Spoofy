import { ResourceData } from './resource-data';
import { ArtistData } from './artist-data';

export class AlbumData extends ResourceData {
	genres:string[];
	artists:ArtistData[];
	releaseDate:String;

	constructor(objectModel:{}) {
		super(objectModel);
		this.category="album";

		this.releaseDate = objectModel['release_date'];
		this.releaseDate = this.releaseDate.substring(0,4);

		this.genres = objectModel['genres'];

		this.artists = objectModel['artists'].map((artist) => {
			return new ArtistData(artist);
		});
	}
}
