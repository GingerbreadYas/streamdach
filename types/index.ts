export interface PricingPlan {
  id: string
  name: string
  price: string
  period: string
  popular: boolean
  features: string[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface NavLink {
  label: string
  href?: string
  children?: { label: string; href: string }[]
}

export interface Testimonial {
  name: string
  location: string
  text: string
  rating: number
}