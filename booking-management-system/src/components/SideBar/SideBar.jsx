import React from 'react'

import { CreateRooms } from './CreateRooms/CreateRooms'
import { RoomCategory } from './RoomCategory/RoomCategory'

export const SideBar = () => {
    return (
        <div className="">
            <div className="row">
                <CreateRooms />
                <RoomCategory />
            </div>
        </div>
    )
}