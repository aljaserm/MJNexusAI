import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { CustomMaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./TodoComponent/todo.component";

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
