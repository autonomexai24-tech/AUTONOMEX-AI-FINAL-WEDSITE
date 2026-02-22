import sharp from 'sharp';

async function generateLogos() {
    try {
        console.log("Generating logo-mark.png (1024x1024)...");

        // 1. Read and trim transparent padding
        const markBuffer = await sharp('src/assets/logo-icon.png')
            .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 10 })
            .toBuffer();

        // 2. Resize to 960x960 (leaves ~32px padding, so ~94% fill)
        const resizedMark = await sharp(markBuffer)
            .resize(960, 960, { fit: 'inside' })
            .toBuffer();

        // 3. Composite onto a precise 1024x1024 transparent canvas
        await sharp({
            create: {
                width: 1024,
                height: 1024,
                channels: 4,
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            }
        })
            .composite([{ input: resizedMark, gravity: 'center' }])
            .png()
            .toFile('public/logo-mark.png');

        console.log("✓ public/logo-mark.png successfully created.\n");

        console.log("Generating logo-wordmark.png (2400x600)...");

        // 1. Read and trim
        const wordmarkBuffer = await sharp('src/assets/logo-text.png')
            .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 10 })
            .toBuffer();

        // 2. Resize to securely fit in 92% of width (2400 * 0.92 = 2208)
        // We cap height at 550 to leave 25px top/bottom padding at min.
        const resizedWordmark = await sharp(wordmarkBuffer)
            .resize(2208, 550, { fit: 'inside' })
            .toBuffer();

        // 3. Composite onto exactly 2400x600 transparent canvas
        await sharp({
            create: {
                width: 2400,
                height: 600,
                channels: 4,
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            }
        })
            .composite([{ input: resizedWordmark, gravity: 'center' }])
            .png()
            .toFile('public/logo-wordmark.png');

        console.log("✓ public/logo-wordmark.png successfully created.\n");

    } catch (err) {
        console.error("Error generating logos:", err);
    }
}

generateLogos();
