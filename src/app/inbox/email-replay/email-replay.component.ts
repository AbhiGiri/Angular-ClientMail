import { Component, Input, OnInit } from '@angular/core';
import { EmailResponse } from '../email-response';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-replay',
  templateUrl: './email-replay.component.html',
  styleUrls: ['./email-replay.component.css']
})
export class EmailReplayComponent {
  showModal = false;
  @Input() email: EmailResponse;

  constructor(
    private emailService: EmailService
  ) { }

  ngOnChanges() {
    const text = this.email.text.replace(/\n/gi, '\n> ')

    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n--------${this.email.from} wrote:\n> ${text}`
    }
  }

  onSubmit(email: EmailResponse) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    })
  }
}
