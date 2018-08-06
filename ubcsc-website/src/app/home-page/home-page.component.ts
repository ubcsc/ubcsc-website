import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  titleNameUb = 'University of Buea';

  titleNameDpt = 'Department of Computer Science';

  aboutDepartmentMessage = 'Some Department Message - Lorem ipsum \
                            dolor sit amet consectetur adipiscing elit \
                            himenaeos, aenean massa habitant magna donec \
                            per nibh ante, tortor laoreet metus quis arcu \
                            vestibulum ornare. Vivamus iaculis tellus \
                            ligula, eu viverra arcu luctus ut. Praesent \
                            non pellentesque magna';

  studies: Study[] = new Array();
  activities: Activity[] = new Array();

  constructor() {

    // We define some basic three studies
    // usually info should be fetch by a service
    this.studies[0] = new Study();
    this.studies[1] = new Study();
    this.studies[2] = new Study();

    this.studies[0].title = 'Artifical Inteligenc - Lorem ipsum';
    this.studies[1].title = 'Robotics and Mechanics - Lorem ipsum';
    this.studies[2].title = 'Data Analysis - Lorem ipsum';

    this.studies[0].decription = 'Study0 Description - Lorem ipsum \
                            dolor sit amet consectetur adipiscing elit \
                            himenaeos, aenean massa habitant magna donec \
                            per nibh ante, tortor laoreet metus quis arcu';
    this.studies[1].decription = 'Study1 Description - Lorem ipsum \
                            dolor sit amet consectetur adipiscing elit \
                            himenaeos, aenean massa habitant magna donec \
                            per nibh ante, tortor laoreet metus quis arcu';
    this.studies[2].decription = 'Study2 Description - Lorem ipsum \
                            dolor sit amet consectetur adipiscing elit \
                            himenaeos, aenean massa habitant magna donec \
                            per nibh ante, tortor laoreet metus quis arcu';
    this.studies[0].image = '../assets/img/study0.jpeg';
    this.studies[1].image = '../assets/img/study1.jpeg';
    this.studies[2].image = '../assets/img/study2.jpeg';

    this.activities[0] = new Activity();
    this.activities[1] = new Activity();
    this.activities[2] = new Activity();

    this.activities[0].type = TypeOfActivity.SPORT;
    this.activities[1].type = TypeOfActivity.SOCIALS;
    this.activities[2].type = TypeOfActivity.ACEDEMICS;

    this.activities[0].title = 'Activity0 - Lorem ipsum';
    this.activities[1].title = 'Activity1 - Lorem ipsum';
    this.activities[2].title = 'Activity2 - Lorem ipsum';

    this.activities[0].decription = 'Activity0 Description - Lorem ipsum \
                            dolor sit amet consectetur adipiscing elit \
                            himenaeos, aenean massa habitant magna donec \
                            per nibh ante, tortor laoreet metus quis arcu';
    this.activities[1].decription = 'Activity1 Description - Lorem ipsum \
                            dolor sit amet consectetur adipiscing elit \
                            himenaeos, aenean massa habitant magna donec \
                            per nibh ante, tortor laoreet metus quis arcu';
    this.activities[2].decription = 'Activity2 Description - Lorem ipsum \
                            dolor sit amet consectetur adipiscing elit \
                            himenaeos, aenean massa habitant magna donec \
                            per nibh ante, tortor laoreet metus quis arcu';

    this.activities[0].image = '../assets/img/activity0.jpeg';
    this.activities[1].image = '../assets/img/activity1.jpeg';
    this.activities[2].image = '../assets/img/activity2.jpeg';

  }

  ngOnInit() {
  }

}
