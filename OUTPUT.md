## Changes Made


#### Layout
-fix changed header color according to figma

### BoxArea97 (SearchBox)
- Issue: Making BoxArea97 Component Feature in the same Component Level as main app,lacking  modularity,reusability,folder structure
- Fix: Moved `BoxArea97` → `SearchBox.tsx` in `searchbox/`
- Margin top not exactly 20px
- Fix: margin Top
- Figma padding is 32px on both sides
- Fix: Fixed padding
- Issue: Figma has Brighter image
- Fix:added transparency 0% to existing image
- Issue:text isn't aligned to center
- Fix: aligned text to center as in figma

### BoxArea108 (SearchInput)
- Issue: Making BoxArea108 Component Feature in the same Component Level as main app, lacking  modularity,reusability,folder structure
- Fix: Moved `BoxArea108` → `SearchInput.tsx` in `searchbox/`
- Issue:header Search box border
-  Fix: changed box border
- issue missing Cursor Pointer
- Fix: added Cursor Pointer.
- issue : margin top isn't according to figma
- Fix: BoxArea108 added margin Top to text box
- Background Color fix and responsiveness

### TagList
- Issue: Making TagList Component Feature in the same Component Level as main app, lacking  modularity,reusability,folder structure
- Fixed :Moved tag badge rendering to `TagList.tsx` under `taglist/`
- Issue: Tag list Items not Clickable
- Fix : Made Tags Clickable, Added Selected Colour 
- Fix : Added useCallback to handle handleTagClick for prop stability
- Issue: No Types Assigned to Pros
- Fix :  Added Types To Props Passes to TagList Element
- Issue: avoiding key conflict in Badge Iteration
- Fix :  Added {`${keyName}-${tag}`} for easy way to trace make to this section later, avoiding diffing algorithm issue later.
- Issue: tags, setTags is only being used as getter
- Fix :Use memo is more efficient here since the value doesn't change instead of UseState
- Ghosting font for trending is different
- Added Work sans as in figma

- ### Header
- Issue: Making Header Component Feature in the same Component Level as main app, lacking  modularity,reusability,folder structure
- Created reusable `Header.tsx` under `header/`
- Issue:Spelling Error "Wortionary" Header Title in the current Code , but it should be "Worctionary" as per the Figma design.
- Fix:  Corrected the spelling to match the Figma design.
- Issue:Word Casing Error "search" in the header search placeholder is in lower case , but it should be "Search" capitalized as per the Figma design.
- Fix:  Corrected the placeholder text to "Search" to match the Figma design.
- Issue:No Image for Avatar on the top right , as per the Figma design.
- Fix: Downloaded Image to match the Figma design.
- Avatar size.
-  Fix: Tuned Avatar size to align with Figma layout
-Issue:header padding and border Bottom Color
-  Fix: changed header padding to match 40px as in figma, border color changed
- Issue:header Search box padding and color width and value is set to search
-  Fix: changed box padding to match  as in figma added placeholder text
- Issue: Header is not responsive on mobile view
-  Fix: made mobile header responsive using use mobile hook
- Issue: Extra span on search
- Fix  removed three nested span
- Issue: Header Color
- Fix :removed Extra header bg color



