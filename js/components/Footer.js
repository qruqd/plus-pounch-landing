const template = `
    <footer class="footer">
        <div class="social-dots">
            <div class="social-dot"></div>
            <div class="social-dot"></div>
            <div class="social-dot"></div>
            <div class="social-dot"></div>
        </div>
    </footer>
`;

const styles = `
    .footer {
        background: #1f2937;
        padding: 40px;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .social-dots {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .social-dot {
        width: 12px;
        height: 12px;
        background: #6b7280;
        border-radius: 50%;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    .social-dot:hover {
        background: #2dd4bf;
    }
`;

const injectStyles = () => {
    if (document.getElementById('footer-styles')) return;
    const styleTag = document.createElement('style');
    styleTag.id = 'footer-styles';
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
};

export const Footer = () => {
    injectStyles();
    return template;
};
