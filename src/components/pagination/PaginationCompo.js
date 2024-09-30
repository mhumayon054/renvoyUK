/** @format */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Loadingdata from '../../components/loadingdata';
import NotFound from '../../components/NoDataFound';
import '../../lxp.scss';

// import cardImg1 from "../../images/lxp-images/card-img-1.png";
// import circularTickIcon from "../../images/lxp-images/circular-tick-icon.svg";

const PaginationCompo = ({
  children,
  populate,
  listingView,
  dotRange = 5,
  limitArray = [5, 10, 20],
  asyncThunk,
  fetchInitialData = true,
  reducer,
  dataKey,
  action,
  Card,
  componentProps,
  filterData,
  contents = true,
}) => {
  // console.log(currentPage, paginationParams?.totalPages, dotRange)
  const dispatch = useDispatch();
  const [rowPerPage, setRowPerPage] = useState(10);
  const [initialRender, setInitialRender] = useState(false);

  const paginationParams = useSelector((state) => state[reducer]?.[dataKey]);
  console.log(paginationParams);

  const serverParams = useSelector(
    (state) => state[reducer]?.paramsForThunk[action]
  );
  const loading = useSelector((state) => state[reducer]?.loadings[action]);

  const [currentPage, setCurrentPage] = useState(paginationParams?.page || 1);

  useEffect(() => {
    setCurrentPage(paginationParams.page);
  }, [paginationParams]);

  // Pagination Functions
  const handleNextPage = () => {
    if (currentPage < paginationParams?.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleLimitChange = (value) => {
    setCurrentPage(1);
    setRowPerPage(value);
  };

  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(dotRange / 2));
    const endPage = Math.min(
      paginationParams?.totalPages,
      startPage + dotRange - 1
    );

    // Add First Page button
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => {
            handleClickPage(1);
          }}>
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(<span>...</span>);
      }
    }

    // Add pages within the range
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => {
            handleClickPage(i);
          }}
          className={paginationParams?.page === i ? 'active' : ''}>
          {i}
        </button>
      );
    }

    // Add Last Page button
    if (endPage < paginationParams?.totalPages) {
      if (endPage < paginationParams?.totalPages - 1) {
        pages.push(
          <button disabled style={{ cursor: 'default' }}>
            ...
          </button>
        );
      }
      pages.push(
        <button
          key={paginationParams?.totalPages}
          onClick={() => {
            handleClickPage(paginationParams?.totalPages);
          }}>
          {paginationParams?.totalPages}
        </button>
      );
    }

    return pages;
  };

  const renderPaginationDropdown = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(dotRange / 2));
    const endPage = Math.min(
      paginationParams?.totalPages,
      startPage + dotRange - 1
    );

    for (let i = 1; i <= paginationParams?.totalPages; i++) {
      pages.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return (
      <select
        value={currentPage}
        onChange={(e) => handleClickPage(Number(e.target.value))}
        style={{
          padding: '5px 10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
          {/* 'jhj' */}
        {pages}
      </select>
    );
  };

  // Pagination Logic end
  useEffect(() => {
    if (fetchInitialData || initialRender) {
      const newParams = {
        page: currentPage,
        mimeType: 'video',
        limit: rowPerPage,
      };
      dispatch(
        asyncThunk({
          ...((serverParams && serverParams) ?? { populate: populate }),
          ...newParams,
        })
      );
    } else {
      setInitialRender(true);
    }
  }, [currentPage, rowPerPage]);

  return (
    <>
      {loading ? (
        <Loadingdata />
      ) : (
        <>
          {children}
          {!paginationParams?.results?.length ? (
            <NotFound />
          ) : (
            <>
              {contents ? (
                <>
                  {paginationParams.results
                    .filter(
                      (collection) =>
                        collection.status !== 'private' &&
                        collection.viewsCount > 100
                    )
                    .map((collection, index) => (
                      <Card
                        key={index}
                        collection={collection}
                        index={index}
                        {...componentProps}
                      />
                    ))}
                </>
              ) : (
                <>
                {paginationParams.results
                  .filter(
                    (collection) =>
                      collection.status !== 'private')
                  .map((collection, index) => (
                    <Card
                      key={index}
                      collection={collection}
                      index={index}
                      {...componentProps}
                    />
                  ))}
              </>
              )}
            </>
          )}
        </>
      )}

      {paginationParams?.totalPages > 1 && (
        <div className='SetData-Btn' style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <span className='span-14'>Page</span>
            <div className=''>
              <select
                className='div-39'
                value={paginationParams?.limit}
                onChange={(e) => handleLimitChange(e.target.value)}>
                {limitArray.map((limit) => (
                  <option key={limit} value={limit}>
                    {limit}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button onClick={() => handleClickPage(1)}>
            <i class='fa-solid fa-angles-left'></i>
            First
          </button>
          <button onClick={handlePreviousPage}>
            <i class='fa-solid fa-angle-left'></i>
            Back
          </button>
          {renderPaginationDropdown()}
          <button onClick={handleNextPage}>
            Next
            <i class='fa-solid fa-angle-right'></i>
          </button>
          <button onClick={() => handleClickPage(paginationParams?.totalPages)}>
            Last
            <i class='fa-solid fa-angles-right'></i>
          </button>
        </div>
      )}
    </>
  );
};

export default PaginationCompo;
