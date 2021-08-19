import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.less']
})
export class DashComponent implements OnInit {

  constructor(private crud: CatService, private http: HttpClient) { }

  ngOnInit(): void {

    this.crud.getAllCats().subscribe(data =>{
      console.log('data', data)
    })

    // this.http.get<any>('api/cats').subscribe(data =>{
    //   console.log('data', data);
    // })

  }

}
