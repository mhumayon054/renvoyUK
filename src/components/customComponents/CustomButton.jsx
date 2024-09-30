import React from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function CustomButton({
  reducer,
  action,
  title,
  onClick,
  disabled,
  selected_id,
  id,
  loadingText,
  type,
  className,
  variant,
  ...props
}) {
  const loading = useSelector((state) => state[reducer]?.loadings[action]);
  const _loading = (selected_id && id) ? loading && ((selected_id == id)) : loading;
  return (
    <Button
      type={type}
      {...props}
      disabled={_loading ? _loading : disabled} onClick={onClick}
      variant={variant}
      className={className}
    >
      {_loading ? (loadingText ?? "Loading...") : title}
    </Button>

  )
}