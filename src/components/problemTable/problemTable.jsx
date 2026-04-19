import React from "react";
import './problemTable.scss';

const ProblemTable = () => {
    return (
        <div className="col-sm-12 d-flex justify-content-center">
            <div className="col-sm-10 ">
            <table className="table table table-dark table-hover problem-table">
                <thead>
                <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Problem</th>
                    <th scope="col">In progress</th>
                    <th scope="col">Complete</th>
                    <th scope="col">Notes</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Two Sum</td>
                    <td>in progress</td>
                    <td>complete</td>
                    <td>not applicable</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ProblemTable;