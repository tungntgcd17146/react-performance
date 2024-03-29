import { useEffect, useState } from 'react';
import { useRoom } from '../../../contexts/RoomsContext';
import { fetchRoom, deleteRoom } from '../../../reducer/rooms/actions';

import api from '../../../api/index.js';

import { RoomEditModal } from './RoomEditModal';
import style from './RoomCategory.module.css';
import '../../../../public/images/deluxe-king-1.jpg';
//import { Room } from '@/interface/roomCategory';

export const RoomCategory = () => {
  const { state, dispatch } = useRoom();
  const [selectedId, setSelectedId] = useState('');

  const { byId, allIds } = state;

  const [editModalShow, setEditModalShow] = useState(false);

  const handleCloseModal = () => {
    setEditModalShow(false);
  };

  const handleShow = (id: string) => {
    setEditModalShow(true);
    setSelectedId(id);
  };

  //Retrieve Room category
  const retrieveCategory = async () => {
    const response = await api.get('/roomCategory');
    return response.data;
  };

  //Delete room category
  const deleteCategory = async (id: string) => {
    if (window.confirm('You sure to delete?')) {
      if (await api.delete(`/roomCategory/${id}`)) {
        dispatch(deleteRoom({ id }));
      }
    }
  };

  useEffect(() => {
    const getRoomCategory = async () => {
      const allRoom = await retrieveCategory();
      if (allRoom) {
        dispatch(fetchRoom({ rooms: allRoom }));
      }
    };
    getRoomCategory();
  }, []);

  return (
    <div className="mt-3">
      <h2>Room Category</h2>
      <div className={`mt-3 ${style.color} ${style.heightContent}`}>
        <div className="row mt-3">
          {allIds.map((id: string) => {
            return (
              <div className="card mb-3" key={id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="../../../../public/images/Deluxe-02.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{byId[id].roomName}</h5>
                      <p className="card-text">Price: {byId[id].price}$/1 night</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Room available: {byId[id].totalRoom} room
                        </small>
                      </p>
                      <button
                        onClick={() => deleteCategory(id)}
                        className="btn btn-outline-danger mb-3">
                        Delete
                      </button>
                      <button
                        onClick={() => handleShow(id)}
                        className={`${style.button} btn btn-outline-primary mb-3`}>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                {editModalShow && (
                  <RoomEditModal handleCloseModal={handleCloseModal} selectedId={selectedId} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
