import { Component, OnInit, Input} from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
  providers: [UserService]
})
export class ReposComponent implements OnInit{
 userRepos:[];
  constructor(private userService: UserService, private route: ActivatedRoute, 
    private router: Router, private userComponent:UserComponent) {
    
  }
  ngOnInit(): void {
  this.userRepos = this.userComponent.repos;
  }

}


  


