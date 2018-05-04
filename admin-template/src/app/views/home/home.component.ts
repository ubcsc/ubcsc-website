import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
  public homePagePic: object[] = [ 
      { pic: 'assets/img/avatars/pic1.jpg' },
      { pic: 'assets/img/avatars/pic3.jpg' },
      { pic: 'assets/img/avatars/pic4.jpg' }
    ];
  public announcements: object[] = [
      { news: 'Departmental Calender'},
      { news: 'CA TimeTable '},
      { news: 'List of Graduating students'}
  ];
  public hodmessage: string = 'This is the HOD message.';
  public contactus: object = {number: '785857445', email: 'ubcss@gmail.com'};  

  public deletePictureModal;
  public deleteAnnouncementModal;
  public saveAnnouncementModal;
  public saveHODMessageModal;
  public saveContactUSModal;

  constructor() { }

      ngOnInit() {

    }
}
