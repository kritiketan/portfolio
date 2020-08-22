import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';

import { SectionsModule } from '../sections/sections.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SectionsModule
    ],
    declarations: [ LandingPageComponent ],
    exports:[ LandingPageComponent ],
    providers: []
})
export class LandingPageModule { }
