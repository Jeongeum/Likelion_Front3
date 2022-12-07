import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

// context 객체를 생성합니다.
// 컨텍스트를 생성해서 현재 유저의 로그인 정보를 저장한다.
// AuthContext.js에서 유저의 로그인 정보를 다른 컴포넌트들에게 전달해서 지금 로그인되어 있는지 아닌지 상태를 전달해주는 역할을 한다.
// children들이 AuthContext를 구독하면서 상태가 변경되는지 아닌지 보고 그 상태를 따라간다.
const AuthContext = createContext();

// dispatch -> dispatch({ type: 'login', payload: user })
// 전달하는 인자를 action이라고 하며 action에는 type과 전달할 데이터인 payload 가 있다.
const authReducer = (state, action) => {
  // action의 type 값이 아무것도 없다면 default 실행. state의 초기값은 null이므로 null이 반환될 것이다.
  switch (action.type) {
    case "login":
      // 기존 값에(전개구문 사용) 새롭게 바뀌는 것만 업데이트 되도록
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null };
    case "authIsReady":
      return { ...state, user: action.payload, isAuthReady: true };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  // const [관리할 값, dispatch 함수] = useReducer(리듀서 함수, 관리할 값의 초기화)
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthReady: false,
  });

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      dispatch({ type: "authIsReady", payload: user });
      unsubscribe();
    });
  }, []);

  console.log("state : ", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
