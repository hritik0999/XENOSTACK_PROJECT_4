import { Component } from '@angular/core';
import { myDependency } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

myUseableData:any = [];

constructor(private user: myDependency)
{

user.getData().subscribe(data=>{

this.myUseableData = data;

});

}

}
