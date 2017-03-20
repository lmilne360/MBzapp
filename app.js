angular.module('mbzapp', ['chat']);

angular
    .module('mbzapp')
    .constant('config', {
        rltm: {
            service: 'pubnub',
            config: {
                publishKey: 'pub-c-2d34f44c-4371-4e45-8dda-1baf1ef3ec6e',
                subscribeKey: 'sub-c-c57de3e6-0d01-11e7-83b6-0619f8945a4f'
            }
        }
    });
