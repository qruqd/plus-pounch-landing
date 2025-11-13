const template = `
    <section class="final-cta">
        <div class="final-cta-content">
            <h2>Unlock 20% Off Your<br>First Purchase.</h2>
            <p>Secure your spot on the waitlist for insider access and launch-day rewards. Stay ahead with +Pouch.</p>
            
            <form class="final-email-form">
                <input type="email" class="final-email-input" placeholder="Email Address" required>
                <button type="submit" class="join-waitlist-final-btn">Join Waitlist</button>
            </form>
        </div>
        
        <div class="final-cta-decorations">
            <div class="fruits-decoration"></div>
            <div class="avocado-decoration"></div>
        </div>
    </section>
`;

const styles = `
    .final-cta {
        background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%);
        padding: 120px 40px;
        position: relative;
        overflow: hidden;
        text-align: center;
    }

    .final-cta-content {
        position: relative;
        z-index: 2;
        max-width: 600px;
        margin: 0 auto;
    }

    .final-cta h2 {
        font-size: 3rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 30px;
        line-height: 1.2;
    }

    .final-cta p {
        font-size: 1.1rem;
        color: #6b7280;
        margin-bottom: 50px;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.6;
    }

    .final-email-form {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0;
        max-width: 500px;
        margin: 0 auto;
    }

    .final-email-input {
        flex: 1;
        padding: 18px 25px;
        border: none;
        border-radius: 50px 0 0 50px;
        font-size: 16px;
        background: white;
        color: #333;
        outline: none;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .final-email-input::placeholder {
        color: #666;
    }

    .join-waitlist-final-btn {
        background: #2dd4bf;
        color: white;
        padding: 18px 30px;
        border: none;
        border-radius: 0 50px 50px 0;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        white-space: nowrap;
        box-shadow: 0 4px 15px rgba(45, 212, 191, 0.3);
    }

    .join-waitlist-final-btn:hover {
        background: #14b8a6;
        transform: translateY(-1px);
    }

    .final-cta-decorations {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }

    .fruits-decoration {
        position: absolute;
        left: 5%;
        bottom: 20%;
        width: 200px;
        height: 150px;
        background: url('/placeholder.svg?height=150&width=200') center/contain no-repeat;
        opacity: 0.8;
    }

    .avocado-decoration {
        position: absolute;
        right: 5%;
        bottom: 15%;
        width: 250px;
        height: 200px;
        background: url('/placeholder.svg?height=200&width=250') center/contain no-repeat;
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        .final-cta {
            padding: 80px 20px;
        }

        .final-cta h2 {
            font-size: 2.2rem;
        }

        .final-email-form {
            flex-direction: column;
            gap: 15px;
            max-width: 300px;
        }

        .final-email-input {
            border-radius: 25px;
            width: 100%;
        }

        .join-waitlist-final-btn {
            border-radius: 25px;
            width: 100%;
        }

        .fruits-decoration,
        .avocado-decoration {
            display: none;
        }
    }
`;

const injectStyles = () => {
    if (document.getElementById('final-cta-styles')) return;
    const styleTag = document.createElement('style');
    styleTag.id = 'final-cta-styles';
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
};

export const FinalCTA = () => {
    injectStyles();
    return template;
};

