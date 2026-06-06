/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PostContentSection {
  type: 'paragraph' | 'heading2' | 'heading3' | 'highlight' | 'list';
  text?: string;
  items?: string[]; // for lists
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  category: BookingCategory;
  author: string;
  authorBio: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  metaDescription: string;
  sections: PostContentSection[];
  faqs: FAQItem[];
  highlightTip: string;
  tags: string[];
  isFeatured?: boolean;
  isPopular?: boolean;
  isBeginnerGuide?: boolean;
}

export type BookingCategory =
  | 'Cabelos'
  | 'Unhas'
  | 'Maquiagem'
  | 'Sobrancelhas e Cílios'
  | 'Estética Facial'
  | 'Estética Corporal'
  | 'Cursos de Beleza'
  | 'Carreira'
  | 'Empreendedorismo'
  | 'Produtos e Resenhas'
  | 'Tendências'
  | 'Guias para Iniciantes';

export type PageRoute =
  | { type: 'home' }
  | { type: 'blog'; categoryFilter?: BookingCategory; searchKeyword?: string }
  | { type: 'article'; slug: string }
  | { type: 'about' }
  | { type: 'contact' }
  | { type: 'privacy' }
  | { type: 'terms' }
  | { type: 'cookies' }
  | { type: 'advertise' };
