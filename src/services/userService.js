import config from '../system/site-config'
import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import {AppService} from './appService';

@inject(HttpClient, AppService)
export class UserService {
    
    constructor (httpClient, appService) {
        this.httpClient = httpClient
            .configure(config => {
                config.withDefaults({
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("aurelia_token")
                    }
                })
            });
        this.appService = appService;
    }
    
    getUser(id) {
        return this.httpClient
            .fetch(`${config.baseUrl}api/appdomain/${this.appService.domain.id}/user/${id}`)
            .then(response => response.json());
    }
    
    saveUser(user) {
        if (user.id) {
            return this.httpClient
                .fetch(`${config.baseUrl}api/user/${user.id}`, { method: "PUT", body: json(user) })
                .then(response => response.json());
        } else {
            return this.httpClient
                .fetch(`${config.baseUrl}api/appdomain/${this.appService.domain.id}/user`, { method: "POST" })
                .then(response => response.json());
        }
    }
} 