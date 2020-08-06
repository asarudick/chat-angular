// The content of a Message. Leaving this open to anything right now.
// Hypothetically, could be an image, text, link, file, or potentially
// something entirely new. First inclination would be to use HTML, but that
// poses potential security risks and would need to be sanitized. 
export type Content = any;
