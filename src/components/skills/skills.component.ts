import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills-section" id="skills">
      <div class="container">
        <h2 class="section-title">Technologies & Skills</h2>
        
        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="category-title">
              <span class="category-icon">💻</span>
              Languages
            </h3>
            <div class="skill-tags">
              <span class="skill-tag" *ngFor="let lang of technologies.languages">
                {{ lang }}
              </span>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="category-title">
              <span class="category-icon">⚛️</span>
              Frameworks & Libraries
            </h3>
            <div class="skill-tags">
              <span class="skill-tag" *ngFor="let framework of technologies.frameworks">
                {{ framework }}
              </span>
            </div>
          </div>

          <div class="skill-category">
            <h3 class="category-title">
              <span class="category-icon">🛠️</span>
              Tools & Others
            </h3>
            <div class="skill-tags">
              <span class="skill-tag" *ngFor="let tool of technologies.tools">
                {{ tool }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
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

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .skill-category {
      background: #f8fafc;
      border-radius: 16px;
      padding: 2rem;
      border: 1px solid #e2e8f0;
      transition: all 0.3s ease;
    }

    .skill-category:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
    }

    .category-title {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 1.5rem;
    }

    .category-icon {
      font-size: 1.5rem;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .skill-tag {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.3s ease;
      cursor: default;
    }

    .skill-tag:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }

    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }

      .skill-category {
        padding: 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class SkillsComponent {
  @Input() technologies!: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
}