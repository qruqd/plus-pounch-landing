const template = `
    <section class="spotlight">
        <h2>5x Faster Than Drinks</h2>
        <p>No bottles. No sugar. No waiting. Each pouch delivers electrolytes directly into your bloodstream for instant performance when it matters most.</p>
        
        <div class="product-showcase">
            <div class="decoration-left"></div>
            <div class="product-image"></div>
            <div class="decoration-right"></div>
        </div>

        <button class="unlock-btn">Unlock 20% Off Your First Order!</button>
    </section>
`;

const styles = `
    .spotlight {
        background: white;
        padding: 120px 40px;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .spotlight h2 {
        font-size: 3rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 30px;
        line-height: 1.2;
    }

    .spotlight p {
        font-size: 1.2rem;
        color: #6b7280;
        margin-bottom: 60px;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.6;
    }

    .product-showcase {
        position: relative;
        max-width: 1000px;
        margin: 0 auto 60px;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .product-image {
        width: 350px;
        height: 350px;
        background: url('/placeholder.svg?height=350&width=350') center/contain no-repeat;
        z-index: 10;
        position: relative;
    }

    .decoration-left {
        position: absolute;
        left: 10%;
        top: 20%;
        width: 150px;
        height: 150px;
        background: url('/placeholder.svg?height=150&width=150') center/contain no-repeat;
        opacity: 0.8;
    }

    .decoration-right {
        position: absolute;
        right: 10%;
        top: 10%;
        width: 200px;
        height: 300px;
        background: url('/placeholder.svg?height=300&width=200') center/contain no-repeat;
        opacity: 0.8;
    }

    .unlock-btn {
        background: #2dd4bf;
        color: white;
        padding: 18px 35px;
        border: none;
        border-radius: 50px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(45, 212, 191, 0.3);
    }

    .unlock-btn:hover {
        background: #14b8a6;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(45, 212, 191, 0.4);
    }

    @media (max-width: 768px) {
        .spotlight {
            padding: 80px 20px;
        }

        .spotlight h2 {
            font-size: 2.2rem;
        }

        .product-showcase {
            height: 400px;
        }

        .product-image {
            width: 250px;
            height: 250px;
        }

        .decoration-left,
        .decoration-right {
            display: none;
        }
    }

    @media (max-width: 480px) {
        .spotlight h2 {
            font-size: 1.8rem;
        }
    }
`;

const injectStyles = () => {
    if (document.getElementById('spotlight-styles')) return;
    const styleTag = document.createElement('style');
    styleTag.id = 'spotlight-styles';
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
};

export const Spotlight = () => {
    injectStyles();
    return template;
};
