import { Routes } from "@angular/router";
import { CricketersComponent } from "./components/cricketers/cricketers.component";
import { TabComponent } from "./components/tab/tab.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { LayoutComponent } from "./pages/layout/layout.component";

const LAYOUT_ROUTES: Routes = [
    {
        path: 'cricketers',
        component: CricketersComponent
    },
    {
        path: 'exampleTab',
        component: TabComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];


export const APP_ROUTES: Routes = [
    {
        path: 'app',
        component: LayoutComponent,
        children: LAYOUT_ROUTES
    },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];