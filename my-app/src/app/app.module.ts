
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input"
import {MatSelectModule} from "@angular/material/select"
import {MatAutocompleteModule} from "@angular/material/autocomplete"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatMenuModule} from "@angular/material/menu"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import {MatBadgeModule} from "@angular/material/badge"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatListModule} from "@angular/material/list"
import {MatCardModule} from "@angular/material/card"
import {MatSliderModule} from "@angular/material/slider"
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDatepickerModule} from "@angular/material/datepicker"
import {MatNativeDateModule} from "@angular/material/core"
import {MatRadioModule} from "@angular/material/radio"
import {MatCheckboxModule} from "@angular/material/checkbox"
import {MatDialogModule} from "@angular/material/dialog"
import {MatGridListModule} from '@angular/material/grid-list';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { MenuComponent } from './Component/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopComponent } from './Component/shop/shop.component';
import { CategorizeComponent } from './Component/categorize/categorize.component';
import { HomeComponent } from './Component/home/home.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { AboutComponent } from './Component/about/about.component';
import { OthersComponent } from './Component/others/others.component';


















@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        MenuComponent,
        ShopComponent,
        CategorizeComponent,
        HomeComponent,
        DashboardComponent,
        AboutComponent,
        OthersComponent,
        
     
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatBadgeModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatSliderModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatCheckboxModule,
        MatDialogModule,
        MatGridListModule,
        NgbModule,
        MatProgressBarModule,
        MatExpansionModule,
        CdkAccordionModule,
 
    ]
})
export class AppModule {

 }
