"use client";

import { useState } from "react";

export default function TermsOfUsePage() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className='mx-auto space-y-6 p-4 sm:p-6'>
      {/* Header + Button */}
      <div className='flex flex-col items-start justify-between sm:flex-row sm:items-center'>
        <h1 className='text-lg leading-[22px] font-[400] sm:pt-4 md:text-[26px]'>
          {isEdit ? "Edit Conditions" : "Terms and Conditions"}
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
      <p className='text-[18px]'>Last updated: May 18, 2025</p>

      {/* Intro Paragraph */}
      <p className='text-[14px] leading-[24px] font-normal text-black'>
        Please read these terms and conditions carefully before using Our
        Service.
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
          <span className='font-semibold'>Affiliate </span>
          means an entity that controls, is controlled by or is under common
          control with a party, where "control" means ownership of 50% or more
          of the shares, equity interest or other securities entitled to vote
          for election of directors or other managing authority.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Account </span>
          means a unique account created for You to access our Service or parts
          of our Service.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Country </span>
          refers to: Greece
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Company </span>
          (referred to as either "the Company", "We", "Us" or "Our" in this
          Agreement) refers to Seasonistas, 96 Dimitriou Gounari Street, 15125
          Marousi, Attica, Greece.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Content</span> refers to content such
          as text, images, or other information that can be posted, uploaded,
          linked to or otherwise made available by You, regardless of the form
          of that content.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Device</span> means any device that
          can access the Service such as a computer, a cellphone or a digital
          tablet.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Feedback</span> means feedback,
          innovations or suggestions sent by You regarding the attributes,
          performance or features of our Service.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Free Trial</span> refers to a limited
          period of time that may be free when purchasing a Subscription.{" "}
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Promotions</span> refer to contests,
          sweepstakes or other promotions offered through the Service.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Service</span> refers to the Website.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Subscriptions</span> refer to the
          services or access to the Service offered on a subscription basis by
          the Company to You.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>Terms and Conditions </span>(also
          referred as "Terms") mean these Terms and Conditions that form the
          entire agreement between You and the Company regarding the use of the
          Service.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          <span className='font-semibold'>
            Third-party Social Media Service{" "}
          </span>
          means any services or content (including data, information, products
          or services) provided by a third-party that may be displayed, included
          or made available by the Service.
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
      </div>

      {/* Acknowledgment */}
      <div className='space-y-2'>
        <h3 className='text-[16px] font-[700]'>Acknowledgment</h3>
        <p className='text-[14px] leading-6 font-normal'>
          These are the Terms and Conditions governing the use of this Service
          and the agreement that operates between You and the Company. These
          Terms and Conditions set out the rights and obligations of all users
          regarding the use of the Service.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          Your access to and use of the Service is conditioned on Your
          acceptance of and compliance with these Terms and Conditions. These
          Terms and Conditions apply to all visitors, users and others who
          access or use the Service.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          By accessing or using the Service You agree to be bound by these Terms
          and Conditions. If You disagree with any part of these Terms and
          Conditions then You may not access the Service.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          You represent that you are over the age of 18. The Company does not
          permit those under 18 to use the Service.
        </p>
        <p className='text-[14px] leading-6 font-normal'>
          Your access to and use of the Service is also conditioned on Your
          acceptance of and compliance with the Privacy Policy of the Company.
          Our Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your personal information when You
          use the Application or the Website and tells You about Your privacy
          rights and how the law protects You. Please read Our Privacy Policy
          carefully before using Our Service.
        </p>
      </div>

      {/* Subscriptions */}
      <div className='space-y-2'>
        <h3 className='text-[16px] font-[700]'>Subscription</h3>
        <div>
          <h3 className='text-[15px] font-[700]'>Subscription period</h3>
          <p className='text-[14px] leading-6 font-normal'>
            The Service or some parts of the Service are available only with a
            paid Subscription. You will be billed in advance on a recurring and
            periodic basis (such as daily, weekly, monthly or annually),
            depending on the type of Subscription plan you select when
            purchasing the Subscription.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            At the end of each period, Your Subscription will automatically
            renew under the exact same conditions unless You cancel it or the
            Company cancels it.
          </p>
        </div>
        <div>
          <h3 className='pt-2 text-[15px] font-[700]'>
            Subscription cancellations
          </h3>
          <p className='text-[14px] leading-6 font-normal'>
            You may cancel Your Subscription renewal either through Your Account
            settings page or by contacting the Company. You will not receive a
            refund for the fees You already paid for Your current Subscription
            period and You will be able to access the Service until the end of
            Your current Subscription period.
          </p>
        </div>
        <div>
          <h3 className='pt-2 text-[15px] font-[700]'>Billing</h3>
          <p className='text-[14px] leading-6 font-normal'>
            You shall provide the Company with accurate and complete billing
            information including full name, address, state, zip code, telephone
            number, and a valid payment method information.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            Should automatic billing fail to occur for any reason, the Company
            will issue an electronic invoice indicating that you must proceed
            manually, within a certain deadline date, with the full payment
            corresponding to the billing period as indicated on the invoice.
          </p>
        </div>
        <div>
          <h3 className='pt-2 text-[15px] font-[700]'>Fee Changes</h3>
          <p className='text-[14px] leading-6 font-normal'>
            The Company, in its sole discretion and at any time, may modify the
            Subscription fees. Any Subscription fee change will become effective
            at the end of the then-current Subscription period.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            The Company will provide You with reasonable prior notice of any
            change in Subscription fees to give You an opportunity to terminate
            Your Subscription before such change becomes effective.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            Your continued use of the Service after the Subscription fee change
            comes into effect constitutes Your agreement to pay the modified
            Subscription fee amount.
          </p>
        </div>

        <div>
          <h3 className='pt-2 text-[15px] font-[700]'>Refunds</h3>
          <p className='text-[14px] leading-6 font-normal'>
            Except when required by law, paid Subscription fees are
            non-refundable.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            Certain refund requests for Subscriptions may be considered by the
            Company on a case-by-case basis and granted at the sole discretion
            of the Company.
          </p>
        </div>

        <div>
          <h3 className='pt-2 text-[15px] font-[700]'>Free Trial</h3>
          <p className='text-[14px] leading-6 font-normal'>
            The Company may, at its sole discretion, offer a Subscription with a
            Free Trial for a limited period of time.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            You may be required to enter Your billing information in order to
            sign up for the Free Trial.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            If You do enter Your billing information when signing up for a Free
            Trial, You will not be charged by the Company until the Free Trial
            has expired. On the last day of the Free Trial period, unless You
            canceled Your Subscription, You will be automatically charged the
            applicable Subscription fees for the type of Subscription You have
            selected.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            At any time and without notice, the Company reserves the right to
            (i) modify the terms and conditions of the Free Trial offer, or (ii)
            cancel such Free Trial offer.
          </p>
        </div>
        <div>
          <h3 className='pt-2 text-[15px] font-[700]'>Promotions</h3>
          <p className='text-[14px] leading-6 font-normal'>
            Any Promotions made available through the Service may be governed by
            rules that are separate from these Terms.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            If You participate in any Promotions, please review the applicable
            rules as well as our Privacy policy. If the rules for a Promotion
            conflict with these Terms, the Promotion rules will apply.
          </p>
        </div>
        <div>
          <h3 className='pt-2 text-[15px] font-[700]'>User Accounts</h3>
          <p className='text-[14px] leading-6 font-normal'>
            When You create an account with Us, You must provide Us information
            that is accurate, complete, and current at all times. Failure to do
            so constitutes a breach of the Terms, which may result in immediate
            termination of Your account on Our Service.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            You are responsible for safeguarding the password that You use to
            access the Service and for any activities or actions under Your
            password, whether Your password is with Our Service or a Third-Party
            Social Media Service.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            You agree not to disclose Your password to any third party. You must
            notify Us immediately upon becoming aware of any breach of security
            or unauthorized use of Your account.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than You
            without appropriate authorization, or a name that is otherwise
            offensive, vulgar or obscene.
          </p>
        </div>
      </div>
      {/* Subscriptions */}
      <div className='space-y-2'>
        <h3 className='text-[16px] font-[700]'>Content</h3>
        <div>
          <h3 className='text-[15px] font-[700]'>Your Right to Post Content</h3>
          <p className='text-[14px] leading-6 font-normal'>
            Our Service allows You to post Content. You are responsible for the
            Content that You post to the Service, including its legality,
            reliability, and appropriateness.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            By posting Content to the Service, You grant Us the right and
            license to use, modify, publicly perform, publicly display,
            reproduce, and distribute such Content on and through the Service.
            You retain any and all of Your rights to any Content You submit,
            post or display on or through the Service and You are responsible
            for protecting those rights. You agree that this license includes
            the right for Us to make Your Content available to other users of
            the Service, who may also use Your Content subject to these Terms.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            You represent and warrant that: (i) the Content is Yours (You own
            it) or You have the right to use it and grant Us the rights and
            license as provided in these Terms, and (ii) the posting of Your
            Content on or through the Service does not violate the privacy
            rights, publicity rights, copyrights, contract rights or any other
            rights of any person.
          </p>
        </div>
        <div>
          <h3 className='text-[15px] font-[700]'>Content Restrictions</h3>
          <p className='text-[14px] leading-6 font-normal'>
            The Company is not responsible for the content of the Service's
            users. You expressly understand and agree that You are solely
            responsible for the Content and for all activity that occurs under
            Your account, whether done so by You or any third person using Your
            account.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            You may not transmit any Content that is unlawful, offensive,
            upsetting, intended to disgust, threatening, libelous, defamatory,
            obscene or otherwise objectionable. Examples of such objectionable
            Content include, but are not limited to, the following:
          </p>

          <ul className='list-inside list-disc text-[14px] leading-6 font-normal'>
            <li>Unlawful or promoting unlawful activity.</li>
            <li>
              Defamatory, discriminatory, or mean-spirited content, including
              references or commentary about religion, race, sexual orientation,
              gender, national/ethnic origin, or other targeted groups.
            </li>
            <li>
              Spam, machine – or randomly – generated, constituting unauthorized
              or unsolicited advertising, chain letters, any other form of
              unauthorized solicitation, or any form of lottery or gambling.
            </li>
            <li>
              Containing or installing any viruses, worms, malware, trojan
              horses, or other content that is designed or intended to disrupt,
              damage, or limit the functioning of any software, hardware or
              telecommunications equipment or to damage or obtain unauthorized
              access to any data or other information of a third person.
            </li>
            <li>
              Infringing on any proprietary rights of any party, including
              patent, trademark, trade secret, copyright, right of publicity or
              other rights.
            </li>
            <li>
              Impersonating any person or entity including the Company and its
              employees or representatives.
            </li>
            <li>Violating the privacy of any third person.</li>
          </ul>
          <p className='text-[14px] leading-6 font-normal'>
            The Company reserves the right, but not the obligation, to, in its
            sole discretion, determine whether or not any Content is appropriate
            and complies with these Terms, refuse or remove this Content. The
            Company further reserves the right to make formatting and edits and
            change the manner of any Content. The Company can also limit or
            revoke the use of the Service if You post such objectionable
            Content. As the Company cannot control all content posted by users
            and/or third parties on the Service, you agree to use the Service at
            your own risk. You understand that by using the Service You may be
            exposed to content that You may find offensive, indecent, incorrect
            or objectionable, and You agree that under no circumstances will the
            Company be liable in any way for any content, including any errors
            or omissions in any content, or any loss or damage of any kind
            incurred as a result of your use of any content.
          </p>
        </div>
        <div>
          <h3 className='text-[16px] font-[700]'>Copyright Policy</h3>
          <h3 className='text-[15px] font-[700]'>
            Intellectual Property Infringement
          </h3>
          <p className='text-[14px] leading-6 font-normal'>
            We respect the intellectual property rights of others. It is Our
            policy to respond to any claim that Content posted on the Service
            infringes a copyright or other intellectual property infringement of
            any person.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            If You are a copyright owner, or authorized on behalf of one, and
            You believe that the copyrighted work has been copied in a way that
            constitutes copyright infringement that is taking place through the
            Service, You must submit Your notice in writing to the attention of
            our copyright agent via email at info@seasonistas.com and include in
            Your notice a detailed description of the alleged infringement.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            You may be held accountable for damages (including costs and
            attorneys' fees) for misrepresenting that any Content is infringing
            Your copyright.
          </p>
        </div>
        <div>
          <h3 className='text-[15px] font-[700]'>Content Backups</h3>
          <p className='text-[14px] leading-6 font-normal'>
            Although regular backups of Content are performed, the Company does
            not guarantee there will be no loss or corruption of data.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            Corrupt or invalid backup points may be caused by, without
            limitation, Content that is corrupted prior to being backed up or
            that changes during the time a backup is performed.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            The Company will provide support and attempt to troubleshoot any
            known or discovered issues that may affect the backups of Content.
            But You acknowledge that the Company has no liability related to the
            integrity of Content or the failure to successfully restore Content
            to a usable state.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            You agree to maintain a complete and accurate copy of any Content in
            a location independent of the Service.
          </p>
        </div>

        <div>
          <h3 className='text-[16px] font-[700]'>
            DMCA Notice and DMCA Procedure for Copyright Infringement Claims
          </h3>
          <p className='text-[14px] leading-6 font-normal'>
            You may submit a notification pursuant to the Digital Millennium
            Copyright Act (DMCA) by providing our Copyright Agent with the
            following information in writing (see 17 U.S.C 512(c)(3) for further
            detail):
          </p>
          <ul className='list-inside list-disc text-[14px] leading-6 font-normal'>
            <li>
              An electronic or physical signature of the person authorized to
              act on behalf of the owner of the copyright's interest.
            </li>
            <li>
              A description of the copyrighted work that You claim has been
              infringed, including the URL (i.e., web page address) of the
              location where the copyrighted work exists or a copy of the
              copyrighted work.
            </li>
            <li>
              Identification of the URL or other specific location on the
              Service where the material that You claim is infringing is
              located.
            </li>
            <li>Your address, telephone number, and email address.</li>
            <li>
              A statement by You that You have a good faith belief that the
              disputed use is not authorized by the copyright owner, its agent,
              or the law.
            </li>
            <li>
              {" "}
              A statement by You, made under penalty of perjury, that the above
              information in Your notice is accurate and that You are the
              copyright owner or authorized to act on the copyright owner's
              behalf.
            </li>
          </ul>
          <p className='text-[14px] leading-6 font-normal'>
            You can contact our copyright agent via email at
            info@seasonistas.com. Upon receipt of a notification, the Company
            will take whatever action, in its sole discretion, it deems
            appropriate, including removal of the challenged content from the
            Service.
          </p>
        </div>

        <div>
          <h3 className='text-[16px] font-[700]'>Intellectual Property </h3>
          <p className='text-[14px] leading-6 font-normal'>
            The Service and its original content (excluding Content provided by
            You or other users), features and functionality are and will remain
            the exclusive property of the Company and its licensors.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            The Service is protected by copyright, trademark, and other laws of
            both the Country and foreign countries.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            Our trademarks and trade dress may not be used in connection with
            any product or service without the prior written consent of the
            Company.
          </p>
        </div>
        <div>
          <h3 className='text-[16px] font-[700]'>Your Feedback to Us </h3>
          <p className='text-[14px] leading-6 font-normal'>
            You assign all rights, title and interest in any Feedback You
            provide the Company. If for any reason such assignment is
            ineffective, You agree to grant the Company a non-exclusive,
            perpetual, irrevocable, royalty free, worldwide right and license to
            use, reproduce, disclose, sub-license, distribute, modify and
            exploit such Feedback without restriction.
          </p>
        </div>
        <div>
          <h3 className='text-[16px] font-[700]'>Links to Other Websites </h3>
          <p className='text-[14px] leading-6 font-normal'>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by the Company.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            The Company has no control over, and assumes no responsibility for,
            the content, privacy policies, or practices of any third party web
            sites or services. You further acknowledge and agree that the
            Company shall not be responsible or liable, directly or indirectly,
            for any damage or loss caused or alleged to be caused by or in
            connection with the use of or reliance on any such content, goods or
            services available on or through any such web sites or services.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            We strongly advise You to read the terms and conditions and privacy
            policies of any third-party web sites or services that You visit.
          </p>
        </div>
        <div>
          <h3 className='text-[16px] font-[700]'>Termination </h3>
          <p className='text-[14px] leading-6 font-normal'>
            We may terminate or suspend Your Account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if You breach these Terms and Conditions.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            Upon termination, Your right to use the Service will cease
            immediately. If You wish to terminate Your Account, You may simply
            discontinue using the Service.
          </p>
        </div>

        <div>
          <h3 className='text-[16px] font-[700]'> Limitation of Liability </h3>
          <p className='text-[14px] leading-6 font-normal'>
            Notwithstanding any damages that You might incur, the entire
            liability of the Company and any of its suppliers under any
            provision of this Terms and Your exclusive remedy for all of the
            foregoing shall be limited to the amount actually paid by You
            through the Service or 100 USD if You haven't purchased anything
            through the Service.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            To the maximum extent permitted by applicable law, in no event shall
            the Company or its suppliers be liable for any special, incidental,
            indirect, or consequential damages whatsoever (including, but not
            limited to, damages for loss of profits, loss of data or other
            information, for business interruption, for personal injury, loss of
            privacy arising out of or in any way related to the use of or
            inability to use the Service, third-party software and/or
            third-party hardware used with the Service, or otherwise in
            connection with any provision of this Terms), even if the Company or
            any supplier has been advised of the possibility of such damages and
            even if the remedy fails of its essential purpose.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            Some states do not allow the exclusion of implied warranties or
            limitation of liability for incidental or consequential damages,
            which means that some of the above limitations may not apply. In
            these states, each party's liability will be limited to the greatest
            extent permitted by law.
          </p>
        </div>
        <div>
          <h3 className='text-[18px] font-[700]'>
            {" "}
            "AS IS" and "AS AVAILABLE" Disclaimer{" "}
          </h3>
          <p className='text-[14px] leading-6 font-normal'>
            The Service is provided to You "AS IS" and "AS AVAILABLE" and with
            all faults and defects without warranty of any kind. To the maximum
            extent permitted under applicable law, the Company, on its own
            behalf and on behalf of its Affiliates and its and their respective
            licensors and service providers, expressly disclaims all warranties,
            whether express, implied, statutory or otherwise, with respect to
            the Service, including all implied warranties of merchantability,
            fitness for a particular purpose, title and non-infringement, and
            warranties that may arise out of course of dealing, course of
            performance, usage or trade practice. Without limitation to the
            foregoing, the Company provides no warranty or undertaking, and
            makes no representation of any kind that the Service will meet Your
            requirements, achieve any intended results, be compatible or work
            with any other software, applications, systems or services, operate
            without interruption, meet any performance or reliability standards
            or be error free or that any errors or defects can or will be
            corrected.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            Without limiting the foregoing, neither the Company nor any of the
            company's provider makes any representation or warranty of any kind,
            express or implied: (i) as to the operation or availability of the
            Service, or the information, content, and materials or products
            included thereon; (ii) that the Service will be uninterrupted or
            error-free; (iii) as to the accuracy, reliability, or currency of
            any information or content provided through the Service; or (iv)
            that the Service, its servers, the content, or e-mails sent from or
            on behalf of the Company are free of viruses, scripts, trojan
            horses, worms, malware, timebombs or other harmful components.
          </p>
          <p className='text-[14px] leading-6 font-normal'>
            Some jurisdictions do not allow the exclusion of certain types of
            warranties or limitations on applicable statutory rights of a
            consumer, so some or all of the above exclusions and limitations may
            not apply to You. But in such a case the exclusions and limitations
            set forth in this section shall be applied to the greatest extent
            enforceable under applicable law.
          </p>
        </div>

        <div>
          <h3 className='text-[15px] font-[700]'>Governing Law </h3>
          <p className='text-[14px] leading-6 font-normal'>
            The laws of the Country, excluding its conflicts of law rules, shall
            govern this Terms and Your use of the Service. Your use of the
            Application may also be subject to other local, state, national, or
            international laws.
          </p>
        </div>
        <div>
          <h3 className='text-[15px] font-[700]'>Disputes Resolution </h3>
          <p className='text-[14px] leading-6 font-normal'>
            If You have any concern or dispute about the Service, You agree to
            first try to resolve the dispute informally by contacting the
            Company.
          </p>
        </div>
        <div>
          <h3 className='text-[15px] font-[700]'>
            For European Union (EU) Users{" "}
          </h3>
          <p className='text-[14px] leading-6 font-normal'>
            If You are a European Union consumer, you will benefit from any
            mandatory provisions of the law of the country in which You are
            resident.
          </p>
        </div>
        <div>
          <h3 className='text-[15px] font-[700]'>
            United States Federal Government End Use Provisions{" "}
          </h3>
          <p className='text-[14px] leading-6 font-normal'>
            If You are a U.S. federal government end user, our Service is a
            "Commercial Item" as that term is defined at 48 C.F.R. §2.101.
          </p>
        </div>
        <div>
          <h3 className='text-[15px] font-[700]'>
            United States Legal Compliance
          </h3>
          <p className='text-[14px] leading-6 font-normal'>
            You represent and warrant that (i) You are not located in a country
            that is subject to the United States government embargo, or that has
            been designated by the United States government as a "terrorist
            supporting" country, and (ii) You are not listed on any United
            States government list of prohibited or restricted parties.
          </p>
        </div>
        <div>
          <h3 className='text-[16px] font-[700]'>Severability and Waiver</h3>
          <h3 className='text-[15px] font-[700]'>Severability</h3>
          <p className='text-[14px] leading-6 font-normal'>
            If any provision of these Terms is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law and the remaining provisions will
            continue in full force and effect.
          </p>
        </div>
        <div>
          <h3 className='text-[15px] font-[700]'>Waiver</h3>
          <p className='text-[14px] leading-6 font-normal'>
            Except as provided herein, the failure to exercise a right or to
            require performance of an obligation under these Terms shall not
            affect a party's ability to exercise such right or require such
            performance at any time thereafter nor shall the waiver of a breach
            constitute a waiver of any subsequent breach.
          </p>
        </div>
        <div>
          <h3 className='text-[15px] font-[700]'>Translation Interpretation</h3>
          <p className='text-[14px] leading-6 font-normal'>
            These Terms and Conditions may have been translated if We have made
            them available to You on our Service. You agree that the original
            English text shall prevail in the case of a dispute.
          </p>
        </div>
        <div>
          <h3 className='text-[15px] font-[700]'>
            Changes to These Terms and Conditions
          </h3>
          <p className='text-[14px] leading-6 font-normal'>
            We reserve the right, at Our sole discretion, to modify or replace
            these Terms at any time. If a revision is material We will make
            reasonable efforts to provide at least 30 days' notice prior to any
            new terms taking effect. What constitutes a material change will be
            determined at Our sole discretion.
          </p>
        </div>
        <p className='text-[14px] leading-6 font-normal'>
          By continuing to access or use Our Service after those revisions
          become effective, You agree to be bound by the revised terms. If You
          do not agree to the new terms, in whole or in part, please stop using
          the website and the Service.
        </p>
        <div>
          <h3 className='text-[15px] font-[700]'>Contact Us</h3>
          <p className='text-[14px] leading-6 font-normal'>
            If you have any questions about these Terms and Conditions, You can
            contact us:
          </p>
          <div className='space-y-2 pt-2 pl-10'>
            <p>By email: info@seasonistas.com</p>
            <p>
              By visiting this page on our website:
              http://www.seasonistas.com/contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
