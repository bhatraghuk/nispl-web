'use client';

/**
 * Custom hook for tracking analytics events
 * 
 * Usage:
 * const { trackEvent, trackPageView } = useAnalytics();
 * 
 * trackEvent('button_clicked', {
 *   button_name: 'subscribe',
 *   location: 'hero'
 * });
 */

declare global {
  interface Window {
    gtag?: (command: string, action?: string, params?: Record<string, any>) => void;
    dataLayer?: any[];
  }
}

export function useAnalytics() {
  /**
   * Track a custom event
   */
  const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams || {});
    }
  };

  /**
   * Track page view with custom parameters
   */
  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle || document.title,
      });
    }
  };

  /**
   * Track form submission
   */
  const trackFormSubmission = (formName: string, formValues?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        form_name: formName,
        ...formValues,
      });
    }
  };

  /**
   * Track user engagement
   */
  const trackEngagement = (engagementType: string, engagementDetails?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', engagementType, {
        engagement_type: engagementType,
        ...engagementDetails,
      });
    }
  };

  /**
   * Track conversion
   */
  const trackConversion = (conversionName: string, conversionValue?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        conversion_name: conversionName,
        conversion_value: conversionValue || 1,
      });
    }
  };

  /**
   * Set user properties (for analytics)
   */
  const setUserProperty = (propertyName: string, propertyValue: string | number | boolean) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_ID', {
        [propertyName]: propertyValue,
      });
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackFormSubmission,
    trackEngagement,
    trackConversion,
    setUserProperty,
  };
}
