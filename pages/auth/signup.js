/* ・ユーザー登録	 "・メールアドレス・パスワード（半角英数8文字以上）・Googleアカウント"	
・非ログインユーザー */

/**パスワードログインhttps://firebase.google.com/docs/auth/web/password-auth?hl=ja */
import React, { useState, useEffect } from "react";
//onAuthStateChangedでログインしているかどうか確認する
//createUserWithEmailAndPasswordでユーザー登録する
import {
   createUserWithEmailAndPassword,
   onAuthStateChanged
} from "firebase/auth";
import auth from "../../FirebaseConfig.js";
/* 「Link」をimport↓ */
//import { Navigate } from "react-router-dom";
import Link from 'next/link';

const Register = () => {
   //emailとpasswordのstateを作成
   const [registerEmail, setRegisterEmail] = useState("");
   const [registerPassword, setRegisterPassword] = useState("");

   //handleSubmitで登録ボタンを押した時の処理
   const handleSubmit = async (e) => {
      e.preventDefault();

      //メールとパスワードを入力項目の間違いのエラー処理
      try {
         await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
         );
      } catch (error) {
         alert("正しく入力してください");
      }
   };

   //ユーザーがログインしているかどうか確認するためのstateを作成
   const [user, setUser] = useState("");

   //ログインしているかどうかの処理
   useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
      });
   }, []);

   {/*・完了　ID入力欄・パスワード入力欄・ユーザー名入力欄・新規登録ボタン・ログインはこちら"	
　　　未完了　　ユーザー名入力欄 */ }
   return (
      <>
         {
            //ログインしてるか確認しルーティングを変える
            //

            user ? (<Link href={`/mypage/`} />) : (
               <>
                  <h1>新規登録</h1>
                  {/* メールアドレスとパスワードを入力するフォーム */}
                  <form onSubmit={handleSubmit}>
                     <div>
                        <label>メールアドレス</label>
                        <input
                           name="email"
                           type="email"
                           value={registerEmail}
                           onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                     </div>
                     <div>
                        <label>パスワード</label>
                        <input
                           name="password"
                           type="password"
                           value={registerPassword}
                           onChange={(e) => setRegisterPassword(e.target.value)}
                        />
                     </div>
                     <button>登録する</button>
                     {/* ログインリンクを追加 */}
                     <p>ログインは<Link href={`/signin/`}>こちら</Link></p>
                  </form>
               </>
               //
            )
         }
      </>
   );
};

export default Register;
