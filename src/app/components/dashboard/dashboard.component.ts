import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
