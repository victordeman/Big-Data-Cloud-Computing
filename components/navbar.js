class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 50;
                    background-color: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }
                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: #1f2937;
                    text-decoration: none;
                }
                .logo-icon {
                    margin-right: 0.5rem;
                    color: #3b82f6;
                }
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                }
                .nav-link {
                    color: #4b5563;
                    font-weight: 500;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .nav-link:hover {
                    color: #3b82f6;
                }
                .cta-button {
                    background-color: #3b82f6;
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    font-weight: 500;
                    transition: background-color 0.2s;
                }
                .cta-button:hover {
                    background-color: #2563eb;
                }
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    .mobile-menu-button {
                        display: block;
                    }
                    .nav-links {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background-color: white;
                        padding: 1rem;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }
                    .nav-links.active {
                        display: flex;
                    }
                }
            </style>
            <div class="container">
                <a href="#" class="logo">
                    <i data-feather="database" class="logo-icon"></i>
                    <span>Lakehouse Academy</span>
                </a>
                <button class="mobile-menu-button">
                    <i data-feather="menu"></i>
                </button>
                <div class="nav-links">
                    <a href="#features" class="nav-link">Features</a>
                    <a href="#timeline" class="nav-link">Curriculum</a>
                    <a href="#tools" class="nav-link">Tools</a>
                    <a href="#project" class="nav-link">Project</a>
                    <a href="#" class="cta-button">Get Started</a>
                </div>
            </div>
        `;

        // Mobile menu toggle
        const mobileMenuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}
customElements.define('custom-navbar', CustomNavbar);
