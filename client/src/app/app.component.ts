import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Page {tooltip: string, icon: string, route: string};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  pages: Page[] = [
    {
      tooltip: "Home",
      icon: "home",
      route: "home"
    },
    {
      tooltip: "Resume",
      icon: "insert_drive_file",
      route: "resume"
    },
    {
      tooltip: "Projects",
      icon: "playlist_add_check_circle",
      route: "projects"
    },
    {
      tooltip: "Like",
      icon: "favorite",
      route: ""
    },
    {
      tooltip: "Share",
      icon: "share",
      route: "",
    },
  ]

  constructor(private router: Router) {

  }

  route(page: Page) {
    this.router.navigate([page.route]);
  }
}
