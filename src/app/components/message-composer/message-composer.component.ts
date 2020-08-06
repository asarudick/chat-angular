import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { RequestState } from 'src/app/types/RequestState';
import { MessageComposerFacade } from './message-composer.facade';

@Component({
  selector: 'app-message-composer',
  templateUrl: './message-composer.component.html',
  styleUrls: ['./message-composer.component.sass']
})
export class MessageComposerComponent implements OnDestroy {
  result$: Observable<RequestState<void>> = this.messageComposerFacade.result$;
  subscriptions: Subscription[] = [];

  sendMessageForm = new FormGroup({
    message: new FormControl('')
  });

  constructor(private messageComposerFacade: MessageComposerFacade) {
    const subscription = this.result$.subscribe(result => {
      !result.pending && !result.error && this.clear();
    });

    this.subscriptions.push(subscription);
  }

  onSubmit($event: Event) {
    this.messageComposerFacade.sendMessage(this.sendMessageForm.value.message);
  }

  clear() {
    this.sendMessageForm.patchValue({ message: '' });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(i => i.unsubscribe());
  }

}
