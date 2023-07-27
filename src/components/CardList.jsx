import Card from './Card';

const CardList = () => {
  return (

    <div className="container">
      <div className="d-flex mt-1 justify-content-between">
        <h3>All Tasks</h3>
        <div className="d-flex gap-1">
          <button type="button" className="btn btn-secondary">
            Total <span className="badge text-bg-danger"></span>
          </button>
          <button type="button" className="btn btn-success">
            Completed{' '}
            <span className="badge text-bg-danger">              
            </span>
          </button>
          <button type="button" className="btn btn-warning">
            Left{' '}
            <span className="badge text-bg-danger">
            </span>
          </button>
        </div>
      </div>
      <div className="row p-3 g-3">
          <Card
          />
      </div>
    </div>
  );
};

export default CardList;
