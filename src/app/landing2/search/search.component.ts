import { MessagesService } from './../../services/messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public messages = [];
  public text = '7/1';

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.messages = this.messagesService.getMessagesByDate('7/2');
  }

  onClick() {
    this.messages = this.messagesService.getMessagesByDate(this.text);
  }
}
