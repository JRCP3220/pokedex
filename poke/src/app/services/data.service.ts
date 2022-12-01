import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class DataService{
    private readonly API=environment.api;
    constructor(private readonly http:HttpClient){}

    getPokes(index: any){
        return this.http.get<any>(`${this.API}/pokemon/${index}`);
    }
    getTypes(index:any){
        return this.http.get<any>(`${this.API}/type/${index}`);
    }
}