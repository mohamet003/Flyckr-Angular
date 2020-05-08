import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { DialogPictureComponent } from './dialog-picture/dialog-picture.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Flickr';
  tag:string
  key = '21efe1bd2789047e1433205a539c8b6e'
  photos:any
  photo_courante:any

  constructor(private http: HttpClient,public dialog: MatDialog) { }

  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

    openDialog(photo:any): void {
      const dialogRef = this.dialog.open(DialogPictureComponent, {
        width: '1200px',
        data: {photo: photo}
      });
  /*
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.tag = result;
      });
      */
    }

    getPhotos(): Promise<any> {
    let url = "https://api.flickr.com/services/rest?nojsoncallback=1&method=flickr.photos.search&api_key="+this.key+
    "&tags="+this.tag+"&format=json";
    return this.http.get(url)
    .toPromise()
    .catch(this.handleError);
    }

    nouveau_mot_cle() : void {
      this.getPhotos().then(resp => this.photos = resp.photos);
    }

    getPhotoUrl(photo : any) : string {
      return "http://farm"+photo.farm+".static.flickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_b.jpg"
    }

     getCurentPhoto(photo : any){
        this.photo_courante = photo
     }

}
