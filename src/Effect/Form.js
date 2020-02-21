import * as Eff from 'redux-saga/effects'

export function* triggerValidatorSaga({ type, payload }) {
  if (!/changeFormData/.test(type)) {
    yield Eff.cancel()
  }

  const validators = payload.validators

  if (!validators || !validators.length) {
    yield Eff.cancel()
  }

  for (let validator of validators) {
    const errors = yield Eff.call(validator, payload.value)

    if (!errors || !errors.length) {
      continue;
    }

    yield Eff.put({
      type,
      payload: {
        name: payload.name,
        errors: errors,
      }
    })
  }
}

export function* rootSaga() {
  yield Eff.takeEvery('*', triggerValidatorSaga)
}
