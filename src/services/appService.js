import config from '../system/site-config'
import {AuthService} from 'spoonx/aurelia-auth';
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(AuthService, HttpClient)
export class AppService {
    
    constructor (authService, httpClient) {
        this.authService = authService;
        this.httpClient = httpClient;
        this.sidebarOpened = false;
    }
    
    toggleSidebar() {
        this.sidebarOpened = !this.sidebarOpened;
    }
    
    get isAuthenticated() {
        return this.authService.isAuthenticated();
    }
    
    get isDomainSelected() {
        return this.domain;
    }
    
    get domain() {
        if(localStorage.getItem("app-domain")) {
            return JSON.parse(atob(localStorage.getItem("app-domain").split('.')[1]));
        }
        return null;
    }
    
    selectDomain(appDomain) {
        return this.httpClient
            .configure(config => {
                config.withDefaults({
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("aurelia_token")
                    }
                })
            })
            .fetch(`${config.baseUrl}api/appdomain/${appDomain.id}/user/${this.profile.userId}/selectAppDomain`, 
                {method: "post"})
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("app-domain", data.token);
                return data;
            });
    }
    
    get profile() {
        if (this.authService.isAuthenticated()) {
            return JSON.parse(atob(localStorage.getItem("aurelia_token").split('.')[1]));
        }
        return null;
    }
} 