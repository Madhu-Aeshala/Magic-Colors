import { Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ColourMenuComponent } from './colour-menu/colour-menu.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { FourthpageComponent } from './fourthpage/fourthpage.component';
import { ResultpageComponent } from './resultpage/resultpage.component';

export const routes: Routes = [
    {path:'',component:ColourMenuComponent},
    {path:"first",component:FirstpageComponent},
    {path:"second",component:SecondpageComponent},
    {path:"third",component:ThirdpageComponent},
    {path:"fourth",component:FourthpageComponent},
    {path:"result",component:ResultpageComponent}

];
