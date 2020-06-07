import { createSelector } from 'reselect'
import * as entitiesSelectors from '../entities/selectors'
import { NAME } from './constants'

const releasesByIdSelector = (state) => entitiesSelectors.getAllWithName('releases', state)
const releasesModuleSelector = (state) => state[NAME]

export const releasesSelector = createSelector(
  releasesByIdSelector,
  releasesModuleSelector,
  (releasesById, { ids }) => ids.map((id) => releasesById[id])
)

export const searchedReleasesSelector = createSelector(
  releasesByIdSelector,
  releasesModuleSelector,
  (releasesById, { searchedIds: ids }) => ids.map((id) => releasesById[id])
)

export const releasesById = (ids) =>
  createSelector(releasesByIdSelector, (releasesById) => ids.map((id) => releasesById[id]))
