import { createFileRoute } from "@tanstack/react-router";
import { uiLocaleSettings } from "../../locale";
import { useLanguage } from "../../state/language/useLanguage";
import styles from "./index.module.css";
export const Route = createFileRoute("/privacy/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { languageDetect } = useLanguage();
  return (
    <section className={styles.container}>
      <header className={styles.upperlimit}>
        <h1>{uiLocaleSettings[languageDetect].privacy}</h1>
      </header>
      <article className={styles.middlelimit}>
        <ol>
          <li>
            <header>Introduction</header>
            <main>
              <p>
                This Privacy Policy explains how information is collected, used,
                and handled when you visit{" "}
                <a href="https://portfolio.aloylks.com">
                  portfolio.aloylks.com
                </a>{" "}
                a personal portfolio website operated by{" "}
                <b>Aloysious Leow Kangsheng</b>. The website is intended to
                showcase professional work and provide a way for visitors to
                contact the site owner. By using this website, you agree to the
                practices described in this Privacy Policy.
              </p>
            </main>
          </li>
          <li>
            <header>Information Collected</header>
            <main>
              <p>
                If you choose to contact the site owner using the contact form,
                you may provide the following information:
              </p>
              <ul>
                <li>Your name or company name</li>
                <li>Your contact details</li>
                <li>The message you wish to send</li>
              </ul>
              <p>
                This information is voluntarily provided by you. The website
                itself does not intentionally collect personal information about
                visitors beyond what is submitted through the contact form.
              </p>
            </main>
          </li>
          <li>
            <header>How Your Information Is Used</header>
            <main>
              <p>
                Information submitted through the contact form is used only to
                receive and respond to your message or inquiry. The website
                owner does not:
              </p>
              <ul>
                <li>sell personal information</li>
                <li>share personal information with advertisers</li>
                <li>store contact form submissions in any website database</li>
              </ul>
              <p>Messages are used solely for communication purposes.</p>
            </main>
          </li>
          <li>
            <header>Third-Party Services</header>
            <main>
              <p>
                The website uses the following services to deliver contact form
                messages.
              </p>
              <p>
                <b>EmailJS</b>
              </p>
              <p>
                Messages are used solely for communication purposes. The contact
                form uses EmailJS to transmit messages from the website to the
                site owner's email inbox. EmailJS acts as a message delivery
                service and processes the data required to send the message.
                More information can be found at{" "}
                <a
                  href="https://www.emailjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.emailjs.com
                </a>
              </p>
              <p>
                <b>Gmail</b>
              </p>
              <p>
                Messages sent through the contact form are delivered to the site
                owner's Gmail inbox. Once received, the message is stored as an
                email in Gmail and handled like any normal email communication.
              </p>
            </main>
          </li>
          <li>
            <header>Data Storage</header>
            <main>
              <p>
                The website itself does not maintain any database of user
                information. Contact form submissions are not stored on the
                website server. Messages exist only as emails received in the
                Gmail inbox aloyleow91@gmail.com
              </p>
            </main>
          </li>
          <li>
            <header>Resume Downloads</header>
            <main>
              <p>
                Visitors may download the site owner's resume in various
                formats. These files are served as static downloads. Downloading
                these files does not require providing personal information.
              </p>
            </main>
          </li>
          <li>
            <header>Cookies</header>
            <main>
              <p>
                This website does not use cookies for tracking or analytics
                purposes.
              </p>
            </main>
          </li>
          <li>
            <header>Security</header>
            <main>
              <p>
                The website is hosted on infrastructure provided by{" "}
                <b>DigitalOcean </b>
                and is served over <b>HTTPS</b> to help protect data transmitted
                between visitors and the server. While reasonable measures are
                taken to secure the website, no method of internet transmission
                or electronic storage is completely secure.
              </p>
            </main>
          </li>
          <li>
            <header>External Links</header>
            <main>
              <p>
                This website may contain links to external websites such as:
              </p>
              <ul>
                <li>GitHub</li>
                <li>LinkedIn</li>
                <li>Other third-party platforms</li>
              </ul>
              <p>
                These websites operate independently and have their own privacy
                policies. Visitors are encouraged to review those policies when
                visiting external sites.
              </p>
            </main>
          </li>
          <li>
            <header>Your Rights</header>
            <main>
              <p>
                If you have previously contacted the site owner and wish to
                request removal of your message from the email inbox you may
                send a request to <b>aloyleow91@gmail.com</b>
              </p>
              <p>Reasonable efforts will be made to honor such requests.</p>
            </main>
          </li>
          <li>
            <header>Changes to This Policy</header>
            <main>
              <p>
                This Privacy Policy may be updated periodically to reflect
                changes in the website or legal requirements. Updates will be
                posted on this page.
              </p>
            </main>
          </li>
          <li>
            <header>Contact</header>
            <main>
              <p>
                If you have any questions about this Privacy Policy, you may
                contact:
              </p>
              <p>
                <b>Aloysious Leow Kangsheng</b>
              </p>
              <p>
                Email: <b>aloyleow91@gmail.com</b>
              </p>
            </main>
          </li>
        </ol>
      </article>
    </section>
  );
}
