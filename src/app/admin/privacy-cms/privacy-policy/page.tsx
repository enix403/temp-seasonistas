"use client";

import { useState } from "react";

export default function PrivacyPolicyPage() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className='mx-auto space-y-6 p-4 sm:p-6'>
      {/* Header + Button */}
      <div className='flex flex-col items-start justify-between sm:flex-row sm:items-center'>
        <h1 className='text-lg leading-[22px] font-[400] text-[#1D2937] sm:pt-4 md:text-[26px]'>
          {isEdit ? "Edit Policy" : "Privacy Policy"}
        </h1>
        {isEdit ? (
          <div className='flex gap-2'>
            <button
              onClick={() => setIsEdit(true)}
              className='mt-3 min-w-[100px] rounded-full border border-[#1C1C1E1F] px-4 py-2 text-sm font-medium text-black sm:mt-0'
            >
              Cancel
            </button>
            <button
              onClick={() => setIsEdit(true)}
              className='mt-3 min-w-[100px] rounded-full bg-[#4B8378] px-4 py-2 text-sm font-medium text-white sm:mt-0'
            >
              Save
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className='mt-3 rounded-full bg-[#4B8378] px-4 py-2 text-sm font-medium text-white sm:mt-0'
          >
            Edit Policy
          </button>
        )}
      </div>

      {/* Last Updated */}
      <p className='text-[18px]'>Last updated: May 10, 2025</p>

      {/* Intro Paragraph */}
      <p className='text-[14px] leading-[24px] font-normal text-black'>
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
        <br />
        We use Your Personal data to provide and improve the Service. By using
        the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy.
      </p>

      {/* Section */}
      <div className='space-y-3'>
        <h2 className='text-lg font-semibold'>Interpretation and Definition</h2>
        <h3 className='text-[16px] font-[700]'>Interpretation</h3>
        <p className='text-[14px] leading-6 font-normal'>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
      </div>

      {/* Definitions List */}
      <div className='space-y-4'>
        <h3 className='text-[16px] font-[700]'>Definitions</h3>
        <p className='text-[14px] leading-6 font-normal'>
          For the purposes of this Privacy Policy:
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Account</span> means a unique account
          created for You to access our Service or parts of our Service.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Affiliate</span> means an entity that
          controls, is controlled by or is under common control with a party,
          where "control" means ownership of 50% or more of the shares, equity
          interest or other securities entitled to vote for election of
          directors or other managing authority.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Business,</span> for the purpose of
          CCPA/CPRA, refers to the Company as the legal entity that collects
          Consumers' personal information and determines the purposes and means
          of the processing of Consumers' personal information, or on behalf of
          which such information is collected and that alone, or jointly with
          others, determines the purposes and means of the processing of
          consumers' personal information, that does business in the State of
          California.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>CCPA</span> and/or
          <span className='font-semibold'> CPRA</span> refers to the California
          Consumer Privacy Act (the "CCPA") as amended by the California Privacy
          Rights Act of 2020 (the "CPRA").
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Company</span> (referred to as either
          "the Company", "We", "Us" or "Our" in this Agreement) refers to
          Seasonistas, 96 Dimitriou Gounari Street, 15125 Marousi, Attica,
          Greece.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          For the purpose of the GDPR, the Company is the Data Controller.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Consumer,</span> for the purpose of
          the CCPA/CPRA, means a natural person who is a California resident. A
          resident, as defined in the law, includes (1) every individual who is
          in the USA for other than a temporary or transitory purpose, and (2)
          every individual who is domiciled in the USA who is outside the USA
          for a temporary or transitory purpose.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Cookies</span> for the purpose of the
          CCPA/CPRA, means a natural person who is a California resident. A
          resident, as defined in the law, includes (1) every individual who is
          in the USA for other than a temporary or transitory purpose, and (2)
          every individual who is domiciled in the USA who is outside the USA
          for a temporary or transitory purpose.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Country</span> refers to: Greece
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Data Controller</span> For the
          purposes of the GDPR (General Data Protection Regulation), refers to
          the Company as the legal person which alone or jointly with others
          determines the purposes and means of the processing of Personal Data.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Device</span> means any device that
          can access the Service such as a computer, a cellphone or a digital
          tablet.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Do Not Track </span> (DNT) is a
          concept that has been promoted by US regulatory authorities, in
          particular the U.S. Federal Trade Commission (FTC), for the Internet
          industry to develop and implement a mechanism for allowing internet
          users to control the tracking of their online activities across
          websites.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>GDPR </span>
          refers to EU General Data Protection Regulation.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Personal Data </span>
          is any information that relates to an identified or identifiable
          individual.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          For the purposes of GDPR, Personal Data means any information relating
          to You such as a name, an identification number, location data, online
          identifier or to one or more factors specific to the physical,
          physiological, genetic, mental, economic, cultural or social identity.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          For the purposes of the CCPA/CPRA, Personal Data means any information
          that identifies, relates to, describes or is capable of being
          associated with, or could reasonably be linked, directly or
          indirectly, with You.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Service </span>
          refers to the Website.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Service Provider </span>
          means any natural or legal person who processes the data on behalf of
          the Company. It refers to third-party companies or individuals
          employed by the Company to facilitate the Service, to provide the
          Service on behalf of the Company, to perform services related to the
          Service or to assist the Company in analyzing how the Service is used.
          For the purpose of the GDPR, Service Providers are considered Data
          Processors.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>
            Third-party Social Media Service{" "}
          </span>
          refers to any website or any social network website through which a
          User can log in or create an account to use the Service.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Usage Data </span>
          refers to data collected automatically, either generated by the use of
          the Service or from the Service infrastructure itself (for example,
          the duration of a page visit).
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Website </span>
          refers to Seasonistas, accessible from http://www.seasonistas.com
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>You </span>
          means the individual accessing or using the Service, or the company,
          or other legal entity on behalf of which such individual is accessing
          or using the Service, as applicable.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          Under GDPR, You can be referred to as the Data Subject or as the User
          as you are the individual using the Service.
        </p>
      </div>

      <div className='space-y-3'>
        <h2 className='text-lg font-semibold'>
          Collecting and Using Your Personal Data
        </h2>
        <h3 className='text-[16px] font-[700]'>Types of Data Collected</h3>
        <div>
          <h3 className='text-[16px] font-[700] italic'>Personal Data</h3>
          <p className='text-[14px] leading-6 font-normal'>
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
            <br />
            <br />
            Email address
            <br />
            <br />
            First name and last name
            <br />
            <br />
            Phone number <br />
            <br />
            Address, State, Province, ZIP/Postal code, City
            <br />
            <br />
            Usage Data
          </p>
        </div>
        <div>
          <h3 className='text-[16px] font-[700] italic'>Usage Data</h3>
          <p className='text-[14px] leading-6 font-normal'>
            Usage Data is collected automatically when using the Service.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            Usage Data may include information such as Your Device's Internet
            Protocol address (e.g. IP address), browser type, browser version,
            the pages of our Service that You visit, the time and date of Your
            visit, the time spent on those pages, unique device identifiers and
            other diagnostic data.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            When You access the Service by or through a mobile device, We may
            collect certain information automatically, including, but not
            limited to, the type of mobile device You use, Your mobile device
            unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use,
            unique device identifiers and other diagnostic data.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            We may also collect information that Your browser sends whenever You
            visit our Service or when You access the Service by or through a
            mobile device.
          </p>
        </div>
        <div>
          <h3 className='text-[16px] font-[700] italic'>
            Information from Third-Party Social Media Services
          </h3>
          <p className='text-[14px] leading-6 font-normal'>
            The Company allows You to create an account and log in to use the
            Service through the following Third-party Social Media Services:
            <br />
            • Google
            <br />
            • Facebook
            <br />
            • Instagram
            <br />
            • Twitter
            <br />• LinkedIn
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            If You decide to register through or otherwise grant us access to a
            Third-Party Social Media Service, We may collect Personal data that
            is already associated with Your Third-Party Social Media Service's
            account, such as Your name, Your email address, Your activities or
            Your contact list associated with that account.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            You may also have the option of sharing additional information with
            the Company through Your Third-Party Social Media Service's account.
            If You choose to provide such information and Personal Data, during
            registration or otherwise, You are giving the Company permission to
            use, share, and store it in a manner consistent with this Privacy
            Policy.
          </p>
        </div>
        <div>
          <h3 className='text-[16px] font-[700] italic'>
            Tracking Technologies and Cookies
          </h3>
          <p className='text-[14px] leading-6 font-normal'>
            We use Cookies and similar tracking technologies to track the
            activity on Our Service and store certain information. Tracking
            technologies used are beacons, tags, and scripts to collect and
            track information and to improve and analyze Our Service. The
            technologies We use may include:
          </p>
        </div>
        <p className='text-[14px] leading-6 font-normal'>
          • <strong>Cookies or Browser Cookies.</strong> A cookie is a small
          file placed on Your Device. You can instruct Your browser to refuse
          all Cookies or to indicate when a Cookie is being sent. However, if
          You do not accept Cookies, You may not be able to use some parts of
          our Service. Unless you have adjusted Your browser setting so that it
          will refuse Cookies, our Service may use Cookies.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          • <strong>Web Beacons.</strong> Certain sections of our Service and
          our emails may contain small electronic files known as web beacons
          (also referred to as clear gifs, pixel tags, and single-pixel gifs)
          that permit the Company, for example, to count users who have visited
          those pages or opened an email and for other related website
          statistics (for example, recording the popularity of a certain section
          and verifying system and server integrity).
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies
          remain on Your personal computer or mobile device when You go offline,
          while Session Cookies are deleted as soon as You close Your web
          browser. You can learn more about cookies on{" "}
          <a
            href='https://www.termsfeed.com/blog/cookies/#What_Are_Cookies'
            target='_blank'
          >
            TermsFeed website
          </a>{" "}
          article.
        </p>
      </div>
      <section className='space-y-3 text-[14px] leading-6 font-normal'>
        <p>
          We use both Session and Persistent Cookies for the purposes set out
          below:
        </p>

        <h3>Necessary / Essential Cookies</h3>
        <ul>
          <li>
            <strong>Type:</strong> Session Cookies
          </li>
          <li>
            <strong>Administered by:</strong> Us
          </li>
          <li>
            <strong>Purpose:</strong> These Cookies are essential to provide You
            with services available through the Website and to enable You to use
            some of its features. They help to authenticate users and prevent
            fraudulent use of user accounts. Without these Cookies, the services
            that You have asked for cannot be provided, and We only use these
            Cookies to provide You with those services.
          </li>
        </ul>

        <h3>Cookies Policy / Notice Acceptance Cookies</h3>
        <ul>
          <li>
            <strong>Type:</strong> Persistent Cookies
          </li>
          <li>
            <strong>Administered by:</strong> Us
          </li>
          <li>
            <strong>Purpose:</strong> These Cookies identify if users have
            accepted the use of cookies on the Website.
          </li>
        </ul>

        <h3>Functionality Cookies</h3>
        <ul>
          <li>
            <strong>Type:</strong> Persistent Cookies
          </li>
          <li>
            <strong>Administered by:</strong> Us
          </li>
          <li>
            <strong>Purpose:</strong> These Cookies allow us to remember choices
            You make when You use the Website, such as remembering your login
            details or language preference. The purpose of these Cookies is to
            provide You with a more personal experience and to avoid You having
            to re-enter your preferences every time You use the Website.
          </li>
        </ul>

        <h3>Tracking and Performance Cookies</h3>
        <ul>
          <li>
            <strong>Type:</strong> Persistent Cookies
          </li>
          <li>
            <strong>Administered by:</strong> Third-Parties
          </li>
          <li>
            <strong>Purpose:</strong> These Cookies are used to track
            information about traffic to the Website and how users use the
            Website. The information gathered via these Cookies may directly or
            indirectly identify you as an individual visitor. This is because
            the information collected is typically linked to a pseudonymous
            identifier associated with the device you use to access the Website.
            We may also use these Cookies to test new pages, features or new
            functionality of the Website to see how our users react to them.
          </li>
        </ul>

        <p>
          For more information about the cookies we use and your choices
          regarding cookies, please visit our{" "}
          <a href='/cookies-policy'>Cookies Policy</a> or the Cookies section of
          our <a href='/privacy-policy'>Privacy Policy</a>.
        </p>
      </section>

      <section className='space-y-3 text-[14px] leading-6 font-normal'>
        <h2 className='text-[14px] font-semibold'>Use of Your Personal Data</h2>
        <p>The Company may use Personal Data for the following purposes:</p>
        <ul>
          <li>
            <strong>To provide and maintain our Service:</strong> Including to
            monitor the usage of our Service.
          </li>
          <li>
            <strong>To manage Your Account:</strong> To manage Your registration
            as a user of the Service. The Personal Data You provide can give You
            access to different functionalities of the Service that are
            available to You as a registered user.
          </li>
          <li>
            <strong>For the performance of a contract:</strong> The development,
            compliance and undertaking of the purchase contract for the
            products, items or services You have purchased or of any other
            contract with Us through the Service.
          </li>
          <li>
            <strong>To contact You:</strong> By email, telephone calls, SMS, or
            other equivalent forms of electronic communication, such as a mobile
            application's push notifications, regarding updates or informative
            communications related to the functionalities, products or
            contracted services, including the security updates, when necessary
            or reasonable for their implementation.
          </li>
          <li>
            <strong>To provide You with news and offers:</strong> Special offers
            and general information about other goods, services and events which
            we offer that are similar to those that you have already purchased
            or enquired about unless You have opted not to receive such
            information.
          </li>
          <li>
            <strong>To manage Your requests:</strong> To attend and manage Your
            requests to Us.
          </li>
          <li>
            <strong>To deliver targeted advertising:</strong> We may use Your
            information to develop and display content and advertising (and work
            with third-party vendors who do so) tailored to Your interests
            and/or location and to measure its effectiveness.
          </li>
          <li>
            <strong>For business transfers:</strong> To evaluate or conduct a
            merger, divestiture, restructuring, reorganization, dissolution, or
            other sale or transfer of some or all of Our assets, in which
            Personal Data held by Us about our Service users is among the assets
            transferred.
          </li>
          <li>
            <strong>For other purposes:</strong> Such as data analysis,
            identifying usage trends, determining the effectiveness of our
            promotional campaigns and to evaluate and improve our Service,
            products, services, marketing and your experience.
          </li>
        </ul>

        <h3>
          We may share Your personal information in the following situations:
        </h3>
        <ul>
          <li>
            <strong>With Service Providers:</strong> To monitor and analyze the
            use of our Service, to advertise on third party websites to You
            after You visited our Service, for payment processing, to contact
            You.
          </li>
          <li>
            <strong>For business transfers:</strong> In connection with, or
            during negotiations of, any merger, sale of Company assets,
            financing, or acquisition of all or a portion of Our business to
            another company.
          </li>
          <li>
            <strong>With Affiliates:</strong> We will require those affiliates
            to honor this Privacy Policy. Affiliates include Our parent company
            and any other subsidiaries, joint venture partners or other
            companies that We control or that are under common control with Us.
          </li>
          <li>
            <strong>With business partners:</strong> To offer You certain
            products, services or promotions.
          </li>
          <li>
            <strong>With other users:</strong> When You share personal
            information or otherwise interact in the public areas with other
            users, such information may be viewed by all users and may be
            publicly distributed outside. If You interact with other users or
            register through a Third-Party Social Media Service, Your contacts
            on that service may see Your name, profile, pictures, and
            description of Your activity. Similarly, other users will be able to
            view descriptions of Your activity, communicate with You and view
            Your profile.
          </li>
          <li>
            <strong>With Your consent:</strong> We may disclose Your personal
            information for any other purpose with Your consent.
          </li>
        </ul>
      </section>

      <section className='space-y-3'>
        <h2 className='text-[16px] leading-6 font-semibold'>
          Retention of Your Personal Data
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          The Company will also retain Usage Data for internal analysis
          purposes. Usage Data is generally retained for a shorter period of
          time, except when this data is used to strengthen the security or to
          improve the functionality of Our Service, or We are legally obligated
          to retain this data for longer time periods.
        </p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-[16px] leading-6 font-semibold'>
          Transfer of Your Personal Data
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          Your information, including Personal Data, is processed at the
          Company's operating offices and in any other places where the parties
          involved in the processing are located. It means that this information
          may be transferred to — and maintained on — computers located outside
          of Your state, province, country or other governmental jurisdiction
          where the data protection laws may differ than those from Your
          jurisdiction.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          Your consent to this Privacy Policy followed by Your submission of
          such information represents Your agreement to that transfer.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          The Company will take all steps reasonably necessary to ensure that
          Your data is treated securely and in accordance with this Privacy
          Policy and no transfer of Your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of Your data and other personal information.
        </p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-[16px] leading-6 font-semibold'>
          Delete Your Personal Data
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          You have the right to delete or request that We assist in deleting the
          Personal Data that We have collected about You.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          Our Service may give You the ability to delete certain information
          about You from within the Service.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          You may update, amend, or delete Your information at any time by
          signing in to Your Account, if you have one, and visiting the account
          settings section that allows you to manage Your personal information.
          You may also contact Us to request access to, correct, or delete any
          personal information that You have provided to Us.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          Please note, however, that We may need to retain certain information
          when we have a legal obligation or lawful basis to do so.
        </p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-[16px] leading-6 font-semibold'>
          Disclosure of Your Personal Data
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          <strong>Business Transactions</strong>
          <br />
          If the Company is involved in a merger, acquisition or asset sale,
          Your Personal Data may be transferred. We will provide notice before
          Your Personal Data is transferred and becomes subject to a different
          Privacy Policy.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <strong>Law enforcement</strong>
          <br />
          Under certain circumstances, the Company may be required to disclose
          Your Personal Data if required to do so by law or in response to valid
          requests by public authorities (e.g. a court or a government agency).
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <strong>Other legal requirements</strong>
          <br />
          The Company may disclose Your Personal Data in the good faith belief
          that such action is necessary to:
        </p>
        <ul className='list-inside list-disc text-[14px] leading-6 font-normal'>
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of the Company</li>
          <li>
            Prevent or investigate possible wrongdoing in connection with the
            Service
          </li>
          <li>
            Protect the personal safety of Users of the Service or the public
          </li>
          <li>Protect against legal liability</li>
        </ul>

        <h2 className='text-[16px] leading-6 font-semibold'>
          Security of Your Personal Data
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet, or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>
          Detailed Information on the Processing of Your Personal Data
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          The Service Providers We use may have access to Your Personal Data.
          These third-party vendors collect, store, use, process and transfer
          information about Your activity on Our Service in accordance with
          their Privacy Policies.
        </p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-[16px] leading-6 font-semibold'>Analytics</h2>
        <p className='text-[14px] leading-6 font-normal'>
          We may use third-party Service providers to monitor and analyze the
          use of our Service.
        </p>

        <h3 className='text-[14px] leading-6 font-semibold'>
          Google Analytics
        </h3>
        <p className='text-[14px] leading-6 font-normal'>
          Google Analytics is a web analytics service offered by Google that
          tracks and reports website traffic. Google uses the data collected to
          track and monitor the use of our Service. This data is shared with
          other Google services. Google may use the collected data to
          contextualize and personalize the ads of its own advertising network.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          You can opt-out of having made your activity on the Service available
          to Google Analytics by installing the Google Analytics opt-out browser
          add-on. The add-on prevents the Google Analytics JavaScript (ga.js,
          analytics.js and dc.js) from sharing information with Google Analytics
          about visits activity.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          For more information on the privacy practices of Google, please visit
          the Google Privacy & Terms web page:
          <a
            href='https://policies.google.com/privacy'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 underline'
          >
            https://policies.google.com/privacy
          </a>
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>Email Marketing</h2>
        <p className='text-[14px] leading-6 font-normal'>
          We may use Your Personal Data to contact You with newsletters,
          marketing or promotional materials and other information that may be
          of interest to You. You may opt-out of receiving any, or all, of these
          communications from Us by following the unsubscribe link or
          instructions provided in any email We send or by contacting Us.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          We may use Email Marketing Service Providers to manage and send emails
          to You.
        </p>

        <h3 className='text-[14px] leading-6 font-semibold'>Mailchimp</h3>
        <p className='text-[14px] leading-6 font-normal'>
          Mailchimp is an email marketing sending service provided by The Rocket
          Science Group LLC.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          For more information on the privacy practices of Mailchimp, please
          visit their Privacy policy:
          <a
            href='https://mailchimp.com/legal/privacy/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 underline'
          >
            https://mailchimp.com/legal/privacy/
          </a>
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>Payments</h2>
        <p className='text-[14px] leading-6 font-normal'>
          We may provide paid products and/or services within the Service. In
          that case, we may use third-party services for payment processing
          (e.g. payment processors).
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          We will not store or collect Your payment card details. That
          information is provided directly to Our third-party payment processors
          whose use of Your personal information is governed by their Privacy
          Policy. These payment processors adhere to the standards set by
          PCI-DSS as managed by the PCI Security Standards Council, which is a
          joint effort of brands like Visa, Mastercard, American Express and
          Discover. PCI-DSS requirements help ensure the secure handling of
          payment information.
        </p>

        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>
            <strong>Apple Store In-App Payments</strong> –
            <a
              href='https://www.apple.com/legal/privacy/en-ww/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 underline'
            >
              https://www.apple.com/legal/privacy/en-ww/
            </a>
          </li>
          <li>
            <strong>Google Play In-App Payments</strong> –
            <a
              href='https://www.google.com/policies/privacy/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 underline'
            >
              https://www.google.com/policies/privacy/
            </a>
          </li>
          <li>
            <strong>Stripe</strong> –
            <a
              href='https://stripe.com/us/privacy'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 underline'
            >
              https://stripe.com/us/privacy
            </a>
          </li>
          <li>
            <strong>PayPal</strong> –
            <a
              href='https://www.paypal.com/webapps/mpp/ua/privacy-full'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 underline'
            >
              https://www.paypal.com/webapps/mpp/ua/privacy-full
            </a>
          </li>
        </ul>

        <h2 className='text-[16px] leading-6 font-semibold'>
          Behavioral Remarketing
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          The Company uses remarketing services to advertise to You after You
          accessed or visited our Service. We and Our third-party vendors use
          cookies and non-cookie technologies to help Us recognize Your Device
          and understand how You use our Service so that We can improve our
          Service to reflect Your interests and serve You advertisements that
          are likely to be of more interest to You.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          These third-party vendors collect, store, use, process and transfer
          information about Your activity on Our Service in accordance with
          their Privacy Policies and to enable Us to:
        </p>

        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>
            Measure and analyze traffic and browsing activity on Our Service
          </li>
          <li>
            Show advertisements for our products and/or services to You on
            third-party websites or apps
          </li>
          <li>
            Measure and analyze the performance of Our advertising campaigns
          </li>
        </ul>

        <p className='text-[14px] leading-6 font-normal'>
          Some of these third-party vendors may use non-cookie technologies that
          may not be impacted by browser settings that block cookies. Your
          browser may not permit You to block such technologies. You can use the
          following third-party tools to decline the collection and use of
          information for the purpose of serving You interest-based advertising:
        </p>

        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>
            <a
              href='http://www.networkadvertising.org/choices/'
              className='text-blue-600 underline'
              target='_blank'
            >
              The NAI's opt-out platform
            </a>
          </li>
          <li>
            <a
              href='http://www.youronlinechoices.com/'
              className='text-blue-600 underline'
              target='_blank'
            >
              The EDAA's opt-out platform
            </a>
          </li>
          <li>
            <a
              href='http://optout.aboutads.info/?c=2&lang=EN'
              className='text-blue-600 underline'
              target='_blank'
            >
              The DAA's opt-out platform
            </a>
          </li>
        </ul>

        <p className='text-[14px] leading-6 font-normal'>
          You may opt-out of all personalized advertising by enabling privacy
          features on Your mobile device such as Limit Ad Tracking (iOS) and Opt
          Out of Ads Personalization (Android). See Your mobile device Help
          system for more information.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          We may share information, such as hashed email addresses (if
          available) or other online identifiers collected on Our Service with
          these third-party vendors. This allows Our third-party vendors to
          recognize and deliver You ads across devices and browsers. To read
          more about the technologies used by these third-party vendors and
          their cross-device capabilities please refer to the Privacy Policy of
          each vendor listed below.
        </p>

        <h3 className='text-[14px] leading-6 font-semibold'>
          The third-party vendors We use are:
        </h3>

        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>
            <strong>Google Ads (AdWords)</strong> –
            <a
              href='http://www.google.com/settings/ads'
              className='text-blue-600 underline'
              target='_blank'
            >
              Ad Settings
            </a>
            ,
            <a
              href='https://tools.google.com/dlpage/gaoptout'
              className='text-blue-600 underline'
              target='_blank'
            >
              Opt-out Add-on
            </a>
            ,
            <a
              href='https://policies.google.com/privacy'
              className='text-blue-600 underline'
              target='_blank'
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <strong>Twitter</strong> –
            <a
              href='https://support.twitter.com/articles/20170405'
              className='text-blue-600 underline'
              target='_blank'
            >
              Ad Opt-out
            </a>
            ,
            <a
              href='https://twitter.com/privacy'
              className='text-blue-600 underline'
              target='_blank'
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <strong>Facebook</strong> –
            <a
              href='https://www.facebook.com/help/516147308587266'
              className='text-blue-600 underline'
              target='_blank'
            >
              Interest-Based Ads Info
            </a>
            ,
            <a
              href='https://www.facebook.com/help/568137493302217'
              className='text-blue-600 underline'
              target='_blank'
            >
              Ad Settings
            </a>
            ,
            <a
              href='https://www.facebook.com/privacy/explanation'
              className='text-blue-600 underline'
              target='_blank'
            >
              Data Policy
            </a>
          </li>
          <li>
            <strong>Pinterest</strong> –
            <a
              href='http://help.pinterest.com/articles/personalization-and-data'
              className='text-blue-600 underline'
              target='_blank'
            >
              Ad Settings
            </a>
            ,
            <a
              href='https://about.pinterest.com/privacy-policy'
              className='text-blue-600 underline'
              target='_blank'
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </section>
      <section className='space-y-3'>
        <h2 className='text-[16px] leading-6 font-semibold'>GDPR Privacy</h2>

        <h3 className='text-[14px] leading-6 font-semibold'>
          Legal Basis for Processing Personal Data under GDPR
        </h3>
        <p className='text-[14px] leading-6 font-normal'>
          We may process Personal Data under the following conditions:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>
            Consent: You have given Your consent for processing Personal Data
            for one or more specific purposes.
          </li>
          <li>
            Performance of a contract: Provision of Personal Data is necessary
            for the performance of an agreement with You and/or for any
            pre-contractual obligations thereof.
          </li>
          <li>
            Legal obligations: Processing Personal Data is necessary for
            compliance with a legal obligation to which the Company is subject.
          </li>
          <li>
            Vital interests: Processing Personal Data is necessary in order to
            protect Your vital interests or of another natural person.
          </li>
          <li>
            Public interests: Processing Personal Data is related to a task that
            is carried out in the public interest or in the exercise of official
            authority vested in the Company.
          </li>
          <li>
            Legitimate interests: Processing Personal Data is necessary for the
            purposes of the legitimate interests pursued by the Company.
          </li>
        </ul>
        <p className='text-[14px] leading-6 font-normal'>
          In any case, the Company will gladly help to clarify the specific
          legal basis that applies to the processing, and in particular whether
          the provision of Personal Data is a statutory or contractual
          requirement, or a requirement necessary to enter into a contract.
        </p>

        <h3 className='text-[14px] leading-6 font-semibold'>
          Your Rights under the GDPR
        </h3>
        <p className='text-[14px] leading-6 font-normal'>
          The Company undertakes to respect the confidentiality of Your Personal
          Data and to guarantee You can exercise Your rights.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          You have the right under this Privacy Policy, and by law if You are
          within the EU, to:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>
            Request access to Your Personal Data. The right to access, update or
            delete the information We have on You. Whenever made possible, you
            can access, update or request deletion of Your Personal Data
            directly within Your account settings section. If you are unable to
            perform these actions yourself, please contact Us to assist You.
            This also enables You to receive a copy of the Personal Data We hold
            about You.
          </li>
          <li>
            Request correction of the Personal Data that We hold about You. You
            have the right to have any incomplete or inaccurate information We
            hold about You corrected.
          </li>
          <li>
            Object to processing of Your Personal Data. This right exists where
            We are relying on a legitimate interest as the legal basis for Our
            processing and there is something about Your particular situation,
            which makes You want to object to our processing of Your Personal
            Data on this ground. You also have the right to object where We are
            processing Your Personal Data for direct marketing purposes.
          </li>
          <li>
            Request erasure of Your Personal Data. You have the right to ask Us
            to delete or remove Personal Data when there is no good reason for
            Us to continue processing it.
          </li>
          <li>
            Request the transfer of Your Personal Data. We will provide to You,
            or to a third-party You have chosen, Your Personal Data in a
            structured, commonly used, machine-readable format. Please note that
            this right only applies to automated information which You initially
            provided consent for Us to use or where We used the information to
            perform a contract with You.
          </li>
          <li>
            Withdraw Your consent. You have the right to withdraw Your consent
            on using your Personal Data. If You withdraw Your consent, We may
            not be able to provide You with access to certain specific
            functionalities of the Service.
          </li>
        </ul>

        <h3 className='text-[14px] leading-6 font-semibold'>
          Exercising of Your GDPR Data Protection Rights
        </h3>
        <p className='text-[14px] leading-6 font-normal'>
          You may exercise Your rights of access, rectification, cancellation
          and opposition by contacting Us. Please note that we may ask You to
          verify Your identity before responding to such requests. If You make a
          request, We will try our best to respond to You as soon as possible.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          You have the right to complain to a Data Protection Authority about
          Our collection and use of Your Personal Data. For more information, if
          You are in the European Economic Area (EEA), please contact Your local
          data protection authority in the EEA.
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>
          CCPA/CPRA Privacy Notice (California Privacy Rights)
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          This privacy notice section for California residents supplements the
          information contained in Our Privacy Policy and it applies solely to
          all visitors, users, and others who reside in the State of California.
        </p>

        <h3 className='text-[14px] leading-6 font-semibold'>
          Categories of Personal Information Collected
        </h3>
        <p className='text-[14px] leading-6 font-normal'>
          We collect information that identifies, relates to, describes,
          references, is capable of being associated with, or could reasonably
          be linked, directly or indirectly, with a particular Consumer or
          Device. The following is a list of categories of personal information
          which we may collect or may have been collected from California
          residents within the last twelve (12) months.
        </p>
      </section>
      <section className='space-y-3'>
        <p className='text-[14px] leading-6 font-normal'>
          Please note that the categories and examples provided in the list
          below are those defined in the CCPA/CPRA. This does not mean that all
          examples of that category of personal information were in fact
          collected by Us, but reflects our good faith belief to the best of Our
          knowledge that some of that information from the applicable category
          may be and may have been collected. For example, certain categories of
          personal information would only be collected if You provided such
          personal information directly to Us.
        </p>

        <ul className='space-y-2 text-[14px] leading-6 font-normal'>
          <li>
            <strong>Category A: Identifiers.</strong>
            <br />
            <strong>Examples:</strong> A real name, alias, postal address,
            unique personal identifier, online identifier, Internet Protocol
            address, email address, account name, driver's license number,
            passport number, or other similar identifiers.
            <br />
            <strong>Collected:</strong> Yes.
          </li>
          <li>
            <strong>
              Category B: Personal information categories listed in the
              California Customer Records statute (Cal. Civ. Code § 1798.80(e)).
            </strong>
            <br />
            <strong>Examples:</strong> A name, signature, Social Security
            number, physical characteristics or description, address, telephone
            number, passport number, driver's license or state identification
            card number, insurance policy number, education, employment,
            employment history, bank account number, credit card number, debit
            card number, or any other financial information, medical
            information, or health insurance information. Some personal
            information included in this category may overlap with other
            categories.
            <br />
            <strong>Collected:</strong> Yes.
          </li>
          <li>
            <strong>
              Category C: Protected classification characteristics under
              California or federal law.
            </strong>
            <br />
            <strong>Examples:</strong> Age (40 years or older), race, color,
            ancestry, national origin, citizenship, religion or creed, marital
            status, medical condition, physical or mental disability, sex
            (including gender, gender identity, gender expression, pregnancy or
            childbirth and related medical conditions), sexual orientation,
            veteran or military status, genetic information (including familial
            genetic information).
            <br />
            <strong>Collected:</strong> No.
          </li>
          <li>
            <strong>Category D: Commercial information.</strong>
            <br />
            <strong>Examples:</strong> Records and history of products or
            services purchased or considered.
            <br />
            <strong>Collected:</strong> Yes.
          </li>
          <li>
            <strong>Category E: Biometric information.</strong>
            <br />
            <strong>Examples:</strong> Genetic, physiological, behavioral, and
            biological characteristics, or activity patterns used to extract a
            template or other identifier or identifying information, such as,
            fingerprints, faceprints, and voiceprints, iris or retina scans,
            keystroke, gait, or other physical patterns, and sleep, health, or
            exercise data.
            <br />
            <strong>Collected:</strong> No.
          </li>
          <li>
            <strong>
              Category F: Internet or other similar network activity.
            </strong>
            <br />
            <strong>Examples:</strong> Interaction with our Service or
            advertisement.
            <br />
            <strong>Collected:</strong> Yes.
          </li>
          <li>
            <strong>Category G: Geolocation data.</strong>
            <br />
            <strong>Examples:</strong> Approximate physical location.
            <br />
            <strong>Collected:</strong> No.
          </li>
          <li>
            <strong>Category H: Sensory data.</strong>
            <br />
            <strong>Examples:</strong> Audio, electronic, visual, thermal,
            olfactory, or similar information.
            <br />
            <strong>Collected:</strong> No.
          </li>
          <li>
            <strong>
              Category I: Professional or employment-related information.
            </strong>
            <br />
            <strong>Examples:</strong> Current or past job history or
            performance evaluations.
            <br />
            <strong>Collected:</strong> No.
          </li>
          <li>
            <strong>
              Category J: Non-public education information (per the Family
              Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34
              C.F.R. Part 99)).
            </strong>
            <br />
            <strong>Examples:</strong> Education records directly related to a
            student maintained by an educational institution or party acting on
            its behalf, such as grades, transcripts, class lists, student
            schedules, student identification codes, student financial
            information, or student disciplinary records.
            <br />
            <strong>Collected:</strong> No.
          </li>
          <li>
            <strong>
              Category K: Inferences drawn from other personal information.
            </strong>
            <br />
            <strong>Examples:</strong> Profile reflecting a person's
            preferences, characteristics, psychological trends, predispositions,
            behavior, attitudes, intelligence, abilities, and aptitudes.
            <br />
            <strong>Collected:</strong> No.
          </li>
          <li>
            <strong>Category L: Sensitive personal information.</strong>
            <br />
            <strong>Examples:</strong> Account login and password information,
            geolocation data.
            <br />
            <strong>Collected:</strong> Yes.
          </li>
        </ul>

        <h3 className='text-[14px] leading-6 font-semibold'>
          Under CCPA/CPRA, personal information does not include:
        </h3>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>Publicly available information from government records</li>
          <li>Deidentified or aggregated consumer information</li>
          <li>Information excluded from the CCPA/CPRA's scope, such as:</li>
          <ul className='ml-6 list-inside list-disc space-y-1'>
            <li>
              Health or medical information covered by the Health Insurance
              Portability and Accountability Act of 1996 (HIPAA) and the
              California Confidentiality of Medical Information Act (CMIA) or
              clinical trial data
            </li>
            <li>
              Personal Information covered by certain sector-specific privacy
              laws, including the Fair Credit Reporting Act (FRCA), the
              Gramm-Leach-Bliley Act (GLBA) or California Financial Information
              Privacy Act (FIPA), and the Driver's Privacy Protection Act of
              1994
            </li>
          </ul>
        </ul>
      </section>
      <section className='space-y-3'>
        <h2 className='text-[16px] leading-6 font-semibold'>
          Sources of Personal Information
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          We obtain the categories of personal information listed above from the
          following categories of sources:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>
            Directly from You. For example, from the forms You complete on our
            Service, preferences You express or provide through our Service, or
            from Your purchases on our Service.
          </li>
          <li>
            Indirectly from You. For example, from observing Your activity on
            our Service.
          </li>
          <li>
            Automatically from You. For example, through cookies We or our
            Service Providers set on Your Device as You navigate through our
            Service.
          </li>
          <li>
            From Service Providers. For example, third-party vendors to monitor
            and analyze the use of our Service, third-party vendors to deliver
            targeted advertising to You, third-party vendors for payment
            processing, or other third-party vendors that We use to provide the
            Service to You.
          </li>
        </ul>

        <h2 className='text-[16px] leading-6 font-semibold'>
          Use of Personal Information
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          We may use or disclose personal information We collect for "business
          purposes" or "commercial purposes" (as defined under the CCPA/CPRA),
          which may include the following examples:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>To operate our Service and provide You with Our Service.</li>
          <li>
            To provide You with support and to respond to Your inquiries,
            including to investigate and address Your concerns and monitor and
            improve our Service.
          </li>
          <li>
            To fulfill or meet the reason You provided the information. For
            example, if You share Your contact information to ask a question
            about our Service, We will use that personal information to respond
            to Your inquiry. If You provide Your personal information to
            purchase a product or service, We will use that information to
            process Your payment and facilitate delivery.
          </li>
          <li>
            To respond to law enforcement requests and as required by applicable
            law, court order, or governmental regulations.
          </li>
          <li>
            As described to You when collecting Your personal information or as
            otherwise set forth in the CCPA/CPRA.
          </li>
          <li>For internal administrative and auditing purposes.</li>
          <li>
            To detect security incidents and protect against malicious,
            deceptive, fraudulent or illegal activity, including, when
            necessary, to prosecute those responsible for such activities.
          </li>
          <li>Other one-time uses.</li>
        </ul>
        <p className='text-[14px] leading-6 font-normal'>
          Please note that the examples provided above are illustrative and not
          intended to be exhaustive. For more details on how we use this
          information, please refer to the "Use of Your Personal Data" section.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          If We decide to collect additional categories of personal information
          or use the personal information We collected for materially different,
          unrelated, or incompatible purposes, We will update this Privacy
          Policy.
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>
          Disclosure of Personal Information
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          We may use or disclose and may have used or disclosed in the last
          twelve (12) months the following categories of personal information
          for business or commercial purposes:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>Category A: Identifiers</li>
          <li>
            Category B: Personal information categories listed in the California
            Customer Records statute (Cal. Civ. Code § 1798.80(e))
          </li>
          <li>Category D: Commercial information</li>
          <li>Category F: Internet or other similar network activity</li>
        </ul>
        <p className='text-[14px] leading-6 font-normal'>
          Please note that the categories listed above are those defined in the
          CCPA/CPRA. This does not mean that all examples of that category of
          personal information were in fact disclosed, but reflects our good
          faith belief to the best of our knowledge that some of that
          information from the applicable category may be and may have been
          disclosed.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          When We disclose personal information for a business purpose or a
          commercial purpose, We enter a contract that describes the purpose and
          requires the recipient to both keep that personal information
          confidential and not use it for any purpose except performing the
          contract.
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>
          Share of Personal Information
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          We may share, and have shared in the last twelve (12) months, Your
          personal information identified in the above categories with the
          following categories of third parties:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>Service Providers</li>
          <li>Payment processors</li>
          <li>Our affiliates</li>
          <li>Our business partners</li>
          <li>
            Third party vendors to whom You or Your agents authorize Us to
            disclose Your personal information in connection with products or
            services We provide to You
          </li>
        </ul>

        <h2 className='text-[16px] leading-6 font-semibold'>
          Sale of Personal Information
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          As defined in the CCPA/CPRA, "sell" and "sale" mean selling, renting,
          releasing, disclosing, disseminating, making available, transferring,
          or otherwise communicating orally, in writing, or by electronic or
          other means, a Consumer's personal information by the Business to a
          third party for valuable consideration. This means that We may have
          received some kind of benefit in return for sharing personal
          information, but not necessarily a monetary benefit.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          We do not sell personal information as the term sell is commonly
          understood. We do allow Service Providers to use Your personal
          information for the business purposes described in Our Privacy Policy,
          for activities such as advertising, marketing, and analytics, and
          these may be deemed a sale under CCPA/CPRA.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          We may sell and may have sold in the last twelve (12) months the
          following categories of personal information:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>Category A: Identifiers</li>
          <li>
            Category B: Personal information categories listed in the California
            Customer Records statute (Cal. Civ. Code § 1798.80(e))
          </li>
          <li>Category D: Commercial information</li>
          <li>Category F: Internet or other similar network activity</li>
        </ul>
        <p className='text-[14px] leading-6 font-normal'>
          Please note that the categories listed above are those defined in the
          CCPA/CPRA. This does not mean that all examples of that category of
          personal information were in fact sold, but reflects our good faith
          belief to the best of Our knowledge that some of that information from
          the applicable category may be and may have been shared for value in
          return.
        </p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-[16px] leading-6 font-semibold'>
          Sale of Personal Information of Minors Under 16 Years of Age
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          We do not knowingly collect personal information from minors under the
          age of 16 through our Service, although certain third party websites
          that we link to may do so. These third-party websites have their own
          terms of use and privacy policies and We encourage parents and legal
          guardians to monitor their children's Internet usage and instruct
          their children to never provide information on other websites without
          their permission.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          We do not sell the personal information of Consumers We actually know
          are less than 16 years of age, unless We receive affirmative
          authorization (the "right to opt-in") from either the Consumer who is
          between 13 and 16 years of age, or the parent or guardian of a
          Consumer less than 13 years of age. Consumers who opt-in to the sale
          of personal information may opt-out of future sales at any time. To
          exercise the right to opt-out, You (or Your authorized representative)
          may submit a request to Us by contacting Us.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          If You have reason to believe that a child under the age of 13 (or 16)
          has provided Us with personal information, please contact Us with
          sufficient detail to enable Us to delete that information.
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>
          Your Rights under the CCPA/CPRA
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          The CCPA/CPRA provides California residents with specific rights
          regarding their personal information. If You are a resident of
          California, You have the following rights:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>
            <strong>The right to notice.</strong> You have the right to be
            notified which categories of Personal Data are being collected and
            the purposes for which the Personal Data is being used.
          </li>
          <li>
            <strong>The right to know/access.</strong> Under CCPA/CPRA, You have
            the right to request that We disclose information to You about Our
            collection, use, sale, disclosure for business purposes and share of
            personal information. Once We receive and confirm Your request, We
            will disclose to You:
            <ul className='ml-6 list-inside list-disc space-y-1'>
              <li>
                The categories of personal information We collected about You
              </li>
              <li>
                The categories of sources for the personal information We
                collected about You
              </li>
              <li>
                Our business or commercial purposes for collecting or selling
                that personal information
              </li>
              <li>
                The categories of third parties with whom We share that personal
                information
              </li>
              <li>
                The specific pieces of personal information We collected about
                You
              </li>
              <li>The categories of personal information categories sold</li>
              <li>
                The categories of personal information categories disclosed
              </li>
            </ul>
          </li>
          <li>
            <strong>
              The right to say no to the sale or sharing of Personal Data
              (opt-out).
            </strong>{" "}
            You have the right to direct Us to not sell Your personal
            information. To submit an opt-out request, please see the "Do Not
            Sell My Personal Information" section or contact Us.
          </li>
          <li>
            <strong>The right to correct Personal Data.</strong> You have the
            right to correct or rectify any inaccurate personal information
            about You that We collected. Once We receive and confirm Your
            request, We will use commercially reasonable efforts to correct (and
            direct our Service Providers to correct) Your personal information,
            unless an exception applies.
          </li>
          <li>
            <strong>
              The right to limit use and disclosure of sensitive Personal Data.
            </strong>{" "}
            You have the right to request to limit the use or disclosure of
            certain sensitive personal information We collected about You,
            unless an exception applies. To submit, please see the "Limit the
            Use or Disclosure of My Sensitive Personal Information" section or
            contact Us.
          </li>
          <li>
            <strong>The right to delete Personal Data.</strong> You have the
            right to request the deletion of Your Personal Data under certain
            circumstances, subject to certain exceptions. Once We receive and
            confirm Your request, We will delete (and direct Our Service
            Providers to delete) Your personal information from our records,
            unless an exception applies. We may deny Your deletion request if
            retaining the information is necessary for Us or Our Service
            Providers to:
            <ul className='ml-6 list-inside list-disc space-y-1'>
              <li>
                Complete the transaction for which We collected the personal
                information, provide a good or service that You requested, take
                actions reasonably anticipated within the context of our ongoing
                business relationship with You, or otherwise perform our
                contract with You.
              </li>
              <li>
                Detect security incidents, protect against malicious, deceptive,
                fraudulent, or illegal activity, or prosecute those responsible
                for such activities.
              </li>
              <li>
                Debug products to identify and repair errors that impair
                existing intended functionality.
              </li>
              <li>
                Exercise free speech, ensure the right of another consumer to
                exercise their free speech rights, or exercise another right
                provided for by law.
              </li>
              <li>
                Comply with the California Electronic Communications Privacy Act
                (Cal. Penal Code § 1546 et. seq.).
              </li>
              <li>
                Engage in public or peer-reviewed scientific, historical, or
                statistical research in the public interest that adheres to all
                other applicable ethics and privacy laws, when the information's
                deletion may likely render impossible or seriously impair the
                research's achievement, if You previously provided informed
                consent.
              </li>
              <li>
                Enable solely internal uses that are reasonably aligned with
                consumer expectations based on Your relationship with Us.
              </li>
              <li>Comply with a legal obligation.</li>
              <li>
                Make other internal and lawful uses of that information that are
                compatible with the context in which You provided it.
              </li>
            </ul>
          </li>
          <li>
            <strong>The right not to be discriminated against.</strong> You have
            the right not to be discriminated against for exercising any of Your
            consumer's rights, including by:
            <ul className='ml-6 list-inside list-disc space-y-1'>
              <li>Denying goods or services to You</li>
              <li>
                Charging different prices or rates for goods or services,
                including the use of discounts or other benefits or imposing
                penalties
              </li>
              <li>
                Providing a different level or quality of goods or services to
                You
              </li>
              <li>
                Suggesting that You will receive a different price or rate for
                goods or services or a different level or quality of goods or
                services
              </li>
            </ul>
          </li>
        </ul>

        <h3 className='text-[14px] leading-6 font-semibold'>
          Exercising Your CCPA/CPRA Data Protection Rights
        </h3>
        <p className='text-[14px] leading-6 font-normal'>
          Please see the "Do Not Sell My Personal Information" section and
          "Limit the Use or Disclosure of My Sensitive Personal Information"
          section for more information on how to opt out and limit the use of
          sensitive information collected.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          Additionally, in order to exercise any of Your rights under the
          CCPA/CPRA, and if You are a California resident, You can contact Us:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>
            By email:{" "}
            <a
              href='mailto:info@seasonistas.com'
              className='text-blue-600 underline'
            >
              info@seasonistas.com
            </a>
          </li>
          <li>
            By visiting this page on our website:{" "}
            <a
              href='http://www.seasonistas.com/contact'
              className='text-blue-600 underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              http://www.seasonistas.com/contact
            </a>
          </li>
        </ul>

        <p className='text-[14px] leading-6 font-normal'>
          Only You, or a person registered with the California Secretary of
          State that You authorize to act on Your behalf, may make a verifiable
          request related to Your personal information.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          Your request to Us must:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>
            Provide sufficient information that allows Us to reasonably verify
            You are the person about whom We collected personal information or
            an authorized representative
          </li>
          <li>
            Describe Your request with sufficient detail that allows Us to
            properly understand, evaluate, and respond to it
          </li>
        </ul>
        <p className='text-[14px] leading-6 font-normal'>
          We cannot respond to Your request or provide You with the required
          information if We cannot:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>Verify Your identity or authority to make the request</li>
          <li>And confirm that the personal information relates to You</li>
        </ul>
        <p className='text-[14px] leading-6 font-normal'>
          We will disclose and deliver the required information free of charge
          within 45 days of receiving Your verifiable request. The time period
          to provide the required information may be extended once by an
          additional 45 days when reasonably necessary and with prior notice.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          Any disclosures We provide will only cover the 12-month period
          preceding the verifiable request's receipt.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          For data portability requests, We will select a format to provide Your
          personal information that is readily usable and should allow You to
          transmit the information from one entity to another entity without
          hindrance.
        </p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-[16px] leading-6 font-semibold'>
          Do Not Sell My Personal Information
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          As defined in the CCPA/CPRA, "sell" and "sale" mean selling, renting,
          releasing, disclosing, disseminating, making available, transferring,
          or otherwise communicating orally, in writing, or by electronic or
          other means, a Consumer's personal information by the Business to a
          third party for valuable consideration. This means that We may have
          received some kind of benefit in return for sharing personal
          information, but not necessarily a monetary benefit.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          We do not sell personal information as the term sell is commonly
          understood. We do allow Service Providers to use Your personal
          information for the business purposes described in Our Privacy Policy,
          for activities such as advertising, marketing, and analytics, and
          these may be deemed a sale under CCPA/CPRA.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          You have the right to opt-out of the sale of Your personal
          information. Once We receive and confirm a verifiable consumer request
          from You, we will stop selling Your personal information. To exercise
          Your right to opt-out, please contact Us.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          The Service Providers we partner with (for example, our analytics or
          advertising partners) may use technology on the Service that sells
          personal information as defined by the CCPA/CPRA law. If you wish to
          opt out of the use of Your personal information for interest-based
          advertising purposes and these potential sales as defined under
          CCPA/CPRA law, you may do so by following the instructions below.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          Please note that any opt out is specific to the browser You use. You
          may need to opt out on every browser that You use.
        </p>

        <h3 className='text-[14px] leading-6 font-semibold'>Website</h3>
        <p className='text-[14px] leading-6 font-normal'>
          If applicable, click "Privacy Preferences", "Update Privacy
          Preferences" or "Do Not Sell My Personal Information" buttons listed
          on the Service to review Your privacy preferences and opt out of
          cookies and other technologies that We may use. Please note that You
          will need to opt out from each browser that You use to access the
          Service.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          Additionally, You can opt out of receiving ads that are personalized
          as served by our Service Providers by following our instructions
          presented on the Service:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>
            <a
              href='http://www.networkadvertising.org/choices/'
              className='text-blue-600 underline'
              target='_blank'
            >
              The NAI's opt-out platform
            </a>
          </li>
          <li>
            <a
              href='http://www.youronlinechoices.com/'
              className='text-blue-600 underline'
              target='_blank'
            >
              The EDAA's opt-out platform
            </a>
          </li>
          <li>
            <a
              href='http://optout.aboutads.info/?c=2&lang=EN'
              className='text-blue-600 underline'
              target='_blank'
            >
              The DAA's opt-out platform
            </a>
          </li>
        </ul>
        <p className='text-[14px] leading-6 font-normal'>
          The opt out will place a cookie on Your computer that is unique to the
          browser You use to opt out. If you change browsers or delete the
          cookies saved by Your browser, You will need to opt out again.
        </p>

        <h3 className='text-[14px] leading-6 font-semibold'>Mobile Devices</h3>
        <p className='text-[14px] leading-6 font-normal'>
          Your mobile device may give You the ability to opt out of the use of
          information about the apps You use in order to serve You ads that are
          targeted to Your interests:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>
            "Opt out of Interest-Based Ads" or "Opt out of Ads Personalization"
            on Android devices
          </li>
          <li>"Limit Ad Tracking" on iOS devices</li>
        </ul>
        <p className='text-[14px] leading-6 font-normal'>
          You can also stop the collection of location information from Your
          mobile device by changing the preferences on Your mobile device.
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>
          Limit the Use or Disclosure of My Sensitive Personal Information
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          If You are a California resident, You have the right to limit the use
          and disclosure of Your sensitive personal information to that use
          which is necessary to perform the services or provide the goods
          reasonably expected by an average consumer who requests such services
          or goods.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          We collect, use and disclose sensitive personal information in ways
          that are necessary to provide the Service. For more information on how
          We use Your personal information, please see the "Use of Your Personal
          Data" section or contact us.
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>
          "Do Not Track" Policy as Required by California Online Privacy
          Protection Act (CalOPPA)
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          Our Service does not respond to Do Not Track signals.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          However, some third party websites do keep track of Your browsing
          activities. If You are visiting such websites, You can set Your
          preferences in Your web browser to inform websites that You do not
          want to be tracked. You can enable or disable DNT by visiting the
          preferences or settings page of Your web browser.
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>
          Your California Privacy Rights (California's Shine the Light law)
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          Under California Civil Code Section 1798 (California's Shine the Light
          law), California residents with an established business relationship
          with us can request information once a year about sharing their
          Personal Data with third parties for the third parties' direct
          marketing purposes.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          If you'd like to request more information under the California Shine
          the Light law, and if You are a California resident, You can contact
          Us using the contact information provided below.
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>
          California Privacy Rights for Minor Users (California Business and
          Professions Code Section 22581)
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          California Business and Professions Code Section 22581 allows
          California residents under the age of 18 who are registered users of
          online sites, services or applications to request and obtain removal
          of content or information they have publicly posted.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          To request removal of such data, and if You are a California resident,
          You can contact Us using the contact information provided below, and
          include the email address associated with Your account.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          Be aware that Your request does not guarantee complete or
          comprehensive removal of content or information posted online and that
          the law may not permit or require removal in certain circumstances.
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>
          Children's Privacy
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13. If You are a parent or guardian and You are aware
          that Your child has provided Us with Personal Data, please contact Us.
          If We become aware that We have collected Personal Data from anyone
          under the age of 13 without verification of parental consent, We take
          steps to remove that information from Our servers.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          If We need to rely on consent as a legal basis for processing Your
          information and Your country requires consent from a parent, We may
          require Your parent's consent before We collect and use that
          information.
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>
          Links to Other Websites
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          Our Service may contain links to other websites that are not operated
          by Us. If You click on a third party link, You will be directed to
          that third party's site. We strongly advise You to review the Privacy
          Policy of every site You visit.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>
          Changes to this Privacy Policy
        </h2>
        <p className='text-[14px] leading-6 font-normal'>
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          We will let You know via email and/or a prominent notice on Our
          Service, prior to the change becoming effective and update the "Last
          updated" date at the top of this Privacy Policy.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>

        <h2 className='text-[16px] leading-6 font-semibold'>Contact Us</h2>
        <p className='text-[14px] leading-6 font-normal'>
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <ul className='list-inside list-disc space-y-1 text-[14px] leading-6 font-normal'>
          <li>
            By email:{" "}
            <a
              href='mailto:info@seasonistas.com'
              className='text-blue-600 underline'
            >
              info@seasonistas.com
            </a>
          </li>
          <li>
            By visiting this page on our website:{" "}
            <a
              href='http://www.seasonistas.com/contact'
              className='text-blue-600 underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              http://www.seasonistas.com/contact
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
