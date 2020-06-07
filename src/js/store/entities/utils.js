import mergeWith from 'lodash/mergeWith'
import isArray from 'lodash/isArray'

const mergeCustomizer = (objValue, srcValue) => {
  if (isArray(objValue)) {
    return srcValue
  }
}

export const mergeWithArrayReplacement = (target, source, updater) => {
  return mergeWith(target, source, updater, mergeCustomizer)
}
