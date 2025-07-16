import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from '../actions/userActions';
import { fetchUserFromApi } from '../../api/userApi';

function* fetchUserSaga() {
  try {
    const user = yield call(fetchUserFromApi);
    yield put(fetchUserSuccess(user));
  } catch (error: any) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* userSagaWatcher() {
  yield takeLatest(fetchUserRequest, fetchUserSaga);
}
