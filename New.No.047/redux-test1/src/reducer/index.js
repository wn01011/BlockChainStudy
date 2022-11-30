import { combineReducers } from "redux";
// combineReducers 메서드는 전달받은 reducer의 모음 객체를 하나로 묶어준다.
import counter1 from "./count1";
import counter2 from "./count2";

export default combineReducers({ counter1, counter2 });
// 하나로 통합된 reducer 메서드를 반환한다.
