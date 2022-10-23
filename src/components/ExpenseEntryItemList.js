import React from 'react';
import './ExpenseEntryItemList.css';
class ExpenseEntryItemList extends React.Component {
    render() {
        const lists = this.props.item.map((item) =>
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{new Date(item.spendDate).toDateString()}</td>
                <td>{item.category}</td>
            </tr>
        );
        return (
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {lists}
                </tbody>
            </table>
        );
    }
}
export default ExpenseEntryItemList;