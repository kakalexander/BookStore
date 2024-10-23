import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './webSite/home/home.component';
import { StoreComponent } from './webSite/store/store.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'store',
                component: StoreComponent,
            },

        ]

    }];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
