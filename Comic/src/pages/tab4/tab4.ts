import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the Tab4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab4',
  templateUrl: 'tab4.html',
})
export class Tab4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fileChooser: FileChooser, private file: File) {
  }

  choose1(){
    this.fileChooser.open().then((url)=>{
        alert(url);

        this.file.resolveLocalFilesystemUrl(url).then((newUrl)=>{
          alert(JSON.stringify(newUrl));

          let dirPath = newUrl.nativeURL;
          let dirPathSegments = dirPath.split('/')
          dirPathSegments.pop()
          dirPath = dirPathSegments.join('/')

          this.file.readAsArrayBuffer(dirPath, newUrl.name).then(async (buffer)=>{
           await this.upload(buffer, newUrl.name);
          })
        })
    })

  }

  async upload(buffer,name){
    let blob = new Blob([buffer], { type: "Cartoon/jpeg"});

    let storage = firebase.storage();

    storage.ref('Cartoon/' + name).put(blob).then((d)=>{
      alert("Done");
    }).catch((error)=>{
      alert(JSON.stringify(error))
    })
  }

}
 