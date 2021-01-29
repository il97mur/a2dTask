import React from 'react';
import TimeReport from './TimeReport';
import './Table.css';
import Select from './Select';

// Компонент для рендера строки таблицы
function RenderData(props) {
    return (
        <tr className={"Table__data-row" + ' ' + props.isEmpty}>
            <td className="Table__data-cell">{props.num}</td>
            <td className="Table__data-cell">{props.firstName + ' ' + props.lastName}</td>
            <td className="Table__data-cell">{props.project}</td>
            <td className="Table__data-cell">{props.task}</td>
            <td className="Table__data-cell">{props.notes}</td>
            <td className="Table__data-cell">{props.date}</td>
            <td className="Table__data-cell">{props.hours}</td>
        </tr>
    )
}

class Table extends React.Component {

    // Метод для рендера таблицы
    renderTable(task) {

        let timeReport = TimeReport;
        let num = 0; // Счетчик строк
        let isEmpty = false; // Переменная для хранения состояния (наличие пустых значений в строке)
        let addClass;

        if (task !== 'All') {
            timeReport = TimeReport.filter( (item) => { // Фильтрация массива в случае, если в select выбран таск
                return item.Task === task
            })
        }

        return (
            timeReport.map( (data) => {
                num++;
                isEmpty = false;
                for (let key in data) { // Проверка на наличие пустых значений
                    if (data[key] === '') {isEmpty = true}
                }

                if ( isEmpty )
                    addClass = 'Table__data-row_has-empty-values' // Запись класса для строк, имеющих пустые значения, в переменную
                else 
                    addClass = ''

                return (
                    <RenderData
                    isEmpty = {addClass} 
                    num = {num}
                    firstName = {data["First Name"]}
                    lastName = {data["Last Name"]}
                    project = {data.Project}
                    task = {data.Task}
                    notes = {data.Notes}
                    date = {data.Date}
                    hours = {data.Hours}
                    />
                )
            }) 
        )

    }
        
    getTask = (value) => {
        this.setState({ task : value })
    }

    state = {
        task: 'All'
    }

    render() {
        return (
            <div className="container">
                <Select sendTask={this.getTask}/>
                <table className="Table">
                    <thead>
                        <tr className="Table__heading-row">
                            <th className="Table__heading">#</th>
                            <th className="Table__heading">Full Name</th>
                            <th className="Table__heading">Project</th>
                            <th className="Table__heading">Task</th>
                            <th className="Table__heading">Notes</th>
                            <th className="Table__heading">Data</th>
                            <th className="Table__heading">Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable(this.state.task)}     
                    </tbody>    
                </table>
            </div>
        );
    }
}

export default Table;