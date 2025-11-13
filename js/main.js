import { styles } from './styles.js';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { Spotlight } from './components/Spotlight.js';
import { Ingredients } from './components/Ingredients.js';
import { Comparison } from './components/Comparison.js';
import { Testimonials } from './components/Testimonials.js';
import { FinalCTA } from './components/FinalCTA.js';
import { Footer } from './components/Footer.js';

const components = [
    Header,
    Hero,
    Spotlight,
    Ingredients,
    Comparison,
    Testimonials,
    FinalCTA,
    Footer,
];

const injectStyles = () => {
    if (document.getElementById('global-styles')) return;
    const styleTag = document.createElement('style');
    styleTag.id = 'global-styles';
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
};

const renderApp = () => {
    const root = document.getElementById('app');
    if (!root) return;
    root.innerHTML = components.map((component) => component()).join('');
};

injectStyles();
renderApp();

