import { Component ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  listFruit: any;
  Object = Object;
  constructor(private http: HttpClient) { 
    this.listFruit ={}
  }
  ngOnInit(){
    this.http.get("http://localhost:7777/api/").subscribe(data=>{
      this.listFruit = data;
    })
  }
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  title = 'FruitApp';
}
