import {Component} from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
    <header class="row">
        <nav class="col-md-8 col-md-offset-2">
            <ul class="nav nav-pills">
                <!-- routerLinkActive will apply the class to elemnt and childs when link is active -->
                <li routerLinkActive="active" ><a [routerLink]="['/messages']" href="">Messsenger</a></li>
                <li routerLinkActive="active" ><a [routerLink]="['/auth']" href="">Authentication</a></li>
            </ul>
        </nav>
    </header>
    `
})
export class HeaderComponent{

}