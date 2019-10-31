import React from 'react';

import EmptyState from '@pxblue/react-components/core/EmptyState';

import AlertIcon from '@material-ui/icons/NotificationImportant'

const TextOnly = () => (
  <EmptyState
    icon={<AlertIcon style={{ fontSize: '100px', marginBottom: '15px' }} />}
    title={"No Alarms Found"}
  />
);
export default TextOnly;
