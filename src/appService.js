import config from './site-config'
import {AuthService} from 'spoonx/aurelia-auth';
import {inject} from 'aurelia-framework';

@inject(AuthService)
export class AppService {
    
    constructor (authService) {
        this.authService = authService
        this.sidebarOpened = false;
    }
    
    toggleSidebar() {
        this.sidebarOpened = !this.sidebarOpened;
    }
    
    get isAuthenticated() {
        return this.authService.isAuthenticated();
    }
    
    get profile() {
        if (this.authService.isAuthenticated()) {
            return JSON.parse(atob(localStorage.getItem("aurelia_token").split('.')[1]));
        }
        return null;
    }
} 