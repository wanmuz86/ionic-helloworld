import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

// How to create a variable
	count = 0;
	message = ""

  constructor(public alertController: AlertController) {}

  incrementPressed(){

  	// to call global variable add this keyword
  	// no need to add this for local variable

  	this.count++
  	this.message = ""
  }
  decrementPressed(){

  	// if else same as in other language 
  	// remember need to use this for global variable
  	if (this.count == 0){
  		this.message = "Number cannot be less than 0"

  	}
  	else {
  		this.count--
  	}
  
  }

  resetPressed(){
  	this.count = 0
  	this.message = ""
  }

  async alertPressed(){
  	 const alert = await this.alertController.create({
      header: 'Hello World',
      message: 'Welcome to my app',
      buttons: ['Cancel', 'OK']
    });

    await alert.present();
  }



}
