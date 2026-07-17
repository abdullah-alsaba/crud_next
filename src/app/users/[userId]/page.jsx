import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserPage = async ({ params }) => {
    const { userId } = await params
    const user =await getUserById(userId)
    
  
    return (
        <div>
           {user.name}
        </div>
    );
};

export default UserPage;