/* First, instantiate our angular app */
const enlightenedMessenger = angular.module('enlightenedMessenger',[])

/* Then set up a single controller, 
 *  inject our data services, "Friends" and "Messages",
 *  and connect our service methods for fetching 
 *  and returning data.
 */
enlightenedMessenger.controller('messengerCtrl', 
  ($scope, Friends, Messages) => {
    $scope.friends = Friends.getAllFriends()
  
    $scope.getMessages = (friend) => Messages.getMessages(friend)

    $scope.addMessage = (friend) => {
      Messages.addMessage(friend)
      friend.newMessage = ''
    }
})