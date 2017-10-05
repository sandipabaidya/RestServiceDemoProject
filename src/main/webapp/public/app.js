var Employee= React.createClass({
    render: function() {
    var employee=this.props.employee;
        return(<tr key={this.props.id}>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.years}</td>
        </tr>);
    }
});

var EmployeeTable= React.createClass({
    render: function() {
        var rows=[];
        this.props.employees.forEach(function(employeeRecord) {
              rows.push(<Employee id={employeeRecord.id} employee={employeeRecord} />);
            });
        return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th><th>Age</th><th>Years</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
        );
    }
});

var EMPLOYEES = [
  {id: 1, name: 'Joe Biden', age: 45, years: 5},
  {id: 2, name: 'President Obama', age: 54, years: 8},
  {id: 3, name: 'Crystal Mac', age: 34, years: 12},
  {id: 4, name: 'James Henry', age: 33, years: 2}
];

ReactDOM.render(< EmployeeTable employees={EMPLOYEES} />, document.getElementById('root'));