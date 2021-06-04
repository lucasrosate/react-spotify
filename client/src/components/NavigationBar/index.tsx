import { useEffect, useState } from 'react';
import { useLocation, Link} from 'react-router-dom';

import Option from './option'

import { BsHouseDoor, BsFillHouseDoorFill } from 'react-icons/bs';
import { IoSearchOutline, IoSearchSharp, IoLibraryOutline, IoLibrarySharp } from 'react-icons/io5';
import spotifyWhiteLogo from '@/assets/spotify_page_logo/spotify_logo_rgb_white.png';
import { IconType } from 'react-icons';

interface IRoute {
    text: string,
    pathName: string,
    isSelected: boolean,
    Image?: IconType,
    ImageOnHover?: IconType
}

const NavigationBar: React.FC = () => {
    const location = useLocation();

    const [statusRoutes, setStatusRoute] = useState<IRoute[]>([
        { text: "Início", pathName: "/", isSelected: false, Image: BsHouseDoor, ImageOnHover: BsFillHouseDoorFill },
        { text: "Buscar", pathName: "/search", isSelected: false, Image: IoSearchOutline, ImageOnHover: IoSearchSharp },
        { text: "Biblioteca", pathName: "/library", isSelected: false, Image: IoLibraryOutline, ImageOnHover: IoLibrarySharp }
    ]);

    useEffect(() => {
        var newRoute: IRoute[] = [...statusRoutes];

        newRoute.forEach((route) =>
            route.pathName === location.pathname ?
                route.isSelected = true :
                route.isSelected = false
        );
        setStatusRoute(newRoute);

    }, [location.pathname])


    return (
        <> 
        
            <div className="mr-auto ml-7 mt-6 mb-6" style={{ width: "130px" }}>
                <Link to="/"><img src={spotifyWhiteLogo} alt="" /></Link>
         
            </div>

            {
                statusRoutes.map((route, index) =>
                    <span key={index} >
                        <Option
                            text={route.text}
                            pathName={route.pathName}
                            isSelected={route.isSelected}
                            Image={route.Image}
                            ImageOnHover={route.ImageOnHover}
                        />
                    </span>)
            }


        </>
    );
}

export default NavigationBar;