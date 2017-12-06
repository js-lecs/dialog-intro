import { Routes } from "@angular/router";
import { CricketersComponent } from "./components/cricketers/cricketers.component";
import { TabComponent } from "./components/tab/tab.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { LayoutComponent } from "./pages/layout/layout.component";
import { Tab1Component } from "./components/tab/tab1/tab1.component";
import { Tab2Component } from "./components/tab/tab2/tab2.component";



const TAB_ROUTES: Routes = [
    {
        path: 'tab1',
        component: Tab1Component
    },
    {
        path: 'tab2',
        component: Tab2Component
    },
    {
        path:'',
        redirectTo:'/app/exampleTab/tab1',
        pathMatch:'full'
    }

];

const LAYOUT_ROUTES: Routes = [
    {
        path: 'cricketers',
        component: CricketersComponent
    },
    {
        path: 'exampleTab',
        component: TabComponent,
        children: TAB_ROUTES
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