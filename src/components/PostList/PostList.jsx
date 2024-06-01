import Post from "../Post/Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => {
            return (
              <Post
                id={post.id}
                author={post.author}
                body={post.body}
                key={index}
              />
            );
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no Post</h2>
          <h3>Add more!</h3>
        </div>
      )}
    </>
  );
}

export default PostList;
