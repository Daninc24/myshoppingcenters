import { loadStripe } from '@stripe/stripe-js';

// Load Stripe with your publishable key
const stripePromise = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
  : Promise.resolve(null);

export default stripePromise; 