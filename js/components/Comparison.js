const template = `
    <section class="comparison-section">
        <h2>Introducing:</h2>
        <div class="subtitle">Back Pocket Hydration.™</div>
        <p>Traditional drinks slow you down as they move through your stomach. +Pouch delivers electrolytes straight into your bloodstream, giving your body what it needs instantly.</p>
        
        <div class="comparison-table-container">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th></th>
                        <th class="pouch-header">POUCH</th>
                        <th>SPORTS DRINKS</th>
                        <th>LIQUID MIXES</th>
                        <th>ENERGY DRINKS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>FAST-ACTING</td>
                        <td class="pouch-column"><div class="feature-dot"></div></td>
                        <td><div class="feature-dot empty"></div></td>
                        <td><div class="feature-dot empty"></div></td>
                        <td><div class="feature-dot empty"></div></td>
                    </tr>
                    <tr>
                        <td>ENDURANCE SUPPORT</td>
                        <td class="pouch-column"><div class="feature-dot"></div></td>
                        <td><div class="feature-dot"></div></td>
                        <td><div class="feature-dot"></div></td>
                        <td><div class="feature-dot"></div></td>
                    </tr>
                    <tr>
                        <td>ZERO SUGAR</td>
                        <td class="pouch-column"><div class="feature-dot"></div></td>
                        <td><div class="feature-dot"></div></td>
                        <td><div class="feature-dot"></div></td>
                        <td><div class="feature-dot empty"></div></td>
                    </tr>
                    <tr>
                        <td>CONVENIENT</td>
                        <td class="pouch-column"><div class="feature-dot"></div></td>
                        <td><div class="feature-dot empty"></div></td>
                        <td><div class="feature-dot empty"></div></td>
                        <td><div class="feature-dot"></div></td>
                    </tr>
                    <tr>
                        <td>GENTLE ON STOMACH</td>
                        <td class="pouch-column"><div class="feature-dot"></div></td>
                        <td><div class="feature-dot"></div></td>
                        <td><div class="feature-dot"></div></td>
                        <td><div class="feature-dot empty"></div></td>
                    </tr>
                    <tr>
                        <td>NATURAL INGREDIENTS</td>
                        <td class="pouch-column"><div class="feature-dot"></div></td>
                        <td><div class="feature-dot empty"></div></td>
                        <td><div class="feature-dot empty"></div></td>
                        <td><div class="feature-dot empty"></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
`;

const styles = `
    .comparison-section {
        background: white;
        padding: 120px 40px;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .comparison-section h2 {
        font-size: 2.8rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 10px;
        line-height: 1.2;
    }

    .comparison-section .subtitle {
        font-size: 2.8rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 30px;
        line-height: 1.2;
    }

    .comparison-section p {
        font-size: 1.1rem;
        color: #6b7280;
        margin-bottom: 80px;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.6;
    }

    .comparison-table-container {
        max-width: 800px;
        margin: 0 auto;
        background: white;
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        overflow-x: auto;
    }

    .comparison-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
    }

    .comparison-table th {
        padding: 20px 15px;
        font-size: 14px;
        font-weight: 600;
        color: #374151;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border-bottom: 2px solid #e5e7eb;
        text-align: center;
    }

    .comparison-table th:first-child {
        text-align: left;
        padding-left: 0;
    }

    .comparison-table th.pouch-header {
        background: #bfdbfe;
        color: #1e40af;
        border-radius: 10px 10px 0 0;
        position: relative;
    }

    .comparison-table th.pouch-header::before {
        content: '+';
        font-size: 18px;
        font-weight: bold;
        margin-right: 2px;
    }

    .comparison-table td {
        padding: 20px 15px;
        border-bottom: 1px solid #f3f4f6;
        text-align: center;
        vertical-align: middle;
    }

    .comparison-table td:first-child {
        text-align: left;
        padding-left: 0;
        font-weight: 500;
        color: #374151;
        font-size: 15px;
    }

    .comparison-table .pouch-column {
        background: #eff6ff;
    }

    .feature-dot {
        width: 12px;
        height: 12px;
        background: #1f2937;
        border-radius: 50%;
        margin: 0 auto;
    }

    .feature-dot.empty {
        background: transparent;
    }

    @media (max-width: 768px) {
        .comparison-section {
            padding: 80px 20px;
        }

        .comparison-section h2,
        .comparison-section .subtitle {
            font-size: 2rem;
        }

        .comparison-table-container {
            padding: 20px;
            margin: 0 10px;
        }
    }
`;

const injectStyles = () => {
    if (document.getElementById('comparison-styles')) return;
    const styleTag = document.createElement('style');
    styleTag.id = 'comparison-styles';
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
};

export const Comparison = () => {
    injectStyles();
    return template;
};

