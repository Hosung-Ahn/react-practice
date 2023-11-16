import TableContent from "./TableContent";

function TableContents(props) {
  return (
      <tbody>
      {props.items.map((item) => (
          <TableContent
              key={item.year}
              year={item.year}
              totalSavings={item.totalSavings}
              interest={item.interest}
              totalInterest={item.totalInterest}
              investedCapital={item.investedCapital}
          />
      ))}
      </tbody>
  );
}

export default TableContents;