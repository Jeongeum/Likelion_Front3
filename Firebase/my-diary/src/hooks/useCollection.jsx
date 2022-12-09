import { useEffect } from "react";
import { useState } from "react";
import { appFireStore } from "../firebase/config";
import { collection } from "firebase/firestore";
import { onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (transaction, myQuery) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let q;
    if (myQuery) {
      q = query(collection(appFireStore, transaction), where(...myQuery));
    }
    const unsubscribe = onSnapshot(
      myQuery ? q : collection(appFireStore, transaction),
      // 응답받은 컬랙션이 snapshot에 저장
      (snapshot) => {
        let result = [];
        // docs 는 문서를 배열로 저장하고 있다.
        snapshot.docs.forEach((doc) => {
          console.log(doc.data());
          // 전개구문을 이용해 문서의 데이터를 가져오는 data()함수의 반환값을 객체에 나열한다. 그리고 나중에 사용할 수 있도록 문서 id 값을 추가한다.
          result.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(result);
        setError(null);
      },
      (error) => {
        setError(error.message);
      }
    );

    return unsubscribe;
  }, [collection]);

  return {
    documents,
    error,
  };
};
