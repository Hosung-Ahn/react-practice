import styles from "./InvestResult.module.css";
import TableHeader from "./TableHeader";
import TableContents from "./TableContents";

function InvestResult(props) {
  return (
      <table className={styles.result}>
        <TableHeader/>
        <TableContents items={props.items}/>
      </table>
  );
}

export default InvestResult;
