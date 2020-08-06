import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/types/Message';
import { Room } from 'src/app/types/Room';
import { User } from 'src/app/types/User';
import { MessagesFacade } from './messages.facade';

export enum Reaction {
  Default,
  Frowny
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnChanges {
  // Using an Input for messages, so we leverage ngOnChanges to scroll the view.
  @Input() messages: Message[];

  selectedRoom$: Observable<Room> = this.messagesFacade.selectedRoom$;
  user$ : Observable<User> = this.messagesFacade.user$;

  constructor(
    private messagesFacade: MessagesFacade,
    private elementRef: ElementRef
  ) {}

  getMessageId(index: number, item: Message) {
    return item.id
  }

  // IDEA: Disable upon scroll input to give user control.
  ngOnChanges(changes) {
    setTimeout(() => this.elementRef.nativeElement.scrollBy({top: this.elementRef.nativeElement.scrollHeight, left: 0, behavior: 'auto'}));
  }

  setReaction(message) {
    const reaction = (message.reaction === Reaction.Default) ? Reaction.Frowny : Reaction.Default;
    this.messagesFacade.setReaction(message, reaction);
  }

  getReaction(message: Message) {
    return (message.reaction === Reaction.Default) ? Reaction.Default : Reaction.Frowny;
  }

}
