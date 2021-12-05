import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { MaterialAllComponentsModule } from './material-all-components.module';
import { BooksService } from './books.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialAllComponentsModule,
    BrowserAnimationsModule
    ],
  declarations: [AppComponent, MyBooksComponent],
  bootstrap: [AppComponent],
  providers: [BooksService]
})
export class AppModule { }
