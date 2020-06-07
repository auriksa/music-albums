export const getLikedAlbums = () => JSON.parse(localStorage.getItem('liked')) || []
