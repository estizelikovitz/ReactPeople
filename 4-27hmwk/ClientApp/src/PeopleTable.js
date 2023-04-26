import React from 'react';
import PersonRow from './PersonRow';
import PersonForm from './PersonForm';


class PersonTable extends React.Component {


    state = {
        fname: '',
        lname: '',
        age: '',
        persons: []
    }

    onFnameChange = e => {
        this.setState({ fname: e.target.value });

    }
    onLnameChange = e => {
        this.setState({ lname: e.target.value });

    }
    onAgeChange = e => {
        this.setState({ age: e.target.value });

    }

    onAddClick = () => {

        const { fname, lname, age, persons } = this.state;

        const person = {
            fname,
            lname,
            age
        }
        const copy = [person, ...persons];

        this.setState({ persons: copy, fname: '', lname: '', age: '' });
    }
    onClearClick = () => {

        this.setState({ persons: [] });

    }
    generateTable = () => {
        const { persons } = this.state;
        if (persons.length < 1) {
            return(
            <h1> No people added yet...</h1>
        )}
        else {
            return(
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <PersonRow persons={this.state.persons} />
                </tbody>
            </table>
        )}
    }
    render() {

        return (
            <>
                <div className='container mt-5'>
                    <PersonForm
                        onFnameChange={this.onFnameChange}
                        onLnameChange={this.onLnameChange}
                        onAgeChange={this.onAgeChange}
                        fname={this.state.fname}
                        lname={this.state.lname}
                        age={this.state.age}
                        onAddClick={this.onAddClick}
                        onClearClick={this.onClearClick} />
                </div>

                {this.generateTable()}
            </>
        )
    }
}
export default PersonTable;
