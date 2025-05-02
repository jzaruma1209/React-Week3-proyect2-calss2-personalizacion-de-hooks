import React, { use } from "react";

const UserCard = ({ user }) => {
  return (
    <div>
      <section>
        <article>
          <h2>
            {user.name.title} {user.name.first}
            {user.name.last}
          </h2>
          <img
            src={user.picture.large}
            alt={`${user.name.title} ${user.name.first}
            ${user.name.last}`}
          />
        </article>
      </section>
    </div>
  );
};

export default UserCard;
