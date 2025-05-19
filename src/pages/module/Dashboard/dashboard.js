import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FilteredTransaction from "../../../components/filteredTransaction";
import { Button } from "@mui/material";
import styles from "./style.module.css";

const Index = () => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTransactionData();
  }, []);

  const getTransactionData = async () => {
    setLoading(true);
    await fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setTransactionsData(data.transactions);
      })
      .catch(() => {
        toast.error("Unable to get Data");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };
  return (
    <>
      <h2 className={styles.tableHeading}>Transaction Data</h2>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <FilteredTransaction transactions={transactionsData} />
      )}
      <Button variant="contained" onClick={() => handleLogout()}>
        Logout
      </Button>
    </>
  );
};

export default Index;
