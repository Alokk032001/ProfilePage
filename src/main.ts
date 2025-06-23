import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { Profile } from './models/profile.interface';
import { ProfileService } from './services/profile.service';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent
  ],
  template: `
    <div class="app">
      <nav class="navbar">
        <div class="nav-container">
          <div class="nav-brand">{{ profile.name }}</div>
          <ul class="nav-menu">
            <li><a href="#experience" class="nav-link">Experience</a></li>
            <li><a href="#skills" class="nav-link">Skills</a></li>
            <li><a href="#projects" class="nav-link">Projects</a></li>
            <li><a href="#education" class="nav-link">Education</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      <app-hero 
        [name]="profile.name"
        [title]="profile.title"
        [contact]="profile.contact">
      </app-hero>

      <app-experience [experience]="profile.experience"></app-experience>
      
      <app-skills [technologies]="profile.technologies"></app-skills>
      
      <app-projects [projects]="profile.projects"></app-projects>
      
      <app-education 
        [education]="profile.education"
        [achievements]="profile.achievements">
      </app-education>
      
      <app-contact [contact]="profile.contact"></app-contact>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
    }

    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-brand {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e293b;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 2rem;
    }

    .nav-link {
      color: #64748b;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-link:hover {
      color: #2563eb;
    }

    @media (max-width: 768px) {
      .nav-menu {
        display: none;
      }

      .nav-container {
        justify-content: center;
      }
    }
  `]
})
export class App implements OnInit {
  profile!: Profile;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
}

bootstrapApplication(App);