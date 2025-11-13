const template = `
    <section class="testimonials">
        <h2>Endurance Tested. Athlete Approved.</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="testimonial-image" style="background-image: url('/placeholder.svg?height=300&width=400')"></div>
                <div class="testimonial-content">
                    <div class="stars">
                        <span>★★★★★</span>
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                    <div class="testimonial-author">Benjamin Newberry</div>
                </div>
            </div>
            
            <div class="testimonial-card">
                <div class="testimonial-image" style="background-image: url('/placeholder.svg?height=300&width=400')"></div>
                <div class="testimonial-content">
                    <div class="stars">
                        <span>★★★★★</span>
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                    <div class="testimonial-author">Ryan Whitmore</div>
                </div>
            </div>
            
            <div class="testimonial-card">
                <div class="testimonial-image" style="background-image: url('/placeholder.svg?height=300&width=400')"></div>
                <div class="testimonial-content">
                    <div class="stars">
                        <span>★★★★★</span>
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                    <div class="testimonial-author">Zoe Cunningham</div>
                </div>
            </div>
        </div>
    </section>
`;

const styles = `
    .testimonials {
        background: #f8fafc;
        padding: 120px 40px;
        text-align: center;
        position: relative;
    }

    .testimonials h2 {
        font-size: 2.8rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 80px;
        line-height: 1.2;
    }

    .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .testimonial-card {
        background: white;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }

    .testimonial-card:hover {
        transform: translateY(-5px);
    }

    .testimonial-image {
        height: 250px;
        background-size: cover;
        background-position: center;
        position: relative;
    }

    .testimonial-content {
        padding: 30px;
        text-align: left;
    }

    .stars {
        margin-bottom: 20px;
    }

    .stars span {
        color: #fbbf24;
        font-size: 18px;
    }

    .testimonial-content p {
        font-size: 14px;
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 20px;
    }

    .testimonial-author {
        font-weight: 600;
        color: #1f2937;
        font-size: 16px;
    }

    @media (max-width: 768px) {
        .testimonials {
            padding: 80px 20px;
        }

        .testimonials h2 {
            font-size: 2rem;
        }

        .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 30px;
        }
    }
`;

const injectStyles = () => {
    if (document.getElementById('testimonials-styles')) return;
    const styleTag = document.createElement('style');
    styleTag.id = 'testimonials-styles';
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
};

export const Testimonials = () => {
    injectStyles();
    return template;
};

