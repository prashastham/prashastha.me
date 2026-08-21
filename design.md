---
name: Kinetic Precision
colors:
  surface: '#f9f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f9f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f5'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e4'
  on-surface: '#1a1c1d'
  on-surface-variant: '#5b403a'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f0f2'
  outline: '#8f7069'
  outline-variant: '#e4beb6'
  surface-tint: '#b72301'
  primary: '#b72301'
  on-primary: '#ffffff'
  primary-container: '#ff5733'
  on-primary-container: '#580c00'
  inverse-primary: '#ffb4a4'
  secondary: '#5f5e60'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfe1'
  on-secondary-container: '#636264'
  tertiary: '#b12d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff5827'
  on-tertiary-container: '#551100'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad3'
  primary-fixed-dim: '#ffb4a4'
  on-primary-fixed: '#3d0600'
  on-primary-fixed-variant: '#8c1800'
  secondary-fixed: '#e4e2e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#872000'
  background: '#f9f9fb'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.025em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.008em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.003em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  code-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section-desktop: 96px
  section-mobile: 48px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 20px
---

## Brand & Style

The design system is an homage to classic industrial design principles, specifically the "Classic Apple" era of the early 2010s to the present. It balances the cold precision of high-end hardware with the warmth of an off-white canvas. The brand personality is **Professional, Technical, and Innovative**, designed to bridge the gap between abstract artificial intelligence and physical industrial design.

The visual style is a refined mix of **Minimalism** and **Modern Corporate**, utilizing generous whitespace, meticulous typographic hierarchy, and subtle depth through tonal layering rather than aggressive shadows. It evokes a "museum-gallery" feeling where the content—be it neural network architectures or fintech models—is treated as a high-fidelity artifact.

**Key Brand Pillars:**
- **Purity:** A restricted color palette that prioritizes legibility and focus.
- **Tension:** The contrast between the soft, warm off-white background and the aggressive, high-energy fluorescent orange accents.
- **Precision:** Mathematical alignment, hairline borders, and monospaced telemetry that reflect a background in BCI and RL research.

## Colors

The palette is anchored by the "Apple Canvas" off-white, which provides a sophisticated, low-glare foundation. High-contrast obsidian is used for primary content, while the fluorescent orange serves as a singular, high-frequency "kinetic" accent.

- **Primary (#FF5733):** Used for critical interactive elements, brand highlights, and active states. It should be used sparingly to maintain its impact.
- **Secondary (#1D1D1F):** The primary color for all text, iconography, and deep-surface containers.
- **Tertiary (#FF4500):** A deeper, more aggressive orange reserved for hover states and high-priority status indicators.
- **Neutral (#F5F5F7):** The global background color.
- **Surface (#FFFFFF):** Pure white is reserved for foreground cards and modal surfaces to create a subtle "lifted" effect against the neutral background.
- **Outline (#D2D2D7):** A hairline gray used for borders to define structure without adding visual weight.

## Typography

This design system uses a dual-font strategy. **Inter** provides the clean, high-contrast sans-serif look synonymous with modern technology and professional software. Its tall x-height and tight tracking ensure readability even in data-heavy layouts.

**JetBrains Mono** is utilized for labels, domain tags, and technical telemetry. This introduces a "technical/developer" aesthetic that aligns with the Deep RL and AI focus.

**Typographic Principles:**
- **Tracking:** Headings use negative tracking to feel "locked in" and sturdy. Labels use expanded tracking for a refined, technical feel.
- **Readability:** Body text maintains a 1.5x line height to ensure clarity during long-form research reading.
- **Hierarchy:** Use Obsidian (#1D1D1F) for headlines and Slate (#6E6E73) for secondary metadata to create a clear visual path.

## Layout & Spacing

The layout philosophy is a **Fixed Grid** model within a fluid container. This ensures that on large displays, the content feels like a curated gallery with controlled line lengths, while scaling gracefully for mobile.

- **Grid:** A 12-column grid is used for desktop layouts, transitioning to a 1-column stack on mobile.
- **Max Width:** The primary content container is capped at `1200px` to maintain optimal readability for technical papers.
- **Whitespace:** Use "generous but deliberate" whitespace. Section headers should be preceded by significant vertical padding (`96px`) to signal a shift in domain (e.g., from Fintech to Neuroscience).
- **Rhythm:** All spacing is based on a `4px` base unit. Most components use `16px` (md) or `24px` (lg) internal padding.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Subtle Shadows** rather than heavy gradients.

1.  **Level 0 (Floor):** Background at `#F5F5F7`.
2.  **Level 1 (Surface):** Cards and main containers at `#FFFFFF`. These use a hairline border (`#D2D2D7`) to define their boundaries.
3.  **Level 2 (Interaction):** Hovered cards use a subtle, extra-diffused shadow (`0 12px 32px rgba(0, 0, 0, 0.08)`) and a slight upward translation (-2px) to simulate physical lift.
4.  **Backdrop:** Navigation headers use a frosted glass effect (Backdrop Blur: 12px, Opacity: 80%) to maintain context of the scroll position while providing a clean surface for links.

## Shapes

The shape language is **Rounded**, mimicking the "squircle" geometry of Apple hardware. This softens the technical nature of the content, making the AI and Neuroscience domains feel more approachable.

- **Default (8px):** Used for input fields, small buttons, and tooltips.
- **Large (16px):** Used for primary action buttons and small cards.
- **Extra Large (24px - 32px):** Used for primary project showcase cards.
- **Pill:** Reserved exclusively for category tags, status badges, and the primary global navigation indicator.

## Components

### Buttons
- **Primary:** Solid `#FF5733` with white text. Rounded-xl geometry. High-energy but disciplined.
- **Secondary:** Hairline border (`#D2D2D7`) on a white background. No shadow unless hovered.
- **Ghost:** Transparent background, Obsidian text, highlights to `#EBEBF0` on hover.

### Cards
- **Project Card:** Pure white background, `1px` hairline border in `#E5E5EA`. Internal padding of `32px`. Headlines are bold Obsidian.
- **Metric Card:** Used for technical data (e.g., RL training stats). Uses a light-gray inset background (`#FBFBFD`) to distinguish it as a data-heavy component.

### Form Elements
- **Inputs:** Clean `#FFFFFF` background with a `#D2D2D7` border. On focus, the border color transitions to `#FF5733` with a soft orange outer glow (2px).
- **Checkboxes/Radio:** Use the primary orange for the "selected" state to provide high-contrast feedback.

### Chips & Badges
- **Domain Tags:** All-caps JetBrains Mono text. Background is a very soft tint of the accent (`rgba(255, 87, 51, 0.08)`).
- **Status Indicators:** Small 8px circles (green for success/active, orange for processing) placed next to labels.

### Navigation
- **Floating Bar:** Fixed at the top. Uses the frosted glass effect. Links are `14px` Semi-Bold Inter. The active page is marked by a small `4px` orange dot centered beneath the text.
