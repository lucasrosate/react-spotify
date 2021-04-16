import { ITrack } from "@/interfaces";

interface Props {
    currentTrack: ITrack
}


const TrackInfo: React.FC<Props> = ({ currentTrack }: Props) => {

    return (
        <div className="inline-flex h-full items-center">
            <div className="h-4/6 pl-3">
                <img
                    className="h-full w-auto"
                    src={currentTrack.album.images[0].url}
                    alt=""
                />
            </div>

            <div className="pl-3">
                <h2 className="text-secondary font-medium" style={{ fontSize: "0.8rem", marginBottom:"1px" }}>

                    {currentTrack.name}
                </h2>
                <h3 className="text-secondary-darker font-light" style={{ fontSize: "0.65rem" }}>
                    {
                        currentTrack.artists.map((artist, index) => {
                            const length = currentTrack.artists.length;

                            if (length === 1) {
                                return artist.name;
                            } else if (index !== length - 1) {
                                return artist.name + ", ";
                            } else {
                                return artist.name
                            }
                        }
                        )
                    }
                </h3>
            </div>
        </div>
    )
}

export default TrackInfo;