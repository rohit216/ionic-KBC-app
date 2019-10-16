import { Component, OnInit, NgModule } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx'
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.page.html',
  styleUrls: ['./start-page.page.scss'],
})
export class StartPagePage implements OnInit {

  constructor(private nativeAudio :NativeAudio, public platform : Platform) { 
    this.platform.ready().then(()=>{
      this.nativeAudio.preloadSimple('uniqueId1','../assets/audio/videoplayback.mp3').then((success)=>{
        console.log(success)
      },(error)=>{
        console.log(error);
      })
    })

  }

  ionViewDidLoad() {
    setTimeout(()=>{
      this.playAudio();
    },2000)
  }

  playAudio(){
    this.nativeAudio.play('uniqueId1').then((success)=>{
      console.log("success playing");
    },(error)=>{
      console.log(error);
    });

  }
  ngOnInit() {
  
  }
}
