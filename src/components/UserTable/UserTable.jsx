import { PencilToSquare, TrashBin } from "@gravity-ui/icons";
import { Button, Table } from "@heroui/react";
import Link from "next/link";
import React from "react";

const UserTable = ({ users }) => {
    console.log(users)
    
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-150">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Gender</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>
          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user._id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>{user.gender}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                
                <Table.Cell>
                  <Link className={"mr-3"} href={`/users/${user._id}`}>
                    <Button variant="outline">
                      <PencilToSquare />
                    </Button>
                  </Link>
                  <Link className={"mr-3"} href={`/users/${user._id}`}>
                    <Button variant="danger">
                      <TrashBin />
                    </Button>
                  </Link>
                  <Link className={"mr-3"} href={`/users/${user._id}`}>
                    <Button>Details</Button>
                  </Link>
                </Table.Cell>
                </Table.Row>
                
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default UserTable;
