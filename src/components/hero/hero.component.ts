import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../models/profile.interface';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-name">{{ name }}</h1>
          <h2 class="hero-title">{{ title }}</h2>
          <p class="hero-location">📍 {{ contact.location }}</p>
          <div class="hero-links">
            <a [href]="'mailto:' + contact.email" class="hero-link">
              <span class="link-icon">✉️</span>
              Email
            </a>
            <a [href]="contact.linkedin" target="_blank" class="hero-link">
              <span class="link-icon">💼</span>
              LinkedIn
            </a>
            <a [href]="contact.github" target="_blank" class="hero-link">
              <span class="link-icon">💻</span>
              GitHub
            </a>
          </div>
        </div>
        <div class="hero-avatar">
          <div class="avatar-circle">
            <span class="avatar-initials">{{ getInitials() }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      padding: 2rem 1rem;
      position: relative;
      overflow: hidden;
    }

    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.5;
    }

    .hero-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-content {
      color: white;
    }

    .hero-name {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      line-height: 1.1;
      background: linear-gradient(45deg, #ffffff, #e0e7ff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: fadeInUp 0.8s ease-out;
    }

    .hero-title {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 1rem;
      color: #e0e7ff;
      animation: fadeInUp 0.8s ease-out 0.2s both;
    }

    .hero-location {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      color: #cbd5e1;
      animation: fadeInUp 0.8s ease-out 0.4s both;
    }

    .hero-links {
      display: flex;
      gap: 1rem;
      animation: fadeInUp 0.8s ease-out 0.6s both;
    }

    .hero-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50px;
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .hero-link:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }

    .link-icon {
      font-size: 1.2rem;
    }

    .hero-avatar {
      animation: fadeInRight 0.8s ease-out 0.8s both;
    }

    .avatar-circle {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: linear-gradient(45deg, #ffffff, #e0e7ff);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      border: 4px solid rgba(255, 255, 255, 0.2);
    }

    .avatar-initials {
      font-size: 4rem;
      font-weight: 700;
      color: #4f46e5;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @media (max-width: 768px) {
      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }

      .hero-name {
        font-size: 2.5rem;
      }

      .hero-links {
        flex-direction: column;
        align-items: center;
      }

      .avatar-circle {
        width: 150px;
        height: 150px;
      }

      .avatar-initials {
        font-size: 3rem;
      }
    }
  `]
})
export class HeroComponent {
  @Input() name!: string;
  @Input() title!: string;
  @Input() contact!: Contact;

  getInitials(): string {
    return this.name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  }
}