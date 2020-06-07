import axios from 'axios'
import camelCase from 'lodash/camelCase'
import isEmpty from 'lodash/isEmpty'

export default axios.create({
  baseURL: 'http://musicbrainz.org/ws/2/',

  transformResponse: [
    (data) => {
      // For some reason sometimes axios returns data=" " when response body is empty
      return (
        !isEmpty(data.trim()) &&
        JSON.parse(data, function (key, val) {
          const camelizedKey = camelCase(key)

          // If "JSON.parse" returns "undefined", the key is deleted from the hash. In our
          // case this will happen if key contains a single word or was already camelized,
          // so we need to avoid this.
          if (key && key !== camelizedKey) {
            this[camelizedKey] = val
          } else {
            return val
          }
        })
      )
    },
  ],
})
