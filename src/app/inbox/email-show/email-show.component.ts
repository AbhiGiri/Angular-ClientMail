import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EmailResponse } from '../email-response';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  @Input() email: EmailResponse
  constructor(
    // private emailService: EmailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //   this.route.params.subscribe(({id}) => {
    //     this.emailService.getEmail(id).subscribe(email => {
    //     console.log(email);
    //   })
    // });

  //   this.route.params.pipe(
  //       switchMap(({ id }) => {
  //         return this.emailService.getEmail(id)
  //       })
  //     )
  //     .subscribe(email => {
  //       this.email = email;
  //     });

    this.route.data.subscribe(({email}) => {
      this.email = email
    })
   }

}
