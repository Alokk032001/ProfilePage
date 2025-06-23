import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  getProfile(): Profile {
    return {
      name: 'Alok Kumar Sahu',
      title: 'Associate Software Engineer',
      contact: {
        email: 'alokkumarofficial03@gmail.com',
        phone: '9861195780',
        location: 'Hyderabad, India',
        linkedin: 'https://linkedin.com/in/alok-kumar-sahu',
        github: 'https://github.com/AlokGithub'
      },
      experience: [
        {
          title: 'Associate Software Engineer',
          company: 'Swimlane',
          location: 'Hyderabad, TG',
          duration: 'Mar 2023 – Present',
          achievements: [
            'Angular-engineered enterprise-level front-end applications showcasing deep expertise in JavaScript, HTML5, and SCSS',
            'Built and launched the Color Coding feature, enabling conditional highlights across datasets, adopted by 80% of users for improved data clarity',
            'Led development of a centralized Asset Management module with multi-tenant CRUD via connectors and real-time WebSocket integration',
            'Reduced manual effort by 40%, adopted by 75%+ of users, and improved data access by 30% with cascading filters',
            'Contributed to code reviews, performance optimizations, and reusable component development'
          ]
        },
        {
          title: 'Associate Software Engineer',
          company: 'PhableCare',
          location: 'Bangalore, KA',
          duration: 'Sep 2022 – Feb 2023',
          achievements: [
            'Scripted JavaScript logic to power the in-app chatbot, contributing to the generation of 5 to 8 leads per day',
            'Orchestrated end-to-end development of the Lab Commerce Flow, improving booking experience and reducing drop-off rate by 18%',
            'Developed reusable and scalable UI components using Next.js, improving development velocity and consistency'
          ]
        },
        {
          title: 'Software Engineer Intern',
          company: 'LeadSquared',
          location: 'Bangalore, KA',
          duration: 'Jan 2022 – Jul 2022',
          achievements: [
            'Assisted in building ACE products, designed to drive sales performance and motivate teams through gamification',
            'Delivered modular UI features using React.js, adhering to design patterns and ensuring maintainability',
            'Collaborated with senior developers in an Agile environment, contributing to sprint deliverables and QA testing'
          ]
        }
      ],
      projects: [
        {
          name: 'Expense Tracker',
          description: 'A responsive single-page application to help users track and manage their monthly expenses',
          technologies: ['ReactJS', 'JavaScript', 'CSS3'],
          highlights: [
            'Engineered expense categorization feature enabling users to classify 1,000+ transactions daily',
            'Implemented customizable categories to track spending habits',
            'Ensured 99.9% data accuracy of categorized transactions'
          ]
        }
      ],
      education: {
        degree: 'B.Tech in Computer Science',
        institution: 'Institute of Technical Education and Research',
        location: 'Bhubaneswar',
        duration: '08/2018 – 08/2022',
        gpa: '8.75/10'
      },
      technologies: {
        languages: ['JavaScript (ES6+)', 'TypeScript'],
        frameworks: ['Angular', 'React', 'Next.js', 'HTML5', 'CSS3', 'SCSS'],
        tools: ['Cypress', 'Jasmine', 'WebSocket', 'Ngx-ui', 'NgRx Store', 'Git & Github', 'Rest APIs']
      },
      achievements: [
        '5 star in Problem Solving on HackerRank',
        'Reactive Angular Course Certification'
      ]
    };
  }
}