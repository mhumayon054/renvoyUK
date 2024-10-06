import Button from 'react-bootstrap/Button';
// import './BlockExample.scss';

function BlockExample() {
  return (
    <div className="d-grid gap-2 blockexmaple-button-wrapper">
      <Button className="custom-button" variant="secondary" size="lg">
        View Details
      </Button>
    </div>
  );
}

export default BlockExample;
