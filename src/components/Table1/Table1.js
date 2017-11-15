import React, { Component } from 'react';
import './Table1.css';
import {initData} from './utils.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

const qualityType = {
  0: 'good',
  1: 'bad',
  2: 'unknown'
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

function dateFormatter(cell, row) {
  return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
}

const satisfaction = [ 0, 1, 2, 3, 4, 5 ];

class Table1 extends Component {

handlerClickCleanFiltered() {
    this.refs.name1.cleanFiltered();
    this.refs.name2.cleanFiltered();
    this.refs.quality.cleanFiltered();
    this.refs.price.cleanFiltered();
    this.refs.satisfaction.cleanFiltered();
    this.refs.inStockDate.cleanFiltered();
  }

  render() {
    return (
      <div className='main'> 
        <BootstrapTable ref='table' data={ initData }>
        <TableHeaderColumn dataField='id' isKey={true}>
          Product ID
          <br/><a onClick={ this.handlerClickCleanFiltered.bind(this) } style={ { cursor: 'pointer' } } >clear filters</a>
        </TableHeaderColumn>
        <TableHeaderColumn ref='name1' dataField='name' filter={ { type: 'TextFilter', placeholder: 'Please enter a value' } }>Product Name</TableHeaderColumn>
        <TableHeaderColumn ref='name2' dataField='name' filter={ { type: 'RegexFilter', placeholder: 'Please enter a regex' } }>Product Name</TableHeaderColumn>
        <TableHeaderColumn ref='quality' dataField='quality' filter={ { type: 'SelectFilter', options: qualityType } } dataFormat={ enumFormatter } formatExtraData={ qualityType }>Product Quality</TableHeaderColumn>
        <TableHeaderColumn ref='price' dataField='price' filter={ { type: 'NumberFilter', delay: 1000 } }>Product Price</TableHeaderColumn>
        <TableHeaderColumn ref='satisfaction' dataField='satisfaction' filter={ { type: 'NumberFilter', options: satisfaction } }>Buyer Satisfaction</TableHeaderColumn>
        <TableHeaderColumn ref='inStockDate' dataField='inStockDate' filter={ { type: 'DateFilter' } } dataFormat={ dateFormatter }>In Stock From</TableHeaderColumn>
      </BootstrapTable>
        
      </div>
    );
  }
}

export default Table1;