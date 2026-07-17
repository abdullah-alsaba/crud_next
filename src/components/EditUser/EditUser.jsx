import React from 'react';
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";



const EditUser = ({ user, UpdateUserWrapper }) => {
  return (
    <form action={UpdateUserWrapper} className="flex flex-col gap-4">
      <TextField
        className="w-full"
        name="name"
        type="text"
        variant="secondary"
        defaultValue={user?.name}
      >
        <Label>Name</Label>
        <Input placeholder="Enter your name" />
      </TextField>
      <TextField
        className="w-full"
        name="email"
        type="email"
        variant="secondary"
        defaultValue={user?.email}
      >
        <Label>Email</Label>
        <Input placeholder="Enter your email" />
      </TextField>
      <TextField
        className="w-full"
        name="role"
        type="text"
        variant="secondary"
        defaultValue={user?.role}
      >
        <Label>Role</Label>
        <Input placeholder="Enter your role" />
      </TextField>
      <Button slot="close" variant="secondary">
        Cancel
      </Button>
      <Button type="submit" slot="close">
        Update User
      </Button>
    </form>
  );
};

export default EditUser;