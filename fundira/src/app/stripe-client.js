import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51P7zmMRqlaXFAeEODHfjocA2w0TvdX3KBEERGgQ61iCYsvw5R4zYwlcGFUdDadhKqkPmlaMl4bz9rCNkejiwWgLZ00tWcUvEkq');

export default stripePromise;
