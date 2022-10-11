/*"・TODO削除・コメント投稿機能"	・TODO・タイトル(50文字以内) ・内容(100文字以内) ・ステータス(完了, 途中, 未完了)*/

/**パスワードログインhttps://firebase.google.com/docs/auth/web/password-auth?hl=ja */

import Link from 'next/link';

const todos = () => {
   return (
   <>
      {/* "・TODO情報・タイトル・内容・ステータス・ボタン[削除,編集]・コメント・入力欄  ~保存" */}
      <div>
         <h1>タイトル</h1>
         <h1>内容</h1>
         <h1>todo</h1>
         <h1>ボタン[削除,編集]</h1>
         <h1>コメント</h1>
         <h1>入力欄</h1>
         <h1>todo</h1>
         </div>
      </>
   );
}

export default todos;
