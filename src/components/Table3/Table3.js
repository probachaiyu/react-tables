import React, { Component } from 'react';
import Griddle, { plugins } from 'griddle-react';
import '../../../node_modules/griddle-react-bootstrap/dist/griddle-react-bootstrap.css';
import { data } from './utils.js';
import { BootstrapPager} from 'griddle-react-bootstrap';

const styleConfig = {
  icons: {
  TableHeadingCell: {
    sortDescendingIcon: '▼',
    sortAscendingIcon: '▲'
  },
},
  classNames: {
    Row: 'row-class',
    Table: 'table table-bordered table-striped table-hover',
    SettingsToggle: 'btn btn-default',
    Pagination: 'pager',
    NextButton: 'next',
    PreviousButton: 'previuos',
  },
  styles: {
    Filter: { fontSize: 18,  },
    Table: { border: "2px solid #555 "},
    SettingsToggle: {width: 100}
  }
}


class Table3 extends Component {

  render() {
    
    return (
      <Griddle
        useGriddleStyles={false}
        data={data}
        showFilter={true}
        showSettings={false}
        useCustomPagerComponent={true}
        customPagerComponent={ BootstrapPager }
        plugins={[plugins.LocalPlugin]}
        styleConfig={styleConfig}
        />
 );
  }
}

export default Table3;

