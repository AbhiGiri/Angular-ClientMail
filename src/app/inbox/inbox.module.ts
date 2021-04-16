import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { InboxRoutingModule } from './inbox-routing.module';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplayComponent } from './email-replay/email-replay.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { EmailFormComponent } from './email-form/email-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InboxHomeComponent,
    EmailCreateComponent,
    EmailReplayComponent,
    EmailIndexComponent,
    EmailShowComponent,
    NotFoundComponent,
    EmailFormComponent],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class InboxModule { }
