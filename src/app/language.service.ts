import { Injectable } from "@angular/core";
import{ Http } from "@angular/http";


import "rxjs/add/operator/map";
import "rxjs/add/operator/catch"



@Injectable()

export class LanguageService {
    constructor(private http :Http){}
    getCn(){
       this.http.get('assets/cn.json')
      .map((res)=>{return res.json()|| {};})
      .subscribe(data => {data.data; console.log(data.data)}, error => console.log(error));
    }
    getEng(){
        this.http.get('assets/eng.json')
        .map((res)=>{return res.json() ||{}; })//使得数据以json的格式显示出来
        .subscribe(data => {data.data;},error=>console.log(error));
    }




}
