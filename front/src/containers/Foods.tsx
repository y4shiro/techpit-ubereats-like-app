import React, { useEffect } from 'react';
import { fetchFoods } from '../apis/foods';

type Props = {
  match: {
    params: {
      restaurantsId: string;
    };
  };
};

export const Foods: React.VFC<Props> = ({ match }) => {
  useEffect(() => {
    fetchFoods(match.params.restaurantsId).then((data) => console.log(data));
  }, []);

  return (
    <>
      フード一覧
      <p>restaurantsIdは {match.params.restaurantsId} です</p>
    </>
  );
};
