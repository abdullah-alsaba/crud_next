import React from 'react';
import { getUsers } from '../lib/data';
import UserTable from '@/components/UserTable/UserTable';
import AddUser from '@/components/AddUser/AddUser';
import { createUser } from '../lib/action';

const UsersPage = async () => {

    const users = await getUsers()
   

    return (



        <div className='space-y-6 m-6'>
            <AddUser createUser={createUser} ></AddUser>
            <UserTable users={users}></UserTable>
        </div>
    );
};

export default UsersPage;