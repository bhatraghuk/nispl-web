/**
 * Analytics Configuration
 * 
 * This file contains all analytics tracking IDs and configuration.
 * For security, it's recommended to use environment variables instead.
 * See .env.local.example for how to set up environment variables.
 */

export const analyticsConfig = {
  // Google Analytics 4
  // Get from: GA Property Settings > Data Streams > Web > Measurement ID
  // Format: G-XXXXXXXXXX
  googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,

  // Google Tag Manager
  // Get from: GTM Account page > Container ID
  // Format: GTM-XXXXXX
  googleTagManagerId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,

  // Bing Analytics (UET Tag)
  // Get from: Bing Webmaster Tools > Settings > Tracking code
  bingAnalyticsId: process.env.NEXT_PUBLIC_BING_ANALYTICS_ID,

  // Google Search Console Verification Code
  // Get from: Google Search Console > Verification methods > HTML tag
  // Add this to the meta tag in layout.tsx: <meta name="google-site-verification" content="..." />
  googleSearchConsoleVerificationCode: 'YOUR_GOOGLE_VERIFICATION_CODE',

  // Bing Webmaster Tools Verification Code
  // Get from: Bing Webmaster Tools > Verify ownership > Meta tag
  // Add this to the meta tag in layout.tsx: <meta name="msvalidate.01" content="..." />
  bingWebmasterVerificationCode: 'YOUR_BING_VERIFICATION_CODE',

  // Enable/Disable Analytics
  isEnabled: {
    googleAnalytics: !!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    googleTagManager: !!process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
    bingAnalytics: !!process.env.NEXT_PUBLIC_BING_ANALYTICS_ID,
  },
};

/**
 * Track Custom Events
 * 
 * You can use gtag() function for custom event tracking:
 * 
 * Example:
 * gtag('event', 'page_view', { page_title: 'My Page', page_location: url });
 * gtag('event', 'download', { file_name: 'document.pdf' });
 * gtag('event', 'form_submit', { form_id: 'contact_form' });
 */

/**
 * Initialize Analytics in Client Components
 * 
 * If you need to track events in client components:
 * 
 * 'use client';
 * 
 * declare let gtag: Function;
 * 
 * export function MyComponent() {
 *   const handleClick = () => {
 *     gtag('event', 'button_click', {
 *       button_name: 'my_button'
 *     });
 *   };
 *   
 *   return <button onClick={handleClick}>Click me</button>;
 * }
 */
