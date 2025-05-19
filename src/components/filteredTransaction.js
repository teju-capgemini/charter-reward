import { useState, useMemo } from "react";
import TransactionTable, {
  transactionsArrayPropType,
} from "./transactionTable";
import { currentYear, months } from "../constant";
import styles from "../pages/module/Dashboard/style.module.css";

const FilteredTransaction = ({ transactions }) => {
  const years = Array.from({ length: 5 }, (_, i) => currentYear + i);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const filterTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const date = new Date(transaction.date);
      return (
        date.getMonth() + 1 === selectedMonth &&
        date.getFullYear() === selectedYear
      );
    });
  }, [transactions, selectedMonth, selectedYear]);

  return (
    <>
      <div className="filter-container">
        <label className={styles.filterText}>Month:</label>
        <select
          className={styles.dropdown}
          id="month-select"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          {months.map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </select>
        <label className={styles.filterText}>Year:</label>
        <select
          className={styles.dropdown}
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {filterTransactions.length > 0 ? (
        <TransactionTable transactions={filterTransactions} />
      ) : (
        <p>No transaction</p>
      )}
    </>
  );
};

FilteredTransaction.propTypes = {
  transactions: transactionsArrayPropType.isRequired,
};

export default FilteredTransaction;
