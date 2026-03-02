## Next Steps After Integration

### 1. **Add Your Analytics IDs to Environment Variables**

Create or update `.env.local` in your project root:

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXX
NEXT_PUBLIC_BING_ANALYTICS_ID=YOUR_UET_TAG_ID
```

### 2. **Update Verification Codes in Layout**

Open `src/app/layout.tsx` and replace:

- `YOUR_GOOGLE_VERIFICATION_CODE` with your actual Google Search Console verification code
- `YOUR_BING_VERIFICATION_CODE` with your actual Bing verification code

### 3. **Getting Your Analytics IDs**

Follow the detailed guide in `ANALYTICS_SETUP.md` for step-by-step instructions to get each ID from:

- ✅ Google Analytics
- ✅ Google Tag Manager
- ✅ Google Search Console
- ✅ Bing Analytics/Webmaster Tools

### 4. **Files Created/Modified**

**Created:**

- `src/components/analytics.tsx` - Main analytics component
- `src/hooks/use-analytics.ts` - Custom hook for tracking events
- `src/lib/analytics-config.ts` - Configuration file
- `.env.local.example` - Example environment variables
- `ANALYTICS_SETUP.md` - Complete setup guide
- `NEXT_STEPS.md` - This file

**Modified:**

- `src/app/layout.tsx` - Added Analytics component and verification meta tags

### 5. **Using Analytics in Your Components**

To track events in your components:

```tsx
"use client";

import { useAnalytics } from "@/hooks/use-analytics";

export function ContactForm() {
  const { trackFormSubmission, trackEvent } = useAnalytics();

  const handleSubmit = async () => {
    // ... form submission logic
    trackFormSubmission("contact");
    trackEvent("contact_form_submitted", {
      form_type: "contact",
    });
  };

  return <form onSubmit={handleSubmit}>{/* form fields */}</form>;
}
```

### 6. **Common Tracking Events**

```tsx
import { useAnalytics } from "@/hooks/use-analytics";

const { trackEvent, trackConversion } = useAnalytics();

// Track button clicks
trackEvent("button_click", { button_name: "cta_button" });

// Track form submissions
trackEvent("form_submit", { form_name: "newsletter" });

// Track service clicks
trackEvent("service_viewed", { service: "web_development" });

// Track conversions
trackConversion("contact_inquiry", 1);

// Track page interactions
trackEvent("scroll_depth", { depth: "75%" });
```

### 7. **Verify Installation**

After setting up, verify everything works:

1. **Local Testing**

   ```bash
   npm run dev
   ```

   - Open browser DevTools (F12)
   - Go to Network tab
   - Look for requests to `googletagmanager.com`, `google-analytics.com`, `bat.bing.com`
   - Check console for any errors

2. **Google Tag Manager Debug Mode**
   - Open GTM container in preview mode
   - Visit your site in another tab
   - The GTM debug panel should show on the right side

3. **Google Analytics Real-time**
   - Go to GA4 > Real-time
   - Refresh your site
   - You should see activity

### 8. **Build and Deploy**

```bash
npm run build
npm run start
```

The static export will include all analytics scripts.

### 9. **Monitor Your Analytics**

After 24-48 hours:

- ✅ Check Google Analytics dashboard
- ✅ Check Google Tag Manager
- ✅ Submit sitemap to Google Search Console
- ✅ Submit sitemap to Bing Webmaster Tools
- ✅ Monitor Bing Analytics

### 10. **Production Checklist**

Before going live:

- [ ] All environment variables set in production
- [ ] Verification codes confirmed in layout.tsx
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] Analytics IDs are correct
- [ ] No console errors
- [ ] Google Search Console and Bing verified

---

## Troubleshooting

**Problem**: Analytics not showing in GA dashboard

- Solution: Wait 24-48 hours, check that tracking ID is correct, verify scripts load in DevTools

**Problem**: GTM not loading

- Solution: Verify NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID is set, check network tab for blocked requests

**Problem**: Verification failing

- Solution: Ensure correct verification code is in layout.tsx `<head>` section, not in body

---

## Additional Resources

- [Google Analytics 4 Docs](https://developers.google.com/analytics/devguides/collection/ga4)
- [Google Tag Manager Docs](https://developers.google.com/tag-manager)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Google Search Console Help](https://support.google.com/webmasters)

---

## Need Help?

See `ANALYTICS_SETUP.md` for the complete setup guide with detailed screenshots and instructions.
