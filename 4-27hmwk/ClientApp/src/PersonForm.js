import React from 'react';

class PersonForm extends React.Component {
    

    render() {
        const { fname, lname, age, onFnameChange, onLnameChange, onAgeChange, onAddClick, onClearClick } = this.props;

        return (
            <>

                <div className="container" >
                    <div className="row jumbotron">
                        <div className="col-md-3">
                            <input type="text" placeholder="First Name" name="fName" className="form-control" value={fname} onChange={onFnameChange} />
                        </div>

                        <div className="col-md-3">
                            <input type="text" placeholder="Last Name" name="lName" className="form-control" value={lname} onChange={onLnameChange} />

                        </div>
                        <div className="col-md-3">
                            <input type="text" placeholder="Age" name="age" className="form-control" value={age} onChange={onAgeChange} />

                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary" onClick={onAddClick}> Add </button>
                            <br />
                            <button className="btn btn-warning ml-3" onClick={onClearClick}> Clear All </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
export default PersonForm;

