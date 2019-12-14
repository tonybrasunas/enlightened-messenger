
enlightenedMessenger.factory('Messages', () => {
        
    /* Mock data here with potential shape of API response.
     * When API is ready, replace this with API call.
     * First optimization would be to get only messages for
     * the logged-in user.
     */
    const messages = [
      {
        from:     1,
        to:       2,
        when:     '12/12/2019 1:12:00 PM',
        message:  'Bonjour Jean-Jacques, mon ami! What is the nature of reality?'
      },
      {
        from:     2,
        to:       1,
        when:     '12/12/2019 2:32:00 PM',
        message:  'Well John, man is born free, and everywhere he is in chains.'
      },
      {
        from:     1,
        to:       2,
        when:     '12/12/2019 2:36:00 PM',
        message:  'Indeed we should have a great fewer disputes in the world if words were taken for what they are, the signs of our ideas only, and not for things themselves!'
      },
      {
        from:     2,
        to:       1,
        when:     '12/12/2019 2:34:00 PM',
        message:  'What is worse, people who know little are usually great talkers, while men who know much say little.'
      },

      {
        from:     1,
        to:       3,
        when:     '12/12/2019 4:51:00 PM',
        message:  'What worries you, masters you.'
      },
      {
        from:     1,
        to:       3,
        when:     '12/12/2019 4:20:00 PM',
        message:  'The reason why men enter into society is the preservation of their property.'
      },
      {
        from:     1,
        to:       4,
        when:     '12/12/2019 4:56:00 PM',
        message:  'All mankind... being all equal and independent, no one ought to harm another in his life, health, liberty or possessions.'
      },
      

      {
        from:     2,
        to:       3,
        when:     '12/12/2019 5:03:00 PM',
        message:  'It is too difficult to think nobly when one thinks only of earning a living.'
      },
      {
        from:     2,
        to:       4,
        when:     '12/12/2019 5:04:00 PM',
        message:  'The world of reality has its limits; the world of imagination is boundless.'
      },

      {
        from:     3,
        to:       1,
        when:     '12/12/2019 5:09:00 PM',
        message:  'The tyranny of a prince in an oligarchy is not so dangerous to the public welfare as the apathy of a citizen in a democracy.'
      },
      {
        from:     3,
        to:       2,
        when:     '12/12/2019 5:17:00 PM',
        message:  'The love of democracy is that of equality.'
      },      
      {
        from:     3,
        to:       4,
        when:     '12/12/2019 5:09:00 PM',
        message:  'There is no greater tyranny than that which is perpetrated under the shield of the law and in the name of justice.'
      },
 
      {
        from:     4,
        to:       1,
        when:     '12/12/2019 5:17:00 PM',
        message:  'Leisure is the mother of philosophy.'
      },      
      {
        from:     4,
        to:       2,
        when:     '12/12/2019 5:09:00 PM',
        message:  'No arts; no letters; no society; and which is worst of all, continual fear and danger of violent death; and the life of man, solitary, poor, nasty, brutish, and short.'
      },
      {
        from:     4,
        to:       3,
        when:     '12/12/2019 5:17:00 PM',
        message:  'Force and fraud are in war the two cardinal virtues.'
      },
    ]
  
   const msgService = {  
     addMessage: (friend) => {
        const datetime = new Date().toLocaleString()
        console.log('Ok heres the date for the new comment', datetime)
        console.log('from this friend', friend)
        messages.push({
          from:     friend.id,
          to:       friend.interlocutor,
          when:     datetime,
          message:  friend.newMessage
        })
     },

    getMessages: (friend) => {
      console.log('Get messages from this friend', friend)
      const msgs = messages.filter(msg => {
        return (msg.from === friend.id && msg.to === friend.interlocutor)
          || (msg.to === friend.id && msg.from === friend.interlocutor)
      })
      console.log(msgs)
      return msgs
    },
  }

  return msgService
})

/******************************************************
 * Additional Quotes from the Philosophers
 * Locke:   
 *   No man's knowledge here can go beyond his experience.
 *   Government has no other end, but the preservation of property.
 *   Every man has a property in his own person. This nobody has a right to, but himself.
 *   All wealth is the product of labor.
 *   I have always thought the actions of men the best interpreters of their thoughts.
 *   Fortitude is the guard and support of the other virtues.
 * 
 * Rousseau: 
 *   People who know little are usually great talkers, while men who know much say little.
 *   Man is born free and everywhere he is in chains.
 *   What wisdom can you find that is greater than kindness?
 *   Nature never deceives us; it is we who deceive ourselves.
 *   Childhood is the sleep of reason.
 *   Absolute silence leads to sadness. It is the image of death.
 *   Insults are the arguments employed by those who are in the wrong.
 * 
 * Montesquieu: 
 *   To become truly great, one has to stand with people, not above them.
 *   Useless laws weaken the necessary laws.
 *   Liberty is the right of doing whatever the laws permit.
 *   Power ought to serve as a check to power.
 *   You have to study a great deal to know a little.
 *   We should weep for men at their birth, not at their death.
 *   An empire founded by war has to maintain itself by war.
 * 
 * Hobbes:
 *   Curiosity is the lust of the mind.
 *   It is not wisdom but Authority that makes a law.
 *   The condition of man... is a condition of war of everyone against everyone.
 *   In the state of nature profit is the measure of right.
 *   Words are the money of fools.
 *   He that is taken and put into prison or chains is not conquered, though overcome; for he is still an enemy.
 *   I am about to take my last voyage, a great leap in the dark.
 * 
 */
