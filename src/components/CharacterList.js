import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import axios from 'axios';
import styled from 'styled-components';

import SearchForm from './SearchForm';
import pageData from '../pageData';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function CharacterList() {
  const [chars, setChars] = useState([])
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(page === 1 ? 'https://rickandmortyapi.com/api/character' : `https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(res => {
        console.log(res);
        setChars(res.data.results);
      })
      .catch(err => {
        console.log('Data could not be returned!', err);
      });
  }, [page]);

    return (
      
    <Wrapper>
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
            <PaginationLink first onClick={() => setPage(1)} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous onClick={() => page === 1 ? setPage(20) : setPage(page - 1)} />
          </PaginationItem>
          {pageData.map(number => (
            <PaginationItem>
            <PaginationLink onClick={() => setPage(number)}>
              {number}
            </PaginationLink>
          </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationLink next onClick={() => page === 20 ? setPage(1) : setPage(page + 1)} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last onClick={() => setPage(20)} />
          </PaginationItem>
      </Pagination>
      
      <SearchForm chars={chars} />
    </Wrapper>
  );
}
