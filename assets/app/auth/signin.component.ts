import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector:'app-signup',
    templateUrl : './signin.component.html'
})
export class SigninComponent{
    myform: FormGroup;

    onSubmit(){
        console.log(this.myform);
        this.myform.reset();
    }

    ngOnInit(){
        this.myform = new FormGroup({
            email: new FormControl(null,[
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
            ),
            password: new FormControl(null,Validators.required),
        });
    }
}