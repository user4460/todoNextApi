//マイページのチュートリアルのコードhttps://ralacode.com/blog/post/react-firebase-authentication/
import React, { useState, useEffect } from "react";
import { onAuthStateChanged , signOut } from "firebase/auth";//
import { auth } from "../../FirebaseConfig.js";
//import {   useNavigate,   Navigate } from "react-router-dom";
import Link from 'next/link';

/*"・ユーザー情報編集"	 "・ユーザー　・ID・名前・最終ログイン日"	 許可・ログインユーザー*/
const Mypage = () => {
   //ログインしているユーザーの情報を管理するstate
   const [user, setUser] = useState("");

   //ロード時にログインしているユーザーの情報を取得する
   const [loading, setLoading] = useState(true);

   //useEffectでログインしているユーザーの情報を取得する
   useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });
   }, []);

   //useNavigateを使ってログインページに遷移する
   //const navigate = useNavigate();

   //ログアウト処理 signOutはfirebaseの関数,
   const logout = async () => {
      await signOut(auth);
      navigate("/login/");
   }

   {/*"完了・フッターメニュー・ユーザー・TODO・TODO"マイページでユーザー情報を編集
　　　未完了・フッターメニュー・ユーザー・TODO・TODO"*/ }

   return (
      <>
         {/* ローダーが表示される */}
         {/* ローダーとは、データを読み込む際に表示されるもの <=コパコメ*/}
         {!loading && (
            <>
               {/** ログインしているユーザーの情報を表示 */}
               {!user ? (
                  <Link href="/signin/" />
               ) : (
                  <>
                     <h1>マイページ</h1>
                     <p>{user?.email}</p>
                     <button onClick={logout}>ログアウト</button>
                  </>
               )}
            </>
         )}
      </>
   );
};

export default Mypage;
