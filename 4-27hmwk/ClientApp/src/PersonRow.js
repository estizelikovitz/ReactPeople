import React from 'react';

class PersonRow extends React.Component {

    generateLi = (person, key) => {
        let classNames = ' ';
        if (person.age > 65) {
            classNames += ' bg-danger';
        }

        return <tr key={key} className={classNames}>
                    <td>  {person.fname}  </td>
                    <td>  {person.lname}  </td>
                    <td>  {person.age}  </td>
              </tr>;
    }



    render() {
        const {persons} = this.props;
        return <>
            {
                persons.map((p, i) => this.generateLi(p, i))
            }
        </>
    }

}
export default PersonRow;
