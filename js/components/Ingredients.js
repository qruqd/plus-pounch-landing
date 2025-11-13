const template = `
    <section class="ingredients-section">
        <div class="ingredients-container">
            <div class="ingredients-list">
                <div class="ingredient-item">
                    <div class="ingredient-amount">180mg</div>
                    <div class="ingredient-details">
                        <h3>Celtic Sea Salt</h3>
                        <p>A clean, natural source of sodium to replace what you lose in sweat.</p>
                    </div>
                </div>
                
                <div class="ingredient-item">
                    <div class="ingredient-amount">95mg</div>
                    <div class="ingredient-details">
                        <h3>Potassium Citrate</h3>
                        <p>Fuels muscle endurance and helps prevent cramps mid-workout.</p>
                    </div>
                </div>
                
                <div class="ingredient-item">
                    <div class="ingredient-amount">25mg</div>
                    <div class="ingredient-details">
                        <h3>Magnesium Malate</h3>
                        <p>Speeds recovery so you can bounce back and attack faster.</p>
                    </div>
                </div>
            </div>

            <div class="products-showcase">
                <div class="gradient-bg"></div>
                <div class="product-container">
                    <div class="product-left"></div>
                    <div class="product-right"></div>
                    <div class="citrus-decoration"></div>
                    <div class="pouches-decoration"></div>
                </div>
            </div>
        </div>
    </section>
`;

const styles = `
    .ingredients-section {
        background: #f8fafc;
        padding: 100px 40px;
        position: relative;
    }

    .ingredients-container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: center;
    }

    .ingredients-list {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .ingredient-item {
        display: flex;
        align-items: flex-start;
        gap: 20px;
    }

    .ingredient-amount {
        font-size: 2.5rem;
        font-weight: 800;
        color: #1f2937;
        line-height: 1;
        min-width: 120px;
        text-align: left;
    }

    .ingredient-details h3 {
        font-size: 1.1rem;
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 8px;
    }

    .ingredient-details p {
        font-size: 0.95rem;
        color: #6b7280;
        line-height: 1.5;
    }

    .products-showcase {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 600px;
    }

    .product-container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .product-left {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 280px;
        height: 280px;
        background: url('/placeholder.svg?height=280&width=280') center/contain no-repeat;
        z-index: 2;
    }

    .product-right {
        position: absolute;
        right: 0;
        top: 20%;
        width: 320px;
        height: 320px;
        background: url('/placeholder.svg?height=320&width=320') center/contain no-repeat;
        z-index: 3;
    }

    .citrus-decoration {
        position: absolute;
        left: 180px;
        bottom: 80px;
        width: 120px;
        height: 80px;
        background: url('/placeholder.svg?height=80&width=120') center/contain no-repeat;
        z-index: 1;
    }

    .pouches-decoration {
        position: absolute;
        right: 200px;
        bottom: 60px;
        width: 150px;
        height: 100px;
        background: url('/placeholder.svg?height=100&width=150') center/contain no-repeat;
        z-index: 1;
    }

    .gradient-bg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
        border-radius: 50%;
        z-index: 0;
    }

    @media (max-width: 768px) {
        .ingredients-section {
            padding: 60px 20px;
        }

        .ingredients-container {
            grid-template-columns: 1fr;
            gap: 50px;
        }

        .ingredient-amount {
            font-size: 2rem;
            min-width: 100px;
        }

        .products-showcase {
            height: 400px;
        }

        .product-left {
            width: 200px;
            height: 200px;
            left: 10px;
        }

        .product-right {
            width: 220px;
            height: 220px;
            right: 10px;
            top: 30%;
        }

        .citrus-decoration,
        .pouches-decoration {
            display: none;
        }
    }

    @media (max-width: 480px) {
        .ingredient-amount {
            font-size: 1.8rem;
        }

        .ingredient-item {
            gap: 15px;
        }
    }
`;

const injectStyles = () => {
    if (document.getElementById('ingredients-styles')) return;
    const styleTag = document.createElement('style');
    styleTag.id = 'ingredients-styles';
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
};

export const Ingredients = () => {
    injectStyles();
    return template;
};

