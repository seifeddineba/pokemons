import Button from "./Button";
import { IPaginationProps } from "../interfaces/IPaginationProps";

function Pagination(props: IPaginationProps) {
  const pageNumber = (props.filter.offset + 9) / props.filter.limit;
  return (
    <div className="pagination-box">
      <Button
        color="#FFCB05"
        title="previous"
        name="previousPage"
        onClick={props.handlePreviousPage}
        disabled={pageNumber <= 1 ? true : false}
      />
      page: {pageNumber}
      <Button
        color="#3466AF"
        title="next"
        name="nextPage"
        onClick={props.handleNextPage}
      />
    </div>
  );
}

export default Pagination;
