import {AppService} from '../services/appService';
import {UserService} from '../services/userService';
import {Dirty} from '../attributes/dirty-bind';
import {ObserverLocator, inject} from 'aurelia-framework';

@inject(AppService, UserService, ObserverLocator)
export class UserProfile {
    
    constructor(appService, userService, observerLocator) {
        this.appService = appService;
        this.userService = userService;
        this.observerLocator = observerLocator;
        
        this.init();
        
    }
    
    init() {
        this.userService
            .getUser(this.appService.profile.userId)
            .then(payload => {
                this.profile = payload.data;
            });
    }

    get saveEnabled() {
        return this.formDirty;
    }
    
    save() {
        return this
            .userService
            .saveUser(this.profile)
            .then(payload => {
                if (payload.success) {
                    this.formDirty = false;
                    this.appService.addMessage({
                        type: 'success',
                        content: 'User profile has been saved!',
                        timeout: 3000
                    });
                } else {
                    this.errors = payload.errors;
                    this.profile = payload.data;
                }
            });
    }

}