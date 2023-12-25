import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutAbout extends Schema.Component {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    aboutList: Attribute.Component<'list.group-of-items', true>;
  };
}

export interface ArrayStandardarray extends Schema.Component {
  collectionName: 'components_array_standardarrays';
  info: {
    displayName: 'standardarray';
  };
  attributes: {
    LessonsList: Attribute.String;
  };
}

export interface CardOurSolutions extends Schema.Component {
  collectionName: 'components_card_our_solutions';
  info: {
    displayName: 'our solutions';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    personalAgency: Attribute.Component<'list.group-of-items', true>;
  };
}

export interface CompletedLessonsLessonComplete extends Schema.Component {
  collectionName: 'components_completed_lessons_lesson_completes';
  info: {
    displayName: 'LessonComplete';
    description: '';
  };
  attributes: {
    LessonTitle: Attribute.String;
    course_id: Attribute.String;
  };
}

export interface CompletedLessonsUser extends Schema.Component {
  collectionName: 'components_completed_lessons_users';
  info: {
    displayName: 'user';
    description: '';
  };
  attributes: {
    username: Attribute.String;
    LessonTitle: Attribute.Component<'completed-lessons.lesson-complete', true>;
  };
}

export interface ContactUsContactUs extends Schema.Component {
  collectionName: 'components_contact_us_contact_uses';
  info: {
    displayName: 'Contact Us';
    description: '';
  };
  attributes: {
    address: Attribute.Text;
    email: Attribute.Email;
    phone: Attribute.BigInteger;
  };
}

export interface CourseSkillsYouGain extends Schema.Component {
  collectionName: 'components_course_skills_you_gains';
  info: {
    displayName: 'Skills you gain';
  };
  attributes: {
    points: Attribute.String;
  };
}

export interface CourseWhatYouWillLearn extends Schema.Component {
  collectionName: 'components_course_what_you_will_learns';
  info: {
    displayName: 'What you will learn';
  };
  attributes: {
    points: Attribute.String;
  };
}

export interface HeroTitleSubtitle extends Schema.Component {
  collectionName: 'components_hero_title_subtitles';
  info: {
    displayName: 'title-subtitle';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
  };
}

export interface HowItWorksHowItWorks extends Schema.Component {
  collectionName: 'components_how_it_works_how_it_works';
  info: {
    displayName: 'How it works';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    working_steps: Attribute.Component<'services.list-of-services', true>;
  };
}

export interface LearnMoreLearnMore extends Schema.Component {
  collectionName: 'components_learn_more_learn_mores';
  info: {
    displayName: 'Learn More';
    description: '';
  };
  attributes: {
    help: Attribute.Component<'social-media-links.social-media-link', true>;
  };
}

export interface LessonsLessonsdescription extends Schema.Component {
  collectionName: 'components_lessons_lessonsdescriptions';
  info: {
    displayName: 'lessonsdescription';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    time: Attribute.String;
    content: Attribute.RichText;
    lessonContent: Attribute.Blocks;
  };
}

export interface ListGroupOfItems extends Schema.Component {
  collectionName: 'components_list_group_of_items';
  info: {
    displayName: 'group of items';
  };
  attributes: {
    item: Attribute.String;
  };
}

export interface PricingDetailsPricingDetails extends Schema.Component {
  collectionName: 'components_pricing_details_pricing_details';
  info: {
    displayName: 'Pricing Details';
    description: '';
  };
  attributes: {
    monthly_price: Attribute.Float & Attribute.Required;
    yearly_price: Attribute.Float & Attribute.Required;
    plan_name: Attribute.String & Attribute.Required;
    plan_features: Attribute.Component<'list.group-of-items', true>;
  };
}

export interface PricingPricing extends Schema.Component {
  collectionName: 'components_pricing_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    plans: Attribute.Component<'pricing-details.pricing-details', true>;
  };
}

export interface QuizQuizOptions extends Schema.Component {
  collectionName: 'components_quiz_quiz_options';
  info: {
    displayName: 'quizOptions';
    description: '';
  };
  attributes: {
    option: Attribute.String;
  };
}

export interface QuizQuiz extends Schema.Component {
  collectionName: 'components_quiz_quizzes';
  info: {
    displayName: 'quiz';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    correctAnswer: Attribute.String;
    description: Attribute.Text;
    options: Attribute.Component<'quiz.quiz-options', true>;
  };
}

export interface ServicesListOfServices extends Schema.Component {
  collectionName: 'components_services_list_of_services';
  info: {
    displayName: 'list of services';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    hoverDescription: Attribute.String;
  };
}

export interface ServicesServices extends Schema.Component {
  collectionName: 'components_services_services';
  info: {
    displayName: 'services';
  };
  attributes: {};
}

export interface SocialMediaLinksSocialMediaLink extends Schema.Component {
  collectionName: 'components_social_media_links_social_media_links';
  info: {
    displayName: 'Social Media Link';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface StepsStrategySteps extends Schema.Component {
  collectionName: 'components_steps_strategy_steps';
  info: {
    displayName: 'strategy steps';
  };
  attributes: {
    title: Attribute.String;
    strategy_step_list: Attribute.Component<'list.group-of-items', true>;
    strategy_step_image: Attribute.Media;
  };
}

export interface StrategyStrategy extends Schema.Component {
  collectionName: 'components_strategy_strategies';
  info: {
    displayName: 'Strategy';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    steps: Attribute.Component<'steps.strategy-steps', true>;
  };
}

export interface TestimonialSectionTestimonialSection extends Schema.Component {
  collectionName: 'components_testimonial_section_testimonial_sections';
  info: {
    displayName: 'Testimonial-Section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    testimonialListing: Attribute.Component<'testimonials.testimonials', true>;
  };
}

export interface TestimonialsTestimonials extends Schema.Component {
  collectionName: 'components_testimonials_testimonials';
  info: {
    displayName: 'Testimonials';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    review: Attribute.Text & Attribute.Required;
    designation: Attribute.String;
    company_name: Attribute.String & Attribute.Required;
    rating: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.about': AboutAbout;
      'array.standardarray': ArrayStandardarray;
      'card.our-solutions': CardOurSolutions;
      'completed-lessons.lesson-complete': CompletedLessonsLessonComplete;
      'completed-lessons.user': CompletedLessonsUser;
      'contact-us.contact-us': ContactUsContactUs;
      'course.skills-you-gain': CourseSkillsYouGain;
      'course.what-you-will-learn': CourseWhatYouWillLearn;
      'hero.title-subtitle': HeroTitleSubtitle;
      'how-it-works.how-it-works': HowItWorksHowItWorks;
      'learn-more.learn-more': LearnMoreLearnMore;
      'lessons.lessonsdescription': LessonsLessonsdescription;
      'list.group-of-items': ListGroupOfItems;
      'pricing-details.pricing-details': PricingDetailsPricingDetails;
      'pricing.pricing': PricingPricing;
      'quiz.quiz-options': QuizQuizOptions;
      'quiz.quiz': QuizQuiz;
      'services.list-of-services': ServicesListOfServices;
      'services.services': ServicesServices;
      'social-media-links.social-media-link': SocialMediaLinksSocialMediaLink;
      'steps.strategy-steps': StepsStrategySteps;
      'strategy.strategy': StrategyStrategy;
      'testimonial-section.testimonial-section': TestimonialSectionTestimonialSection;
      'testimonials.testimonials': TestimonialsTestimonials;
    }
  }
}
