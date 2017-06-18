import {Component} from 'angular2/core';
import {VoterComponent} from './voter.component';

@Component({
    selector: 'my-app',
    template: `
    <vote>
      [voteCount]="post.voteCount"
      [myvote]="post.myvote"
      (vote)="onVote($event)">
    </vote>
    `,
    directives : [VoterComponent]
})
export class AppComponent {
     post = {
        voteCount:0,
        myvote:0
     }
     onVote($event){
         console.log($event);
     }
}