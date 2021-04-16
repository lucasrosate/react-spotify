import { PanelButton } from './style';
import { BiPlay, BiPause } from 'react-icons/bi';

interface Props {
    togglePlay: Function,
    paused: boolean,
    buttonSize: number,
    innerButtonSize: number,
}

const PlayButton: React.FC<Props> =
    ({ togglePlay, paused, buttonSize, innerButtonSize }: Props) => {
        return (
            <div>
                {
                    paused &&
                    <PanelButton
                        width={buttonSize}
                        height={buttonSize}
                        paddingLeft={4}
                        onClick={() => togglePlay()}
                    >
                        <BiPlay
                            size={innerButtonSize}
                            color="black"
                        />
                    </PanelButton>
                }
                {
                    !paused &&
                    <PanelButton
                        width={buttonSize}
                        height={buttonSize}
                        paddingLeft={1}
                        onClick={() => togglePlay()}
                    >
                        <BiPause
                            size={innerButtonSize}
                            color="black"
                        />
                    </PanelButton>
                }
            </div>
        )
    }

export default PlayButton;