import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlataformDetectorService } from 'src/app/core/plataformDetector/plataformDetectorService';

@Component({
    templateUrl: './signin.component.html'
})
export class SiginComponent implements OnInit{

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private plataformDetector: PlataformDetectorService){}


    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['',Validators.required],
            password: ['',Validators.required]
        })
    }

    login(){
        console.log('vai autenticar');
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.auth.authenticate(userName,password).subscribe(()=> this.router.navigate(['user',userName]), err =>{ 
            console.log('erro');
            this.loginForm.reset();
            this.plataformDetector.isPlatformBrowser &&
              this.userNameInput.nativeElement.focus();
        });
    }



}