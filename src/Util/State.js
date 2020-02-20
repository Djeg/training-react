export const createFormDataField = name => ({
  [name]: {
    value: null,
    errors: [],
  }
})

export const changeFormData = (state, { payload: { name, value, errors } }) => ({
  ...state,
  formData: {
    ...state.formData,
    [name]: {
      value: value || state.formData[name].value,
      errors: errors || [],
    },
  }
})

export const createFormDataSliceReducer = () => ({
  changeFormData,
})
