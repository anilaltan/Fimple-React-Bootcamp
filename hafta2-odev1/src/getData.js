import axios from "axios";

const getData = async (userId) => {
  const user = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const post = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  const margedData = { ...user.data, posts: post.data };
  return margedData;
};

export default getData;
