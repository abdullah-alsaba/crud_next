import { updateUser } from '@/app/lib/action';
import { getUserById } from '@/app/lib/data';
import EditUser from '@/components/EditUser/EditUser';
import React from 'react';

const EditPage = async ({ params }) => {
     const { userId } = await params; 
    const user = await getUserById(userId)
    
    const UpdateUserWrapper = async (formData) => {
        'use server'
        return updateUser(userId, formData)
    }

    return (
      <div>
        <EditUser user={user} UpdateUserWrapper={UpdateUserWrapper}></EditUser>
      </div>
    );
};

export default EditPage;