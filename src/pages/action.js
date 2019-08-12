import React from 'react';
import EmptyState from '../components/emptyStates';

import DevicesIcon from '@material-ui/icons/Devices'

import AddIcon from '@material-ui/icons/AddCircleOutlined'

import Button from '@material-ui/core/Button';

const Action = () => (
  <EmptyState
    icon={
      <DevicesIcon style={{ fontSize: '100px', marginBottom: '15px' }} />
    }
    title={"No Devices"}
    actions={
      <Button variant="contained" color="primary" style={{ margin: '10px' }}>
        <AddIcon style={{ marginRight: '5px' }} />
        Add Device
      </Button>
    }
  />
);
export default Action;