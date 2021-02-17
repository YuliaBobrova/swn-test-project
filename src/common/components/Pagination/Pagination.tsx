import qs from "qs";
import { default as React } from "react";
import { useHistory } from "react-router-dom";
import { usePage } from "../../../utils/hooks";
import styles from "./Pagination.module.scss";

interface IProps {
  count: number;
  limitOnPage: number;
}

const Pagination: React.SFC<IProps> = ({ count = 20, limitOnPage }: IProps) => {
  const countOfVisiblePages = 3;
  const countOfPages = Math.ceil(count / limitOnPage);

  const history = useHistory();

  const setPaginationToUrl = (page: number) => {
    const query = { page: page };

    const searchString = qs.stringify(query);
    history.push({
      search: `?${searchString}`,
    });
  };

  const currentPage = usePage();

  const pagesBoxes = () => {
    let pages: any[] = [];
    const startPage =
      countOfPages < countOfVisiblePages
        ? 0
        : currentPage - 1 < countOfPages - countOfVisiblePages
        ? currentPage - 1
        : countOfPages - countOfVisiblePages;
    const limitOfPage =
      currentPage + countOfVisiblePages - 1 < countOfPages
        ? currentPage + countOfVisiblePages - 1
        : countOfPages;
    for (let i = startPage; i < limitOfPage; i++) {
      pages.push(
        <div
          key={i + 1}
          className={
            currentPage === i + 1
              ? styles.PaginationSelectedPage
              : styles.PaginationPage
          }
          onClick={() => {
            setPaginationToUrl(i + 1);
          }}
        >
          {i + 1}
        </div>
      );
    }
    return pages;
  };

  return (
    <div className={styles.PaginationContainer}>
      {currentPage - 1 !== 0 ? (
        <div
          className={styles.PaginationBtn}
          onClick={() => {
            if (currentPage - 1 > 0) {
              setPaginationToUrl(currentPage - 1);
            }
          }}
        >
          {"<"}
        </div>
      ) : null}
      {pagesBoxes()}
      {currentPage !== countOfPages ? (
        <div
          className={styles.PaginationBtn}
          onClick={() => {
            if (currentPage < countOfPages) {
              setPaginationToUrl(currentPage + 1);
            }
          }}
        >
          {">"}
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
