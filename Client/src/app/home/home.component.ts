import { Component, OnInit } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
interface ArticleListing {
	title: String;
	author: String;
	date: String;
	contentPreview: String,
	image:String
}
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
	articles: Array<ArticleListing>;

	constructor() {

		this.articles = [
			{
				title: 'hello',
				author: 'zane ervin',
				date: '12/12/2019',
				contentPreview: 'hello my name is zane and this is my article',
				image:'./../../assets/img/hello.jpg'
			},
			{
				title: 'How to make an api',
				author: 'zane ervin',
				date: '12/12/2019',
				contentPreview: 'nah dont do this coding is boring',
				image:'./../../assets/img/What-is-an-API.png'

			}
		]
	}

	ngOnInit() {
	}

}
