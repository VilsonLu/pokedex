import React, { ReactElement } from 'react';

interface IPokecardProps {
    name: string;
    type: string;
    description: string;
}

const Pokecard: React.FunctionComponent<IPokecardProps> = (props: IPokecardProps): ReactElement => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.type}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Pokecard;