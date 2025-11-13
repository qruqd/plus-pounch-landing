export const styles = `* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: #333;
        }

        /* Header */
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

        /* Hero Section */
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

        /* Email Form */
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

        /* User Avatars */
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

        /* Spotlight Section */
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

        /* Ingredients Section */
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

        /* Comparison Table Section */
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

        /* Testimonials Section */
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

        /* Final Call-to-Action Section */
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

        /* Footer */
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

        /* Responsive Design */
        @media (max-width: 768px) {
            .header {
                padding: 15px 20px;
            }

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

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 2rem;
            }

            .spotlight h2 {
                font-size: 1.8rem;
            }

            .user-avatars {
                transform: scale(0.8);
            }

            .ingredient-amount {
                font-size: 1.8rem;
            }

            .ingredient-item {
                gap: 15px;
            }
        }`;
