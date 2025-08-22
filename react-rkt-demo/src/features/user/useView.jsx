import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
import { useEffect } from "react";
function UserView() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
        {user.users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserView;
