import { SourceCodeSnippet } from '../../components/mdx/SourceCodeSnippet';
import Example from './sandbox/src/TS';
const JS = require('!!raw-loader!./sandbox/src/JS.js').default;
const TS = require('!!raw-loader!./sandbox/src/TS.tsx').default;
const Legacy = require('!!raw-loader!./sandbox/src/Legacy.tsx').default;

const ExampleTable = ({ showTopRow = true }) => {
  return (
    <SourceCodeSnippet
      Component={Example}
      javaScriptCode={JS}
      legacyCode={Legacy}
      typeScriptCode={TS}
      tableId="minimal"
      showTopRow={showTopRow}
    />
  );
};

export default ExampleTable;
