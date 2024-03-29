/* eslint-disable prettier/prettier */

import InputSearch from './components/InputSearch';
import AddButton from './components/AddButton';
import TotalNumber from './components/TotalNumber';
import { RoomTable } from './components/RoomTable';

import { useCallback, useState } from 'react';
import { initRooms } from './mock/initData';
import { RoomInterface } from './interface/room';

import { getRandomId, getRandomName, getRandomPrice, getRandomQuantity } from './helper/random';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [rooms, setRooms] = useState(initRooms);
  const [inputSearch, setInputSearch] = useState('');
  const [toggleSort, setToggleSort] = useState(false);

  const handleAddRoom = useCallback(() => {
    const newRoom: RoomInterface = {
      id: getRandomId(5),
      name: getRandomName(),
      quantity: parseInt(getRandomQuantity(2)),
      price: getRandomPrice()
    };
    setRooms(prevRooms => [...prevRooms, newRoom]);
  }, []);

  const handleDeleteRoom = useCallback(
    (roomId: string) => {
      setRooms(prevRooms => prevRooms.filter(room => room.id !== roomId));
    },
    []
  );

  const roomsAfterFilter = rooms.filter((value) => {
    
    if (inputSearch === '' || value.name.toLowerCase().includes(inputSearch.toLowerCase())) {
      return value;
    }
  });

  const toggleSortButton = useCallback(() => {
    setToggleSort(!toggleSort);
    const sortAZ = rooms.sort((a, b) => {
      const isReversed = toggleSort === true ? 1 : -1;

      return isReversed * a.name.localeCompare(b.name);
    });
    setRooms(sortAZ);
  }, [toggleSort, rooms]);

  return (
    <div className="app container">
      <header className="app-header d-flex justify-content-between">
        <AddButton onClickAdd={handleAddRoom} />
        <InputSearch onChangeValue={setInputSearch} />
        <TotalNumber totalRooms={roomsAfterFilter.length} />
      </header>
      <section className="app-body">
        <RoomTable
          roomsAfterFilter={roomsAfterFilter}
          onDeleteRoom={handleDeleteRoom}
          onSortButton={toggleSortButton}
          toggleSort={toggleSort}
        />
      </section>
    </div>
  );
}

export default App;
