import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/profile.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience-section" id="experience">
      <div class="container">
        <h2 class="section-title">Professional Experience</h2>
        <div class="timeline">
          <div class="experience-card" *ngFor="let exp of experience; let i = index">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div class="marker-line" *ngIf="i < experience.length - 1"></div>
            </div>
            <div class="card-content">
              <div class="card-header">
                <h3 class="job-title">{{ exp.title }}</h3>
                <div class="company-info">
                  <span class="company">{{ exp.company }}</span>
                  <span class="location">{{ exp.location }}</span>
                </div>
                <span class="duration">{{ exp.duration }}</span>
              </div>
              <ul class="achievements">
                <li *ngFor="let achievement of exp.achievements">{{ achievement }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-section {
      padding: 5rem 1rem;
      background: #f8fafc;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 3rem;
      color: #1e293b;
    }

    .timeline {
      position: relative;
    }

    .experience-card {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      margin-bottom: 3rem;
      position: relative;
    }

    .timeline-marker {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .marker-dot {
      width: 16px;
      height: 16px;
      background: #2563eb;
      border-radius: 50%;
      border: 4px solid white;
      box-shadow: 0 0 0 4px #2563eb;
      z-index: 2;
    }

    .marker-line {
      width: 2px;
      height: 100%;
      background: #e2e8f0;
      position: absolute;
      top: 20px;
      z-index: 1;
    }

    .card-content {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      border: 1px solid #e2e8f0;
      transition: all 0.3s ease;
    }

    .card-content:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
    }

    .card-header {
      margin-bottom: 1.5rem;
    }

    .job-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.5rem;
    }

    .company-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.5rem;
    }

    .company {
      font-weight: 600;
      color: #2563eb;
      font-size: 1.1rem;
    }

    .location {
      color: #64748b;
      font-size: 0.9rem;
    }

    .duration {
      display: inline-block;
      background: #eff6ff;
      color: #2563eb;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .achievements {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .achievements li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.75rem;
      color: #475569;
      line-height: 1.6;
    }

    .achievements li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .experience-card {
        grid-template-columns: auto 1fr;
        gap: 1rem;
      }

      .card-content {
        padding: 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .company-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;
      }
    }
  `]
})
export class ExperienceComponent {
  @Input() experience!: Experience[];
}