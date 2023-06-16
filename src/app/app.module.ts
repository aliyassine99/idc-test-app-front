import { NgModule } from '@angular/core';
import {DatePipe, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartModule} from "primeng/chart";
import {AppSidebarComponent} from "./sidebar/app.sidebar.component";
import {BrowserModule} from "@angular/platform-browser";
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import {SidebarModule} from "primeng/sidebar";
import { FileUploadComponent } from './file-upload/file-upload.component';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MenuModule} from "primeng/menu";
import {Toast, ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PaginatorModule} from "primeng/paginator";
import {FileUploadModule} from "primeng/fileupload";

@NgModule({
    declarations: [
        AppComponent,AppSidebarComponent, DashboardComponent, AuthComponent, SignUpComponent, SignInComponent, FileUploadComponent, NotFoundComponent, HomeComponent, BooksComponent,NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ChartModule,
        SidebarModule,
        ButtonModule,
        DialogModule,
        MenuModule,
        ToastModule,
        ConfirmDialogModule,
        ReactiveFormsModule,
        PaginatorModule,
        FileUploadModule


    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },

         DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
