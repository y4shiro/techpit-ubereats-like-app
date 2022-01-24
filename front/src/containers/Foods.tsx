import React from 'react';

type Props = {
  match: {
    params: {
      restaurantsId: string;
    };
  };
};

export const Foods: React.VFC<Props> = ({ match }) => {
  return (
    <>
      フード一覧
      <p>restaurantsIdは {match.params.restaurantsId} です</p>
    </>
  );
};
