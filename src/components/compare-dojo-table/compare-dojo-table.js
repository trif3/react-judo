import React from 'react';
import { connect } from 'react-redux';
import { 
    dojoAddedToCompare, 
    dojoRemovedFromCompare, 
    allDojosRemovedFromCompare } from '../../actions';
import './compare-dojo-table.css';


const CompareDojoTable = ({items, totalAthletes, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, idx) => {
        const { id, name, athletes, rate } = item;
        return (
            <tr key={id}>
                <td>{idx+1}</td>
                <td>{name}</td>
                <td>{athletes}</td>
                <td>{rate}</td>
                <td>
                    <button
                     onClick={() => onDelete(id)}
                     className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                         className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecrease(id)} 
                        className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        )
    };
    
    return(
        <div className="compare-dojo-table">
            <h2>Compare Dojo</h2>
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
                    {
                        items.map(renderRow)
                    }
                </tbody>
            </table>

            <div className="total-athletes">
                All club athletes: {totalAthletes}
            </div>
        </div>
    );
};

const mapStateToProps = ({compareItems, countAthletes}) => {
    return {
        items: compareItems, 
        totalAthletes: countAthletes
    }
}

const mapDispatchToProps = {
    onIncrease: dojoAddedToCompare,
    onDecrease: dojoRemovedFromCompare,
    onDelete: allDojosRemovedFromCompare
}

export default connect(mapStateToProps, mapDispatchToProps)(CompareDojoTable);