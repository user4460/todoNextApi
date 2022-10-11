/* "・TODO詳細遷移・フィルター・ソート"
"・TODO・タイトル(50文字以内) ・内容(100文字以内) ・ステータス(完了, 途中, 未完了)"	
 ・ログインユーザー */

import Link from 'next/link';
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import doc from 'firebase/firestore';

const todos = () => {
   //firestoreへのread処理
   //firestoreとは、firebaseのデータベースのことで、データを保存する場所
   const readTodos = async () => {
      const querySnapshot = await firebase.firestore().collection('todos').get();
      const todos = querySnapshot.docs.map((doc:any) => {
         return {
            id: doc.id,
            ...doc.data(),
         };
      });
      return todos;
   };

   //firestoreへのdelete処理
   const deleteTodo = async (id: any) => {
      try {
         await firebase.firestore().collection('todos').doc(id).delete();
      } catch (error) {
         alert(error);
      }
   };
   

   return (
      <div>
         <h1>todos</h1>
         <Link href="/[...id]">
            <a>todo</a>
         </Link>
         <Link href="/[...id]">
            <a>todo</a>
         </Link>
         <Link href="/[...id]">
            <a>todo</a>
         </Link>
         {/*"・TODO一覧・タイトル・ステータス・TODO作成ボタン・フィルター・ソート"	*/}
         <h1>・TODO一覧</h1>
         <h1>・タイトル</h1>
         <h1>・ステータス</h1>
         <h1>・TODO作成ボタン</h1>
         <h1 >・フィルター</h1>
         <h1>・ソート</h1>
      </div>
   );
}

export default todos;
