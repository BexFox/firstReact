import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <>
      {users.map((v) => (
        <User user={v} key={v.id} />
      ))}
    </>
  );
}

export default UserList;
