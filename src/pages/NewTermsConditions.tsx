import Navbar from '../components/EnglishBase/Navbar'
import Optimize from '../components/EnglishBase/Optimize'
import Footer from '../components/EnglishBase/Footer'
import { Helmet } from 'react-helmet'

const NewTermsConditions = () => {
    return (
        <div className='w-full h-full overflow-x-hidden p-4'>
            <Helmet>
                <title>Hoode | Terms and Conditions</title>
            </Helmet>
            <Navbar />
            <div className='bg-[#F2F2F2] rounded-[36px] text-center font-medium mx-[5vw] py-14 my-14'>
                <p className='text-[#808080]'>Terms of Use</p>
                <p className='text-[5vw]'>TERMS & CONDITIONS AND LETTER OF AGREEMENTFOR THE COMPANY/SERVICE PROVIDER</p>
            </div>
            <div className='text-[rgba(0,0,0,0.5)] px-[9vw] font-medium'>
                <p className='my-4'>Please read these terms and conditions carefully before accessing or using Hoode. By accessing or using the Platform, you agree to be bound by these terms and conditions. Hoode is an online platform that connects service seekers ("Customers") with service providers ("Providers") for various services.

                    @ Copyright Hoode, 2023. All rights reserved; reproduction, adaptation, or translation without permission is prohibited except as permitted under the International copyright laws. All the text, graphics, design, content, and other works are copyrighted works of the Hoode.</p>
                <p className='text-[30px] my-4 text-black'>Terms And Conditions Of Service</p>
                <p className="my-2">The following terms shall have the meaning given to them as hereunder:</p>
                <ul>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>1.Definitions</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>The terms "we," "us," or "our" refer to Hoode. The terms "you" or "your" refer to Customers.</li>
                                <li>"Customer" or "Consumer" means any person registering with Hoode as a member and ready to abide by these terms and conditions.</li>
                                <li>“Service Providers " refers to the entity or individual providing the services offered through Hoode. This includes Vendor Companies and Service Provider Companies associated with Hoode.
                                </li>
                                <li>
                                    "Gross Commission" refers to the total commission earned by Hoode Provider on each requested service before any deductions or expenses. It represents the full commission amount calculated based on the agreed-upon commission rate or percentage. The gross commission is calculated and deducted by Hoode Provider from the total payment received before disbursing the remaining payment to the service provider.
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>2. PROVIDERS OBLIGATIONS</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>Hoode Provider enables Customers to post service requests, and Providers can submit bids for those requests. Customers have the discretion to accept or reject bids from Providers.</li>
                                <li>All bids that have not been accepted or awarded shall be automatically deleted from the system. This deletion ensures the efficient management of bids and maintains the integrity of the platform.</li>
                                <li>
                                    Providers agree to provide accurate information regarding the services they offer, and they are solely responsible for the quality and completion of the services they provide to the Customers.</li>
                                <li>Upon completion of the transaction or service provided, the customer shall be invoiced for the total service charge, inclusive of the 4 SAR(Saudi Arabian Riyal) additional amount as user service charges. The Provider shall facilitate the collection of this payment from the customer through the agreed-upon payment method or platform.</li>
                                <li>
                                    Providers understand and agree that Hoode Provider will charge a commission/gross commission of 9.99% of the total service amount, which includes the service charge and any

                                    additional equipment costs Etc., plus user service charges, i.e. 4 SAR(Saudi Arabian Riyal) that is collected as user service charges from the customer.

                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>3. PAYMENTS</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>The commission/gross commission and user service charges on each requested service shall become due as soon as the request is placed and payment is received.</li>
                                <li> Hoode Provider will deduct its commission/gross commission in advance, before the payment of the price of the requested services to the service provider. The commission/gross commission deducted by Hoode Provider will be communicated to the service provider during the payment process.</li>
                                <li>
                                    The Provider shall facilitate the collection of this payment from the customer using the

                                    agreed-upon payment method or platform. However, the Provider shall collect this payment from the customer and subsequently remit it to the platform through a fund transfer mechanism.</li>
                                <li>Disputes regarding the paid amount will be resolved at our discretion.</li>
                                <li>The consumer shall be responsible for service payment to the service provider, either online or in cash.</li>
                                <li>All the transactions, payments, deductions, and bank charges shall be made by the Hoode via the banking channel from the account provided by you in the membership form.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>4. PRICE ERRORS AND PAYMENT DISCREPANCIES</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>In rare instances, there may be errors or discrepancies in the pricing information displayed on the Platform due to technical glitches, system updates, or human error. We strive to maintain accurate and up-to-date pricing; however, please note that such errors may occur.</li>
                                <li>If you encounter a price discrepancy or believe that an incorrect amount has been charged or received, please notify us immediately through our designated channels.</li>
                                <li>In the event of a price error, we reserve the right to cancel or amend the transaction, rectify the price, and provide you with the opportunity to proceed with the corrected amount or cancel the transaction without penalty.</li>
                                <li>Similarly, customers may be required to pay more or less than the originally quoted amount due to additional services or changes requested during service provision.</li>
                                <li>We shall not be held responsible for any direct or indirect damages or losses arising from pricing errors or payment discrepancies except to the extent required by applicable laws or regulations.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>5. TERM OF LETTER OF AGREEMENT</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>The period of this Agreement is initially set for one year from the date of signing of this Letter of Agreement unless mentioned otherwise. However, it may be subject to extension based on specific terms and conditions outlined in the Agreement itself.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>6. DISPUTE RESOLUTION</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>In a dispute between the customer and the service provider, we encourage both parties to first attempt to resolve the issue amicably through direct communication.</li>
                                <li>If a dispute cannot be resolved directly, either party may contact our customer support team via social media to seek assistance and provide relevant details regarding the dispute.</li>
                                <li>We will review the dispute and make reasonable efforts to facilitate a fair resolution based on the information provided by both parties. After submission, the Provider shall have the right to object to the dispute.</li>
                                <li>In the absence of objection, our decision regarding the dispute will be final and binding.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>7. PAYMENT DISPUTES</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>If there is a disagreement between the customer and the service provider regarding the paid amount, the customer may request an update.</li>
                                <li>If the paid amount differs from the bid amount, the customer can request an update, and the Provider can object to it within seven days, along with a supporting document, if necessary.</li>
                                <li>We retain the authority to approve or reject the update for any reason.</li>
                                <li>In the event of an objection being rejected from our side, the bid payment specified shall be deemed final and obligatory.</li>
                                <li>The service provider will have the opportunity to review the customer's request and provide their objections within seven days, along with any relevant supporting documents, if required.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>8. ACCOUNT SUSPENSION/TERMINATION</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>In cases where fraudulent activities, intentional misconduct, or repeated violations of our Terms and Conditions are identified, we reserve the right to suspend or terminate the account of the party involved in such activities.</li>
                                <li>Account suspension or termination may occur during the dispute resolution process if there is clear evidence of a violation.

                                </li>
                                <li>
                                    The suspension or termination of an account does not absolve the party from any obligations or liabilities arising from previous transactions or services provided.
                                </li>
                                <li>
                                    In cases of suspicious activity, we reserve the right to suspend or terminate the account for security reasons. For instance, if a provider consistently updates the amount for their services multiple times or receives a significant number of negative reviews regarding the quality of their service, we may take necessary measures such as account suspension or termination to ensure the satisfaction and trust of our users.
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>9. ABIDING BY OTHER TERMS AND CONDITIONS AND AMENDMENT</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>You will abide by all other terms and conditions of Hoode Provider other than the present terms and conditions. You may also contact us if there is any ambiguity or difficulty in abiding by our terms and conditions.</li>
                                <li>Hoode Provider reserves the right to change, abolish, modify, or replace any or all terms and conditions without any notice to you.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>10. FEEDBACK</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>All comments, complaints, feedback, information or materials submitted by the Provider to Hoode Provider through or in association with providing your services shall be considered non-confidential and Hoode Provider’s property. Hoode Provider may use such comments, complaints, information or materials in any way it chooses unrestricted. This information will be forwarded to you for the betterment of your services.

                                </li>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>11. DISCLAIMER</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>Upon awarding a service to a provider, it shall be understood that cancellation is not an option, except in cases where the Provider has initiated communication through the designated social platforms. Any requests for cancellation must be made in writing through the specified social channels, as communicated by the contracting party.</li>
                                <li>Hoode Provider is a third-party platform that assumes responsibility for connecting the Provider with the customer. However, the Hoode Provider platform is not responsible for the quality of service and is not related in any way to its warranties, guarantees, promos, loss, or damage in any manner whatsoever. Neither the Hoode Provider platform nor its officers, directors, employees, agents, or affiliates are responsible nor liable for any loss, damage (including, but not limited to, actual, consequential, or punitive), liability, claim, or other injury or cause related to or resulting from the provision of its services to you.</li>
                                <li>The service provider acknowledges that it is solely responsible for complying with all applicable laws, regulations, and licensing requirements related to the services it offers through the Hoode Provider platform. Hoode Provider disclaims any liability for the service provider's failure to comply with such laws, regulations, or licensing requirements.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>12. TERMINATION OF SERVICES</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>Hoode Provider may, in its sole discretion, terminate or suspend its services to all or part of the service area in breach of any or all parts of this letter of Agreement. In the event this Agreement is terminated, your liabilities regarding payment of the services and the warranties and limitation of liabilities set forth on the service and/or in this Agreement shall survive any such termination.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>13. DATA COLLECTION</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>
                                    Providers understand and agree that certain information, such as their location, name, phone number, email and service details, may be shared with Providers once a service is awarded.</li>
                                <li>For the purpose of obtaining and setting locations, the service may utilize Google Maps.</li>
                                <li>By using our platform and providing your contact information, you consent to receive communications from us for various purposes related to your account and the services provided.</li>

                                <li>In order to facilitate the data collection process, providers are required to provide the following information and submit the specified documents:
                                    <ul className="list-disc pl-5">
                                        <li>Name: Providers shall furnish their legal name, which will be used for identification purposes throughout the data collection process.</li>
                                        <li>Services Provided: A comprehensive list of the services offered by the Provider shall be provided, ensuring clarity regarding the scope of their offerings.</li>
                                        <li>Identification (ID) for Individuals: Individual providers must submit valid identification documents, such as passports or national identification cards, to establish their personal identity.</li>
                                        <li>Commercial Registration for Companies: For companies or business entities acting as providers, valid commercial registration documents must be submitted to verify their legal status.</li>
                                        <li>Document Upload: Providers shall be required to digitally upload the necessary identification document or commercial registration document as specified by the applicable regulations or procedures.</li>
                                        <li>Accepted Services: Providers shall indicate the specific services they are willing to offer or accept, enabling effective matching and communication with potential users.</li>
                                    </ul>
                                </li>


                                <li>Hoode Provider collects and processes personal data in accordance with its Privacy Policy. By using Hoode Provider, you consent to the collection, use, and disclosure of your personal information as described in the Privacy Policy.</li>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>14. ACCOUNT AND USER INFORMATION</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>If a service provider decides to sell or transfer their account or contact information to a third party, it is important to note that their information, including personal details, may become visible to the new buyer or transferee. The platform will not be held responsible for any consequences or misuse of information that may occur as a result of such transactions. It is the responsibility of the Provider to exercise caution and ensure the security and confidentiality of their information when engaging in any transfer or sale of their account or contact details.

                                </li>
                                <li>If a service provider abandons their registered phone number and it is subsequently purchased or acquired by another individual or entity, it is important to note that the previous owner's information, including personal details, may become visible to the new buyer.</li>
                                <li>By using our platform and providing your contact information, you consent to receive communications from us for various purposes related to your account and the services provided.</li>
                                <li>We may contact you through the contact details you have provided, which may include email, phone calls, social media channels, SMS or at any platform.</li>
                                <li>Our communications may include, but are not limited to:
                                    <ul className="list-disc pl-5">
                                        <li>Updates on your account status, including service approvals or rejections.</li>
                                        <li>Information regarding the resolution of any disputes or complaints related to the services provided.</li>
                                        <li>Important updates or changes to our platform, policies, or terms and conditions.</li>
                                        <li>Notifications or reminders regarding pending payments, account renewal, or other account-related matters.</li>

                                    </ul>
                                </li>
                                <li>Please note that any charges associated with SMS or phone calls, such as network provider fees or data charges, are solely your responsibility.</li>
                                <li>
                                    We prioritize the privacy and security of your personal information, and we will handle it in accordance with our Privacy Policy and applicable data protection laws.
                                </li>
                                <li>You may opt-out of certain non-essential communications by adjusting your notification preferences within your account settings, subject to any legal or contractual requirements.</li>
                                <li>However, please note that opting out of certain communications may limit our ability to provide you with important updates or resolve any issues effectively.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>15. LIMITATION OF LIABILITY</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>Hoode Provider shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising out of or in connection with the use of Hoode Provider, including but not limited to damages for loss of profits, goodwill, data, or other intangible losses.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>16. GOVERNING LAW AND JURISDICTION</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>This Agreement shall be governed by and constructed in accordance with the laws of the Kingdom of Saudi Arabia (KSA). The KSA courts shall have exclusive jurisdiction and venue over any dispute arising out of or relating to this letter of Agreement, and each party hereby consents to the jurisdiction and venue of such courts.</li>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>17. COMMUNICATION AND SUPPORT:</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>Providers can communicate with our support team via social media accounts in both Arabicand English.</li>
                                <li>Our support team will make every effort to respond to inquiries and provide assistance in theProvider's preferred language based on availability.</li>
                                <li>While we aim to provide comprehensive support in both languages, there may be instances where certain information or responses are available in one language only.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>18. GENERAL PROVISIONS:</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>It is acknowledged and understood that there may be situations where no contact center orcare center is available or accessible.</li>
                                <li>In such instances, the parties involved shall make reasonable efforts to provide alternative means of communication or support. These alternatives may include but are not limited to, utilizing online platforms, email correspondence, self-service options, or any other mutually agreed-upon methods.</li>
                                <li>If any provision of this Agreement is deemed void, unlawful, or otherwise unenforceable for any reason, that provision shall be severed from this Agreement and the remaining provisions of this Agreement shall remain in force. This contains the entire Agreement between you and Hoode Provider concerning your provision of services, and the Agreement shall not be modified, except in writing, signed by both parties. If you have questions regarding Hoode Provider's Terms and Conditions and service agreement, you may contact us at  <span>business@hooode.com.</span></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>17. GENERAL PROVISIONS</p>
                            <ul className='my-3 list-decimal pl-5'>
                                <li>Customers are granted the discretion to consider the ratings and feedback submitted by other customers when evaluating providers. These ratings and feedback serve as valuable references to assess the quality, reliability, and overall performance of the providers. However customers retain the freedom to make their judgments and are not obligated to rely solely on the ratings in their selection process.</li>
                                <li>It is acknowledged and understood that there may be situations where no contact center or care center is available or accessible.</li>
                                <li>In such instances, the parties involved shall make reasonable efforts to provide alternative means of communication or support. These alternatives may include but are not limited to, utilizing online platforms, email correspondence, self-service options, or any other mutually agreed-upon methods. You may contact us at
                                    <span className='text-black'>business@hooode.com</span>.</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <p className='text-[30px] my-4 text-black'>Hoode Privacy Policy</p>
                <p>It is essential to Hoode to help our customers retain their privacy when they take advantage of all the internet, services, and products we offer. We believe your privacy concerns are no one else’s. Your privacy is important to you and to us. So we will protect the information you share with us. To protect your privacy, Hoode follows different policies following worldwide practices for customer privacy and data protection.

                    <ul className="list-disc pl-10">
                        <li>We may share your personal information with third parties, such as service providers, contractors, or payment processors, solely for the purpose of providing the requested home services or facilitating transactions. However, we will not sell, rent, or lease your personal information to any third parties unless we have obtained your explicit consent or are required by law to do so.</li>
                        <li>We will use state-of-the-art security measures to protect your information from unauthorized users.
                        </li>
                    </ul>
                </p>
                <ul>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>INFORMATION WE COLLECT</p>
                            <ul className='my-3 list-disc pl-5'>
                                <li>Personal Information: We may collect personal information that you provide directly to us when you register an account, use Hoode, or communicate with us. This may include your name, email address, phone number, home address, payment information, and any other information you voluntarily provide.</li>
                                <li>Service Information: We may collect information related to the home services you request or provide through Hoode, such as service requests, service details, service provider profiles, ratings, reviews, and other related information.</li>
                                <li>Device Information: We may automatically collect certain information about your device, including device type, operating system, unique device identifiers, mobile network information, and other technical information necessary for the operation of Hoode.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>USE OF INFORMATION</p>
                            <p>We may use the information we collect for various purposes, including but not limited to:</p>
                            <ul className='my-3 list-disc pl-5'>
                                <li>Facilitating the provision of home services.</li>
                                <li>Managing user accounts and preferences.</li>
                                <li>Processing payments and transactions.</li>
                                <li>Communicating with you regarding service requests, updates, and promotions.</li>
                                <li>Analyzing usage patterns to improve the Hoode's functionality and user experience.</li>
                                <li>Enforcing our terms and policies.</li>
                                <li>Protecting our legal rights and preventing misuse.</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>NOTICE AND CONSENT</p>
                            <p className="my-3 pl-5">
                                By using our home services app<span className="text-black">("Hoode")</span>
                                , you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, disclosure, and protection of your personal information as described herein. You further consent to the processing of your personal information as outlined in this Privacy Policy.<br /><br />

                                You understand that the personal information you provide may be collected, used, and disclosed as described in this Privacy Policy for the purposes set forth herein, including the provision of home services, managing user accounts, processing payments, and communicating with you.<br /><br />

                                You have the right to withdraw your consent at any time by discontinuing the use of the Hoode and contacting us at
                                <span className="text-black">business@hooode.com</span>. However, please note that such withdrawal may limit or prevent us from providing certain services to you.<br /><br />

                                You understand that your personal information may be shared with third parties, such as service providers, contractors, or payment processors, solely for the purpose of providing the requested home services or facilitating transactions. We will take reasonable measures to ensure that such third parties are obligated to protect your personal information in a manner consistent with this Privacy Policy.<br /><br />

                                You acknowledge that Hoode may integrate with third-party services or websites, and your use of such services may be subject to the terms and privacy policies of those third parties. We encourage you to review the privacy practices of these third parties before using their services.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>ACCESS TO YOUR PERSONAL INFORMATION</p>
                            <p className='my-3 list-disc pl-5'>
                                You have the right to access, update, and correct your personal information held by us. We strive to ensure that the personal information we maintain about you is accurate, complete, and up to date. If you would like to review, modify, or delete any personal information we have collected from you, please contact us at business@hooode.com.<br /><br />

                                We will make reasonable efforts to respond to your request in a timely manner and provide you with access to your personal information, subject to any legal or contractual restrictions. In some cases, we may require additional information from you to verify your identity before granting access to your personal information.<br /><br />

                                Please note that there may be circumstances where we are unable to provide access to your personal information, such as when the information is protected by legal privilege, contains references to other individuals, cannot be disclosed for legal, security, or commercial proprietary reasons, or is subject to contractual confidentiality obligations.<br /><br />

                                If we are unable to fulfill your request for access, we will provide you with an explanation to the extent permitted by applicable laws and regulations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>SECURITY</p>
                            <p className='my-3 list-disc pl-5'>
                                Hoode has taken strong measures to protect the security of your personal information to ensure that your choices for its intended use are honored. We take strong precautions to protect your data from loss, misuse, unauthorized access or disclosure, alteration, or destruction.<br /><br />

                                We guarantee your e-commerce transactions to be 100% safe and secure. When you place your orders or access your personal account information, you’re utilizing secure server software SSL, which encrypts your personal information before it’s sent over the internet. SSL is one of the safest encryption technologies available.<br /><br />

                                Hoode strictly protects the security of your personal information and honors your choices for its intended use. We protect your data from loss, misuse, unauthorized access, disclosure, alteration, or destruction.<br /><br />

                                Your personal information is never shared outside the company without your permission, except under the conditions explained above. Inside the company, data is stored in password-controlled servers with limited access. Your information may be stored and processed in the Kingdom of Saudi Arabia or any other country where Hoode, its subsidiaries, affiliates, or agents are located.<br /><br />

                                You also have a significant role in protecting your information. No one can see or edit your personal information without knowing your username or password, so do not share these with others.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>ENFORCEMENT</p>
                            <p className='my-3 list-disc pl-5'>
                                If, for some reason, you believe Hoode needs to adhere to these principles, please notify us by email at
                                <span className='text-black'>business@hooode.com</span>, and we will do our best to determine and correct the problem promptly. Be sure the words Privacy Policy are in the Subject line.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>ELECTRONIC PRODUCT REGISTRATION</p>
                            <p className='my-3 list-disc pl-5'>
                                As part of our home services app ("Hoode"), we may offer electronic product registration for certain products or services provided through the Hoode. Product registration allows you to register and manage your purchased products, access support, receive updates, and take advantage of additional features or benefits.<br /><br />

                                By choosing to participate in the electronic product registration, you understand and agree to the following:<br /><br />

                                <span className="text-black">Registration Information:</span>
                                You may be required to provide certain personal information, such as your name, contact details, product information, and purchase details, to complete the product registration process.<br /><br />

                                <span className="text-black">Use of Information:</span>
                                The personal information you provide during the electronic product registration process may be used for the following purposes:
                                <ul className="list-disc pl-5">
                                    <li>Verifying your ownership or eligibility for support or benefits associated with the registered product or service.</li>
                                    <li>Providing you with important product updates, warranty information, safety notices, or other relevant communications.</li>
                                    <li>Improving our products, services, and customer experience.</li>
                                </ul><br /><br />


                                <span className="text-black">Third-Party Service Providers:</span>
                                We may engage third-party service providers to assist in the electronic product registration process. These service providers will only have access to the personal information necessary to perform their designated functions and are obligated to protect the confidentiality and security of your information.<br /><br />

                                <span className="text-black">Consent to Communications:</span>
                                By participating in the electronic product registration, you consent to receive communications related to the registered product or service, including important updates, warranty information, safety notices, and other relevant communications. These communications may be sent via email, push notifications, or other electronic means.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>CUSTOMER PROFILES</p>
                            <p className='my-3 list-disc pl-5'>
                                As mentioned above, every registered Customer has a unique personal profile. Each profile is assigned a unique personal identification number, which helps us ensure that only you can access your profile.<br /><br />

                                When you register, we create your profile, assign a personal identification number, and then send this personal identification number back to your hard drive as a cookie, which is a tiny bit of code. This code is uniquely yours. It is your passport to seamless travel across the Hoode, allowing you to download free software without filling out registration forms with information you have already provided. Even if you switch computers/mobiles, you will not have to re-register; you will use your registration ID to identify yourself.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>USER-GENERATED CONTENT</p>
                            <p className='my-3 list-disc pl-5'>
                                Hoode may allow you to submit reviews, ratings, or other user-generated content. Please note that any information you disclose through these features becomes publicly available and may be viewed and used by other users or the general public. Exercise caution when sharing personal or sensitive information through user-generated content.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>DEVICE UNIQUE IDS AND ACCOUNT SECURITY</p>
                            <p className='my-3 list-disc pl-5'>
                                To enhance the security and performance of our home services app, Hoode may collect and store unique identifiers associated with the devices used to access our platform. These identifiers may include, but are not limited to, device-specific hardware information, operating system version, and mobile network information.<br /><br />

                                The collection of device unique IDs helps us prevent unauthorized access, detect and address fraudulent activities, and protect our users' accounts. If we notice consistent login patterns from the same device with different numbers that raise security concerns or breach our Terms of Service, we reserve the right to take appropriate action, which may include temporarily or permanently blocking the associated account for the safety and security of our users and the integrity of our platform.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className='my-1'>
                            <p className='text-[22px] my-4 text-black'>CHANGES TO THIS PRIVACY POLICY</p>
                            <p className='my-3 list-disc pl-5'>
                                We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We encourage you to review this Privacy Policy periodically for any updates. Your continued use of the Hoode after the posting of changes constitutes your acceptance of such changes.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <Optimize />
            <Footer />
        </div>
    )
}

export default NewTermsConditions
