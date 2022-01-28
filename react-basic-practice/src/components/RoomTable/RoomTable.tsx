//import { useState } from 'react';
import { Rooms } from './Rooms';
import { SortButton } from './SortButton';

export const RoomTable = () => {
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">
            Room name <SortButton />
          </th>
          <th scope="col">Unique code</th>
          <th scope="col">Price for 1 night</th>
          <th scope="col">Rooms available</th>
          <th scope="col">Config</th>
        </tr>
      </thead>
      <tbody>
        <Rooms />
      </tbody>
    </table>
  );
};
