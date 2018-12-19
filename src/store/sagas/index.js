import { all, takeLatest } from "redux-saga/effects";
import { addgituser, removegituser } from "./gituser";

// all -> é como que o combineReducers do Saga.

/*

function* -> função generator do javascript - maneira de lidar com requisições assincronas, 
parecido com o async await, porém mais poderoso que eles.

*/
export default function* rootSaga() {
  yield all([
    takeLatest("ADD_GITUSER_REQUEST", addgituser),
    takeLatest("REMOVE_GITUSER_REQUEST", removegituser)
  ]);
}
