import React, { ReactElement, useState, useEffect } from 'react';
import './Pokeloader.scss';

interface IPokeloaderProps {
    showLoader: boolean;
}

const Pokeloader: React.FunctionComponent<IPokeloaderProps> = (props: IPokeloaderProps): ReactElement => {
    const [isShown, setShowLoader] = useState<boolean>(props.showLoader);

    useEffect(() => {
        setShowLoader(props.showLoader);
    }, [props.showLoader]);

    return isShown ? (
        <div className="divWrapper">
            <div className="divPokeball">
            </div>
        </div>
    ) : (
        <></>
    );
}

export default Pokeloader;