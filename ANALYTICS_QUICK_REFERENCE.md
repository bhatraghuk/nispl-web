# Analytics Integration - Quick Reference

## What's Been Integrated

✅ **Google Analytics 4 (GA4)** - Track user behavior and conversions  
✅ **Google Tag Manager (GTM)** - Manage all tags in one place  
✅ **Google Search Console** - Monitor search performance  
✅ **Bing Analytics** - Track Bing search traffic

---

## Files Created

| File                           | Purpose                                             |
| ------------------------------ | --------------------------------------------------- |
| `src/components/analytics.tsx` | Main analytics component with GA, GTM, Bing scripts |
| `src/hooks/use-analytics.ts`   | Custom hook for tracking events in components       |
| `src/lib/analytics-config.ts`  | Configuration and examples                          |
| `.env.local.example`           | Template for environment variables                  |
| `ANALYTICS_SETUP.md`           | Detailed setup instructions (READ THIS)             |
| `NEXT_STEPS.md`                | Quick start guide                                   |

## Files Modified

| File                 | Changes                                           |
| -------------------- | ------------------------------------------------- |
| `src/app/layout.tsx` | Added Analytics component, verification meta tags |

---

## Quick Start

### Step 1: Set Environment Variables

Copy `.env.local.example` to `.env.local` and add your IDs:

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXX
NEXT_PUBLIC_BING_ANALYTICS_ID=YOUR_UET_TAG_ID
```

### Step 2: Update Verification Codes

In `src/app/layout.tsx`, replace:

- `YOUR_GOOGLE_VERIFICATION_CODE` → Your GSC verification code
- `YOUR_BING_VERIFICATION_CODE` → Your Bing verification code

### Step 3: Get Your IDs

Follow `ANALYTICS_SETUP.md` to get each ID from:

- Google Analytics
- Google Tag Manager
- Google Search Console
- Bing Webmaster Tools

### Step 4: Test Locally

```bash
npm run dev
# Check DevTools (F12) > Network tab for analytics requests
```

### Step 5: Deploy

```bash
npm run build
npm run start
```

---

## How to Track Events

### In Any Client Component

```tsx
"use client";

import { useAnalytics } from "@/hooks/use-analytics";

export function MyComponent() {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent("my_button_clicked", {
      button_name: "subscribe",
      section: "hero",
    });
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Available Tracking Methods

```tsx
const {
  trackEvent, // Track any custom event
  trackPageView, // Track page views
  trackFormSubmission, // Track form submissions
  trackEngagement, // Track user engagement
  trackConversion, // Track conversions/goals
  setUserProperty, // Set user properties
} = useAnalytics();
```

---

## Common Setup Issues

| Issue                 | Solution                                            |
| --------------------- | --------------------------------------------------- |
| Analytics not showing | Wait 24-48 hours, verify tracking IDs are correct   |
| Scripts not loading   | Check DevTools Network tab, verify env vars are set |
| Verification failing  | Ensure codes are in `<head>`, not `<body>`          |
| GTM debug not showing | Make sure you're in GTM preview mode                |

---

## Useful Links

- 📖 [See full setup guide](./ANALYTICS_SETUP.md)
- 📋 [See next steps](./NEXT_STEPS.md)
- 🔧 [Analytics config file](./src/lib/analytics-config.ts)
- 🎣 [Analytics hook](./src/hooks/use-analytics.ts)

---

## Verification Checklist

- [ ] `.env.local` file created with all IDs
- [ ] Verification codes replaced in `layout.tsx`
- [ ] Project builds without errors: `npm run build`
- [ ] Analytics scripts load in DevTools
- [ ] Google Analytics shows real-time data
- [ ] Google Search Console verified
- [ ] Bing Webmaster Tools verified
- [ ] Sitemaps submitted to both GSC and Bing

---

## Need the Detailed Guide?

See **ANALYTICS_SETUP.md** for:

- Step-by-step screenshots
- How to create each account
- Where to find each ID
- Troubleshooting tips
