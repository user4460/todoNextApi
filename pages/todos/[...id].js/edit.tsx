/*"・TODOフォーム・タイトル・期限・ステータス・保存ボタン"	
・TODO編集	
・TODO・タイトル(50文字以内) ・内容(100文字以内) ・ステータス(完了, 途中, 未完了)"	*/

import Link from 'next/link';
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const edit = () => {
   //firestoreへのupdate処理
   const updateTodo = async (e:any) => {
      e.preventDefault();
      const { title, content, status } = e.target.elements;
      try {
         await firebase.firestore().collection('todos').doc(id).update({
            title: title.value,
            content: content.value,
            status: status.value,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
         });
      } catch (error) {
         alert(error);
      }
   };

   return (
      <div>
         <Link href="/signup">
            <a>signup here</a>
         </Link>
         {/*"・TODOフォーム・タイトル・期限・ステータス・保存ボタン"	*/}
         <h1>・TODOフォーム</h1>
         <h1>・タイトル</h1>
         <h1>・期限</h1>
         <h1>・ステータス</h1>
         <h1>・保存ボタン</h1>
      </div>
   );
}

export default edit;