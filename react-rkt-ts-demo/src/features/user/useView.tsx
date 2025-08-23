import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "./userSlice";
import { useEffect } from "react";
function UserView() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log(user);
  return (
    <div>
      <h2>list of users</h2>
      {user.loading && <h2>Loading...</h2>}
      {user.error && <h2>{user.error}</h2>}
      <ul>
        {user.users.map((user, id) => (
          <li key={id}>{user.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserView;
