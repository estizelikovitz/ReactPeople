import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import PersonRow from './PersonRow';
import PersonForm from './PersonForm';
import PeopleTable from './PeopleTable';


ReactDom.render(<PeopleTable />, document.getElementById('root'));
//ReactDom.render(<PersonForm />, document.getElementById('root'));
//ReactDom.render(<PersonRow />, document.getElementById('root'));
