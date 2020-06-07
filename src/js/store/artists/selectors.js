import { createSelector } from 'reselect'
import * as entitiesSelectors from '../entities/selectors'

export const artistsByIdSelector = (state) => entitiesSelectors.getAllWithName('artists', state)

export const artistsByIdsSelector = (ids) =>
  createSelector(artistsByIdSelector, (artistsById) => {
    return ids.map((id) => artistsById[id])
  })
