import React from 'react';

import { CreateRooms } from './RoomCreate/RoomCreate';
import { RoomCategory } from './RoomCategory/RoomCategory';

export const SideBar = () => {
  return (
    <div className="">
      <div className="row">
        <CreateRooms />
        <RoomCategory />
      </div>
    </div>
  );
};
