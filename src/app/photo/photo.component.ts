import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() photo : any;

  constructor() { }

  getPhotoUrl() : string {  
    if (this.photo != undefined){
      return "http://farm"+this.photo.farm+".static.flickr.com/"+this.photo.server+"/"+this.photo.id+"_"+this.photo.secret+"_b.jpg"
    }
     }

  ngOnInit(): void {
  }

}
