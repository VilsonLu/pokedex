import React, { ReactElement } from 'react';

const ErrorComponent: React.FunctionComponent = (): ReactElement => {
    return (
      <>
        <div>
          Sorry, the Pokedex can&apos;t connect to the server right now.
        </div>
      </>
    );
}

export default ErrorComponent;