import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ScreenerComponent } from './Pages/screener/screener.component';
import { BackTestComponent } from './Pages/back-test/back-test.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MasterService } from './Services/master.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {Table, TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import { OpeningRangeComponent } from './Components/opening-range/opening-range.component';
import { DatePipe } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { CalendarModule } from 'primeng/calendar';
import { ScreenstocksComponent } from './Components/screener/screenstocks/screenstocks.component';
import { Nr7Component } from './Components/screener/nr7/nr7.component';
import { Nr4Component } from './Components/screener/nr4/nr4.component';
import { CprComponent } from './Components/screener/cpr/cpr.component';
import { TechnicalsComponent } from './Components/screener/technicals/technicals.component';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {BadgeModule} from 'primeng/badge';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ScreenerComponent,
    BackTestComponent,
    OpeningRangeComponent,
    ScreenstocksComponent,
    Nr7Component,
    Nr4Component,
    CprComponent,
    TechnicalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutoCompleteModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    MultiSelectModule,
    DropdownModule,
    TableModule,
    ChartModule,
    FieldsetModule,
    CalendarModule,
    PanelModule,
    CardModule,
    BadgeModule,
    ConfirmDialogModule,
    SidebarModule
  ],
  providers: [MasterService,DatePipe,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
