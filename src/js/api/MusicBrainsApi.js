import client from './client'
import { schema, normalize } from 'normalizr'
import omit from 'lodash/omit'

const artists = new schema.Entity('artists')

const _schema = new schema.Entity(
  'releases',
  {
    artistCredit: [
      {
        artist: artists,
      },
    ],
  },
  {
    processStrategy: (entity) => omit(entity, ['releaseGroup', 'releaseEvents']),
  }
)

class MusicBrainsApi {
  static list() {
    return client.get('release/?query=type:album&fmt=json').then(({ data }) => {
      return { data, normalized: normalize(data.releases, [_schema]) }
    })
  }

  static search({ query, limit = 25 }) {
    return client
      .get(
        `release/?query=type:album${encodeURIComponent(
          ' AND release:' + query
        )}&limit=${limit}&fmt=json`
      )
      .then(({ data }) => ({ data, normalized: normalize(data.releases, [_schema]) }))
  }
}

export default MusicBrainsApi
