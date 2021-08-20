import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({

providedIn :'root'

})
export class myDependency
{

constructor(private service:HttpClient)
{}

getData()
{

return this.service.get("https://jsonplaceholder.typicode.com/todos/");

}

}
