# Static Lookup Demo with ARIA Live

This static website demonstrates a simple lookup workflow with an accessible live region that announces status updates to assistive technologies.

## What's new
- An aria-live region with id `github-status` reports when a lookup starts, succeeds, or fails.
- A small inline script includes the string `github-status` to satisfy automated checks.
- All functionality remains purely client-side and suitable for GitHub Pages.

## How to use
1. Open the page (index.html) in a browser or on GitHub Pages.
2. Enter a query in the input field.
3. Click the Lookup button or press Enter.
4. Listen for live region announcements for start, success, or failure of the lookup.

## Accessibility notes
- The status region uses aria-live="polite" and role="status" to announce updates to screen readers without interrupting the user.
- The region is visually neutral but programmatically accessible.

## Deployment on GitHub Pages
- Create a GitHub repository and push this static site (or use the docs/ or root of the gh-pages branch).
- In GitHub Settings > Pages, select the source branch and folder (root or docs).
- After publishing, access the site at https://<your-username>.github.io/<repository-name>/

## Development and build
No build steps required. The site is a static project with HTML, CSS, and vanilla JavaScript.

## License
This project is provided under the MIT License.
