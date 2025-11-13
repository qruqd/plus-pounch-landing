const template = `
    <section class="hero">
        <div class="hero-content">
            <h1>Electrolytes That Work<br>As Hard As You Do.</h1>
            <p>Dehydration is the #1 killer of performance. +Pouch hits your bloodstream 5x faster than sports drinks with zero sugar, zero hassle, and pure power.</p>
            
            <form class="email-form">
                <input type="email" class="email-input" placeholder="Email Address" required>
                <button type="submit" class="get-notified-btn">Get Notified</button>
            </form>

            <div class="user-avatars">
                <div class="avatar"></div>
                <div class="avatar"></div>
                <div class="avatar"></div>
                <div class="avatar"></div>
                <div class="avatar-count">1K+</div>
            </div>
        </div>
    </section>
`;

const styles = `
    .hero {
        background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
        color: white;
        padding: 100px 40px;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('/placeholder.svg?height=600&width=1200') center/cover;
        opacity: 0.3;
        z-index: 1;
    }

    .hero-content {
        position: relative;
        z-index: 2;
        max-width: 800px;
        margin: 0 auto;
    }

    .hero h1 {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1.1;
        margin-bottom: 30px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .hero p {
        font-size: 1.2rem;
        color: #d1d5db;
        margin-bottom: 50px;
        line-height: 1.6;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .email-form {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0;
        margin-bottom: 40px;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }

    .email-input {
        flex: 1;
        padding: 18px 25px;
        border: none;
        border-radius: 50px 0 0 50px;
        font-size: 16px;
        background: rgba(255,255,255,0.9);
        color: #333;
        outline: none;
    }

    .email-input::placeholder {
        color: #666;
    }

    .get-notified-btn {
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
    }

    .get-notified-btn:hover {
        background: #14b8a6;
        transform: translateY(-1px);
    }

    .user-avatars {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: -10px;
    }

    .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 3px solid white;
        margin-left: -10px;
        background: url('/placeholder.svg?height=50&width=50') center/cover;
    }

    .avatar:first-child {
        margin-left: 0;
    }

    .avatar-count {
        background: #2dd4bf;
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 14px;
        margin-left: -10px;
        border: 3px solid white;
    }

    @media (max-width: 768px) {
        .hero {
            padding: 60px 20px;
        }

        .hero h1 {
            font-size: 2.5rem;
        }

        .hero p {
            font-size: 1.1rem;
        }

        .email-form {
            flex-direction: column;
            gap: 15px;
            max-width: 300px;
        }

        .email-input {
            border-radius: 25px;
            width: 100%;
        }

        .get-notified-btn {
            border-radius: 25px;
            width: 100%;
        }
    }

    @media (max-width: 480px) {
        .hero h1 {
            font-size: 2rem;
        }

        .user-avatars {
            transform: scale(0.8);
        }
    }
`;

const injectStyles = () => {
    if (document.getElementById('hero-styles')) return;
    const styleTag = document.createElement('style');
    styleTag.id = 'hero-styles';
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
};

export const Hero = () => {
    injectStyles();
    return template;
};
