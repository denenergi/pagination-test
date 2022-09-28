import React, { useEffect, useState } from 'react';
import { getPeoples } from './api/peoples';
import './App.css';
import { Pagination } from './components/Pagination';
import { User } from './types';

export const App: React.FC = () => {
  const [perPageSelector, setPerPageSelector] = useState('2');
  const [currentPage, setCurrentPage] = useState(1);
  const [peoples, setPeoples] = useState<User[] | []>([]);

  useEffect(() => {
    getPeoples().then(res => setPeoples(res));
  }, []);

  return (
    <div className="container">
      <h1>Items with Pagination</h1>

      <p className="lead" data-cy="info">
        {`Page ${currentPage} (items ${(currentPage - 1) * +perPageSelector + 1} - ${currentPage * +perPageSelector} of ${peoples.length})`}
      </p>

      <div className="form-group row">
        <div className="col-3 col-sm-2 col-xl-1">
          <select
            data-cy="perPageSelector"
            id="perPageSelector"
            className="form-control"
            value={perPageSelector}
            onChange={(event) => setPerPageSelector(event.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>

        <label htmlFor="perPageSelector" className="col-form-label col">
          items per page
        </label>
      </div>
      <Pagination
        peoples={peoples}
        perPageSelector={perPageSelector}
        onPageChange={(pageNumber: number) => {
          setCurrentPage(pageNumber);
        }}
      />
    </div>
  );
};

export default App;
