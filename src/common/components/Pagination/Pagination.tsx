import qs from "qs";
import { default as React } from "react";
import { useHistory } from "react-router-dom";
import { usePage } from "../../../utils/hooks";
import styled from "styled-components";

interface IProps {
  count: number;
  limitOnPage: number;
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color: #ffffff;
`;

const Page = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: solid 1px;
  border-radius: 5px;
`;

const SelectedPage = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: solid 1px;
  border-radius: 5px;
  color: #02b1c8;
  border: solid 1px #02b1c8;
  border-radius: 5px;
`;

const Btn = styled.div`
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    color: #02b1c8;
  }
`;

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
        currentPage === i + 1 ? (
          <SelectedPage
            key={i + 1}
            onClick={() => {
              setPaginationToUrl(i + 1);
            }}
          >
            {i + 1}
          </SelectedPage>
        ) : (
          <Page
            key={i + 1}
            onClick={() => {
              setPaginationToUrl(i + 1);
            }}
          >
            {i + 1}
          </Page>
        )
      );
    }
    return pages;
  };

  return (
    <Container>
      {currentPage - 1 !== 0 ? (
        <Btn
          onClick={() => {
            if (currentPage - 1 > 0) {
              setPaginationToUrl(currentPage - 1);
            }
          }}
        >
          {"<"}
        </Btn>
      ) : null}
      {pagesBoxes()}
      {currentPage !== countOfPages ? (
        <Btn
          onClick={() => {
            if (currentPage < countOfPages) {
              setPaginationToUrl(currentPage + 1);
            }
          }}
        >
          {">"}
        </Btn>
      ) : null}
    </Container>
  );
};

export default Pagination;
