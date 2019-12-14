const enlightenedMessenger = angular.module('enlightenedMessenger',[])


enlightenedMessenger.controller('messengerCtrl',
  function($scope, Friends, Messages) {
    $scope.friends = Friends.getAllFriends()
  
    $scope.getMessages = (friend) => Messages.getMessages(friend)

    $scope.addMessage = (friend) => {
      Messages.addMessage(friend)
      friend.newMessage = ''
    }
})