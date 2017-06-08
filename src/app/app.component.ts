import { Component ,OnInit } from '@angular/core';


import { LanguageService } from "./language.service";

import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public xx:string;
    public data:string;
    title = '多语言网站设计';
    public y:string;
    public student :string;
    public students :Array<string>
  constructor(private http:Http , private languageService:LanguageService){};
  ngOnInit(): void {
    //   let students =["xiaoming","xiaowang","xiaohong"]
    //     let student:string;
    this.students=["xiaoming","xiaowang","xiaohong"]
    this.student="xiaoming"
    // this.httpGet3();
}
public receiveCn(){
     this.languageService.getCn() ;
}
public receiveEng(){
    this.languageService.getEng();
}

    public httpGet3(){
      this.http.get('assets/c.json')
      .map((res)=>{return res.json()|| {};})
      .subscribe(data =>{
          var sp = data.data;
          var x ;

           var sc = document.querySelector("#sel");
           sc.addEventListener("change",function(){
            x=  getLan(sp,this.value);
            console.log(x)
           })
           function getLan(e,data){
               for(var i=0;i<e.length;i++){
                   if(data=="cn"){
                        return e[0].cn
                   }else if(data =="eng"){
                     return e[1].eng
                   }
               }
           }


      }, error => console.log(error));
    }


}
