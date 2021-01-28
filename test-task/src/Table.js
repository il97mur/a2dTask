import TimeReport from './TimeReport';
import './Table.css';

let num = 0;

const data = TimeReport
    .map( (data) => {
        num++;
        if (data["First Name"] !== ''
        && data["Last Name"] !== ''
        && data.Project !== ''
        && data.Task !== ''
        && data.Notes !== ''
        && data.Date !== ''
        && data.Hours !== ''
        ) {
            return (
                <tr className="Table__data-row">
                    <td className="Table__data-cell">{num}</td>
                    <td className="Table__data-cell">{data["First Name"] + ' ' + data["Last Name"]}</td>
                    <td className="Table__data-cell">{data.Project}</td>
                    <td className="Table__data-cell">{data.Task}</td>
                    <td className="Table__data-cell">{data.Notes}</td>
                    <td className="Table__data-cell">{data.Date}</td>
                    <td className="Table__data-cell">{data.Hours}</td>
                </tr>
            )
        } else {
            return (
                <tr className="Table__data-row Table__data-row_has-empty-values">
                    <td className="Table__data-cell">{num}</td>
                    <td className="Table__data-cell">{data["First Name"] + ' ' + data["Last Name"]}</td>
                    <td className="Table__data-cell">{data.Project}</td>
                    <td className="Table__data-cell">{data.Task}</td>
                    <td className="Table__data-cell">{data.Notes}</td>
                    <td className="Table__data-cell">{data.Date}</td>
                    <td className="Table__data-cell">{data.Hours}</td>
                </tr>
            )
        }
        
});
    
function Table() {
    return (
        <div className="container">
            <table className="Table">
                <tr className="Table__heading-row">
                    <th className="Table__heading">#</th>
                    <th className="Table__heading">Full Name</th>
                    <th className="Table__heading">Project</th>
                    <th className="Table__heading">Task</th>
                    <th className="Table__heading">Notes</th>
                    <th className="Table__heading">Data</th>
                    <th className="Table__heading">Hours</th>
                </tr>
                {data}
            </table>
        </div>
    );
}

export default Table;