//reactのコンポーネント,firebaseの認証機能をインポート,firebaseConfigをインポート
import { useState, useEffect } from "react";
//signInWithEmailAndPasswordは、メールアドレスとパスワードを使用して、ユーザーをサインインします。
//onAuthStateChangedは、ユーザーのログイン状態が変更されたときに呼び出されるリスナーを登録します。
import {signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { auth } from "../../FirebaseConfig.js";

/* 「Link」をimport↓ */
import Link from 'next/link';　//imoprt { Navigate } from "react-router-dom";

//googleログイン
//signInWithRedirectは、ユーザーをリダイレクトを使用してサインインします。
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"

import * as React from "react";

/*"・ID-PWログイン・GGログイン"	"・ID（半角英数4文字以上ユニーク）・pw（半角英数8文字以上）"
  ・非ログインユーザー */

const Login = () => {
   //ログインフォームの入力値を管理するstate
   const [loginEmail, setLoginEmail] = useState("");
   const [loginPassword, setLoginPassword] = useState("");

   //ログインボタンを押した時の処理
   const handleSubmit = async (e) => {
      e.preventDefault();

      //メールとパスワードを入力項目の間違いのエラー処理
      try {
         await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
         );
      } catch (error) {
         alert("メールアドレスまたはパスワードが間違っています");
      }
   };

   //ユーザーがログインしているかどうか確認するためのstateを作成
   const [user, setUser] = useState();

   //ユーザーがログインしているかどうか確認する処理
   useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
      });
   });

   //googleログイン
   const ggLogin = () => {
      const provider = new GoogleAuthProvider();
      return signInWithRedirect(auth, provider);
   }
   //handleGoogleLogin出来なかったらエラー
   const ggHandleLogin = ()=> {
      ggLogin().catch((error) => console.error(error));
   };
   
   {/*完了・サービス名／ロゴ・ログインフォーム・ID入力欄・パスワード入力欄・Googleログインボタン・新規ユーザー登録ボタン・ローダー"
   未完了　ローダー*/}
   
   return (
      <>
         { //

            user ? (<Link href={`/mypage/`} />) : (
            <>
               <h1>ログインページ</h1>
               {/* メールアドレスとパスワードを入力するフォーム */}
               <form onSubmit={handleSubmit}>
                  <div>
                     <label>メールアドレス</label>
                     <input
                        name="email"
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                     />
                  </div>
                  <div>
                     <label>パスワード</label>
                     <input
                        name="password"
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                     />
                  </div>
                  <button>ログイン</button><br></br>
                  {/* ggログインボタン */}
                  <button onClick={ggHandleLogin}>ggログイン</button>

                  {/* 新規登録リンクを追加 */}
                  <p>新規登録は<Link href={`/signup/`}>こちら</Link></p>
               </form>
               {/* */}
            </>
               //
            )
         }
      </>
   );
};

export default Login;
