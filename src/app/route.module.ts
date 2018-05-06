import { LoadingComponent } from './loading/loading.component';
import { AddEventComponent } from './addEvent/addEvent.component';
import {AddPlaceComponent} from './addPlace/addPlace.component';
import {HomeComponent} from './home/home.component';
import {Routes} from '@angular/router';

export const appRoutes: Routes = [

    { path: 'loading', component: LoadingComponent },
    {
        path: 'place',
        component: HomeComponent,
        children: [
            {
                path: 'add',
                component: AddPlaceComponent
            },
            {
                path: 'addEvent/:id',
                component: AddEventComponent
            }
        ]
    },
    { path: '**', redirectTo: 'place' }
];
