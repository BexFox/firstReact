import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div className="UserList">
      {users.map((v) => (
        <User user={v} key={v.id} />
      ))}
    </div>
  );
}
export default UserList;
