function ChatController(Messages, $scope) {
  var ctrl = this;

  //Inbox
  ctrl.messages = [];

  // Collect Messages
  Messages.receive(function(message){
    ctrl.messages.push(message);
  });

  //Send Messages
  ctrl.send = function(){
    Messages.send({
      data: $scope.textbox
    });
  };
}

angular
  .module('mbzapp')
  .controller('ChatController', ChatController);
