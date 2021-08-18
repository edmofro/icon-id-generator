## Icon ID Generator

To use this ID generator with your own configuration:

- Clone the repository to your own computer
- Create a branch off `main`, called e.g. 'western-province-dgh'
- Edit `next.config.js` to use your issuer, organisation, icons, etc.
- For each icon you're using, save a black and white .png file with the same name into `public/icons`
- Push your branch up
- Visit https://icon-id-generator-git-western-province-dgh.vercel.app/ (swapping out 'western-province-dgh' for your branch name)

### Note that this is a prototype with caveats

- No conflict detection is in place; even within one generation, ids may be duplicated
- Although the UI says that downloading will take ids out of circulation, this isn't actually implemented
