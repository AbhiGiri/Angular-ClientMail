import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlaceholderComponent } from "../index/placeholder/placeholder.component";
import { InboxHomeComponent } from "./inbox-home/inbox-home.component";
import { EmailShowComponent } from "../inbox/email-show/email-show.component";
import { EmailResolverService } from "./email-resolver.service";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: InboxHomeComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: ':id',
        component: EmailShowComponent,
        resolve: {
          email: EmailResolverService
        }
      },

      { path: '', component: PlaceholderComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule {}
