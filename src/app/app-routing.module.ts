import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { VerPaisComponent } from '@pages/ver-pais/ver-pais.component';
import { PorPaisComponent } from '@pages/por-pais/por-pais.component';
import { PorRegionComponent }  from '@pages/por-region/por-region.component';
import { PorCapitalComponent } from '@pages/por-capital/por-capital.component';

const routes:Routes = [
    {
        path:'', 
        component: PorPaisComponent,
        pathMatch:'full'
    },
    {
        path:'region', 
        component: PorRegionComponent,
    },
    {
        path:'capital', 
        component: PorCapitalComponent,
    },
    {
        path:'pais/:id', 
        component: VerPaisComponent,
    }
    ,
    {
        path:'**', 
        redirectTo: '',
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}