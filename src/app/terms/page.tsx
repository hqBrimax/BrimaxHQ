import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  const termsHtml = `
    <style>
      [data-custom-class='body'], [data-custom-class='body'] * {
        background: transparent !important;
      }
      /* Force the text to inherit your site colors for Dark Mode support */
      [data-custom-class='title'], [data-custom-class='title'] *,
      [data-custom-class='heading_1'], [data-custom-class='heading_1'] *,
      [data-custom-class='heading_2'], [data-custom-class='heading_2'] *,
      [data-custom-class='body_text'], [data-custom-class='body_text'] *,
      [data-custom-class='subtitle'], [data-custom-class='subtitle'] *,
      h1, h2, h3, h4, p, span, li {
        color: inherit !important;
        font-family: inherit !important;
      }
      [data-custom-class='link'], [data-custom-class='link'] * {
        color: #3030F1 !important;
        word-break: break-word !important;
      }
      ul { list-style-type: square; margin-left: 1.5rem; }
    </style>
    
    <div data-custom-class="body">
      <div align="center" style="text-align: left;">
        <div class="MsoNormal" data-custom-class="title" style="line-height: 1.5;">
          <h1><strong>TERMS AND CONDITIONS</strong></h1>
        </div>
        <div class="MsoNormal" data-custom-class="subtitle" style="line-height: 1.5;">
          <strong>Last updated January 06, 2026</strong>
        </div>
        <br />
        <div style="line-height: 1.5;">
          <h2><strong>AGREEMENT TO OUR LEGAL TERMS</strong></h2>
        </div>
      </div>
      
      <div data-custom-class="body_text" style="line-height: 1.5;">
        <p>
          We are <strong>Nathan Oyewole</strong>, doing business as <strong>brimaxHQ</strong>, 
          a company registered in <strong>Nigeria</strong> at <strong>Nitel Street, Ikere Ekiti, Ekiti 11232</strong>.
        </p>
        <p>
          We operate the website <a href="https://brimax-hq.vercel.app" data-custom-class="link">https://brimax-hq.vercel.app</a> (the "Site"), 
          as well as any other related products and services that refer or link to these legal terms (the "Legal Terms").
        </p>
        <p>
          <strong>Modern Tech Solutions for Your Business:</strong> We specialize in SaaS Development, Freelancing, 
          and Software Solutions to help your business thrive in the digital age.
        </p>
        <p>
          You can contact us by phone at <strong>+2347089749447</strong>, email at 
          <a href="mailto:nathanemmanueloreofe@outlook.com" data-custom-class="link">nathanemmanueloreofe@outlook.com</a>, 
          or by mail to Nitel Street, Ikere Ekiti, Ekiti 11232, Nigeria.
        </p>
        <p>
          These Legal Terms constitute a legally binding agreement made between you and Nathan Oyewole. 
          By accessing the Services, you agree to be bound by all of these Legal Terms.
        </p>
      </div>

      <div class="MsoNormal" data-custom-class="heading_1" style="line-height: 1.5;">
        <h2><strong>TABLE OF CONTENTS</strong></h2>
        <ul style="line-height: 1.8;">
          <li>1. OUR SERVICES</li>
          <li>2. INTELLECTUAL PROPERTY RIGHTS</li>
          <li>3. USER REPRESENTATIONS</li>
          <li>4. USER REGISTRATION</li>
          <li>5. PURCHASES AND PAYMENT</li>
          <li>6. SUBSCRIPTIONS</li>
          <li>7. PROHIBITED ACTIVITIES</li>
          <li>8. USER GENERATED CONTRIBUTIONS</li>
          <li>9. CONTRIBUTION LICENSE</li>
          <li>10. SERVICES MANAGEMENT</li>
          <li>11. PRIVACY POLICY</li>
          <li>12. TERM AND TERMINATION</li>
          <li>13. MODIFICATIONS AND INTERRUPTIONS</li>
          <li>14. GOVERNING LAW</li>
          <li>15. DISPUTE RESOLUTION</li>
          <li>16. CORRECTIONS</li>
          <li>17. DISCLAIMER</li>
          <li>18. LIMITATIONS OF LIABILITY</li>
          <li>19. INDEMNIFICATION</li>
          <li>20. USER DATA</li>
          <li>21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
          <li>22. CALIFORNIA USERS AND RESIDENTS</li>
          <li>23. MISCELLANEOUS</li>
          <li>24. CONTACT US</li>
        </ul>
      </div>

      <div id="services">
        <h2><strong>1. OUR SERVICES</strong></h2>
        <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction where such distribution would be contrary to law.</p>
      </div>

      <div id="liability">
        <h2><strong>18. LIMITATIONS OF LIABILITY</strong></h2>
        <p>IN NO EVENT WILL WE BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES. OUR LIABILITY TO YOU WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE TWELVE (12) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.</p>
      </div>

      <div id="contact">
        <h2><strong>24. CONTACT US</strong></h2>
        <p>
          <strong>Nathan Oyewole</strong><br />
          Nitel Street, Ikere Ekiti, Ekiti 11232, Nigeria<br />
          Phone: +2347089749447<br />
          Email: nathanemmanueloreofe@outlook.com
        </p>
      </div>
    </div>
  `;

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-8 inline-block hover:underline transition-all">
          ← Back to BrimaxHQ
        </Link>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-2xl shadow-xl">
          <article 
            className="prose prose-slate dark:prose-invert max-w-none 
            prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl 
            prose-p:leading-relaxed prose-li:my-1"
          >
            <div dangerouslySetInnerHTML={{ __html: termsHtml }} />
          </article>
        </div>

        <footer className="mt-12 text-center text-slate-500 text-sm font-light">
          © 2026 BrimaxHQ — Built with speed in Ekiti, Nigeria 🇳🇬
        </footer>
      </div>
    </main>
  );
}
