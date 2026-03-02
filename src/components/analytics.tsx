'use client';

import Script from 'next/script';

export function Analytics() {
  // Google Analytics ID
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  
  // Google Tag Manager ID
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
  
  // Bing Analytics ID
  const bingId = process.env.NEXT_PUBLIC_BING_ANALYTICS_ID;

  return (
    <>
      {/* Google Analytics */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
          {/* GTM noscript */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        </>
      )}

      {/* Bing Analytics */}
      {bingId && (
        <Script
          id="bing-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,t,r,u){var f,n;if(w.UET)return;f=w.UET=function(c){if(!arguments.length)return;u=f.q;u[u.length]=c};u=w.UET.q=[];n=d.createElement(t);n.src=r;n.async=1;n.onload=n.onreadystatechange=function(){if(!n.readyState||n.readyState==='loaded'||n.readyState==='interactive')f.apply(null,u);};d.head.appendChild(n)})(window,document,'script','//bat.bing.com/bat.js');window.uetq=window.uetq||[];window.uetq.push('event', 'search_uet', {'kwd_id':'${bingId}'});`,
          }}
        />
      )}
    </>
  );
}
