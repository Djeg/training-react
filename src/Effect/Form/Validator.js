export const noBlank = value => value
  ? []
  : [ 'Le champs ne doit pas être vide' ]

export const maxLength = (max = 10) => value => {
  if (value.length > max) {
    return [ `Ce champs doit contenir pas plus de ${max} caractère` ]
  }

  return []
}
