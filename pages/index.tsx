import type { NextPage } from 'next'
import Image from 'next/image'

//コンポーネントの読み込み
import Listlink from "./components/Listlink";

const Home: NextPage = () => {
  return (
    <div>
      {/*ここからListlink*/}
      <Listlink />
      <Image src="/todo_people.jpeg" alt="Logo" width={172} height={116} />
    </div>
  );
}

export default Home
