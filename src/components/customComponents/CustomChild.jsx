import React from 'react'
import { useSelector } from 'react-redux';

function CustomChild({
  reducer,
  action,
  loadingChild,
  children,
  condition,
}) {
  const loading = useSelector((state) => state[reducer]?.loadings[action]);
  // console.log("condition",condition)
  // console.log("loading",loading)
  return (condition != undefined ? (loading && condition) : loading) ? (loadingChild ?? "Loading...") : children;
}
export default React.memo(CustomChild);