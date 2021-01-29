import React from 'react';
import TimeReport from './TimeReport';
import './Select.css';

const data = TimeReport
    .filter( (data, index, self) => // Фильтрация массива, исключающая повторные значения для ключа "Task"
        index === self.findIndex((t) => (
            t.Task === data.Task
        ))
    )
    .map( (data) => {
        return (
            <option key={data.Task} value={data.Task}>{data.Task}</option>
        )
    })

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'All'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.sendTask(event.target.value);
    }

    render() {
        return (
            <select value={this.state.value} onChange={this.handleChange} className="Select" name="select">
                <option value="All">All</option>
                {data}
            </select>
        )
    }
}

export default Select;