/* eslint-disable prettier/prettier */
import InputSearch from './components/InputSearch';
import Button from './components/Button';
import TotalNumber from './components/TotalNumber';
import { RoomTable } from './components/RoomTable';

import ErrorBoundary from './components/ErrorBoundaries';
import { useRoom } from './hooks/room';
import { ButtonType } from './components/Button/index'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { setInputSearch, numberList, addRoom } = useRoom();
  
  return (
    <div className="container">
      <header className="d-flex justify-content-between mt-5">
        <Button onClick={addRoom} title={'Add New Room'} type={ButtonType.success} status={false} />
        <InputSearch setInputSearch={setInputSearch}/>
        <TotalNumber numberList={numberList}/>
      </header>
      <section className="mt-5">
        <ErrorBoundary>
          <RoomTable />
        </ErrorBoundary>
      </section>
    </div>
  );
}

export default App;

