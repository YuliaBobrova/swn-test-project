import { ceil } from "lodash";
import { default as React, useState, useEffect } from "react";
import styles from "./Pagination.module.scss";
import qs from "qs";
import { useHistory, useLocation } from "react-router-dom";

interface IProps {
  count: number;
  limitOnPage: number;
}

const Pagination: React.SFC<IProps> = ({
  count = 20,
  limitOnPage,
}: IProps) => {
  const countOfVisiblePages = 3;
  const countOfPages = ceil(count / limitOnPage);

  const history = useHistory();

  const location = useLocation();

  const setPaginationToUrl =(page: number) => {
    const query = { page: page };

    const searchString = qs.stringify(query);
    history.push({
      search: `?${searchString}`,
    });
  }

  const search = qs.parse(location.search.replace("?", ""));
  const currentPage = typeof search.page === "string" ?  parseInt(search.page) : 1;

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
              ? styles.paginationSelectedPage
              : styles.paginationPage
          }
          onClick={() => {
            setPaginationToUrl(i + 1)
          }}
        >
          {i + 1}
        </div>
      );
    }
    return pages;
  };

  return (
    <div className={styles.paginationContainer}>
      <div
        className={styles.paginationBtn}
        onClick={() => {
          if (currentPage - 1 > 0) {
            setPaginationToUrl(currentPage - 1)
          }
        }}
      >
        Previous
      </div>
      {pagesBoxes()}
      <div
        className={styles.paginationBtn}
        onClick={() => {
          if (currentPage < countOfPages) {
            setPaginationToUrl(currentPage + 1)
          }
        }}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
