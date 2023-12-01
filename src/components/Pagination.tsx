import Button from "./Button";
import { IPaginationProps } from "../interfaces/IPaginationProps";

function Pagination(props: IPaginationProps) {
  return (
    <div className="pagination-box">
      <Button
        color="#FFCB05"
        title="previous"
        name="previousPage"
        onClick={props.handlePreviousPage}
      />
      page: {props.filter.offset / props.filter.limit}
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
