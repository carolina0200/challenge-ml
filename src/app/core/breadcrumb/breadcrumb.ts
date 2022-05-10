import { BehaviorSubject } from 'rxjs';

export class BreadcrumbState {
    public static loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}