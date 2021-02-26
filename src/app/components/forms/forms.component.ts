import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormModel } from 'src/app/model/form-model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  model!: FormModel;
  models: FormModel[] = []
  title="inserisci i tuoi dati"
  listTitle="Sono presenti i seguenti contatti"
  constructor() {

   }

  ngOnInit(): void {
    
  }


  save(form: NgForm){
    this.models.push(form.value);
    console.log("value",form.value)
    console.log("model",this.model)
    alert("Form inviato con successo")
    form.reset();

  }
  removeElement(){
    alert("elemento eliminato con successo")
  }
 editElement(){
    alert("elemento modificato con successo")
  }

}
