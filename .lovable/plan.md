

## Phase I: Architecture Reset and Fix

### Problems to Fix

1. **GridBackground.tsx** contains a copy of VisualStorytelling instead of a grid background component
2. **VisualStorytelling.tsx** has a TypeScript error: `background` string literal type not narrowed via `as const`
3. **VisualStorytelling.tsx** and **GridBackground.tsx** are identical files (both contain the scene orchestration code)

### Fixes

#### 1. Fix GridBackground.tsx
Replace its contents with a pure presentational grid background component -- a single `div` with a CSS grid pattern overlay. No state, no imports beyond React.

#### 2. Fix VisualStorytelling.tsx type error
Add `as const` to the SCENES array so TypeScript narrows `background` from `string` to the literal union `"neutral" | "blue" | "pink"`.

### Confirmed Architecture

```text
src/components/
  VisualStorytelling.tsx        -- orchestrator: owns SCENES data + active index
  story/
    StoryScene.tsx              -- layout container: receives props, renders layers
    GridBackground.tsx          -- pure: CSS grid pattern overlay
    EditorialCopy.tsx           -- pure: eyebrow + title + description + CTA
    StatBadge.tsx               -- pure: floating stat chip
    PersonCutout.tsx            -- pure: absolute-positioned image
    ShapeLayers.tsx             -- pure: max 1 rectangle + 1 rule
```

### Responsibilities

- **VisualStorytelling**: Owns scene data array. Controls which scene is active. Handles scroll/step transitions. Passes data to StoryScene.
- **StoryScene**: Receives all data via props. Composes sub-components into a 2-column layout. Does NOT manage scroll or know about other scenes.
- **GridBackground**: Renders a single absolute-positioned CSS grid texture. No props required.
- **EditorialCopy**: Renders eyebrow, title, description, CTA button. Pure presentational.
- **StatBadge**: Renders a floating metric badge. Positioned via className prop.
- **PersonCutout**: Renders an absolute-positioned image for editorial photography.
- **ShapeLayers**: Renders max 1 structural rectangle + 1 optional rule line. Configurable via props.

### Scene Data Interface

```typescript
type Stat = {
  value: string;
  label: string;
};

type SceneData = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  stat?: Stat;
  background?: "neutral" | "blue" | "pink" | "green";
  rightVisual?: ReactNode;
};
```

### Scroll Behavior

- VisualStorytelling maintains `activeScene` state (index into SCENES array)
- On wheel event: increment/decrement index within bounds
- Only ONE StoryScene is rendered at a time (not stacked)
- Future Phase II will refine scroll-snapping and debouncing

### Summary of Changes (2 files only)

| File | Change |
|------|--------|
| `GridBackground.tsx` | Replace broken content with a pure CSS grid overlay component |
| `VisualStorytelling.tsx` | Add `as const` to SCENES array to fix TS2322 |

Phase I is complete after these two fixes. No other files change. Waiting for Phase II instructions after approval.

