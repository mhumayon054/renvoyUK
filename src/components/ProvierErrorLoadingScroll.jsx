import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loadingdata from "../components/loadingdata";
import InfiniteScroll from "react-infinite-scroll-component";
import { Row, Col, Container } from "react-bootstrap";
import { BiErrorCircle } from 'react-icons/bi'
import { Link, useLocation, useSearchParams } from "react-router-dom";
// this provider get the loading and error values from the store and show related messages otherwise show the children
function ProvierErrorLoadingScroll({
  reducer,
  action,
  Parent,
  dataKey,
  Component,
  loadMore,
  loadingIndicator,
  asyncThunk,
  emtpyMessage,
  InfiniteScroll_props,
  componentProps
}) {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state[reducer]?.loadings[action]);
  const response = useSelector((state) => state[reducer]?.[dataKey]);
  const error = useSelector((state) => state[reducer]?.errors[action]);
  const serverParams = useSelector((state) => state[reducer]?.paramsForThunk[action]);
  const CTag = Parent || (({ children }) => (<Container><Row>{children}</Row></Container>))
  const errorMessages = useSelector(
    (state) => state[reducer]?.errorMessages[action]
  );

  //    // for getting collection_id in route params
  //    const [searchParams] = useSearchParams();
  //    // console.log("searchParams",searchParams)
  //   const collection_id = searchParams.get("collection_id");
  //  //  console.log("collection_id::::::", collection_id)



  // const location = useLocation();
  // const { pathname } = location;
  // let splitLocation = pathname?.split("/")[1];
  // let splitLocation = pathname;
  // console.log("vsplitLocationsplitLocation",splitLocation)

  return error ? (
    <div
    >
      <div className=" data-error">
        <Row>
          <Col lg={6}>
            <div className="img-box">
              {/* <img src={require("../images/error.png")} alt="error" /> */}
              <BiErrorCircle size={100} color="#d3d3d3" />
            </div>
          </Col>

          <Col lg={6}>
            <div className="text-box">
              <h1>{errorMessages ?? "Something went wrong"}</h1>
              <p>
                Something went wrong click to reload..
              </p>
              <button onClick={() => {
                asyncThunk && dispatch(asyncThunk(serverParams ?? {}));
              }} className="btn btn-danger" style={{width:"auto"}}>{true ? "Click to Reload" : ""}</button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  ) : !response?.results?.length && !loading ? (
    <div className="no-list-yet">
      <div className="no-list-yet">{emtpyMessage ?? "No Data Found!"}</div>
      {/* { pathname !== "/sections" ? <div className="no-list-yet">{emtpyMessage ?? "No Data Found!"}</div> : ""} */}
      {/* { pathname == "/sections" ? <Link to={`/${pathname}`} >Go And Create {pathname}</Link> : (emtpyMessage ?? "No Data Found!")} */}
      {/* { pathname && pathname == "/sections" ? <Link to="/sectionCreate" >Go And Create "Section"</Link> : (emtpyMessage ?? "No Data Found!")} */}
    </div>
  ) : (
    <InfiniteScroll
    style={{overflow:"visible"}}
      dataLength={response?.results?.length ?? 0}
      next={() => !loading && (loadMore ? loadMore({ page: +response?.page + 1 }) : dispatch(asyncThunk({ ...(serverParams ?? {}), page: +response?.page + 1 })))}
      hasMore={response?.page < response?.totalPages}
      {...(InfiniteScroll_props ?? {})}
    >
      <CTag>
        {response?.results?.map((item, index) => {
          return <Component {...componentProps} {...item} key={index} />;
        })}
        {
          loading &&
          <Loadingdata indicator={loadingIndicator ?? action} />
        }
      </CTag>
    </InfiniteScroll>
  );
}
export default React.memo(ProvierErrorLoadingScroll)