import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education } from '../../models/profile.interface';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="education-section" id="education">
      <div class="container">
        <h2 class="section-title">Education & Achievements</h2>
        
        <div class="content-grid">
          <div class="education-card">
            <div class="card-header">
              <h3 class="degree">{{ education.degree }}</h3>
              <div class="institution-info">
                <span class="institution">{{ education.institution }}</span>
                <span class="edu-location">{{ education.location }}</span>
              </div>
              <div class="edu-meta">
                <span class="duration">{{ education.duration }}</span>
                <span class="gpa">GPA: {{ education.gpa }}</span>
              </div>
            </div>
          </div>

          <div class="achievements-card">
            <h3 class="achievements-title">
              <span class="title-icon">🏆</span>
              Certifications & Achievements
            </h3>
            <ul class="achievements-list">
              <li *ngFor="let achievement of achievements">{{ achievement }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .education-section {
      padding: 5rem 1rem;
      background: white;
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

    .content-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .education-card,
    .achievements-card {
      background: #f8fafc;
      border-radius: 16px;
      padding: 2rem;
      border: 1px solid #e2e8f0;
      transition: all 0.3s ease;
    }

    .education-card:hover,
    .achievements-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
    }

    .degree {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 1rem;
    }

    .institution-info {
      margin-bottom: 1rem;
    }

    .institution {
      display: block;
      font-weight: 600;
      color: #2563eb;
      font-size: 1.1rem;
      margin-bottom: 0.25rem;
    }

    .edu-location {
      color: #64748b;
      font-size: 0.9rem;
    }

    .edu-meta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .duration,
    .gpa {
      background: #eff6ff;
      color: #2563eb;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .gpa {
      background: #ecfdf5;
      color: #059669;
    }

    .achievements-title {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 1.5rem;
    }

    .title-icon {
      font-size: 1.5rem;
    }

    .achievements-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .achievements-list li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 1rem;
      color: #475569;
      line-height: 1.6;
      font-weight: 500;
    }

    .achievements-list li::before {
      content: '🎯';
      position: absolute;
      left: 0;
    }

    @media (max-width: 768px) {
      .content-grid {
        grid-template-columns: 1fr;
      }

      .education-card,
      .achievements-card {
        padding: 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .edu-meta {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `]
})
export class EducationComponent {
  @Input() education!: Education;
  @Input() achievements!: string[];
}