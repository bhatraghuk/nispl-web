# Analytics Integration Setup Guide

This guide will help you integrate Google Analytics, Google Tag Manager, Google Search Console, and Bing Analytics into your Next.js project.

## 1. Google Analytics Setup

### Step 1: Create a Google Analytics Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Create** > **New property**
3. Fill in the property name (e.g., "Netiquette Info Solutions")
4. Choose your time zone and currency
5. Accept the terms and create the property

### Step 2: Create a Web Data Stream

1. In the property, click **Data streams** > **Web**
2. Enter your website URL (e.g., https://yourdomain.com)
3. Give it a stream name
4. Copy the **Measurement ID** (format: G-XXXXXXXXXX)

### Step 3: Add to Environment Variables

Add to your `.env.local` file:

```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

---

## 2. Google Tag Manager Setup

### Step 1: Create a GTM Account

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click **Create Account**
3. Enter your account name and container name
4. Select **Web** as the target platform
5. Accept the terms and create

### Step 2: Get Your Container ID

1. The Container ID will be displayed (format: GTM-XXXXXX)
2. Click **Create** when prompted

### Step 3: Add to Environment Variables

Add to your `.env.local` file:

```
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXX
```

### Step 4: Configure Google Analytics in GTM (Optional but Recommended)

1. In GTM, go to **Tags** > **New**
2. Create a new tag with type "Google Analytics: GA4 Configuration"
3. Add your GA4 Measurement ID
4. Set the trigger to "All pages"
5. Save and publish

---

## 3. Google Search Console Setup

### Step 1: Add Your Website

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **URL prefix** and enter your domain
3. Select a verification method

### Step 2: Verification Methods

Choose one of the following:

#### Option A: Meta Tag (Easiest)

1. Select "HTML tag" verification
2. Copy the meta tag content value (the random string)
3. Replace `YOUR_GOOGLE_VERIFICATION_CODE` in the layout with your verification code
4. The layout already has the meta tag:
   ```html
   <meta
     name="google-site-verification"
     content="YOUR_GOOGLE_VERIFICATION_CODE"
   />
   ```

#### Option B: DNS Record

1. Select "DNS record" verification
2. Add the TXT record to your domain's DNS settings
3. Verify once the DNS record propagates

#### Option C: HTML File

1. Download the verification file
2. Place it in your `public/` directory

### Step 3: Submit Sitemap

1. After verification, go to **Sitemaps**
2. Submit: `https://yourdomain.com/sitemap.xml`
3. (You may need to generate a sitemap first)

---

## 4. Bing Analytics Setup

### Step 1: Create a Bing Webmaster Tools Account

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Sign in with your Microsoft account
3. Click **Add Property**
4. Enter your website URL

### Step 2: Verification

1. Choose a verification method (the layout already has the meta tag setup):
   ```html
   <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
   ```
2. Copy your Bing verification code
3. Replace `YOUR_BING_VERIFICATION_CODE` in the layout with your code

### Step 3: Get Bing Analytics ID

1. In Bing Webmaster Tools, go to **Settings** > **Tracking code**
2. Copy your UET Tag ID
3. Add to your `.env.local` file:

```
NEXT_PUBLIC_BING_ANALYTICS_ID=YOUR_UET_TAG_ID
```

### Step 4: Submit Sitemap to Bing

1. Go to **Sitemaps**
2. Submit: `https://yourdomain.com/sitemap.xml`

---

## Environment Variables Template

Create or update your `.env.local` file with the following variables:

```env
# Google Analytics (GA4)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Google Tag Manager
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXX

# Bing Analytics (UET Tag ID)
NEXT_PUBLIC_BING_ANALYTICS_ID=YOUR_UET_TAG_ID
```

---

## Files Modified/Created

1. **Created**: `src/components/analytics.tsx` - Analytics component with all integrations
2. **Modified**: `src/app/layout.tsx` - Added Analytics component and verification meta tags

---

## Verification Steps in Layout

The `layout.tsx` file now includes:

- Google Search Console meta tag (update the content value)
- Bing Analytics meta tag (update the content value)
- Analytics component that loads GA, GTM, and Bing Analytics scripts

---

## Configuration Summary

| Service               | Variable Name                       | Format            | Where to Find                                       |
| --------------------- | ----------------------------------- | ----------------- | --------------------------------------------------- |
| Google Analytics      | `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`   | G-XXXXXXXXXX      | GA Property Settings > Data Stream > Measurement ID |
| Google Tag Manager    | `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID` | GTM-XXXXXX        | GTM Account > Container ID                          |
| Bing Analytics        | `NEXT_PUBLIC_BING_ANALYTICS_ID`     | UET Tag ID        | Bing Webmaster Tools > Tracking code                |
| Google Search Console | Meta tag in layout.tsx              | Verification code | GSC > Verification methods > HTML tag               |
| Bing Verification     | Meta tag in layout.tsx              | Verification code | Bing Webmaster Tools > Verify ownership             |

---

## Testing

After setup:

1. **Google Analytics**: Use the **Realtime** report in GA to see if data flows
2. **Google Tag Manager**: Check the GTM debug console in preview mode
3. **Google Search Console**: Check the **Coverage** report after 1-2 weeks
4. **Bing Analytics**: Check the Bing Webmaster Tools dashboard

---

## Important Notes

- All environment variables should start with `NEXT_PUBLIC_` to be accessible in the browser
- For the static export build, all scripts are loaded client-side
- GTM's noscript fallback is included for better tracking without JavaScript
- Update the verification codes in `layout.tsx` before deployment
- Test analytics locally with `npm run dev` before building for production

---

## Troubleshooting

### Analytics not tracking?

1. Check browser console for errors (F12)
2. Verify environment variables are set correctly
3. Use browser developer tools network tab to see if scripts load
4. Allow time for data to appear (usually 24-48 hours)

### Verification failing?

1. Make sure you're using the correct verification code
2. Check that meta tags are in the `<head>` section
3. For DNS verification, wait for DNS propagation (24-48 hours)

### GTM not loading?

1. Check that `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID` is set
2. Verify the GTM container ID format is correct (GTM-XXXXXX)
3. Check browser console for blocked requests
