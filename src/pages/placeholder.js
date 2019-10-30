import React from 'react';

import EmptyState from '@pxblue/react-components/core/EmptyState';

import TrendingUpIcon from '@material-ui/icons/TrendingUp'

import Button from '@material-ui/core/Button';

const Placeholder = () => (
  <EmptyState
    icon={<TrendingUpIcon style={{ fontSize: '100px', marginBottom: '15px' }} />}
    title={"Predictions Page Coming Soon"}
    description={"A fully redesigned predictions page is coming in our next release!"}
    actions={<Button variant="outlined" size="small" color="primary" style={{ margin: '10px' }}>Learn More</Button>}
  />
);
export default Placeholder;
