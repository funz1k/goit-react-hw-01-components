import PropTypes from "prop-types";
import css from "./Transactions.module.css"

const Transactions = ({ data }) => {
    return (
        <table className={css.transaction_history}>
            <thead className={css.thead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody> {
                data.map(({ type, amount, currency, id }) => (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))
            }
            </tbody >
        </table >
    )
}

Transactions.protoTypes = {
    statData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    ),
}

export default Transactions;