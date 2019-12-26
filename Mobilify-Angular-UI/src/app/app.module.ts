import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../componentmodule/login/login.component';
import { LoginApiService } from './login-api.service';
import { DashboardComponent } from '../componentmodule/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { AccountsComponent } from './accounts/accounts.component';
import { ConfirmpopupComponent } from './confirmpopup/confirmpopup.component'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AccountsComponent,
    ConfirmpopupComponent
  ],

  entryComponents: [ConfirmpopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatCarouselModule.forRoot()
  ],
  providers: [LoginApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
