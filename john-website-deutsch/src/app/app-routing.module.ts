import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/sections/home/home.component';
import { AboutComponent } from './Components/sections/about/about.component';
import { PortfolioComponent } from './Components/sections/portfolio/portfolio.component';
import { TransitionStates } from './Models/TransitionStates';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: TransitionStates.HOMEPAGE } },
  { path: 'ueber', component: AboutComponent, data: { animation: TransitionStates.ABOUTPAGE } },
  { path: 'portfolio', component: PortfolioComponent, data: { animation: TransitionStates.PORTFOLIOPAGE } },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
