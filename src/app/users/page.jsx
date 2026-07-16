import React from 'react';
import { getUsers } from '../lib/data';
import UserTable from '@/components/UserTable/UserTable';

const UsersPage = async () => {

    const users = await getUsers()
   

    return (
        <div>
            <UserTable users={users}></UserTable>
        </div>
    );
};

export default UsersPage;