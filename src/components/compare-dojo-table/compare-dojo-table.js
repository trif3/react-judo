import React from 'react';
import './compare-dojo-table.css';

const CompareDojoTable = () => {
    return(
        <div className="compare-dojo-table">
            <h2>Your compare</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>dojo name</th>
                        <th>athletes</th>
                        <th>rate</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Klitomaxos</td>
                        <td>70</td>
                        <td>*****</td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm float-right">
                                <i className="fa fa-trash-o" />
                            </button>
                            <button className="btn btn-outline-success btn-sm float-right">
                                <i className="fa fa-plus-circle" />
                            </button>
                            <button className="btn btn-outline-warning btn-sm float-right">
                                <i className="fa fa-minus-circle" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div>
                All club athletes: 70
            </div>
        </div>
    );
};

export default CompareDojoTable;