/*"・TODOタイトル候補・TODO作成"	
・TODO・タイトル(50文字以内) ・内容(100文字以内) ・ステータス(完了, 途中, 未完了)"	
・ログインユーザー*/

////react系をインポートする、useStateとは、stateを使うためのフック
import { useState } from 'react';
import * as React from "react";

//chakraの導入、ChakraProviderとは、Chakra UIのコンポーネントを使用するために必要なコンポーネント
import { ChakraProvider } from '@chakra-ui/react'
//chakraの導入、CSSの設定
import { Select } from '@chakra-ui/react'
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { Checkbox} from '@chakra-ui/react'
import { ListItem, UnorderedList } from '@chakra-ui/react'

//todo recoilの導入、RecoilRootとは、Recoilのルートコンポーネント
//import { RecoilRoot } from 'recoil'
//import useUser from './auth/atom'

//typeの導入、型を定義する
export type Todo = {
  id: number;
  text: string;
  checked: boolean;
}

//TodListの作成
function create() {
  /* コンポーネント内に ・todosステートを定義する Todo[]型 配列型
  <T>とは、ジェネリクスと呼ばれるもので、型を変数として扱うことができる */
  //React Hook "useState" is called in function "create" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use".
  //eslintを三行無効化
  // eslint-disable-next-line react-hooks/rules-of-hooks 
  const [todos, setTodos] = useState<Todo[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [todoText, setTodoText] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [todoId, setTodoId] = useState(0);

  //handleCreateを使って、todoを作成する
  const handleCreate = (e: any) => {
    setTodoText(e.target.value);
  };

  //handleAddを使って、配列todosに追加する
  const handleAdd = () => {
    //setTodosに配列オブジェクトを渡す
    setTodos([...todos, { id: todoId, text: todoText, checked: false }]);
    //new Date().getTime()でミリ秒を取得できる//tod完了 setTodoIdにuuidを追加したい
    setTodoId(new Date().getTime()); //setTodoId(todoId + 1);
    //setTodoを初期化,
    setTodoText("");
  };

  //deepcopyにする,handlEditを使って、todoを編集する
  const handleEdit = (id: number, value: string) => {
    //三項演算子で書く
    /*
    const deepCopy = todos.map((todo) =>
      todo.id !== id ? todo : { ...todo, text: value }
    );
    */

    const deepCopy = todos.map((todo) => ({ ...todo }));

    //新しい配列に、idが一致すればvalueを代入する
    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.text = value;
      }
      return todo;
    });
    //新しい配列setTodosに代入する
    setTodos(newTodos);
  };

  //deepcopyにする,handleCheckedを使って、todoをチェックする
  const handleChecked = (id: number, checked: boolean) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));

    //新しい配列に、idが一致すれば真偽値を反転させる
    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  /* todoを削除する　 array.filter()もしくはarray.splice()  */
  const handleDelete = (clickTodo: any) => {
    setTodos(todos.filter((todo): any => todo.id !== clickTodo.id));
  };

  /*ソート
  const handleSort = (e: any) => {
    const sort = e.target.value;
    if (sort === "asc") {
      setTodos([...todos].sort((a, b) => a.id - b.id));
    } else if (sort === "desc") {
      setTodos([...todos].sort((a, b) => b.id - a.id));
    }
  };*/

  //todo todoソートを作成,多分switch文で書く
  /*const handleSort = () => {
    const deepCopy = todos.map((todo) => ({ ...todo }));
    const newTodos = deepCopy.sort((a, b) => {
    todo.id - todo.id;
    });
    setTodos(newTodos);
  }*/

  //FILTEROPTIONをconstで定義する
  /*
  const FILTEROPTION = [{text: ‘全てのタスク’, value: ‘all’},
                        {text: ‘完了’, value: ‘checked’},
                        {text: ‘現在’, value: ‘unChecked’},
                        {text: ‘削除’, value: ‘removed’ }]
  */

  return (
    <ChakraProvider>
      {/*ソートをする*/}
      <FormControl>
        <FormLabel>ソート</FormLabel>
        <Select placeholder="いつ">
          <option>今日</option>
          <option>今日じゃない</option>
        </Select>
      </FormControl>
      {/*  フィルタリングするセレクタを作成*/}
      <FormLabel>ステータス</FormLabel>
      {/* FILTEROPTIONをmapで表示させる*/}
      {/*{FILTEROPTION.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
      */}
      <Select defaultValue="all" onChange={(e: any) => e.preventDefault()}>
        <option value="all">すべてのタスク</option>
        <option value="checked">完了</option>
        <option value="unchecked">現在</option>
        <option value="removed">削除</option>
      </Select>
      {/*　todo作成フォーム作成 eで更新を止める*/}
      <FormControl onSubmit={(e: any) => e.preventDefault()}>
        {/*　inputでtodo入力を作成する,buttonでtodo作成ボタンを作成する */}
        <Textarea
          placeholder="タイトル　50文字以内"
          value={todoText}
          onChange={handleCreate}
        />
        <Button
          colorScheme="blue"
          type="submit"
          value="作成"
          onClick={handleAdd}
        >
          作成
        </Button>
      </FormControl>
      {/*"リスト形式で以下の項目を作る,"ul,li",作成したtodoをmapリストで表示する */}
      <UnorderedList>
        {todos.map((todo) => {
          return (
            <ListItem key={todo.id}>
              {/* "チェックボックス・特定のTODOをチェックするメソッドを定義"
               */}
              <Checkbox
                className="checkbox"
                type="checkbox"
                checked={todo.checked}
                onChange={(e: any) => handleChecked(todo.id, todo.checked)}
              />
              {/* "編集フォーム・特定のTODOを編集するメソッドを定義する"
                　　　e.target.valueでイベントが発生した要素の値に変更   */}
              <Textarea
                value={todo.text}
                onChange={(e: any) => handleEdit(todo.id, e.target.value)}
              />
              {/* "削除ボタンを作る・特定のTODOを削除するメソッドを定義する"*/}
              <Button colorScheme="red" onClick={() => handleDelete(todo)}>
                削除
              </Button>
            </ListItem>
          );
        })}
      </UnorderedList>
    </ChakraProvider>
  );
}

//Appをエクスポートする
export default create;

/*
import Link from 'next/link';
import firebase  from 'firebase/app';
import firestore from 'firebase/firestore';

const create = () => {
  //firestoreへのcreate処理
   const createTodo = async (e:any) => {
      e.preventDefault();
      const { title, content, status } = e.target.elements;
      try {
         await firebase.firestore().collection('todos').add({
            title: title.value,
            content: content.value,
            status: status.value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
         });
      } catch (error) {
        alert(error);
      }
   };
  
  return (
    <div>
      <h1>create</h1>
      <Link href="/signup">
        <a>signup here</a>
      </Link>
      {/* "・TODOフォーム・タイトル・内容・ステータス・作成ボタン" }
      <h1>・TODOフォーム</h1>
      <h1>・タイトル</h1>
      <h1>・内容</h1>
      <h1>・ステータス</h1>
      <h1>・作成ボタン</h1>
    </div>
  );
}

//export default create;
*/