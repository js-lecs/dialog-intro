
import { CricketersComponent } from '../components/cricketers/cricketers.component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CricketerViewComponent } from '../components/cricketers/cricketer-view/cricketer-view.component';
import { Observable } from 'rxjs/Observable';

export class CricketerUnsavedGurad implements CanDeactivate<CricketersComponent> {
    canDeactivate(component: CricketersComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        if (component.isDirty()) {
            return confirm('You have unsaved changes! DO you want to continue?');
        }
        return true;

    }
}
