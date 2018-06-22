import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Hike } from './hike/hike';
import { HikeService } from './hike/hike.service';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
}
