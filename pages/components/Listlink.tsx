import * as React from "react";
import Link from "next/link";

//
const Listlink = () => {
  return (
    <>
      <Link href="/auth/mypage">
        <a>mypage</a>
      </Link>
      <br></br>
      <Link href="/auth/signin">
        <a>singin</a>
      </Link>
      <br></br>
      <Link href="/auth/signup">
        <a>signup</a>
      </Link>
      <br></br>
      <Link href="/todos">
        <a>todos</a>
      </Link>
      <br></br>
      <Link href="/todos/create">
        <a>todos/create</a>
      </Link>
    </>
  );
};

export default Listlink;
// 