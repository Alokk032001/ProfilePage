import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../models/profile.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact-section" id="contact">
      <div class="container">
        <h2 class="section-title">Let's Connect</h2>
        <p class="section-subtitle">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-icon">📧</div>
            <h3 class="contact-title">Email</h3>
            <a [href]="'mailto:' + contact.email" class="contact-link">
              {{ contact.email }}
            </a>
          </div>

          <div class="contact-card">
            <div class="contact-icon">📱</div>
            <h3 class="contact-title">Phone</h3>
            <a [href]="'tel:' + contact.phone" class="contact-link">
              {{ contact.phone }}
            </a>
          </div>

          <div class="contact-card">
            <div class="contact-icon">💼</div>
            <h3 class="contact-title">LinkedIn</h3>
            <a [href]="contact.linkedin" target="_blank" class="contact-link">
              Connect with me
            </a>
          </div>

          <div class="contact-card">
            <div class="contact-icon">💻</div>
            <h3 class="contact-title">GitHub</h3>
            <a [href]="contact.github" target="_blank" class="contact-link">
              View my code
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 5rem 1rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .section-subtitle {
      font-size: 1.2rem;
      margin-bottom: 3rem;
      color: #e0e7ff;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .contact-card {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      padding: 2rem;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    .contact-card:hover {
      transform: translateY(-8px);
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .contact-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      display: block;
    }

    .contact-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }

    .contact-link {
      color: #e0e7ff;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .contact-link:hover {
      color: white;
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .section-title {
        font-size: 2rem;
      }

      .contact-grid {
        grid-template-columns: 1fr;
      }

      .contact-card {
        padding: 1.5rem;
      }
    }
  `]
})
export class ContactComponent {
  @Input() contact!: Contact;
}