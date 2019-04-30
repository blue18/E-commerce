import React from 'react';
import { Container, Col, Row, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PageSkipper = () => {
  return(
    <Col>
      <Pagination aria-label="Page navigation example" style={centerItem}>
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" />
          </PaginationItem>
      </Pagination>
    </Col>
  );
}

// For reference 
// http://howtocenterincss.com/#contentType=div&horizontal=center&vertical=middle&browser.IE=none
const centerItem = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

export default PageSkipper;