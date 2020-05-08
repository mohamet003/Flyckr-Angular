import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  photo:any
} 


@Component({
  selector: 'app-dialog-picture',
  templateUrl: './dialog-picture.component.html',
  styleUrls: ['./dialog-picture.component.css']
})
export class DialogPictureComponent implements OnInit {

  photo:any
  constructor(
    public dialogRef: MatDialogRef<DialogPictureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  getPhotoUrl(photo:any) : string {  
    console.log(photo)
    if (photo != undefined){  
      return "http://farm"+photo.farm+".static.flickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_b.jpg"
    }
     }
  ngOnInit(): void {
  }

}
