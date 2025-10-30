"use client";
import { Navigation } from "../components/nav";

export default function Privacy() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="max-w-4xl mx-auto mt-32 mb-16 sm:mt-16">
					<h1 className="text-4xl font-bold text-zinc-100 font-display mb-8">
						Privacy Policy
					</h1>
					
					<div className="prose prose-invert prose-zinc max-w-none">
						<div className="space-y-8 text-zinc-300">
							<section>
								<h2 className="text-2xl font-semibold text-zinc-200 mb-4">
									Introduction
								</h2>
								<p className="leading-relaxed">
									Infinity Turnkey Solutions ("we", "our", or "us") is committed to protecting your privacy. 
									This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
									when you visit our website or use our services.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-200 mb-4">
									Information We Collect
								</h2>
								<p className="leading-relaxed mb-3">
									We may collect information about you in a variety of ways. The information we may collect 
									includes:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li>Personal Data: Name, email address, phone number, and other contact information you provide.</li>
									<li>Project Information: Details about your interior design, architecture, or contracting projects.</li>
									<li>Usage Data: Information about how you access and use our website and services.</li>
									<li>Device Information: Information about your computer or mobile device.</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-200 mb-4">
									How We Use Your Information
								</h2>
								<p className="leading-relaxed mb-3">
									We use the information we collect to:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li>Provide, operate, and maintain our services</li>
									<li>Improve, personalize, and expand our services</li>
									<li>Understand and analyze how you use our website</li>
									<li>Develop new products, services, features, and functionality</li>
									<li>Communicate with you regarding projects, updates, and customer service</li>
									<li>Send you marketing and promotional communications (with your consent)</li>
									<li>Find and prevent fraud</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-200 mb-4">
									Sharing Your Information
								</h2>
								<p className="leading-relaxed">
									We do not sell, trade, or otherwise transfer your personal information to third parties 
									without your consent, except as described in this Privacy Policy. We may share your 
									information with:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4 mt-3">
									<li>Service providers who assist us in operating our business</li>
									<li>Professional advisors such as lawyers and accountants</li>
									<li>Law enforcement or regulatory authorities when required by law</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-200 mb-4">
									Data Security
								</h2>
								<p className="leading-relaxed">
									We implement appropriate technical and organizational security measures to protect your 
									personal information. However, no electronic transmission over the internet or information 
									storage technology can be guaranteed to be 100% secure.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-200 mb-4">
									Your Rights
								</h2>
								<p className="leading-relaxed mb-3">
									You have the right to:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li>Access the personal information we hold about you</li>
									<li>Request correction of inaccurate or incomplete information</li>
									<li>Request deletion of your personal information</li>
									<li>Object to or restrict certain processing of your information</li>
									<li>Withdraw consent where we rely on consent to process your information</li>
								</ul>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-200 mb-4">
									Cookies and Tracking Technologies
								</h2>
								<p className="leading-relaxed">
									We may use cookies and similar tracking technologies to track activity on our website 
									and store certain information. You can instruct your browser to refuse all cookies or 
									to indicate when a cookie is being sent.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-200 mb-4">
									Third-Party Links
								</h2>
								<p className="leading-relaxed">
									Our website may contain links to third-party websites. We are not responsible for the 
									privacy practices or content of these external sites.
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-200 mb-4">
									Changes to This Privacy Policy
								</h2>
								<p className="leading-relaxed">
									We may update our Privacy Policy from time to time. We will notify you of any changes 
									by posting the new Privacy Policy on this page and updating the "Last Updated" date.
								</p>
								<p className="leading-relaxed mt-4">
									<strong>Last Updated:</strong> October 30, 2025
								</p>
							</section>

							<section>
								<h2 className="text-2xl font-semibold text-zinc-200 mb-4">
									Contact Us
								</h2>
								<p className="leading-relaxed">
									If you have any questions about this Privacy Policy, please contact us at:
								</p>
								<ul className="list-none space-y-2 mt-4">
									<li>Email: <a href="mailto:info@itks.in" className="text-zinc-100 hover:text-white underline">info@itks.in</a></li>
									<li>Phone: <a href="tel:+91-9999-207-909" className="text-zinc-100 hover:text-white underline">+91-9999-207-909</a></li>
									<li>Website: <a href="https://www.itks.in" className="text-zinc-100 hover:text-white underline" target="_blank" rel="noopener noreferrer">www.itks.in</a></li>
								</ul>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

