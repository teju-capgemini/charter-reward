import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "../pages/module/Dashboard/style.module.css";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({ open, setOpen, transaction }) {
  const handleClose = () => setOpen(false);
  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            <Typography fontWeight='bold' className={styles.modalHeading}>Transaction Details</Typography>
          </>
          <div className={styles.modalRow}>
            <Typography
              id="modal-modal-title"
              fontWeight="bold"
              className={styles.modalTitle}
            >
              Customer Name :
            </Typography>
            <Typography
              id="modal-modal-description"
               className={styles.modalDisc}
            >
              {transaction.customerName}
            </Typography>
          </div>

          <div className={styles.modalRow}>
            <Typography
              id="modal-modal-title"
              fontWeight="bold"
               className={styles.modalTitle}
            >
              Amount :
            </Typography>
            <Typography
              id="modal-modal-description"
               className={styles.modalDisc}
            >
              {transaction.amount}
            </Typography>
          </div>

          <div className={styles.modalRow}>
            <Typography
              id="modal-modal-title"
              fontWeight="bold"
               className={styles.modalTitle}
            >
              Date :
            </Typography>
            <Typography
              id="modal-modal-description"
               className={styles.modalDisc}
            >
              {transaction.date}
            </Typography>
          </div>

          <div className={styles.modalRow}>
            <Typography
              id="modal-modal-title"
              fontWeight="bold"
               className={styles.modalTitle}
            >
              Monthly Points :
            </Typography>
            <Typography
              id="modal-modal-description"
               className={styles.modalDisc}
            >
              {transaction.monthlyPoints}
            </Typography>
          </div>

          <div className={styles.modalRow}>
            <Typography
              id="modal-modal-title"
              fontWeight="bold"
               className={styles.modalTitle}
            >
              Total Points :
            </Typography>
            <Typography
              id="modal-modal-description"
               className={styles.modalDisc}
            >
              {transaction.totalPoints}
            </Typography>
          </div>
        </Box>
      </Modal>
  );
}

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  transaction: PropTypes.shape({
    customerId: PropTypes.number,
    customerName: PropTypes.string.isRequired,
    transactionId: PropTypes.string,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    customizeDate: PropTypes.string,
    monthlyPoints: PropTypes.number.isRequired,
    totalPoints: PropTypes.number.isRequired,
  }),
};
