import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Services/apiservice.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-kbc-page',
  templateUrl: './kbc-page.page.html',
  styleUrls: ['./kbc-page.page.scss'],
})
export class KbcPagePage implements OnInit {

  constructor(private service : ApiserviceService, private alert : AlertController, private router:Router) { }
  id :number = 1;
  response =null; 
  result = null;
  answerStatus=null;
  score =0;
  statusMessage="";
 
  async openAlert(){

    const alerttag = await this.alert.create({
      header:"KBC",
      subHeader:"KBC Game",
      message: `${this.statusMessage}. You have earned ${this.score}₹`,
      buttons:[
        {
          text:"Close",
          role:'close',
          cssClass:'primary',
          handler:()=>{
            this.exitQuiz();
          }
        }
      ]
    });
    await alerttag.present();
  }

  ngOnInit() {
    this.service.getQuestion(this.id).subscribe(response=>{
      this.response = response;
      console.log(response)
    });
  }

  loadQuestion(){
    this.id++;
    this.service.getQuestion(this.id).subscribe(response=>{
      this.response = response;
      console.log(this.response.testEnded);
      if(Boolean(this.response.testEnded==true)){
        this.statusMessage = "You have reached end of the game. Thank you for playing with us!!!"
        this.openAlert();
      }
      console.log(response)
    });
  }

  getName(option){
    this.service.verifyAnswer(this.id,option).subscribe(result=>{
      this.result = result;
      if(Boolean(this.result.response)==true){
        this.score=this.score+10000;
        this.answerStatus = "Correct Answer";
      }else{
        this.answerStatus="Incorrect Answer";
        this.score=this.score-10000;
        if(this.score<0){
          this.score=0;
        }
        this.statusMessage = "You have choosen the wrong option."
        this.openAlert();
      }
    })
  }

  exitQuiz()
  {
    this.result=0;
    this.router.navigate(['/start-page']);
    console.log(this.result);
  }
}
