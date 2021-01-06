import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import NameContainer from '../name/NameContainer';
import AgeContainer from '../age/AgeContainer';
import CountryContainer from '../countries/CountryContainer';
import GenderContainer from '../gender/GenderContainer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContentProps {}

const Content: FC<ContentProps> = () => {
  return (
    <Grid>
      <Grid item>
        <NameContainer />
      </Grid>
      <Grid item>
        <GenderContainer />
      </Grid>
      <Grid item>
        <CountryContainer />
      </Grid>
      <Grid item>
        <AgeContainer />
      </Grid>
    </Grid>
  );
};

export default Content;
