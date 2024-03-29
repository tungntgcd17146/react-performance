/* eslint-disable no-unused-vars */
import Room from './RoomRow';
import SortButton from './SortButton';
import { RoomInterface } from '../../interface/room';
import { useRoom } from '../../hooks/room';

export const RoomTable = () => {
  const { deleteRoom, roomsAfterFilter, sortRooms, toggleSort } = useRoom();

  return (
    <table className="table-fill">
      <thead>
        <tr>
          <th className="text-left" scope="col">
            ID
          </th>
          <th className="text-left" scope="col">
            Room name <SortButton onSortRooms={sortRooms} toggleSort={toggleSort} />
          </th>
          <th className="text-left" scope="col">
            Price for 1 night
          </th>
          <th className="text-left" scope="col">
            Rooms available
          </th>
          <th className="text-left" scope="col">
            Config
          </th>
        </tr>
      </thead>
      <tbody className="table-hover" data-testid="room-components">
        {roomsAfterFilter.map((room: RoomInterface, index: number) => (
          <Room key={room.id} room={room} order={index + 1} onDeleteRoom={deleteRoom} />
        ))}
      </tbody>
    </table>
  );
};

RoomTable.whyDidYouRender = true;
