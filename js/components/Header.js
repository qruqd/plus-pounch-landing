const template = `
    <header class="header">
        <div class="logo">Pouch</div>
        <button class="join-waitlist-btn">Join Waitlist</button>
    </header>
`;

const styles = `
    .header {
        background: white;
        padding: 20px 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        position: relative;
        z-index: 100;
    }

    .logo {
        font-size: 24px;
        font-weight: bold;
        color: #2dd4bf;
        display: flex;
        align-items: center;
    }

    .logo::before {
        content: '+';
        margin-right: 2px;
    }

    .join-waitlist-btn {
        background: #1f2937;
        color: white;
        padding: 12px 24px;
        border: none;
        border-radius: 25px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .join-waitlist-btn:hover {
        background: #374151;
        transform: translateY(-1px);
    }

    @media (max-width: 768px) {
        .header {
            padding: 15px 20px;
        }
    }
`;

const injectStyles = () => {
    if (document.getElementById('header-styles')) return;
    const styleTag = document.createElement('style');
    styleTag.id = 'header-styles';
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
};

export const Header = () => {
    injectStyles();
    return template;
};
