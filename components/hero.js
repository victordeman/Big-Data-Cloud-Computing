class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1f2937;
                    color: white;
                    padding: 4rem 0;
                }
                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 3rem;
                    margin-bottom: 3rem;
                }
                .footer-logo {
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 1.25rem;
                    margin-bottom: 1rem;
                    color: white;
                    text-decoration: none;
                }
                .footer-logo-icon {
                    margin-right: 0.5rem;
                    color: #3b82f6;
                }
                .footer-description {
                    color: #9ca3af;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }
                .footer-social {
                    display: flex;
                    gap: 1rem;
                }
                .social-icon {
                    width: 2.5rem;
                    height: 2.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #374151;
                    color: white;
                    border-radius: 50%;
                    transition: background-color 0.2s;
                }
                .social-icon:hover {
                    background-color: #3b82f6;
                }
                .footer-heading {
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: white;
                }
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                .footer-link {
                    color: #9ca3af;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .footer-link:hover {
                    color: #3b82f6;
                }
                .footer-bottom {
                    border-top: 1px solid #374151;
                    padding-top: 2rem;
                    text-align: center;
                    color: #9ca3af;
                }
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <div class="container">
                <div class="footer-content">
                    <div>
                        <a href="#" class="footer-logo">
                            <i data-feather="database" class="footer-logo-icon"></i>
                            <span>Lakehouse Academy</span>
                        </a>
                        <p class="footer-description">
                            Master modern data engineering with our comprehensive courses on open-source technologies.
                        </p>
                        <div class="footer-social">
                            <a href="#" class="social-icon" aria-label="Twitter">
                                <i data-feather="twitter"></i>
                            </a>
                            <a href="#" class="social-icon" aria-label="GitHub">
                                <i data-feather="github"></i>
                            </a>
                            <a href="#" class="social-icon" aria-label="LinkedIn">
                                <i data-feather="linkedin"></i>
                            </a>
                            <a href="#" class="social-icon" aria-label="YouTube">
                                <i data-feather="youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 class="footer-heading">Courses</h3>
                        <div class="footer-links">
                            <a href="#" class="footer-link">Data Lakehouse</a>
                            <a href="#" class="footer-link">Spark Fundamentals</a>
                            <a href="#" class="footer-link">ML Engineering</a>
                            <a href="#" class="footer-link">Stream Processing</a>
                        </div>
                    </div>
                    <div>
                        <h3 class="footer-heading">Resources</h3>
                        <div class="footer-links">
                            <a href="#" class="footer-link">Documentation</a>
                            <a href="#" class="footer-link">Blog</a>
                            <a href="#" class="footer-link">Community</a>
                            <a href="#" class="footer-link">GitHub</a>
                        </div>
                    </div>
                    <div>
                        <h3 class="footer-heading">Company</h3>
                        <div class="footer-links">
                            <a href="#" class="footer-link">About Us</a>
                            <a href="#" class="footer-link">Contact</a>
                            <a href="#" class="footer-link">Careers</a>
                            <a href="#" class="footer-link">Privacy Policy</a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>© 2024 Data Lakehouse Academy. All rights reserved.</p>
                </div>
            </div>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);
