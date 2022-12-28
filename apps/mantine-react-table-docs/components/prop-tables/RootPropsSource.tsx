import React from 'react';
import { Box, Typography } from '@mui/material';
import { SourceCodeSnippet } from '../mdx/SourceCodeSnippet';
const TS = require('!!raw-loader!./RootPropTable.tsx').default;

const ExampleTable = () => {
  return (
    <Box sx={{ marginTop: '20rem' }}>
      <Typography>
        Wanna see the source code for this table? Check it out down below!
      </Typography>
      <SourceCodeSnippet tableId="root-props" typeScriptCode={TS} />
    </Box>
  );
};

export default ExampleTable;
