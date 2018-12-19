import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";
import {
  addGitUserSuccess,
  addGitUserFailure,
  removeGitUserSuccess
} from "../actions/gituser";

export function* addgituser(action) {
  try {
    //   const response = yield api.get(`/${this.state.userInput}`);
    //   call ('função que queremos executar, sem os parentesis', 'parametros que queremos passar')
    //   call -> usanda quando a função retorna uma promisse(que tratamos com .then e .catch)
    const { data } = yield call(api.get, `/${action.payload.input}`);

    const isDuplicated = yield select(state =>
      state.gituser.data.find(obj => obj.id === data.id)
    );

    if (isDuplicated) {
      yield put(addGitUserFailure("Usuário já cadastrado"));
    } else {
      yield put(addGitUserSuccess(data));
    }
  } catch (err) {
    yield put(addGitUserFailure("Erro ao adicionar repositorio"));
  }
}

export function* removegituser(action) {
  yield put(removeGitUserSuccess(action.payload.id));
}
