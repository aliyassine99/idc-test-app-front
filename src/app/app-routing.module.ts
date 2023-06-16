import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {HomeComponent} from "./home/home.component";
import {BooksComponent} from "./books/books.component";
import {NotFoundComponent} from "./not-found/not-found.component";


const routes: Routes = [
    {path: "", redirectTo: "sign-in", pathMatch: "full"},

    {path: "home",component: HomeComponent, children: [{

        path: "dashboard", component: DashboardComponent

        },
            {

                path: "books", component: BooksComponent

            },{

                path: "upload-file", component: FileUploadComponent

            }]},

    {path: "sign-in", component: SignInComponent},
    {path: "sign-up", component: SignUpComponent},
    {path: "**", component: NotFoundComponent}

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
