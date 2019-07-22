import { ResourceData } from './resource-data';

export class PlaylistData extends ResourceData {
    tracksURL: string;
    owner: string;
    trackLength: number;

    constructor(objectModel:{}) {
        super(objectModel);
        this.category="playlist";
        this.owner = objectModel['owner']['display_name'];
        this.tracksURL = objectModel['tracks']['href'];
        this.trackLength = objectModel['tracks']['total'];
    }
}
