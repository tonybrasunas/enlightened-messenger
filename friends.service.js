enlightenedMessenger.factory('Friends', () => {
  const friendsService = {

    getAllFriends: () => {
    /* Mock data here with potential shape of API response. 
     * When API is ready, replace this with API call.
     */
      return [
        { 
          name: 'Locke',
          id:   1,
          interlocutor: 2,
          lifespan: '1632-1704',
        },
        { 
          name: 'Rousseau',
          id:   2,
          interlocutor: 3,
          lifespan: '1712-1778',
        },
        { 
          name: 'Montesquieu',
          id:   3,
          interlocutor: 4,
          lifespan: '1689-1755',
        },
        { 
          name: 'Hobbes',
          id:   4,
          interlocutor: 1,
          lifespan: '1588-1679',
        },
      ]
    }
  }
   
  return friendsService
})
