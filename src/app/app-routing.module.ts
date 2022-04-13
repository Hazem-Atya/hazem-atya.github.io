import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {AboutComponent} from "./pages/about/about.component";
import {ResumeComponent} from "./pages/resume/resume.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
