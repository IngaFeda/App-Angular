import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.modele';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    //declarations are for non-stadalone components
    declarations: [AppComponent, HeaderComponent, UserComponent],
    bootstrap: [AppComponent],
    //imports are for standalone components & modules
    imports: [BrowserModule, SharedModule, TasksModule],
})

export class AppModule {} 