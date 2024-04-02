import { Routes } from '@angular/router';
import { FreeComponent } from './common/components/free/free.component';
import { MainComponent } from './common/components/main/main.component';
import { MemberShipComponent } from './common/components/member-ship/member-ship.component';
import { NavigationComponent } from './common/components/navigation/navigation.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { TvComponent } from './common/components/tv/tv.component';

export const routes: Routes = [
    { path: 'navigation', component: NavigationComponent },
    { path: 'free',      component: FreeComponent },
    {
        path: 'tv',
        component: TvComponent,
        data: { title: 'Heroes List' }
    },
    {   path: 'member-ship',
        component: MemberShipComponent,
        pathMatch: 'full'
    },
    { 
        path: 'main', 
        component: MainComponent 
    },
    {
        path: '', 
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
