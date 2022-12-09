import DiaryForm from "./DiaryForm";
import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import DiaryList from "./DiaryList";

export default function Home() {
  const { user } = useAuthContext();
  // 현재 로그인한 유저의 아이디가 도큐먼트의 uid가 같을 때
  const { documents, error } = useCollection("myDiary", [
    "uid",
    "==",
    user.uid,
  ]);
  return (
    <main className={styles.cont}>
      <aside className={styles.side_menu}>
        <DiaryForm uid={user.uid} />
      </aside>
      <ul className={styles.content_list}>
        {error && <strong>{error}</strong>}
        {documents && <DiaryList diaries={documents} />}
      </ul>
    </main>
  );
}
