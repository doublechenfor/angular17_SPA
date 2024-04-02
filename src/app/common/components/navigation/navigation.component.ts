import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  constructor(
    private router: Router
  ){}
  public navigationTabs: NavItem[] = [
    {
      label: '首页',
      data: 'main',
      linkTo: 'main'
    },
    {
      label: '免费专区',
      data: 'free',
      linkTo: 'free'
    },
    {
      label: '电视剧',
      data: 'tv',
      linkTo: 'tv'
    },
    {
      label: '会员中心',
      data: 'memberShip',
      linkTo: 'memberShip'
    }
  ]

  navTo($: any, item: NavItem ) {
    this.router.navigate([item.linkTo, {}])
  }
}


interface NavItem {
  label: string,
  data: string,
  linkTo: string
}