const styles = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        line-height: 1.6;
        color: #333;
    }
`;

const injectStyles = () => {
    if (document.getElementById('base-styles')) return;
    const styleTag = document.createElement('style');
    styleTag.id = 'base-styles';
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
};

export const BaseStyles = () => {
    injectStyles();
    return '';
};

